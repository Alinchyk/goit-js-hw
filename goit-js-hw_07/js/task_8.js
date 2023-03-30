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

const randomBgColor = () => {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = "rgb(" + x + "," + y + "," + z + ")";

  return bgColor;
};

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

const inputChange = () => {
  if (Number(refs.input.value) > Number(refs.input.max) || Number(refs.input.value) < Number(refs.input.min)) {
    alert("Please enter number from 1 to 100");
  } else {
    createBoxes(refs.input.value);
  }
  refs.input.value = "";
};

const deleteBox = () => {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
};

refs.createboxBtn.addEventListener("click", inputChange);
refs.deleteboxBtn.addEventListener("click", deleteBox);
