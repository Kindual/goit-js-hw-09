!function(){var e={formEl:document.querySelector(".form"),delayEl:document.querySelector("[name=delay]"),stepEl:document.querySelector("[name=step]"),amountEl:document.querySelector("[name=amount]"),btnGenerate:document.querySelector("[type=submit]")};console.log(e.btnGenerate),e.formEl.addEventListener("submit",(function(o){var l=function(o){(function(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))})(o,delay).then((function(e){console.log(e)})).catch((function(e){console.log(e)})).finally((function(){n+o===0&&(t(e.btnGenerate),n+=o)})),delay+=delayStep};if(o.preventDefault(),delay=Number(e.delayEl.value),delayStep=Number(e.stepEl.value),position=e.amountEl.value,t(e.btnGenerate),n-=position,delay<=0||delayStep<0||position<0)return void alert("Заповніть поля корректними значеннями");for(var a=1;a<=position;a++)l(a)}));var n=0;function t(e){e.disabled=!e.disabled}}();
//# sourceMappingURL=03-promises.ddb44d93.js.map