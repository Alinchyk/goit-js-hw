// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// const refs = {
//   input: document.querySelector("#controls input"),
//   createboxBtn: document.querySelector('[data-action="render"]'),
//   deleteboxBtn: document.querySelector('[data-action="destroy"]'),
//   boxes: document.querySelector("#boxes"),
// };

// //! min = 0 | max = ? |  целое? положительное число
// //!  не всегда работает clear button

// // const inputChange = e => {
// //   refs.input.setAttribute("count", Number(e.currentTarget.value)); //! marker 1
// // };

// let baseboxSize = 30;

// const random_bg_color = function () {
//   var x = Math.floor(Math.random() * 256); //! const
//   let y = Math.floor(Math.random() * 256);
//   let z = Math.floor(Math.random() * 256);
//   let bgColor = "rgb(" + x + "," + y + "," + z + ")";

//   return bgColor;
// };

// random_bg_color(); //! ?? зачем?

// const createbox = () => {
//   // let countBox = Number(refs.input.getAttribute("count")); //! marker 1

//   for (let i = 0; i < countBox; i += 1) {
//     baseboxSize += 10;
//     const newBox = document.createElement("div");
//     newBox.style.background = random_bg_color();
//     newBox.style.height = baseboxSize + "px";
//     newBox.style.width = baseboxSize + "px";
//     newBox.style.margin = "10px";
//     newBox.classList.add("new-box");
//     boxes.append(newBox);
//   }
// };

// // const deletebox = () => {
// //   const allNewBoxes = document.querySelectorAll(".new-box");

// //   for (let allNewBoxe of allNewBoxes) {
// //     refs.boxes.removeChild(allNewBoxe);
// //   }
// //   baseboxSize = 30;
// // }; //!

// // слухачі
// refs.input.addEventListener("input", inputChange);
// refs.createboxBtn.addEventListener("click", createbox);
// refs.deleteboxBtn.addEventListener("click", deletebox);

// рефи
const refs = {
  input: document.querySelector("#controls input"),
  createboxBtn: document.querySelector('[data-action="render"]'),
  deleteboxBtn: document.querySelector('[data-action="destroy"]'),
  boxes: document.querySelector("#boxes"),
};

// функція випадкового кольору
const randomBgColor = () => {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = "rgb(" + x + "," + y + "," + z + ")";

  return bgColor;
};

// функція створення боксів
const createBoxes = amount => {
  let baseboxSize = 30;

  for (let i = 0; i < amount; i += 1) {
    baseboxSize += 10;
    const newBox = document.createElement("div");
    newBox.style.background = randomBgColor();
    newBox.style.height = baseboxSize + "px";
    newBox.style.width = baseboxSize + "px";
    newBox.style.margin = "10px";
    newBox.classList.add("new-box");
    refs.boxes.append(newBox);
  }
};

// input
const inputChange = () => {
  if (
    Number(refs.input.value.trim()) > Number(refs.input.max) ||
    Number(refs.input.value.trim()) < Number(refs.input.min)
  ) {
    alert("Please enter number from 1 to 100");
  } else {
    createBoxes(refs.input.value.trim());
  }
  refs.input.value = "";
};

// функція очистки
const deleteBox = () => {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
};

// слухачі
refs.createboxBtn.addEventListener("click", inputChange);
refs.deleteboxBtn.addEventListener("click", deleteBox);
