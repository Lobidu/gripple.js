<!--@@joggrdoc@@-->
<!-- @joggr:version(v1):end -->
<!-- @joggr:warning:start -->
<!-- 
  _   _   _    __        __     _      ____    _   _   ___   _   _    ____     _   _   _ 
 | | | | | |   \ \      / /    / \    |  _ \  | \ | | |_ _| | \ | |  / ___|   | | | | | |
 | | | | | |    \ \ /\ / /    / _ \   | |_) | |  \| |  | |  |  \| | | |  _    | | | | | |
 |_| |_| |_|     \ V  V /    / ___ \  |  _ <  | |\  |  | |  | |\  | | |_| |   |_| |_| |_|
 (_) (_) (_)      \_/\_/    /_/   \_\ |_| \_\ |_| \_| |___| |_| \_|  \____|   (_) (_) (_)
                                                              
This document is managed by Joggr. Editing this document could break Joggr's core features, i.e. our 
ability to auto-maintain this document. Please use the Joggr editor to edit this document 
(link at bottom of the page).
-->
<!-- @joggr:warning:end -->
Gripple.js is a very (very!) minimal framework enabling you to dynamically load components into a DOM or even build Single Page Applications. It is inspired by Vue.js' component pattern but makes compromises for simplicity and size. After all there is no need to recreate Vue. The <3 KB Gripple.js offers itself if Vue just adds too much overhead.

Gripple is written in ES2017 Syntax, so if you need to support older Browsers, you will need to polyfill using Babel.

## Installation

```shell
npm install --save gripple.js
```

## Usage

```xml
<!-- index.html -->
<div id="App"></div>
```

```javascript
// main.js
import Gripple from 'gripple.js';
import App from './src/App.js';

const rootElement = document.getElementById('App');
const Root = new Gripple(App, rootElement);
Root.mount();
```

```javascript
// src/App.js
import Navbar from './Navbar.js';
import Home from './Home.js';
import Footer from './Footer.js';

export default {
  name: 'App',
  components: [Navbar, Home, Footer],
  render() {
    return `
      <home></home>
      <navbar></navbar>
      <footer></footer>
    `},
};
```

The code below is a method called `mount()` that is used to initialize and render a component. It first loads the component's properties using the `_loadProps()` method, then renders the component using the `_render()` method. It also registers any necessary data using the `_registerData()` method. After that, it allows the component to access its own node by assigning `this.node` to `this.component.node`. It also enables the component to trigger a new render by defining a `remount()` function that calls `this.mount()`. Finally, if the component has a `mounted()` method, it is called.

<!-- @joggr:snippet(f59d7bc7-923d-4561-af5b-051519c6fd41):start -->
```javascript
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
```
<!-- @joggr:snippet(f59d7bc7-923d-4561-af5b-051519c6fd41):end -->

<!-- @joggr:editLink(a23de089-757f-402a-a493-ddaed7db4a24):start -->
---
<a href="https://app.joggr.io/app/documents/a23de089-757f-402a-a493-ddaed7db4a24/edit" alt="Edit doc on Joggr">
  <img src="https://storage.googleapis.com/joggr-public-assets/github/badges/edit-document-badge.svg" />
</a>
<!-- @joggr:editLink(a23de089-757f-402a-a493-ddaed7db4a24):end -->