import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const delay = document.querySelector("[name = 'delay']");
const step = document.querySelector("[name = 'step']");
const amount = document.querySelector("[name = 'amount']");
const form = document.querySelector(".form");

function createPromise(index, newdelay) {
  return new Promise ((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(()=> {  
  if (shouldResolve) {
    resolve({index, delay})
  } else {
    reject({index, delay})
  }
}, newdelay)
});
}

form.addEventListener("submit", handlePromise)

function handlePromise(event) {
  event.preventDefault();
  let newdelay =  Number(delay.value)
  for (let index = 0; index < amount.value; index++) {
    newdelay += Number(step.value) 
    
    createPromise(index+1, newdelay)
    .then(({ index, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${index} in ${delay}ms`);
    })
    .catch(({ index, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${index} in ${delay}ms`);
    });
  }

  event.target.reset()
}