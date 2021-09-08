// eslint-disable-next-line import/no-cycle
import { renderProjects } from './dom';

class Projects {
  constructor(title) {
    this.title = title;
    this.myArray = [];
  }
  // Add logic to remove the projects once all the tasks added are deleted
}
const home = new Projects('Home');
const chores = new Projects('Chores');
// Had to do this because it will be mutated in save and load local function
// eslint-disable-next-line import/no-mutable-exports
export let allProjects = [home, chores];

// Local Storage
export function saveLocalProjects() {
  localStorage.setItem('allProjects', JSON.stringify(allProjects));
}
function restoreLocalProjects() {
  allProjects = JSON.parse(localStorage.getItem('allProjects'));
  if (allProjects === null) allProjects = [home, chores];
  allProjects.map(renderProjects);
}
// Use event listener to call projects class to create new array
const addProjectBtn = document.querySelector('#addProject');
function createProject() {
  // Used this to get value of title either I am creating a new project from
  // project form or from task form.
  const title = document.querySelector('#new-project-title').value;
  const newProject = new Projects(title);
  allProjects.push(newProject);
}
function addNewProject() {
  createProject();
  // display projects and hide modals
  document.querySelector('#project-list').innerHTML = '';
  allProjects.map(renderProjects);
  document.querySelector('.bg-modal').style.display = 'none';
  document.querySelector('#new-project-form').reset();
  saveLocalProjects();
}
addProjectBtn.addEventListener('click', addNewProject);

export function sortProject(newTask) {
  const projectName = document.querySelector('#project-name').value;
  if (projectName === '') return;
  for (let i = 0; i < allProjects.length; i += 1) {
    if (allProjects[i].title === projectName) {
      // Push the same object, so that by reference, any change to one is a change to all
      for (let j = 0; j < allProjects[0].myArray.length; j += 1) {
        if (newTask.title === allProjects[0].myArray[j].title) {
          allProjects[i].myArray.push(allProjects[0].myArray[j]);
        }
      }
    }
  }
}

// Call this function everytime my app is revisited or reloaded
restoreLocalProjects();
export default Projects;
