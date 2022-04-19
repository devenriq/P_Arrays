"use strict";
const numbs = [1, 30, 49, 29, 10, 13];

let rta = undefined;
for (let index = 0; index < numbs.length; index++) {
  const element = numbs[index];
  if (element === 30) {
    rta = element;
    break;
  }
}
console.log(rta);

const rta2 = numbs.find((item) => item === 30);
console.log("rta2", rta);

const products = [
  {
    name: "Pizza",
    price: 12,
    id: "🍕",
  },
  {
    name: "Burger",
    price: 23,
    id: "🍔",
  },
  {
    name: "Hot dog",
    price: 34,
    id: "🌭",
  },
  {
    name: "Hot cakes",
    price: 355,
    id: "🥞",
  },
];

const rta3 = products.find((item) => item.id === "🍔");
console.log("find", rta3);
const rta4 = products.findIndex((item) => item.id === "🍔");
console.log("findIndex", rta4);
