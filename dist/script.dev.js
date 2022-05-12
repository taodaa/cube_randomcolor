"use strict";

// getComputedStyle() - метод позволяет прочить background и другие css свойства элемента.
// Math.ceil(Math.random()*100) Math.floor- округление вниз. Math.round возвращает ближайшее целое число. 
// Math.ceil - округление вверх.
// box[i].id - таким образом можно вывести id элемента NodeLista из цикла и.т.д
// setInterval(painter, 1000) вызывает функцию с интерваллом.
// element.style.height = null можно удалять стиль так
var boxactive = document.querySelector('.icon');
var box2 = document.querySelectorAll('.icon');
var box = document.querySelectorAll('.icon');
var masiv = {};
var count = 0;
var score = document.querySelector('.score');

for (i = 0; i < box.length; i++) {
  console.log(box[i]);
  box[i].addEventListener('click', function () {
    if (masiv.style.background === "greenyellow") {
      count += 100;
      console.log(count + 100);
      score.innerHTML = count;
      score.style.color = 'greenyellow';
    } else {
      count -= 50;
      score.innerHTML = count;
      score.style.color = 'white';
      console.log(";(");
    }
  });
}

function painter() {
  for (i = 0; i < box.length; i++) {
    var math = Math.floor(Math.random() * 7);
    var math2 = Math.floor(Math.random() * 7);

    if (math === math2) {
      masiv = box[i]; // console.log(box[i].id);

      masiv.style.background = 'greenyellow';
      break;
    }
  }

  if (masiv.style.background === 'greenyellow') {
    setTimeout(function () {
      masiv.style.background = null;
    }, 600);
  } else {
    setTimeout(function () {
      masiv.style.background = null;
    }, 600);
  }
}

setInterval(painter, 800); //TODO:надо правильно запустить функцию и сделать интервал, чтобы не спамило в консоль, также нужно перекрашивать обратно блок.;
// painter();
// console.log(masiv[i].forEach);