!function(){var e={formEl:document.querySelector(".form"),delayEl:document.querySelector("[name=delay]"),stepEl:document.querySelector("[name=step]"),amountEl:document.querySelector("[name=amount]")};e.formEl.addEventListener("submit",(function(n){if(n.preventDefault(),delay=Number(e.delayEl.value),delayStep=Number(e.stepEl.value),position=e.amountEl.value,t<0)return;if(t-=position,delay<=0||delayStep<0||position<0)return void alert("Заповніть поля корректними значеннями");for(var l=1;l<=position;l++)o(l,delay).then((function(e){console.log(e),t+=1})).catch((function(e){console.log(e),t+=1})),delay+=delayStep}));var t=0;function o(e,t){return new Promise((function(o,n){setTimeout((function(){Math.random()>.3?o("✅ Fulfilled promise ".concat(e," in ").concat(t,"ms")):n("❌ Rejected promise ".concat(e," in ").concat(t,"ms"))}),t)}))}}();
//# sourceMappingURL=03-promises.304ce34e.js.map
