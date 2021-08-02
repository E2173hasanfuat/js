// var life = 100;

// life = life - 10;

// var name = 'hasan';

// var checkout = false;

// var box = null;

// console.log(box);

// let life = 100;

// life = life - 50;

// console.log(life);

// const you = 'hasan';

// function toUpper(text) {
//   const upperCased = text.toUpperCase();
//   console.log(upperCased);
// }

// const toUpper = () => {};

// console.log('Hello my name is ' + 'hasan');

// const name = 'hasan';
// const age = 33;

// const combined = name + age;
// console.log(combined);
// console.log(typeof combined);

// this

// const user = {
//   name: 'hasan',
//   age: 33,
//   married: true,
//   purchases: ['phone', 'car', 'laptop'],

//   sayName: () => {
//     console.log(this.name);
//   },
// };

// user.sayName();

// function saymyAge() {
//   console.log(`My age is ${this}`);
// }

// saymyAge();
// last
// const text = document.querySelector('.title');
// const changeColor = document.querySelector('.changeColor');

// // text.style.color = 'red';
// // text.classList.add('change');
// // text.classList.remove('change');

// changeColor.addEventListener('click', function () {
//   text.classList.toggle('change');
// });

const userList = document.querySelector('.list');
const listInput = document.querySelector('.list-input');
const addButton = document.querySelector('.btn');
// console.log(userList);

// for (user of userList) {
//   user.addEventListener('click', function () {
//     this.style.color = 'red';
//   });
// }

addButton.addEventListener('click', function () {
  const newLi = document.createElement('li');
  const liContent = document.createTextNode(listInput.value);

  newLi.appendChild(liContent);
  userList.appendChild(newLi);
});
