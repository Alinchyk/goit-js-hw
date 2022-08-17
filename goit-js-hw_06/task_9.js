// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

import users from "./users.js";

const getNamesSortedByFriendsCount = users => {
  const names = [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);
  return names;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
