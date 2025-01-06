!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.ScyllaSDK=o():e.ScyllaSDK=o()}(self,(()=>(()=>{"use strict";var e={d:(o,r)=>{for(var t in r)e.o(r,t)&&!e.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:r[t]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};e.r(o),e.d(o,{default:()=>a});let r=null,t=[];function n(){r&&"recording"===r.state&&(r.stop(),r=null,console.log("Recording stopped."))}async function s(e,o){n();const r=new Blob(t,{type:"video/webm"});r.size>0&&(console.log("Uploading error session video..."),await async function(e,o,r){const t=new FormData;t.append("video",e,"session-error.webm"),t.append("errorDetails",JSON.stringify(r));try{const e=await fetch(`${o}/upload-video`,{method:"POST",body:t});e.ok?console.log("Video uploaded successfully."):console.error("Failed to upload video:",e.statusText)}catch(e){console.error("Error uploading video:",e)}}(r,o,e))}class a{constructor(e){this.apiUrl=e}start(){var e;!async function(){if(r)return;const e=await navigator.mediaDevices.getDisplayMedia({video:{mediaSource:"screen"}});r=new MediaRecorder(e,{mimeType:"video/webm"}),t=[],r.ondataavailable=e=>{e.data.size>0&&t.push(e.data)},r.onstop=()=>{console.log("Recording stopped.")},r.start(),console.log("Recording started...")}(),e=this.apiUrl,window.onerror=(o,r,t,n,a)=>{console.error("Global error detected:",{message:o,source:r,lineno:t,colno:n,error:a}),s({message:o,source:r,lineno:t,colno:n,error:a},e)},window.addEventListener("unhandledrejection",(o=>{console.error("Unhandled promise rejection:",o.reason),s({reason:o.reason},e)}))}stop(){n()}}return o})()));