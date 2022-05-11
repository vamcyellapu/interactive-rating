'use strict';

const numbers = document.querySelectorAll('.number');
const submitBtn = document.querySelector('.rating__btn');
const rating = document.querySelector('.rating');
const thankyou = document.querySelector('.thankyou');
const thankyouText = document.querySelector('.thankyou__text');
let selectedNum;
numbers.forEach((number) => {
  number.addEventListener('click', function (e) {
    numbers.forEach((num) => {
      if (num !== number) {
        num.classList.remove('rating__rated');
      }
    });

    number.classList.toggle('rating__rated');
    selectedNum = e.target.innerText;
    selectedNum &&
      submitBtn.addEventListener('click', function () {
        rating.classList.add('display');
        thankyou.classList.remove('display');
        thankyouText.innerHTML = `You selected ${selectedNum} out of 5`;
      });
    console.log(selectedNum);
  });
});
