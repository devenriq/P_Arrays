const numbs = [1, 30, 29, 10, 13, 50];

let rta = true;
for (let i = 0; i < numbs.length; i++) {
  const element = numbs[i];
  if (element >= 40) {
    rta = false;
  }
}
console.log("rta", rta);

const rta2 = numbs.every((item) => item <= 40);
console.log("rta2", rta2);

const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const under15 = team.every((person) => person.age >= 15);
console.log("Under 15", under15);
