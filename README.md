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
# Gripple.js

Gripple.js is a very (very!) minimal framework enabling you to dynamically load components into a DOM or even
build Single Page Applications. It is inspired by Vue.js' component pattern but makes compromises for
simplicity and size. After all there is no need to recreate Vue. The <3 KB Gripple.js offers itself if
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

<!-- @joggr:editLink(a23de089-757f-402a-a493-ddaed7db4a24):start -->
---
<a href="https://app.joggr.io/app/documents/a23de089-757f-402a-a493-ddaed7db4a24/edit" alt="Edit doc on Joggr">
  <img src="https://storage.googleapis.com/joggr-public-assets/github/badges/edit-document-badge.svg" />
</a>
<!-- @joggr:editLink(a23de089-757f-402a-a493-ddaed7db4a24):end -->