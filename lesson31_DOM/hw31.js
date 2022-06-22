//TASK1
let p = document.body.querySelectorAll('p')
const textP = 'text3';
for (let n = 0; n < p.length; n++) {
  //Удалите тег p с текстом text3
  if (p[n].textContent.includes(textP)) {
    delete p[n]
  }
  //Сделайте текст в четных(по порядку следования) тегах p подчеркнутым
  if (n % 2) {
    p[n].style.textDecoration = '2px underline solid black';
  }
  if (p[n].textContent == textP) {
    p[n].innerHTML = ''
  }

}
p.forEach((el) => {
  el.className =''
})
console.log(p);
//Добавьте всем элементам li CSS-класс item
const li = document.body.querySelectorAll('li');
li.forEach((el) => el.classList.add('item'))
console.log(li);

//TASK2
const secondTask = document.body.querySelector('.task2')
// const firstDiv = secondTask.children
let divs = secondTask.querySelectorAll('div');
divs.forEach((el) => {
  if (el.children.length === 0) {
    el.style.background = 'blue';
  } 
  else if(el.children.length === 1){
    el.style.background = 'yellow';
  }else if(el.children.length === 2){
    el.style.background = 'grey';
  }

  console.log(el.children.length);
})
console.log(div);

//TASK3
let div1 = document.body.querySelectorAll('div').forEach((el) => { el.style.background = el.textContent })