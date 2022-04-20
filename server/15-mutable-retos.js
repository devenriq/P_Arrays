"use strict";
const products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

const deleteElement = "🍔";

const filtered = products.filter((product) => product.id != deleteElement);
console.log("Filtered", filtered);

//update

const productsV2 = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

const update = {
  id: "🥞",
  changes: {
    price: 200,
    description: "Delicious",
  },
};

const productIndexV2 = productsV2.findIndex((item) => item.id === update.id);
