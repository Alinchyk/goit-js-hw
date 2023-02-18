// Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

// {
// <input type="text" placeholder="Ваше ім'я?" id="name-input" />
// <h1>Привіт, <span id="name-output">незнайомець</span>!</h1> */
// }

const input = document.querySelector("#name-input");

input.addEventListener("keyup", function (e) {
  const output = document.querySelector("#name-output");
  if (input.value.trim() === "") {
    output.textContent = "незнайомець";
  } else {
    output.textContent = e.target.value;
  }
});
