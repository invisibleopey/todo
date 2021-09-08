import { allProjects, saveLocalProjects, sortProject } from './project-class';
import render from './dom';

class Task {
  constructor(title, description, dueDate, priority, checklist) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = checklist;
  }

  // getDetails() {
  //   // Call the DOM Manipulation that will get details here
  // }
  // setDetails() {
  //   // Call the DOM Manipulation that will show form and allow entries to be entered
  // }
  // deleteTask() {
  //   // Remove the Object from the Arrays it is located
  // }
  addToHomeArray() {
    allProjects[0].myArray.push(this);
    // If belongs to a project, push to project array too
  }
  // toggleCheck() {
  //   // Check on or off to show completion of task
  // }
}

// TODO: Move this away from here once you find a solution to webpack messing with imported classes
// Form Submit Button
const addTaskBtn = document.querySelector('#addTodo');
function addNewTask(e) {
  e.preventDefault();
  const title = document.querySelector('#new-task-title').value;
  const description = document.querySelector('#new-task-details').value;
  const dueDate = document.querySelector('#new-task-due-date').value;
  const priority = document.querySelector(
    // eslint-disable-next-line comma-dangle
    'input[name="priority"]:checked'
  ).value;
  const checklist = undefined;
  const newTask = new Task(title, description, dueDate, priority, checklist);
  newTask.addToHomeArray();
  sortProject(newTask);
  saveLocalProjects();
  // The next line of code was added because the contents of the homeArray kept
  // duplicating during rendering. A temporary fix, find permanent fix later
  document.querySelector('#container').innerHTML = '';
  allProjects[0].myArray.map(render);
  document.querySelector('.bg-modal').style.display = 'none';
  document.querySelector('#new-task-form').reset();
}
addTaskBtn.addEventListener('click', addNewTask);
export default Task;
