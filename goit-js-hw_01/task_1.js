// Оголоси дві змінні, які зберігають назву та ціну товару: name і price
// Присвойте змінним наступні характеристики товару (відразу при оголошенні)
// назва: Генератор захисного поля
// ціна: 1000
// Використовуючи стандартний рядок виведи в консоль інформацію про товар, вийде: 'Обрано «Генератор захисного поля», ціна за штуку 1000 кредитів'.
// Присвой товару нову ціну - 2000
// Використовуючи стандартний рядок виведи в консоль інформацію про товар, вийде: 'Обрано «Генератор захисного поля», ціна за штуку 2000 кредитів'.

const name = 'Генератор захисного поля';
console.log('🚀 ~ file: task_1.js ~ line 10 ~ name', name);

let price = 1000;
console.log('🚀 ~ file: task_1.js ~ line 13 ~ price', price);

console.log(`Обрано «${name}», ціна за штуку ${price} кредитів`);

price = 2000;
console.log('🚀 ~ file: task_1.js ~ line 19 ~ price', price);
console.log(`Обрано «${name}», ціна за штуку ${price} кредитів`);
