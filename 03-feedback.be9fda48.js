var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,a=f||u||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return a.Date.now()};function v(e,t,n){var o,r,i,f,u,a,c=0,v=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function j(e){return c=e,u=setTimeout(h,t),v?g(e):f}function T(e){var n=e-a;return void 0===a||n>=t||n<0||b&&e-c>=i}function h(){var e=d();if(T(e))return O(e);u=setTimeout(h,function(e){var n=t-(e-a);return b?s(n,i-(e-c)):n}(e))}function O(e){return u=void 0,y&&o?g(e):(o=r=void 0,f)}function w(){var e=d(),n=T(e);if(o=arguments,r=this,a=e,n){if(void 0===u)return j(a);if(b)return u=setTimeout(h,t),g(a)}return void 0===u&&(u=setTimeout(h,t)),f}return t=p(t)||0,m(n)&&(v=!!n.leading,i=(b="maxWait"in n)?l(p(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=a=r=u=void 0},w.flush=function(){return void 0===u?f:O(d())},w}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(m(e)){var f="function"==typeof e.valueOf?e.valueOf():e;e=m(f)?f+"":f}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var u=o.test(e);return u||r.test(e)?i(e.slice(2),u?2:8):n.test(e)?NaN:+e}const b=document.querySelector(".feedback-form");b.addEventListener("input",(function(e){const t={email:e.currentTarget.elements.email.value,message:e.currentTarget.elements.message.value};console.log(t),n=t,localStorage.setItem("feedback-form-state",JSON.stringify(n));var n}));
//# sourceMappingURL=03-feedback.be9fda48.js.map
