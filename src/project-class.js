import render from "./dom";
import { renderProjects } from "./dom";

class Projects {
  constructor(title) {
    this.title = title;
    this.myArray = [];
  }
  renderProjectTasks() {
    document.querySelector("#container").innerHTML = "";
    if (this.Array === undefined) return;
    this.myArray.map(render);
    // Code to render content of this.myArray
  }
  // Add logic to remove the projects once all the tasks added are deleted
}
const chores = new Projects("Chores");
const allProjects = [chores];
allProjects.map(renderProjects);

// Use event listener to call projects class to create new array
const addProjectBtn = document.querySelector("#addProject");
addProjectBtn.addEventListener("click", addNewProject);
function addNewProject(e) {
  e.preventDefault();
  let title = document.querySelector("#new-project-title").value;
  let newProject = new Projects(title);
  allProjects.push(newProject);
  // display projects and hide modals
  document.querySelector("#project-list").innerHTML = "";
  allProjects.map(renderProjects);
  document.querySelector(".bg-modal").style.display = "none";
  document.querySelector("#new-project-form").reset();
}

export default Projects;
