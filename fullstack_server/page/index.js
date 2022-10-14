'use strict';
const users = document.body.querySelector('.users');
async function getUsers() {
  const response = await fetch('http://127.0.0.1:3000/');
  const users = await response.json();
  return await users;
}
function showPopUp(element) {
  const popUp = document.body.querySelector('div.popUp');
  popUp.innerHTML = '';
  const title = document.createElement('h2');
  title.className = 'popUp-title';
  title.innerHTML = element.name;
  popUp.appendChild(title);
  const divUsers = document.body.querySelector('div.container');
  divUsers.style.backgroundColor = '#808080';
}
getUsers().then((data) => {
  data.forEach((element) => {
    const div = document.createElement('div');
    div.className = 'user';
    users.appendChild(div);
    const title = document.createElement('h3');
    title.className = 'title';
    title.innerHTML = element.name;
    div.appendChild(title);
    const phone = document.createElement('p');
    phone.className = 'phone';
    phone.innerHTML = element.phone;
    div.appendChild(phone);
    const mail = document.createElement('p');
    mail.className = 'mail';
    mail.innerHTML = element.email;
    div.appendChild(mail);
    div.addEventListener('click', () => showPopUp(element));
  });
});
