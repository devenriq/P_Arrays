const items = [1, 3, 2, 3, 192, 192, 3, 56, 46, 24];

const counter = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});

// console.log("Contador:", counter);

const data = [
  {
    name: "Nicolas",
    level: "low",
    position: 2,
  },
  {
    name: "Andrea",
    level: "medium",
    position: 3,
  },
  {
    name: "Zulema",
    level: "hight",
    position: 4,
  },
  {
    name: "Santiago",
    level: "low",
    position: 1,
  },
  {
    name: "Valentina",
    level: "medium",
    position: 6,
  },
  {
    name: "Lucia",
    level: "hight",
    position: 7,
  },
];

const levels = data
  .map((item) => item.position)
  .reduce(
    (obj, item) => {
      if (item <= 5) obj["1-5"] += 1;
      if (item >= 5) obj["6-10"] += 1;
      return obj;
    },
    {
      "1-5": 0,
      "6-10": 0,
    }
  );

console.log(levels);
