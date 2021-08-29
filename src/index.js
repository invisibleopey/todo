import Task from "./task.js";
import render from "./dom.js";
import Projects from "./project-class.js";

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
let homeArray = [];
// Local Storage
export function saveLocal() {
  localStorage.setItem("homeArray", JSON.stringify(homeArray));
}
export function restoreLocal() {
  homeArray = JSON.parse(localStorage.getItem("homeArray"));
  if (homeArray === null) homeArray = [];
  homeArray.map(render);
}
// Call this function everytime my app is revisited or reloaded
restoreLocal();
export default homeArray;
