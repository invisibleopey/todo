import Task from "./task.js";
import render from "./render.js";

let task1 = new Task(
  "Get Help",
  "To get some Kind of healp",
  "9-10-2021",
  "High",
  "False"
);
let task2 = new Task(
  "Get Help",
  "To get some Kind of healp",
  "9-10-2021",
  "High",
  "False"
);
let task3 = new Task(
  "Get Help",
  "To get some Kind of healp",
  "9-10-2021",
  "High",
  "False"
);
const homeArray = [task1, task2, task3];
homeArray.map(render);
