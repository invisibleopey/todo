import { allProjects } from "./project-class.js";
const container = document.querySelector("#container");
function render(obj) {
  // Create the Div and its contents
  let newTask = document.createElement("div");
  newTask.classList.add("task");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "done";
  checkbox.id = "toggleDone";
  let title = document.createElement("p");
  title.textContent = obj.title;
  let detailsBtn = document.createElement("button");
  detailsBtn.textContent = "DETAILS";
  detailsBtn.classList.add("task-btns");
  let dueDate = document.createElement("p");
  dueDate.textContent = obj.dueDate;
  let editBtn = document.createElement("button");
  editBtn.textContent = "EDIT";
  editBtn.classList.add("task-btns");
  let delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.classList.add("task-btns");
  // Append all contents to the div and div to the container
  newTask.append(checkbox, title, detailsBtn, dueDate, editBtn, delBtn);
  container.append(newTask);
}

// Control Modal
document.getElementById("addNew").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
});
// Toggle between add task and add project forms
document
  .querySelector("#project-form-btn")
  .addEventListener("click", function () {
    document.querySelector("#new-task-form").style.display = "none";
    document.querySelector("#new-project-form").style.display = "block";
  });
document.querySelector("#task-form-btn").addEventListener("click", function () {
  document.querySelector("#new-project-form").style.display = "none";
  document.querySelector("#new-task-form").style.display = "block";
});
// Add the projects to nav
export function renderProjects(obj) {
  const ul = document.querySelector("#project-list");
  let li = document.createElement("li");
  let span = document.createElement("span");
  if (obj.title === "Home") return;
  span.textContent = obj.title;
  li.append(span);
  ul.append(li);
}
// Event listener for home button
const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", () => {
  document.querySelector("#container").innerHTML = "";
  allProjects[0].myArray.map(render);
});
// Event Listener to render the array in each project.
// Method of class Project was giving me problem so I moved it here.
const nav = document.querySelector("nav");
nav.addEventListener("click", addEventToProject);
function addEventToProject(e) {
  document.querySelector("#container").innerHTML = "";
  let theProject = e.target.outerText.toLowerCase();
  for (let project of allProjects) {
    if (project.title.toLowerCase() === theProject) {
      project.myArray.map(render);
    }
  }
}
export default render;
