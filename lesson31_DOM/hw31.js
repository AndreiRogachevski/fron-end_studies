//TASK1
let p = document.body.querySelectorAll('p')
const textP= 'text3';
for (let n = 0; n < p.length; n++) {
  //Удалите тег p с текстом text3
  if(p[n].textContent.includes(textP)){
    delete p[n]
  }
  //Сделайте текст в четных(по порядку следования) тегах p подчеркнутым
  if (n % 2) {
    p[n].style.textDecoration = '2px underline solid black';
  }
  if(p[n].textContent==textP){
    p[n].innerHTML=''
  }
  // nm = p[n].className;
  // p[n].classList.remove('nm')
}
// p.forEach((el) => {
//   elN = el.className;
//   el.classList.remove('elN')
// })
console.log(p);
//Добавьте всем элементам li CSS-класс item
const li = document.body.querySelectorAll('li');
li.forEach((el) => el.classList.add('item'))
console.log(li);

//TASK2
const secondTask = document.body.querySelector('.task2')
const firstDiv = document.body.children
firstDiv
console.log(firstDiv);

//TASK3
let div = document.body.querySelectorAll('div');
console.log(div);
div.forEach((el) => {el.style.color = `${el.textContent}`})