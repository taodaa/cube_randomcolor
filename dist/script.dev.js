"use strict";

// getComputedStyle() - метод позволяет прочить background и другие css свойства элемента.
// Math.ceil(Math.random()*100) Math.floor- округление вниз. Math.round возвращает ближайшее целое число. 
// Math.ceil - округление вверх.
// box[i].id - таким образом можно вывести id элемента NodeLista из цикла и.т.д
var box = document.querySelectorAll('.icon'); // let boxactive = document.querySelector('.icon');

var masiv = {};
var circle = setTimeout(function painter() {
  for (i = 0; i < box.length; i++) {
    var math = Math.floor(Math.random() * 7);

    if (math === i) {
      masiv = box[i]; // console.log(masiv);

      masiv.style.background = "red";
      break;
    } else {}
  }
}, 5000); //TODO:надо правильно запустить функцию и сделать интервал, чтобы не спамило в консоль, также нужно перекрашивать обратно блок.;
// painter();