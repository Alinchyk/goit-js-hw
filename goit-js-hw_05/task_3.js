// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. При виклику буде отримувати один аргумент - початковий масив товарів, і записувати його у властивість items.

// Додай методи класу:

// getItems() - повертає масив поточних товарів
// addItem(item) - отримує новий товар і додає його до поточних
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    items.splice(1, 1);
  }
}

const storage = new Storage(["Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор"]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]
console.log(items);

storage.addItem("Дроїд");
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]
console.log(items);

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
console.log(items);
