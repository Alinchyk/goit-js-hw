// Отримати загальну суму балансу (поле balance) всіх користувачів.

import users from "./users.js";

const callback = (totalBalance, { balance }) => totalBalance + balance;
const calculateTotalBalance = users => users.reduce(callback, 0);

console.log(calculateTotalBalance(users)); // 20916
