var main=function(t){function e(e){for(var r,i,a=e[0],f=e[1],l=e[2],p=0,s=[];p<a.length;p++)i=a[p],o[i]&&s.push(o[i][0]),o[i]=0;for(r in f)Object.prototype.hasOwnProperty.call(f,r)&&(t[r]=f[r]);for(c&&c(e);s.length;)s.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var f=n[a];0!==o[f]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={8:0},u=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="https://zanusilker.github.io/gulpimize/build/js/";var a=window.webpackJsonp_name_=window.webpackJsonp_name_||[],f=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var c=f;return u.push([20,0]),n()}({1:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(0),o=n.n(r);function u(t){t.on("click",function(t){var e=o()(this).attr("href"),n="#"===e?0:o()(e).offset().top;o()("html, body").stop().animate({scrollTop:n},850),t.preventDefault()})}},20:function(t,e,n){t.exports=n(7)},7:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),u=n(1);e.default=o()(function(){var t=o()("#scrollToAbout");Object(u.a)(t)})}});