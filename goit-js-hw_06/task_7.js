// Отримати загальну суму балансу (поле balance) всіх користувачів.

import users from "./users.js";

const calculateTotalBalance = users => users.reduce((totalBalance, { balance }) => totalBalance + balance, 0);

console.log(calculateTotalBalance(users)); // 20916
