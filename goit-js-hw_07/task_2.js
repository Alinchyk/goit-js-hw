// В HTML є пустий список ul#ingredients.

// {
//   /* <ul id="ingredients"></ul>; */
// }

// В JS є масив рядків.

const ingredients = ["Картопля", "Гриби", "Часник", "Помідори", "Зелень", "Приправи"];
// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li за одну операцію в список ul.ingredients. Для створення DOM-вузлів використовуй document.createElement().

const createLi = document.getElementById("ingredients");
ingredients.forEach(item => {
  let li = document.createElement("li");
  li.innerText = item;
  createLi.append(li);
});

console.log(createLi);
