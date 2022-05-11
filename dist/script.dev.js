"use strict";

// getComputedStyle() - метод позволяет прочить background и другие css свойства элемента.
// Math.ceil(Math.random()*100) Math.floor- округление вниз. Math.round возвращает ближайшее целое число. 
// Math.ceil - округление вверх.
// box[i].id - таким образом можно вывести id элемента NodeLista из цикла и.т.д
var box = document.querySelectorAll('.icon');
var boxactive = document.querySelector('.icon');

function painter() {}

for (i = 0; i < box.length; i++) {
  var math = Math.floor(Math.random() * 7);

  if (math === i) {
    console.log(i);
    painter();
    l;
    break;
  }
}