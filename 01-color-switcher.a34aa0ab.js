const e=document.querySelector("body"),t=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");let l=null;function n(){e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}function r(e){e.disabled=!e.disabled}t.addEventListener("click",(()=>{r(t),r(o),l=setInterval(n,1e3),console.log("switcher start")})),o.addEventListener("click",(()=>{r(t),r(o),clearInterval(l),console.log("switcher stopped")})),r(o);
//# sourceMappingURL=01-color-switcher.a34aa0ab.js.map