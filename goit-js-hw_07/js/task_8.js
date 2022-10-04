// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const refs = {
  input: document.querySelector("#controls input"),
  createboxBtn: document.querySelector('[data-action="render"]'),
  deleteboxBtn: document.querySelector('[data-action="destroy"]'),
  boxes: document.querySelector("#boxes"),
};

const inputChange = e => {
  refs.input.setAttribute("count", Number(e.currentTarget.value));
};

let baseboxSize = 30;

const random_bg_color = function () {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  return bgColor;
};
random_bg_color();

const createbox = () => {
  let countBox = Number(refs.input.getAttribute("count"));

  for (let i = 0; i < countBox; i += 1) {
    baseboxSize += 10;
    const newBox = document.createElement("div");
    newBox.style.background = random_bg_color();
    newBox.style.height = baseboxSize + "px";
    newBox.style.width = baseboxSize + "px";
    newBox.style.margin = "10px";
    newBox.classList.add("new-box");
    boxes.append(newBox);
  }
};

const deletebox = () => {
  const allNewBoxes = document.querySelectorAll(".new-box");

  for (let allNewBoxe of allNewBoxes) {
    refs.boxes.removeChild(allNewBoxe);
  }
  baseboxSize = 30;
};

// слухачі
refs.input.addEventListener("input", inputChange);
refs.createboxBtn.addEventListener("click", createbox);
refs.deleteboxBtn.addEventListener("click", deletebox);
