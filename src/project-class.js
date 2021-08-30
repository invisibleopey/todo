import render from "./dom";
import { renderProjects } from "./dom";

class Projects {
  constructor(title) {
    this.title = title;
    this.myArray = [];
  }
  renderProjectTasks() {
    document.querySelector("#container").innerHTML = "";
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
function addNewProject() {
  createProject();
  // display projects and hide modals
  document.querySelector("#project-list").innerHTML = "";
  allProjects.map(renderProjects);
  document.querySelector(".bg-modal").style.display = "none";
  document.querySelector("#new-project-form").reset();
}
function createProject() {
  // Used this to get value of title either I am creating a new project from
  // project form or from task form.
  let title =
    document.querySelector("#new-project-title").value ||
    document.querySelector("#project-name").value;
  let newProject = new Projects(title);
  allProjects.push(newProject);
}
// TODO: Not working, Fix it
export function sortProject(newTask) {
  const projectName = document.querySelector("#project-name").value;
  if (projectName === "") return;
  for (let i = 0; i < allProjects.length; i++) {
    if (allProjects[i].title === projectName) {
      allProjects[i].myArray.push(newTask);
    } else {
      addNewProject();
    }
  }
}
export default Projects;
