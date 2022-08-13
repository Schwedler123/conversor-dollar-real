


const $dollar = document.querySelector('[data-js="dollar"]');
const $real = document.querySelector('[data-js="real"]');
const $button = document.querySelector('[data-js="button"]');
const $display = document.querySelector('[data-js="display"]');
let real  = 5.16;


 

$button.addEventListener('click' , handleConvertor);

function handleConvertor (event) {
  convertion();
  
  $real.value = convertion();
  $display.value = convertion();
 
}
 
  

function convertion () {
  return  $dollar.value * real
}










