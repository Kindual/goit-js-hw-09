const e={formEl:document.querySelector(".form"),delayEl:document.querySelector("[name=delay]"),stepEl:document.querySelector("[name=step]"),amountEl:document.querySelector("[name=amount]"),btnGenerate:document.querySelector("[type=submit]")};console.log(e.btnGenerate),e.formEl.addEventListener("submit",(function(o){o.preventDefault();let r=Number(e.delayEl.value);const u=Number(e.stepEl.value),a=e.amountEl.value;if(n(e.btnGenerate),t-=a,r<=0||u<0||a<0)return void alert("Заповніть поля корректними значеннями");for(let o=1;o<=a;o++)l(o,r).then((e=>{console.log(e)})).catch((e=>{console.log(e)})).finally((()=>{t+o===0&&(n(e.btnGenerate),t+=o)})),r+=u}));let t=0;function n(e){e.disabled=!e.disabled}function l(e,t){return new Promise(((n,l)=>{setTimeout((()=>{Math.random()>.3?n(`✅ Fulfilled promise ${e} in ${t}ms`):l(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}
//# sourceMappingURL=03-promises.cb414a2a.js.map