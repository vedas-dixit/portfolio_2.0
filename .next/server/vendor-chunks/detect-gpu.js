/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/detect-gpu";
exports.ids = ["vendor-chunks/detect-gpu"];
exports.modules = {

/***/ "(ssr)/./node_modules/detect-gpu/dist/detect-gpu.umd.js":
/*!********************************************************!*\
  !*** ./node_modules/detect-gpu/dist/detect-gpu.umd.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("!function(e,r){ true?r(exports):0}(this,(function(e){\"use strict\";var r=function(e,n){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])})(e,n)};function n(e,r,n,t){return new(n||(n=Promise))((function(o,a){function i(e){try{u(t.next(e))}catch(e){a(e)}}function c(e){try{u(t.throw(e))}catch(e){a(e)}}function u(e){var r;e.done?o(e.value):(r=e.value,r instanceof n?r:new n((function(e){e(r)}))).then(i,c)}u((t=t.apply(e,r||[])).next())}))}function t(e,r){var n,t,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},\"function\"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError(\"Generator is already executing.\");for(;i;)try{if(n=1,t&&(o=2&a[0]?t.return:a[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,a[1])).done)return o;switch(t=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,t=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=r.call(e,i)}catch(e){a=[6,e],t=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}var o=[\"geforce 320m\",\"geforce 8600\",\"geforce 8600m gt\",\"geforce 8800 gs\",\"geforce 8800 gt\",\"geforce 9400\",\"geforce 9400m g\",\"geforce 9400m\",\"geforce 9600m gt\",\"geforce 9600m\",\"geforce fx go5200\",\"geforce gt 120\",\"geforce gt 130\",\"geforce gt 330m\",\"geforce gtx 285\",\"google swiftshader\",\"intel g41\",\"intel g45\",\"intel gma 4500mhd\",\"intel gma x3100\",\"intel hd 3000\",\"intel q45\",\"legacy\",\"mali-2\",\"mali-3\",\"mali-4\",\"quadro fx 1500\",\"quadro fx 4\",\"quadro fx 5\",\"radeon hd 2400\",\"radeon hd 2600\",\"radeon hd 4670\",\"radeon hd 4850\",\"radeon hd 4870\",\"radeon hd 5670\",\"radeon hd 5750\",\"radeon hd 6290\",\"radeon hd 6300\",\"radeon hd 6310\",\"radeon hd 6320\",\"radeon hd 6490m\",\"radeon hd 6630m\",\"radeon hd 6750m\",\"radeon hd 6770m\",\"radeon hd 6970m\",\"sgx 543\",\"sgx543\"];function a(e){return e=e.toLowerCase().replace(/.*angle ?\\((.+)\\)(?: on vulkan [0-9.]+)?$/i,\"$1\").replace(/\\s(\\d{1,2}gb|direct3d.+$)|\\(r\\)| \\([^)]+\\)$/g,\"\").replace(/(?:vulkan|opengl) \\d+\\.\\d+(?:\\.\\d+)?(?: \\((.*)\\))?/,\"$1\")}const i=34962;var c=\"undefined\"==typeof window,u=function(){if(!c){var e=window.navigator,r=e.userAgent,n=e.platform,t=e.maxTouchPoints,o=/(iphone|ipod|ipad)/i.test(r),a=\"iPad\"===n||\"MacIntel\"===n&&t>0&&!window.MSStream;return{isIpad:a,isMobile:/android/i.test(r)||o||a,isSafari12:/Version\\/12.+Safari/.test(r)}}}();function l(e,r,n){if(!n)return[r];var t,o=function(e){var r=\"\\n    precision highp float;\\n    attribute vec3 aPosition;\\n    varying float vvv;\\n    void main() {\\n      vvv = 0.31622776601683794;\\n      gl_Position = vec4(aPosition, 1.0);\\n    }\\n  \",n=\"\\n    precision highp float;\\n    varying float vvv;\\n    void main() {\\n      vec4 enc = vec4(1.0, 255.0, 65025.0, 16581375.0) * vvv;\\n      enc = fract(enc);\\n      enc -= enc.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);\\n      gl_FragColor = enc;\\n    }\\n  \",t=e.createShader(35633),o=e.createShader(35632),a=e.createProgram();if(!(o&&t&&a))return;e.shaderSource(t,r),e.shaderSource(o,n),e.compileShader(t),e.compileShader(o),e.attachShader(a,t),e.attachShader(a,o),e.linkProgram(a),e.detachShader(a,t),e.detachShader(a,o),e.deleteShader(t),e.deleteShader(o),e.useProgram(a);var c=e.createBuffer();e.bindBuffer(i,c),e.bufferData(i,new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),35044);var u=e.getAttribLocation(a,\"aPosition\");e.vertexAttribPointer(u,3,5126,!1,0,0),e.enableVertexAttribArray(u),e.clearColor(1,1,1,1),e.clear(16384),e.viewport(0,0,1,1),e.drawArrays(4,0,3);var l=new Uint8Array(4);return e.readPixels(0,0,1,1,6408,5121,l),e.deleteProgram(a),e.deleteBuffer(c),l.join(\"\")}(e),a=\"801621810\",c=\"8016218135\",l=\"80162181161\",f=(null==u?void 0:u.isIpad)?[[\"a7\",l,12],[\"a8\",c,15],[\"a8x\",c,15],[\"a9\",c,15],[\"a9x\",c,15],[\"a10\",c,15],[\"a10x\",c,15],[\"a12\",a,15],[\"a12x\",a,15],[\"a12z\",a,15],[\"a14\",a,15],[\"m1\",a,15]]:[[\"a7\",l,12],[\"a8\",c,12],[\"a9\",c,15],[\"a10\",c,15],[\"a11\",a,15],[\"a12\",a,15],[\"a13\",a,15],[\"a14\",a,15]];return\"80162181255\"===o?t=f.filter((function(e){return e[2]>=14})):(t=f.filter((function(e){return e[1]===o}))).length||(t=f),t.map((function(e){var r=e[0];return\"apple \".concat(r,\" gpu\")}))}var f=function(e){function n(r){var n=this.constructor,t=e.call(this,r)||this;return Object.setPrototypeOf(t,n.prototype),t}return function(e,n){if(\"function\"!=typeof n&&null!==n)throw new TypeError(\"Class extends value \"+String(n)+\" is not a constructor or null\");function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}(n,e),n}(Error);var d=[],s=[];function h(e,r){if(e===r)return 0;var n=e;e.length>r.length&&(e=r,r=n);for(var t=e.length,o=r.length;t>0&&e.charCodeAt(~-t)===r.charCodeAt(~-o);)t--,o--;for(var a,i=0;i<t&&e.charCodeAt(i)===r.charCodeAt(i);)i++;if(o-=i,0===(t-=i))return o;for(var c,u,l=0,f=0,h=0;f<t;)s[f]=e.charCodeAt(i+f),d[f]=++f;for(;h<o;)for(a=r.charCodeAt(i+h),c=h++,l=h,f=0;f<t;f++)u=a===s[f]?c:c+1,c=d[f],l=d[f]=c>l?u>l?l+1:u:u>c?c+1:u;return l}function v(e){return null!=e}e.getGPUTier=function(e){var r=void 0===e?{}:e,i=r.mobileTiers,d=void 0===i?[0,15,30,60]:i,s=r.desktopTiers,p=void 0===s?[0,15,30,60]:s,g=r.override,m=void 0===g?{}:g,b=r.glContext,w=r.failIfMajorPerformanceCaveat,y=void 0!==w&&w,x=r.benchmarksURL,P=void 0===x?\"https://unpkg.com/detect-gpu@\".concat(\"5.0.37\",\"/dist/benchmarks\"):x;return n(void 0,void 0,void 0,(function(){function e(e){var o;return n(this,void 0,void 0,(function(){var n,a,i,c,u,l,d,v,p,g,m,b,y,x,P,S,C,L,M,j,k,B,O,T,U,I;return t(this,(function(t){switch(t.label){case 0:if(!(n=E(e)))return[2];a=\"\".concat(w?\"m\":\"d\",\"-\").concat(n).concat(s?\"-ipad\":\"\",\".json\"),i=r[a]=null!==(o=r[a])&&void 0!==o?o:_(a),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,i];case 2:return c=t.sent(),[3,4];case 3:if((u=t.sent())instanceof f)throw u;return[2];case 4:if(l=function(e){var r,n=(e=e.replace(/\\([^)]+\\)/,\"\")).match(/\\d+/)||e.match(/(\\W|^)([A-Za-z]{1,3})(\\W|$)/g);return null!==(r=null==n?void 0:n.join(\"\").replace(/\\W|amd/g,\"\"))&&void 0!==r?r:\"\"}(e),(d=c.filter((function(e){return e[1]===l}))).length||(d=c.filter((function(r){return r[0].includes(e)}))),0===(v=d.length))return[2];for(p=e.split(/[.,()\\[\\]/\\s]/g).sort().filter((function(e,r,n){return 0===r||e!==n[r-1]})).join(\" \"),g=v>1?d.map((function(e){return[e,h(p,e[2])]})).sort((function(e,r){return e[1]-r[1]}))[0][0]:d[0],m=g[0],b=g[4],y=Number.MAX_VALUE,P=window.devicePixelRatio,S=A.width*P*A.height*P,C=0,L=b;C<L.length;C++)M=L[C],j=M[0],k=M[1],B=j*k,(O=Math.abs(S-B))<y&&(y=O,x=M);return x?(U=(T=x)[2],I=T[3],[2,[y,U,m,I]]):[2]}}))}))}var r,i,s,g,w,x,A,S,_,C,E,L,M,j,k,B,O,T,U,I,D,R,G,N,K;return t(this,(function(h){switch(h.label){case 0:if(r={},c)return[2,{tier:0,type:\"SSR\"}];if(i=m.isIpad,s=void 0===i?!!(null==u?void 0:u.isIpad):i,g=m.isMobile,w=void 0===g?!!(null==u?void 0:u.isMobile):g,x=m.screenSize,A=void 0===x?window.screen:x,S=m.loadBenchmarks,_=void 0===S?function(e){return n(void 0,void 0,void 0,(function(){var r;return t(this,(function(n){switch(n.label){case 0:return[4,fetch(\"\".concat(P,\"/\").concat(e)).then((function(e){return e.json()}))];case 1:if(r=n.sent(),parseInt(r.shift().split(\".\")[0],10)<4)throw new f(\"Detect GPU benchmark data is out of date. Please update to version 4x\");return[2,r]}}))}))}:S,C=m.renderer,E=function(e){for(var r=0,n=w?[\"adreno\",\"apple\",\"mali-t\",\"mali\",\"nvidia\",\"powervr\",\"samsung\"]:[\"intel\",\"apple\",\"amd\",\"radeon\",\"nvidia\",\"geforce\"];r<n.length;r++){var t=n[r];if(e.includes(t))return t}},L=function(e,r,n,t,o){return{device:o,fps:t,gpu:n,isMobile:w,tier:e,type:r}},j=\"\",C)C=a(C),M=[C];else{if(!(k=b||function(e,r){void 0===r&&(r=!1);var n={alpha:!1,antialias:!1,depth:!1,failIfMajorPerformanceCaveat:r,powerPreference:\"high-performance\",stencil:!1};e&&delete n.powerPreference;var t=window.document.createElement(\"canvas\"),o=t.getContext(\"webgl\",n)||t.getContext(\"experimental-webgl\",n);return null!=o?o:void 0}(null==u?void 0:u.isSafari12,y)))return[2,L(0,\"WEBGL_UNSUPPORTED\")];if((B=k.getExtension(\"WEBGL_debug_renderer_info\"))&&(C=k.getParameter(B.UNMASKED_RENDERER_WEBGL)),!C)return[2,L(1,\"FALLBACK\")];j=C,C=a(C),M=function(e,r,n){return\"apple gpu\"===r?l(e,r,n):[r]}(k,C,w)}return[4,Promise.all(M.map(e))];case 1:if(!(O=h.sent().filter(v).sort((function(e,r){var n=e[0],t=void 0===n?Number.MAX_VALUE:n,o=e[1],a=r[0],i=void 0===a?Number.MAX_VALUE:a,c=r[1];return t===i?o-c:t-i}))).length)return[2,(T=o.find((function(e){return C.includes(e)})))?L(0,\"BLOCKLISTED\",T):L(1,\"FALLBACK\",\"\".concat(C,\" (\").concat(j,\")\"))];if(U=O[0],I=U[1],D=U[2],R=U[3],-1===I)return[2,L(0,\"BLOCKLISTED\",D,I,R)];for(G=w?d:p,N=0,K=0;K<G.length;K++)I>=G[K]&&(N=K);return[2,L(N,\"BENCHMARK\",D,I,R)]}}))}))},Object.defineProperty(e,\"__esModule\",{value:!0})}));\n//# sourceMappingURL=detect-gpu.umd.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGV0ZWN0LWdwdS9kaXN0L2RldGVjdC1ncHUudW1kLmpzIiwibWFwcGluZ3MiOiJBQUFBLGVBQWUsS0FBb0QsWUFBWSxDQUFpSSxDQUFDLG1CQUFtQixhQUFhLG9CQUFvQixpQ0FBaUMsYUFBYSxnQ0FBZ0MsY0FBYyxnQkFBZ0Isc0VBQXNFLFFBQVEsb0JBQW9CLDBDQUEwQyxjQUFjLElBQUksYUFBYSxTQUFTLE1BQU0sY0FBYyxJQUFJLGNBQWMsU0FBUyxNQUFNLGNBQWMsTUFBTSxpRUFBaUUsS0FBSyxjQUFjLCtCQUErQixHQUFHLGdCQUFnQixlQUFlLHdCQUF3QixxQkFBcUIsWUFBWSxpQkFBaUIsVUFBVSxpQ0FBaUMsMkRBQTJELFlBQVksSUFBSSxjQUFjLG1CQUFtQixtQkFBbUIsNERBQTRELEtBQUssRUFBRSxLQUFLLGtIQUFrSCx5Q0FBeUMsa0JBQWtCLE1BQU0seUJBQXlCLG9CQUFvQiw4QkFBOEIsU0FBUyxrQ0FBa0MsU0FBUywwRUFBMEUsSUFBSSxTQUFTLHlDQUF5QyxhQUFhLE1BQU0sMkJBQTJCLGlCQUFpQixNQUFNLG9CQUFvQiwyQkFBMkIsTUFBTSwrQkFBK0IsU0FBUyxjQUFjLFNBQVMsWUFBWSxRQUFRLE1BQU0scUJBQXFCLE9BQU8sZ0NBQWdDLFVBQVUsbXZCQUFtdkIsY0FBYyxtR0FBbUcsSUFBSSwyR0FBMkcsY0FBYyw4Q0FBOEMsT0FBTyx5SkFBeUosT0FBTyxzRkFBc0YsR0FBRyxrQkFBa0IsZ0JBQWdCLG9CQUFvQixtQ0FBbUMsK0JBQStCLHdCQUF3QixtQkFBbUIsa0NBQWtDLDJDQUEyQyxPQUFPLHFDQUFxQyx3QkFBd0IsbUJBQW1CLCtEQUErRCx5QkFBeUIsMkVBQTJFLDJCQUEyQixPQUFPLDBFQUEwRSxxQkFBcUIsbU9BQW1PLHVCQUF1QixrRkFBa0YseUNBQXlDLGlKQUFpSix3QkFBd0IseUZBQXlGLGlWQUFpVixnREFBZ0QsZ0JBQWdCLDRCQUE0QixnQkFBZ0IscUNBQXFDLFdBQVcsZ0NBQWdDLEdBQUcsa0JBQWtCLGNBQWMsOENBQThDLDhDQUE4QyxxQkFBcUIsd0hBQXdILGFBQWEsbUJBQW1CLDZFQUE2RSxRQUFRLFFBQVEsY0FBYyxnQkFBZ0Isa0JBQWtCLFFBQVEsNkJBQTZCLDhCQUE4QiwyQ0FBMkMsU0FBUyxjQUFjLHVDQUF1QyxLQUFLLDRCQUE0Qix3QkFBd0IsSUFBSSxpQ0FBaUMsS0FBSyxJQUFJLHVDQUF1QyxJQUFJLDJEQUEyRCxTQUFTLGNBQWMsZUFBZSx5QkFBeUIsbUJBQW1CLHdIQUF3SCx1S0FBdUssMENBQTBDLGNBQWMsTUFBTSx3Q0FBd0Msd0RBQXdELDJCQUEyQixnQkFBZ0IsOEJBQThCLHNIQUFzSCwwQ0FBMEMsK0JBQStCLDJDQUEyQyxVQUFVLHdCQUF3Qiw2RUFBNkUsSUFBSSxXQUFXLG1GQUFtRiw2QkFBNkIsZ0JBQWdCLHFDQUFxQyx3QkFBd0IsK0JBQStCLCtEQUErRCx5QkFBeUIsc0NBQXNDLG9CQUFvQix1QkFBdUIsaUJBQWlCLHdHQUF3RyxXQUFXLDhEQUE4RCxnREFBZ0QsR0FBRyxHQUFHLHNEQUFzRCwyQkFBMkIsZ0JBQWdCLGNBQWMsYUFBYSxrQkFBa0IsRUFBRSwyTUFBMk0sMENBQTBDLE1BQU0sMkJBQTJCLGdCQUFnQixvRUFBb0UsZ0JBQWdCLElBQUksaUpBQWlKLGFBQWEsR0FBRyxHQUFHLDhCQUE4QixvSUFBb0ksV0FBVyxLQUFLLFdBQVcsMkJBQTJCLHVCQUF1QixPQUFPLCtDQUErQyxxQkFBcUIsS0FBSyx3QkFBd0IsbUJBQW1CLE9BQU8sNkdBQTZHLDRCQUE0Qiw4R0FBOEcsd0JBQXdCLG9FQUFvRSwrSEFBK0gsNkJBQTZCLG1DQUFtQyxRQUFRLGdDQUFnQyxxREFBcUQsZ0dBQWdHLHFCQUFxQiwyQ0FBMkMscUJBQXFCLDBFQUEwRSx5RUFBeUUsb0JBQW9CLFdBQVcsbUJBQW1CLGtDQUFrQyxHQUFHLEdBQUcsdUNBQXVDLFNBQVMsRUFBRTtBQUM3dFMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGFjZXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9kZXRlY3QtZ3B1L2Rpc3QvZGV0ZWN0LWdwdS51bWQuanM/N2JjYiJdLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24oZSxyKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9yKGV4cG9ydHMpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wiZXhwb3J0c1wiXSxyKTpyKChlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6ZXx8c2VsZikuRGV0ZWN0R1BVPXt9KX0odGhpcywoZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9ZnVuY3Rpb24oZSxuKXtyZXR1cm4ocj1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24oZSxyKXtlLl9fcHJvdG9fXz1yfXx8ZnVuY3Rpb24oZSxyKXtmb3IodmFyIG4gaW4gcilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocixuKSYmKGVbbl09cltuXSl9KShlLG4pfTtmdW5jdGlvbiBuKGUscixuLHQpe3JldHVybiBuZXcobnx8KG49UHJvbWlzZSkpKChmdW5jdGlvbihvLGEpe2Z1bmN0aW9uIGkoZSl7dHJ5e3UodC5uZXh0KGUpKX1jYXRjaChlKXthKGUpfX1mdW5jdGlvbiBjKGUpe3RyeXt1KHQudGhyb3coZSkpfWNhdGNoKGUpe2EoZSl9fWZ1bmN0aW9uIHUoZSl7dmFyIHI7ZS5kb25lP28oZS52YWx1ZSk6KHI9ZS52YWx1ZSxyIGluc3RhbmNlb2Ygbj9yOm5ldyBuKChmdW5jdGlvbihlKXtlKHIpfSkpKS50aGVuKGksYyl9dSgodD10LmFwcGx5KGUscnx8W10pKS5uZXh0KCkpfSkpfWZ1bmN0aW9uIHQoZSxyKXt2YXIgbix0LG8sYSxpPXtsYWJlbDowLHNlbnQ6ZnVuY3Rpb24oKXtpZigxJm9bMF0pdGhyb3cgb1sxXTtyZXR1cm4gb1sxXX0sdHJ5czpbXSxvcHM6W119O3JldHVybiBhPXtuZXh0OmMoMCksdGhyb3c6YygxKSxyZXR1cm46YygyKX0sXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiYoYVtTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSxhO2Z1bmN0aW9uIGMoYSl7cmV0dXJuIGZ1bmN0aW9uKGMpe3JldHVybiBmdW5jdGlvbihhKXtpZihuKXRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO2Zvcig7aTspdHJ5e2lmKG49MSx0JiYobz0yJmFbMF0/dC5yZXR1cm46YVswXT90LnRocm93fHwoKG89dC5yZXR1cm4pJiZvLmNhbGwodCksMCk6dC5uZXh0KSYmIShvPW8uY2FsbCh0LGFbMV0pKS5kb25lKXJldHVybiBvO3N3aXRjaCh0PTAsbyYmKGE9WzImYVswXSxvLnZhbHVlXSksYVswXSl7Y2FzZSAwOmNhc2UgMTpvPWE7YnJlYWs7Y2FzZSA0OnJldHVybiBpLmxhYmVsKysse3ZhbHVlOmFbMV0sZG9uZTohMX07Y2FzZSA1OmkubGFiZWwrKyx0PWFbMV0sYT1bMF07Y29udGludWU7Y2FzZSA3OmE9aS5vcHMucG9wKCksaS50cnlzLnBvcCgpO2NvbnRpbnVlO2RlZmF1bHQ6aWYoIShvPWkudHJ5cywobz1vLmxlbmd0aD4wJiZvW28ubGVuZ3RoLTFdKXx8NiE9PWFbMF0mJjIhPT1hWzBdKSl7aT0wO2NvbnRpbnVlfWlmKDM9PT1hWzBdJiYoIW98fGFbMV0+b1swXSYmYVsxXTxvWzNdKSl7aS5sYWJlbD1hWzFdO2JyZWFrfWlmKDY9PT1hWzBdJiZpLmxhYmVsPG9bMV0pe2kubGFiZWw9b1sxXSxvPWE7YnJlYWt9aWYobyYmaS5sYWJlbDxvWzJdKXtpLmxhYmVsPW9bMl0saS5vcHMucHVzaChhKTticmVha31vWzJdJiZpLm9wcy5wb3AoKSxpLnRyeXMucG9wKCk7Y29udGludWV9YT1yLmNhbGwoZSxpKX1jYXRjaChlKXthPVs2LGVdLHQ9MH1maW5hbGx5e249bz0wfWlmKDUmYVswXSl0aHJvdyBhWzFdO3JldHVybnt2YWx1ZTphWzBdP2FbMV06dm9pZCAwLGRvbmU6ITB9fShbYSxjXSl9fX12YXIgbz1bXCJnZWZvcmNlIDMyMG1cIixcImdlZm9yY2UgODYwMFwiLFwiZ2Vmb3JjZSA4NjAwbSBndFwiLFwiZ2Vmb3JjZSA4ODAwIGdzXCIsXCJnZWZvcmNlIDg4MDAgZ3RcIixcImdlZm9yY2UgOTQwMFwiLFwiZ2Vmb3JjZSA5NDAwbSBnXCIsXCJnZWZvcmNlIDk0MDBtXCIsXCJnZWZvcmNlIDk2MDBtIGd0XCIsXCJnZWZvcmNlIDk2MDBtXCIsXCJnZWZvcmNlIGZ4IGdvNTIwMFwiLFwiZ2Vmb3JjZSBndCAxMjBcIixcImdlZm9yY2UgZ3QgMTMwXCIsXCJnZWZvcmNlIGd0IDMzMG1cIixcImdlZm9yY2UgZ3R4IDI4NVwiLFwiZ29vZ2xlIHN3aWZ0c2hhZGVyXCIsXCJpbnRlbCBnNDFcIixcImludGVsIGc0NVwiLFwiaW50ZWwgZ21hIDQ1MDBtaGRcIixcImludGVsIGdtYSB4MzEwMFwiLFwiaW50ZWwgaGQgMzAwMFwiLFwiaW50ZWwgcTQ1XCIsXCJsZWdhY3lcIixcIm1hbGktMlwiLFwibWFsaS0zXCIsXCJtYWxpLTRcIixcInF1YWRybyBmeCAxNTAwXCIsXCJxdWFkcm8gZnggNFwiLFwicXVhZHJvIGZ4IDVcIixcInJhZGVvbiBoZCAyNDAwXCIsXCJyYWRlb24gaGQgMjYwMFwiLFwicmFkZW9uIGhkIDQ2NzBcIixcInJhZGVvbiBoZCA0ODUwXCIsXCJyYWRlb24gaGQgNDg3MFwiLFwicmFkZW9uIGhkIDU2NzBcIixcInJhZGVvbiBoZCA1NzUwXCIsXCJyYWRlb24gaGQgNjI5MFwiLFwicmFkZW9uIGhkIDYzMDBcIixcInJhZGVvbiBoZCA2MzEwXCIsXCJyYWRlb24gaGQgNjMyMFwiLFwicmFkZW9uIGhkIDY0OTBtXCIsXCJyYWRlb24gaGQgNjYzMG1cIixcInJhZGVvbiBoZCA2NzUwbVwiLFwicmFkZW9uIGhkIDY3NzBtXCIsXCJyYWRlb24gaGQgNjk3MG1cIixcInNneCA1NDNcIixcInNneDU0M1wiXTtmdW5jdGlvbiBhKGUpe3JldHVybiBlPWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8uKmFuZ2xlID9cXCgoLispXFwpKD86IG9uIHZ1bGthbiBbMC05Ll0rKT8kL2ksXCIkMVwiKS5yZXBsYWNlKC9cXHMoXFxkezEsMn1nYnxkaXJlY3QzZC4rJCl8XFwoclxcKXwgXFwoW14pXStcXCkkL2csXCJcIikucmVwbGFjZSgvKD86dnVsa2FufG9wZW5nbCkgXFxkK1xcLlxcZCsoPzpcXC5cXGQrKT8oPzogXFwoKC4qKVxcKSk/LyxcIiQxXCIpfWNvbnN0IGk9MzQ5NjI7dmFyIGM9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvdyx1PWZ1bmN0aW9uKCl7aWYoIWMpe3ZhciBlPXdpbmRvdy5uYXZpZ2F0b3Iscj1lLnVzZXJBZ2VudCxuPWUucGxhdGZvcm0sdD1lLm1heFRvdWNoUG9pbnRzLG89LyhpcGhvbmV8aXBvZHxpcGFkKS9pLnRlc3QociksYT1cImlQYWRcIj09PW58fFwiTWFjSW50ZWxcIj09PW4mJnQ+MCYmIXdpbmRvdy5NU1N0cmVhbTtyZXR1cm57aXNJcGFkOmEsaXNNb2JpbGU6L2FuZHJvaWQvaS50ZXN0KHIpfHxvfHxhLGlzU2FmYXJpMTI6L1ZlcnNpb25cXC8xMi4rU2FmYXJpLy50ZXN0KHIpfX19KCk7ZnVuY3Rpb24gbChlLHIsbil7aWYoIW4pcmV0dXJuW3JdO3ZhciB0LG89ZnVuY3Rpb24oZSl7dmFyIHI9XCJcXG4gICAgcHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcbiAgICBhdHRyaWJ1dGUgdmVjMyBhUG9zaXRpb247XFxuICAgIHZhcnlpbmcgZmxvYXQgdnZ2O1xcbiAgICB2b2lkIG1haW4oKSB7XFxuICAgICAgdnZ2ID0gMC4zMTYyMjc3NjYwMTY4Mzc5NDtcXG4gICAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoYVBvc2l0aW9uLCAxLjApO1xcbiAgICB9XFxuICBcIixuPVwiXFxuICAgIHByZWNpc2lvbiBoaWdocCBmbG9hdDtcXG4gICAgdmFyeWluZyBmbG9hdCB2dnY7XFxuICAgIHZvaWQgbWFpbigpIHtcXG4gICAgICB2ZWM0IGVuYyA9IHZlYzQoMS4wLCAyNTUuMCwgNjUwMjUuMCwgMTY1ODEzNzUuMCkgKiB2dnY7XFxuICAgICAgZW5jID0gZnJhY3QoZW5jKTtcXG4gICAgICBlbmMgLT0gZW5jLnl6d3cgKiB2ZWM0KDEuMCAvIDI1NS4wLCAxLjAgLyAyNTUuMCwgMS4wIC8gMjU1LjAsIDAuMCk7XFxuICAgICAgZ2xfRnJhZ0NvbG9yID0gZW5jO1xcbiAgICB9XFxuICBcIix0PWUuY3JlYXRlU2hhZGVyKDM1NjMzKSxvPWUuY3JlYXRlU2hhZGVyKDM1NjMyKSxhPWUuY3JlYXRlUHJvZ3JhbSgpO2lmKCEobyYmdCYmYSkpcmV0dXJuO2Uuc2hhZGVyU291cmNlKHQsciksZS5zaGFkZXJTb3VyY2UobyxuKSxlLmNvbXBpbGVTaGFkZXIodCksZS5jb21waWxlU2hhZGVyKG8pLGUuYXR0YWNoU2hhZGVyKGEsdCksZS5hdHRhY2hTaGFkZXIoYSxvKSxlLmxpbmtQcm9ncmFtKGEpLGUuZGV0YWNoU2hhZGVyKGEsdCksZS5kZXRhY2hTaGFkZXIoYSxvKSxlLmRlbGV0ZVNoYWRlcih0KSxlLmRlbGV0ZVNoYWRlcihvKSxlLnVzZVByb2dyYW0oYSk7dmFyIGM9ZS5jcmVhdGVCdWZmZXIoKTtlLmJpbmRCdWZmZXIoaSxjKSxlLmJ1ZmZlckRhdGEoaSxuZXcgRmxvYXQzMkFycmF5KFstMSwtMSwwLDMsLTEsMCwtMSwzLDBdKSwzNTA0NCk7dmFyIHU9ZS5nZXRBdHRyaWJMb2NhdGlvbihhLFwiYVBvc2l0aW9uXCIpO2UudmVydGV4QXR0cmliUG9pbnRlcih1LDMsNTEyNiwhMSwwLDApLGUuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodSksZS5jbGVhckNvbG9yKDEsMSwxLDEpLGUuY2xlYXIoMTYzODQpLGUudmlld3BvcnQoMCwwLDEsMSksZS5kcmF3QXJyYXlzKDQsMCwzKTt2YXIgbD1uZXcgVWludDhBcnJheSg0KTtyZXR1cm4gZS5yZWFkUGl4ZWxzKDAsMCwxLDEsNjQwOCw1MTIxLGwpLGUuZGVsZXRlUHJvZ3JhbShhKSxlLmRlbGV0ZUJ1ZmZlcihjKSxsLmpvaW4oXCJcIil9KGUpLGE9XCI4MDE2MjE4MTBcIixjPVwiODAxNjIxODEzNVwiLGw9XCI4MDE2MjE4MTE2MVwiLGY9KG51bGw9PXU/dm9pZCAwOnUuaXNJcGFkKT9bW1wiYTdcIixsLDEyXSxbXCJhOFwiLGMsMTVdLFtcImE4eFwiLGMsMTVdLFtcImE5XCIsYywxNV0sW1wiYTl4XCIsYywxNV0sW1wiYTEwXCIsYywxNV0sW1wiYTEweFwiLGMsMTVdLFtcImExMlwiLGEsMTVdLFtcImExMnhcIixhLDE1XSxbXCJhMTJ6XCIsYSwxNV0sW1wiYTE0XCIsYSwxNV0sW1wibTFcIixhLDE1XV06W1tcImE3XCIsbCwxMl0sW1wiYThcIixjLDEyXSxbXCJhOVwiLGMsMTVdLFtcImExMFwiLGMsMTVdLFtcImExMVwiLGEsMTVdLFtcImExMlwiLGEsMTVdLFtcImExM1wiLGEsMTVdLFtcImExNFwiLGEsMTVdXTtyZXR1cm5cIjgwMTYyMTgxMjU1XCI9PT1vP3Q9Zi5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBlWzJdPj0xNH0pKToodD1mLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIGVbMV09PT1vfSkpKS5sZW5ndGh8fCh0PWYpLHQubWFwKChmdW5jdGlvbihlKXt2YXIgcj1lWzBdO3JldHVyblwiYXBwbGUgXCIuY29uY2F0KHIsXCIgZ3B1XCIpfSkpfXZhciBmPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIG4ocil7dmFyIG49dGhpcy5jb25zdHJ1Y3Rvcix0PWUuY2FsbCh0aGlzLHIpfHx0aGlzO3JldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YodCxuLnByb3RvdHlwZSksdH1yZXR1cm4gZnVuY3Rpb24oZSxuKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBuJiZudWxsIT09bil0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIitTdHJpbmcobikrXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtmdW5jdGlvbiB0KCl7dGhpcy5jb25zdHJ1Y3Rvcj1lfXIoZSxuKSxlLnByb3RvdHlwZT1udWxsPT09bj9PYmplY3QuY3JlYXRlKG4pOih0LnByb3RvdHlwZT1uLnByb3RvdHlwZSxuZXcgdCl9KG4sZSksbn0oRXJyb3IpO3ZhciBkPVtdLHM9W107ZnVuY3Rpb24gaChlLHIpe2lmKGU9PT1yKXJldHVybiAwO3ZhciBuPWU7ZS5sZW5ndGg+ci5sZW5ndGgmJihlPXIscj1uKTtmb3IodmFyIHQ9ZS5sZW5ndGgsbz1yLmxlbmd0aDt0PjAmJmUuY2hhckNvZGVBdCh+LXQpPT09ci5jaGFyQ29kZUF0KH4tbyk7KXQtLSxvLS07Zm9yKHZhciBhLGk9MDtpPHQmJmUuY2hhckNvZGVBdChpKT09PXIuY2hhckNvZGVBdChpKTspaSsrO2lmKG8tPWksMD09PSh0LT1pKSlyZXR1cm4gbztmb3IodmFyIGMsdSxsPTAsZj0wLGg9MDtmPHQ7KXNbZl09ZS5jaGFyQ29kZUF0KGkrZiksZFtmXT0rK2Y7Zm9yKDtoPG87KWZvcihhPXIuY2hhckNvZGVBdChpK2gpLGM9aCsrLGw9aCxmPTA7Zjx0O2YrKyl1PWE9PT1zW2ZdP2M6YysxLGM9ZFtmXSxsPWRbZl09Yz5sP3U+bD9sKzE6dTp1PmM/YysxOnU7cmV0dXJuIGx9ZnVuY3Rpb24gdihlKXtyZXR1cm4gbnVsbCE9ZX1lLmdldEdQVVRpZXI9ZnVuY3Rpb24oZSl7dmFyIHI9dm9pZCAwPT09ZT97fTplLGk9ci5tb2JpbGVUaWVycyxkPXZvaWQgMD09PWk/WzAsMTUsMzAsNjBdOmkscz1yLmRlc2t0b3BUaWVycyxwPXZvaWQgMD09PXM/WzAsMTUsMzAsNjBdOnMsZz1yLm92ZXJyaWRlLG09dm9pZCAwPT09Zz97fTpnLGI9ci5nbENvbnRleHQsdz1yLmZhaWxJZk1ham9yUGVyZm9ybWFuY2VDYXZlYXQseT12b2lkIDAhPT13JiZ3LHg9ci5iZW5jaG1hcmtzVVJMLFA9dm9pZCAwPT09eD9cImh0dHBzOi8vdW5wa2cuY29tL2RldGVjdC1ncHVAXCIuY29uY2F0KFwiNS4wLjM3XCIsXCIvZGlzdC9iZW5jaG1hcmtzXCIpOng7cmV0dXJuIG4odm9pZCAwLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt2YXIgbztyZXR1cm4gbih0aGlzLHZvaWQgMCx2b2lkIDAsKGZ1bmN0aW9uKCl7dmFyIG4sYSxpLGMsdSxsLGQsdixwLGcsbSxiLHkseCxQLFMsQyxMLE0saixrLEIsTyxULFUsSTtyZXR1cm4gdCh0aGlzLChmdW5jdGlvbih0KXtzd2l0Y2godC5sYWJlbCl7Y2FzZSAwOmlmKCEobj1FKGUpKSlyZXR1cm5bMl07YT1cIlwiLmNvbmNhdCh3P1wibVwiOlwiZFwiLFwiLVwiKS5jb25jYXQobikuY29uY2F0KHM/XCItaXBhZFwiOlwiXCIsXCIuanNvblwiKSxpPXJbYV09bnVsbCE9PShvPXJbYV0pJiZ2b2lkIDAhPT1vP286XyhhKSx0LmxhYmVsPTE7Y2FzZSAxOnJldHVybiB0LnRyeXMucHVzaChbMSwzLCw0XSksWzQsaV07Y2FzZSAyOnJldHVybiBjPXQuc2VudCgpLFszLDRdO2Nhc2UgMzppZigodT10LnNlbnQoKSlpbnN0YW5jZW9mIGYpdGhyb3cgdTtyZXR1cm5bMl07Y2FzZSA0OmlmKGw9ZnVuY3Rpb24oZSl7dmFyIHIsbj0oZT1lLnJlcGxhY2UoL1xcKFteKV0rXFwpLyxcIlwiKSkubWF0Y2goL1xcZCsvKXx8ZS5tYXRjaCgvKFxcV3xeKShbQS1aYS16XXsxLDN9KShcXFd8JCkvZyk7cmV0dXJuIG51bGwhPT0ocj1udWxsPT1uP3ZvaWQgMDpuLmpvaW4oXCJcIikucmVwbGFjZSgvXFxXfGFtZC9nLFwiXCIpKSYmdm9pZCAwIT09cj9yOlwiXCJ9KGUpLChkPWMuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gZVsxXT09PWx9KSkpLmxlbmd0aHx8KGQ9Yy5maWx0ZXIoKGZ1bmN0aW9uKHIpe3JldHVybiByWzBdLmluY2x1ZGVzKGUpfSkpKSwwPT09KHY9ZC5sZW5ndGgpKXJldHVyblsyXTtmb3IocD1lLnNwbGl0KC9bLiwoKVxcW1xcXS9cXHNdL2cpLnNvcnQoKS5maWx0ZXIoKGZ1bmN0aW9uKGUscixuKXtyZXR1cm4gMD09PXJ8fGUhPT1uW3ItMV19KSkuam9pbihcIiBcIiksZz12PjE/ZC5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybltlLGgocCxlWzJdKV19KSkuc29ydCgoZnVuY3Rpb24oZSxyKXtyZXR1cm4gZVsxXS1yWzFdfSkpWzBdWzBdOmRbMF0sbT1nWzBdLGI9Z1s0XSx5PU51bWJlci5NQVhfVkFMVUUsUD13aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyxTPUEud2lkdGgqUCpBLmhlaWdodCpQLEM9MCxMPWI7QzxMLmxlbmd0aDtDKyspTT1MW0NdLGo9TVswXSxrPU1bMV0sQj1qKmssKE89TWF0aC5hYnMoUy1CKSk8eSYmKHk9Tyx4PU0pO3JldHVybiB4PyhVPShUPXgpWzJdLEk9VFszXSxbMixbeSxVLG0sSV1dKTpbMl19fSkpfSkpfXZhciByLGkscyxnLHcseCxBLFMsXyxDLEUsTCxNLGosayxCLE8sVCxVLEksRCxSLEcsTixLO3JldHVybiB0KHRoaXMsKGZ1bmN0aW9uKGgpe3N3aXRjaChoLmxhYmVsKXtjYXNlIDA6aWYocj17fSxjKXJldHVyblsyLHt0aWVyOjAsdHlwZTpcIlNTUlwifV07aWYoaT1tLmlzSXBhZCxzPXZvaWQgMD09PWk/ISEobnVsbD09dT92b2lkIDA6dS5pc0lwYWQpOmksZz1tLmlzTW9iaWxlLHc9dm9pZCAwPT09Zz8hIShudWxsPT11P3ZvaWQgMDp1LmlzTW9iaWxlKTpnLHg9bS5zY3JlZW5TaXplLEE9dm9pZCAwPT09eD93aW5kb3cuc2NyZWVuOngsUz1tLmxvYWRCZW5jaG1hcmtzLF89dm9pZCAwPT09Uz9mdW5jdGlvbihlKXtyZXR1cm4gbih2b2lkIDAsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgcjtyZXR1cm4gdCh0aGlzLChmdW5jdGlvbihuKXtzd2l0Y2gobi5sYWJlbCl7Y2FzZSAwOnJldHVybls0LGZldGNoKFwiXCIuY29uY2F0KFAsXCIvXCIpLmNvbmNhdChlKSkudGhlbigoZnVuY3Rpb24oZSl7cmV0dXJuIGUuanNvbigpfSkpXTtjYXNlIDE6aWYocj1uLnNlbnQoKSxwYXJzZUludChyLnNoaWZ0KCkuc3BsaXQoXCIuXCIpWzBdLDEwKTw0KXRocm93IG5ldyBmKFwiRGV0ZWN0IEdQVSBiZW5jaG1hcmsgZGF0YSBpcyBvdXQgb2YgZGF0ZS4gUGxlYXNlIHVwZGF0ZSB0byB2ZXJzaW9uIDR4XCIpO3JldHVyblsyLHJdfX0pKX0pKX06UyxDPW0ucmVuZGVyZXIsRT1mdW5jdGlvbihlKXtmb3IodmFyIHI9MCxuPXc/W1wiYWRyZW5vXCIsXCJhcHBsZVwiLFwibWFsaS10XCIsXCJtYWxpXCIsXCJudmlkaWFcIixcInBvd2VydnJcIixcInNhbXN1bmdcIl06W1wiaW50ZWxcIixcImFwcGxlXCIsXCJhbWRcIixcInJhZGVvblwiLFwibnZpZGlhXCIsXCJnZWZvcmNlXCJdO3I8bi5sZW5ndGg7cisrKXt2YXIgdD1uW3JdO2lmKGUuaW5jbHVkZXModCkpcmV0dXJuIHR9fSxMPWZ1bmN0aW9uKGUscixuLHQsbyl7cmV0dXJue2RldmljZTpvLGZwczp0LGdwdTpuLGlzTW9iaWxlOncsdGllcjplLHR5cGU6cn19LGo9XCJcIixDKUM9YShDKSxNPVtDXTtlbHNle2lmKCEoaz1ifHxmdW5jdGlvbihlLHIpe3ZvaWQgMD09PXImJihyPSExKTt2YXIgbj17YWxwaGE6ITEsYW50aWFsaWFzOiExLGRlcHRoOiExLGZhaWxJZk1ham9yUGVyZm9ybWFuY2VDYXZlYXQ6cixwb3dlclByZWZlcmVuY2U6XCJoaWdoLXBlcmZvcm1hbmNlXCIsc3RlbmNpbDohMX07ZSYmZGVsZXRlIG4ucG93ZXJQcmVmZXJlbmNlO3ZhciB0PXdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpLG89dC5nZXRDb250ZXh0KFwid2ViZ2xcIixuKXx8dC5nZXRDb250ZXh0KFwiZXhwZXJpbWVudGFsLXdlYmdsXCIsbik7cmV0dXJuIG51bGwhPW8/bzp2b2lkIDB9KG51bGw9PXU/dm9pZCAwOnUuaXNTYWZhcmkxMix5KSkpcmV0dXJuWzIsTCgwLFwiV0VCR0xfVU5TVVBQT1JURURcIildO2lmKChCPWsuZ2V0RXh0ZW5zaW9uKFwiV0VCR0xfZGVidWdfcmVuZGVyZXJfaW5mb1wiKSkmJihDPWsuZ2V0UGFyYW1ldGVyKEIuVU5NQVNLRURfUkVOREVSRVJfV0VCR0wpKSwhQylyZXR1cm5bMixMKDEsXCJGQUxMQkFDS1wiKV07aj1DLEM9YShDKSxNPWZ1bmN0aW9uKGUscixuKXtyZXR1cm5cImFwcGxlIGdwdVwiPT09cj9sKGUscixuKTpbcl19KGssQyx3KX1yZXR1cm5bNCxQcm9taXNlLmFsbChNLm1hcChlKSldO2Nhc2UgMTppZighKE89aC5zZW50KCkuZmlsdGVyKHYpLnNvcnQoKGZ1bmN0aW9uKGUscil7dmFyIG49ZVswXSx0PXZvaWQgMD09PW4/TnVtYmVyLk1BWF9WQUxVRTpuLG89ZVsxXSxhPXJbMF0saT12b2lkIDA9PT1hP051bWJlci5NQVhfVkFMVUU6YSxjPXJbMV07cmV0dXJuIHQ9PT1pP28tYzp0LWl9KSkpLmxlbmd0aClyZXR1cm5bMiwoVD1vLmZpbmQoKGZ1bmN0aW9uKGUpe3JldHVybiBDLmluY2x1ZGVzKGUpfSkpKT9MKDAsXCJCTE9DS0xJU1RFRFwiLFQpOkwoMSxcIkZBTExCQUNLXCIsXCJcIi5jb25jYXQoQyxcIiAoXCIpLmNvbmNhdChqLFwiKVwiKSldO2lmKFU9T1swXSxJPVVbMV0sRD1VWzJdLFI9VVszXSwtMT09PUkpcmV0dXJuWzIsTCgwLFwiQkxPQ0tMSVNURURcIixELEksUildO2ZvcihHPXc/ZDpwLE49MCxLPTA7SzxHLmxlbmd0aDtLKyspST49R1tLXSYmKE49Syk7cmV0dXJuWzIsTChOLFwiQkVOQ0hNQVJLXCIsRCxJLFIpXX19KSl9KSl9LE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGV0ZWN0LWdwdS51bWQuanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/detect-gpu/dist/detect-gpu.umd.js\n");

/***/ })

};
;