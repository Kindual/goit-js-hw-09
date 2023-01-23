const refs = {
  formEl: document.querySelector('.form'),
  delayEl: document.querySelector('[name=delay]'),
  stepEl: document.querySelector('[name=step]'),
  amountEl: document.querySelector('[name=amount]'),
}

refs.formEl.addEventListener('submit', formSubmit)


function formSubmit(ev) {
  ev.preventDefault();
  delay = Number(refs.delayEl.value);
  delayStep = Number(refs.stepEl.value);
  position = refs.amountEl.value;

  for (let i = 1; i <= position; i++) {
    createPromise(i, delay).then(x => console.log(x)).catch(y => console.log(y));
    delay += delayStep;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    },
      delay);
  })
}