// getComputedStyle() - метод позволяет прочить background и другие css свойства элемента.
// Math.ceil(Math.random()*100) Math.floor- округление вниз. Math.round возвращает ближайшее целое число. 
// Math.ceil - округление вверх.
// box[i].id - таким образом можно вывести id элемента NodeLista из цикла и.т.д
// setInterval(painter, 1000) вызывает функцию с интерваллом.
// element.style.height = null можно удалять стиль так
let boxactive = document.querySelector('.icon');
let box = document.querySelectorAll('.icon'); 
let masiv = {};


function painter(){
    onclick.no
    for(i=0; i < box.length; i++){
        let math =  Math.floor(Math.random()*7);
        let math2 =  Math.floor(Math.random()*7);
   if(math === math2){
    masiv = box[i];
    // console.log(box[i].id);
    masiv.style.background = "red";
    break;
    }
}
if(masiv.style.background = "red"){
    setTimeout(()=>{
        masiv.style.background = null;
    },500);
}
}


masiv.addEventListener('click', ()=>{
    var count = 0;
    if(masiv.style.background = "red"){
        console.log(count++)
    }
    else(
        console.log(count--)
    )
});

setInterval(painter, 1000);
//TODO:надо правильно запустить функцию и сделать интервал, чтобы не спамило в консоль, также нужно перекрашивать обратно блок.;
// painter();

