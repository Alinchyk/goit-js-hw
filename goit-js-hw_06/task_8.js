// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

import users from "./users.js";

const getUsersWithFriend = (users, friendName) => {
  return users.reduce(
    (usersArr, user) => (user.friends.includes(friendName) ? usersArr.concat([user.name]) : usersArr),
    [],
  );
};

// другий варіант
// const getUsersWithFriend = (users, friendName) =>
//   users.reduce((acc, user) => (user.friends.includes(friendName) ? [...acc, user.name] : users), []);

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
