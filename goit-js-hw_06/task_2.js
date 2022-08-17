// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

import users from "./users.js";

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === "blue");
};

console.log(getUsersWithEyeColor(users, "blue")); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
