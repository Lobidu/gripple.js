# Gripple.js

Gripple.js is a very (very!) minimal framework enabling you to dynamically load components into a DOM or even
build Single Page Applications. It is inspired by Vue.js' component pattern but makes compromises for
simplicity and size. After all there is no need to recreate Vue. The <10 KB Gripple.js offers itself if
Vue just adds too much overhead.

Gripple is written in ES2017 Syntax, so if you need to support older Browsers, you will need to polyfill using Babel.

## Installation

```shell
npm install --save gripple.js
```

## Usage
```html
<!-- index.html -->
<div id="App"></div>
```
```js
// main.js
import Gripple from 'gripple.js';
import App from './src/App.js';

const rootElement = document.getElementById('App');
const Root = new Gripple(App, rootElement);
Root.mount();
```
```js
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