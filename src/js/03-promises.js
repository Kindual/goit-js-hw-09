const refs = {
  formEl: document.querySelector('.form'),
  delayEl: document.querySelector('[name=delay]'),
  stepEl: document.querySelector('[name=step]'),
  amountEl: document.querySelector('[name=amount]'),
  btnGenerate: document.querySelector('[type=submit]')
}
console.log(refs.btnGenerate);

refs.formEl.addEventListener('submit', formSubmit);

let counter = 0;

function formSubmit(ev) {
  ev.preventDefault();
  delay = Number(refs.delayEl.value);
  delayStep = Number(refs.stepEl.value);
  position = refs.amountEl.value;

  btnDisabled(refs.btnGenerate);
  counter -= position;

  if (delay <= 0 || delayStep < 0 || position < 0) {
    alert('Заповніть поля корректними значеннями');
    return
  }

  for (let i = 1; i <= position; i++) {
    createPromise(i, delay)
      .then(x => {
        console.log(x);
      })
      .catch(y => {
        console.log(y);
      })
      .finally(() => {
        if(counter + i === 0) {
          btnDisabled(refs.btnGenerate);
          counter += i;
        }
      });

    delay += delayStep;
  }
}

function btnDisabled(btn) {
  btn.disabled = !btn.disabled;
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