(function(e){function n(n){for(var r,u,a=n[0],i=n[1],d=n[2],f=0,l=[];f<a.length;f++)u=a[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&l.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(l.length)l.shift()();return c.push.apply(c,d||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,u=1;u<t.length;u++){var a=t[u];0!==o[a]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},u={answerApp:0},o={answerApp:0},c=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-189693bc":"4c60568d","chunk-0a2b6f0d":"671e0246","chunk-2d0b614d":"806d66f7","chunk-2d0bd9c9":"f66d95fe","chunk-2d0c1ec7":"dd8b58c3","chunk-7d3b5b6b":"d6c1a673","chunk-f0afe088":"c986def4"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-0a2b6f0d":1,"chunk-7d3b5b6b":1,"chunk-f0afe088":1};u[e]?n.push(u[e]):0!==u[e]&&t[e]&&n.push(u[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-189693bc":"31d6cfe0","chunk-0a2b6f0d":"3fb35097","chunk-2d0b614d":"31d6cfe0","chunk-2d0bd9c9":"31d6cfe0","chunk-2d0c1ec7":"31d6cfe0","chunk-7d3b5b6b":"bbb3aa71","chunk-f0afe088":"c1bfbe38"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),a=0;a<c.length;a++){var d=c[a],f=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(f===r||f===o))return n()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){d=l[a],f=d.getAttribute("data-href");if(f===r||f===o)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete u[e],s.parentNode.removeChild(s),t(c)},s.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(s)})).then((function(){u[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=c);var d,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=a(e);var l=new Error;d=function(n){f.onerror=f.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",l.name="ChunkLoadError",l.type=r,l.request=u,t[1](l)}o[e]=void 0}};var s=setTimeout((function(){d({type:"timeout",target:f})}),12e4);f.onerror=f.onload=d,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],f=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var s=f;c.push([3,"chunk-vendors"]),t()})({"2c29":function(e,n,t){},3:function(e,n,t){e.exports=t("50b4")},"50b4":function(e,n,t){"use strict";t.r(n);t("e44b"),t("6648"),t("5f54"),t("f0e6");var r=t("0261"),u=t("c478");r["default"].use(u["a"]);var o=new u["a"]({base:"/answerApp",routes:[{path:"/",component:function(){return t.e("chunk-7d3b5b6b").then(t.bind(null,"2ac7"))},children:[{path:"/home",name:"home",component:function(){return t.e("chunk-f0afe088").then(t.bind(null,"c0a6"))}},{path:"/hot",name:"hot",component:function(){return t.e("chunk-2d0bd9c9").then(t.bind(null,"2d78"))}},{path:"/news",name:"news",component:function(){return t.e("chunk-2d0c1ec7").then(t.bind(null,"47b0"))}},{path:"/my",name:"my",component:function(){return t.e("chunk-2d0b614d").then(t.bind(null,"1c49"))}}]},{path:"/anser",name:"anser",component:function(){return Promise.all([t.e("chunk-189693bc"),t.e("chunk-0a2b6f0d")]).then(t.bind(null,"edb2"))}}]}),c=t("08c1");r["default"].use(c["a"]);var a=new c["a"].Store({state:{},mutations:{},actions:{}}),i=t("660a"),d=t.n(i),f=(t("4f89"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),l=[],s=(t("2c29"),{data:function(){return{}}}),h=s,p=t("5511"),b=Object(p["a"])(h,f,l,!1,null,null,null),m=b.exports;r["default"].use(d.a),new r["default"]({el:"#app",router:o,store:a,render:function(e){return e(m)}})}});