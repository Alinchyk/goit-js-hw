// Напиши скрипт перевірки кількості товарів на складі. Є змінні total (кількість товарів на складі) і ordered (одиниць товару в замовленні).

// Порівняй ці значення і за результатами виведи:

// Якщо в замовленні вказано число, що перевищує кількість товарів на складі, то виведи повідомлення "На складі недостатньо товарів!".
// В іншому випадку виводь повідомлення "Замовлення оформлено, з вами зв'яжеться менеджер".
// Перевір працездатність коду з різними значеннями змінної ordered, наприклад 20, 80 і 130.

const total = 100;
let ordered = 20;

if (total < ordered) {
  console.log("На складі недостатньо товарів!");
} else {
  console.log("Замовлення оформлено, з вами звяжеться менеджер");
}

ordered = 20;

if (total < ordered) {
  console.log("На складі недостатньо товарів!");
} else {
  console.log("Замовлення оформлено, з вами звяжеться менеджер");
}

ordered = 130;

if (total < ordered) {
  console.log("На складі недостатньо товарів!");
} else {
  console.log("Замовлення оформлено, з вами звяжеться менеджер");
}
