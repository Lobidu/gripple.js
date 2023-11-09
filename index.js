class Gripple {
  // This is not React. This is not Vue. It's minimal, at the cost of
  // true reactivity. It could be factored into a reactive framework
  // but really? Vue does a better job at that.

  constructor(component, node) {
    this.component = Object.create(component);
    this.dataStore = {};
    this.node = node;
  }

  _loadProps() {
    if (!this.component.props) return;
    this.component.props.forEach(
      (prop) => {
        this.component[prop] = this.node.getAttribute(prop)
      }
    )
  }

  _initChildInstance(component, node){
    const child = new Gripple(component, node);
    child.mount();
  }

  _injectComponent(component) {
    const childComponents = this.node.getElementsByTagName(component.name);
    // childComponents is iterable, but not an actual array,
    // so we mimic the childComponents.forEach function with
    // the following
    Array.prototype.forEach.call(childComponents, el => {
      this._initChildInstance(component, el)
    });
  }

  _mountComponents() {
    if (!this.component.components) return;
    // the arrow function needs to be there to not disturb the caller context
    this.component.components.forEach((c)=>(this._injectComponent(c)))
  }

  _render() {
    // call the render() function of the component which returns HTML to
    // be injected.
    this.node.innerHTML = this.component.setup();

    // At this stage, all child components are just empty tags, so here
    // we populate them.
    this._mountComponents();
  }

  _createDataInstance(key){
    // Register a getters and setters for the key defined. The setter
    // triggers a re-render of the instance
    Object.defineProperty(this.component, key, {
      get: () => {
        return this.dataStore[key];
      },
      set: (val) => {
        this.dataStore[key] = val;
        this._render()
      },
    });
    this.component[key] = this.component.data[key];
  }

  _registerData(){
    if (!this.component.data) return;
    // Register a getter/setter pair for everything in the data property
    Object.keys(this.component.data).forEach((k)=>this._createDataInstance(k))
  }

  mount() {
    this._loadProps();
    this._render();
    this._registerData();
    // let the component access its own node
    this.component.node = this.node;
    // let the component trigger a new render
    this.component.remount = ()=>{ this.mount() };
    if (this.component.mounted) this.component.mounted();
  }

}

export default Gripple;
