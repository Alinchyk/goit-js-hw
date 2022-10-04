// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => user["friends"].includes(friendName)).map(user => user.name);
};

//! лишние итерации
//!  reduce

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
