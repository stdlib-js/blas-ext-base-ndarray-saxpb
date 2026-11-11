"use strict";var q=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var n=q(function(D,v){
var o=require('@stdlib/ndarray-base-numel-dimension/dist'),d=require('@stdlib/ndarray-base-stride/dist'),p=require('@stdlib/ndarray-base-offset/dist'),l=require('@stdlib/ndarray-base-data-buffer/dist'),m=require('@stdlib/blas-ext-base-saxpb/dist').ndarray,u=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function x(a){var r,i,e;return e=a[0],r=u(a[1]),i=u(a[2]),m(o(e,0),r,i,l(e),d(e,0),p(e)),e}v.exports=x
});var c=require("path").join,f=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=n(),t,s=f(c(__dirname,"./native.js"));b(s)?t=g:t=s;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
