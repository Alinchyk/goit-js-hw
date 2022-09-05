// Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

// {
// <input type="text" placeholder="Ваше ім'я?" id="name-input" />
// <h1>Привіт, <span id="name-output">незнайомець</span>!</h1> */
// }

const checkInput = document.querySelector("#name-input");
const checkOutput = document.querySelector("#name-output");

checkInput.addEventListener("input", checkInputValue);

function checkInputValue() {
  if (!checkInput === value) {
    checkOutput.textContent = "незнайомець";
  } else {
    checkOutput.textContent = checkInput.value;
  }
}
