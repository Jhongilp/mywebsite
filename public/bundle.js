!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t){window.onload=(()=>{!function(){const e=document.getElementById("main-nav"),t=document.getElementById("profile-img"),o=document.getElementById("upper-highlight"),n=document.getElementById("upper-support"),r=document.querySelectorAll(".main-nav > li");r.forEach(e=>{e.addEventListener("click",()=>{i=e,r.forEach(e=>{let t=document.getElementById(`${e.id}-module`);console.log(t),e!=i?(e.classList.remove("active"),t.classList.remove("show-module"),t.classList.add("module-hidden")):(e.classList.add("active"),t.classList.remove("module-hidden"),t.classList.add("show-module"))}),window.scrollTo({top:400,behavior:"smooth"})})}),window.onscroll=(()=>{window.pageYOffset<=52&&(t.style.setProperty("--imgSize",100-window.pageYOffset+"px"),t.style.setProperty("--opacity",1-2*window.pageYOffset/100)),window.pageYOffset>50?(o.classList.add("upper-hl-fixed"),n.classList.remove("upper-support")):(o.classList.remove("upper-hl-fixed"),n.classList.add("upper-support")),window.pageYOffset>340?e.classList.add("main-nav-scrolled"):e.classList.remove("main-nav-scrolled")});var i}()})}]);