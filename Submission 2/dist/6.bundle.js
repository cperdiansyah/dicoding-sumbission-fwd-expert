(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{7:function(t,n){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function c(t){var n="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return u(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),f(r,t)})(t)}function u(t,n,e){return(u=a()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&f(o,e.prototype),o}).apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function f(t,n){return(f=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var s=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&f(t,n)}(y,t);var n,e,c,u,s,p=(n=y,e=a(),function(){var t,r=l(n);if(e){var o=l(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return i(this,t)});function y(){return r(this,y),p.apply(this,arguments)}return c=y,(u=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML='\n            <div class="img-wrapper">\n\t\t\t\t<div class="gradient"></div>\n\t\t\t\t<img\n\t\t\t\t\tsrc="./images/heros/hero-image_2.jpg"\n\t\t\t\t\talt="Hero Image"\n\t\t\t\t\tloading="lazy"\n\t\t\t\t/>\n \n\t\t\t\t<div class="text-wrapper container">\n\t\t\t\t\t<div class="text">\n\t\t\t\t\t\t<h1>\n\t\t\t\t\t\t\tFind<span class="text-mark"> A Good Place,</span>\n\t\t\t\t\t\t</h1>\n\t\t\t\t\t\t<div class="overlay"></div>\n\t\t\t\t\t\t<h1>\n\t\t\t\t\t\t\tStart Your\n\t\t\t\t\t\t\t<span class="text-mark">Good Taste</span>\n\t\t\t\t\t\t</h1>\n\n\t\t\t\t\t\t<div class="overlay"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n        '}}])&&o(c.prototype,u),s&&o(c,s),y}(c(HTMLElement));customElements.define("hero-banner",s)}}]);