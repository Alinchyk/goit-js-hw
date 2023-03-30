// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.

// Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

let counterNode = document.querySelector("#counter");
const getValue = document.querySelector("#value");

const counter = {
  counterValue: 0,

  update: function (value) {
    this.counterValue += Number(value);
    getValue.textContent = this.counterValue;
  },
};

const onClick = e => {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  counter.update(e.target.dataset.action);
};

counterNode.addEventListener("click", onClick);

//!

// const getValue = document.querySelector("#value");
// const firstBtn = document.querySelector('button[data-action="decrement"]');
// const secondBtn = document.querySelector('button[data-action="increment"]');

// const Counter = function ({ node, initialValue = 0 }) {
//   {
//     this.node = node;
//     this.value = initialValue;

//     this.updateNode = function () {
//       this.node.textContent = this.value;
//     };

//     this.increment = () => {
//       this.value += 1;
//       this.updateNode();
//     };

//     this.decrement = () => {
//       this.value -= 1;
//       this.updateNode();
//     };
//   }
// };

// const counter = new Counter({ node: getValue });

// secondBtn.addEventListener("click", counter.increment);
// firstBtn.addEventListener("click", counter.decrement);
