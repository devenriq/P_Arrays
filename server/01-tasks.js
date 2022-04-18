"use strict";
const list = document.querySelector("#tasks");

const tasks = [
  { title: "Take out the dog", duration: 30, done: false },
  { title: "Take dinner", duration: 60, done: true },
  { title: "Take a shower", duration: 10, done: false },
  { title: "Water the plants", duration: 40, done: false },
  { title: "Play games", duration: 120, done: false },
];
tasks.forEach((task) => {
  if (task.done === false) {
    list.innerHTML += `<li>
      Task: ${task.title}, Duration: ${task.duration} min, Status: ${task.done}
    </li>`;
  } else {
    list.innerHTML += `<li>
    The task is done already
  </li>`;
  }
});
