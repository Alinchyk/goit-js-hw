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

let counterValue = 0;
let getValue = document.querySelector("#value");

function increment() {
  counterValue = counterValue + 1;
  getValue.textContent = counterValue;
}

function decrement() {
  counterValue = counterValue - 1;
  getValue.textContent = counterValue;
}

const firstBtn = document.querySelector(' button[data-action="decrement"]');
const secondBtn = document.querySelector(' button[data-action="increment"]');

firstBtn.addEventListener("click", decrement);
secondBtn.addEventListener("click", increment);
