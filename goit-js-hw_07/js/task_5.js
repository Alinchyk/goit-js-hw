// // Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

// // {
// // <input type="text" placeholder="Ваше ім'я?" id="name-input" />
// // <h1>Привіт, <span id="name-output">незнайомець</span>!</h1> */
// // }

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.oninput = function () {
  if (input.value === "") {
    nameOutput.innerText = "незнайомець";
  } else {
    nameOutput.innerText = input.value;
  }
};
