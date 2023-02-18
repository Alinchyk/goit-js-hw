// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.

// Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу
// {/* <div id="counter">
//   <button type="button" data-action="decrement">
//     -1
//   </button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">
//     +1
//   </button>
// </div>; */}

// let counterValue = 0;
// const getValue = document.querySelector("#value");

// const a = {
//   value: 0,
//   increment: () => {},
//   decrement: () => {},
// };

// const increment = () => {
//   counterValue += 1;
//   getValue.textContent = counterValue;
// };

// const decrement = () => {
//   counterValue = counterValue - 1;
//   getValue.textContent = counterValue;
// };

// const firstBtn = document.querySelector('button[data-action="decrement"]');
// const secondBtn = document.querySelector('button[data-action="increment"]');

// firstBtn.addEventListener("click", decrement); //! делегирование по data-action // [data-action="decrement"]
// secondBtn.addEventListener("click", increment);

let counterValue = 0;
const counter = document.querySelector("#counter");
const getValue = document.querySelector("#value");

const onClick = e => {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }

  if (e.target.dataset.action === "increment") {
    counterValue += 1;
    getValue.textContent = counterValue;
  }

  if (e.target.dataset.action === "decrement") {
    counterValue = counterValue - 1;
    getValue.textContent = counterValue;
  }
};

// слухач
counter.addEventListener("click", onClick);

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
