const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

console.log("original", orders);

const rpta = orders.map((order) => {
  return order.total;
});

console.log("rpta", rpta);

// const rpta2 = orders.map((order) => {
//   order.tax = 0.19;
//   return orders;
// });
// console.log("rpta2", rpta2);
// console.log("original", orders);

const rpta3 = orders.map((order) => {
  return {
    ...order,
    tax: 0.19,
  };
});
console.log("rpta3", rpta3);
console.log("original", orders);
