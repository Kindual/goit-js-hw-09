!function(){var e={formEl:document.querySelector(".form"),delayEl:document.querySelector("[name=delay]"),stepEl:document.querySelector("[name=step]"),amountEl:document.querySelector("[name=amount]")};function n(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}e.formEl.addEventListener("submit",(function(t){t.preventDefault(),delay=Number(e.delayEl.value),delayStep=Number(e.stepEl.value),position=e.amountEl.value;for(var o=1;o<=position;o++)n(o,delay).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),delay+=delayStep}))}();
//# sourceMappingURL=03-promises.b4d418e7.js.map