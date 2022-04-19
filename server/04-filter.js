const words = ["spray", "limit", "elite", "exuberant"];

const newArray = [];
const rta = words.filter((item) => item.length >= 6);

// console.log("Original", words);
// console.log("rta", rta);

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
  {
    customerName: "Nico",
    total: 1260,
    delivered: true,
  },
];

const rta3 = orders.filter((item) => item.delivered && item.total >= 100);

// console.log("Original", words);
// console.log("rta3", rta3);

const search = (query) => {
  return orders.filter((item) => {
    return item.customerName.includes(query);
  });
};

console.log(search("Nico"));
