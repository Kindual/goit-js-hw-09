const e={formEl:document.querySelector(".form"),delayEl:document.querySelector("[name=delay]"),stepEl:document.querySelector("[name=step]"),amountEl:document.querySelector("[name=amount]")};function t(e,t){return new Promise(((o,l)=>{setTimeout((()=>{Math.random()>.3?o(`✅ Fulfilled promise ${e} in ${t}ms`):l(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}e.formEl.addEventListener("submit",(function(o){o.preventDefault(),delay=Number(e.delayEl.value),delayStep=Number(e.stepEl.value),position=e.amountEl.value;for(let e=1;e<=position;e++)t(e,delay).then((e=>console.log(e))).catch((e=>console.log(e))),delay+=delayStep}));
//# sourceMappingURL=03-promises.d41909e1.js.map
