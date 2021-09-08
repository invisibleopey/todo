/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */
/* eslint-disable default-case */
// eslint-disable-next-line object-curly-newline
import { parseISO, isPast, isToday, isThisWeek } from 'date-fns';
// eslint-disable-next-line import/no-cycle
import { allProjects, saveLocalProjects } from './project-class';

const container = document.querySelector('#container');
function render(obj) {
  // Create the Div and its contents
  let newTask = document.createElement('div');
  newTask.classList.add('task');
  switch (obj.priority) {
    case 'low':
      newTask.classList.add('low-priority-task');
      break;
    case 'medium':
      newTask.classList.add('medium-priority-task');
      break;
    case 'high':
      newTask.classList.add('high-priority-task');
      break;
  }
  if (obj.checklist === 'done') newTask.classList.add('done');
  let checkbox = document.createElement('input');
  if (obj.checklist === 'done') checkbox.checked = true;
  checkbox.type = 'checkbox';
  checkbox.name = 'done';
  checkbox.id = 'toggleDoneBox';
  let title;
  if (obj.checklist === 'done') {
    title = document.createElement('del');
    title.textContent = obj.title;
  } else {
    title = document.createElement('p');
    title.textContent = obj.title;
  }
  let detailsBtn = document.createElement('button');
  detailsBtn.textContent = 'DETAILS';
  detailsBtn.classList.add('task-btns');
  detailsBtn.id = 'detailsBtn';
  let dueDate = document.createElement('p');
  dueDate.textContent = obj.dueDate;
  let editBtn = document.createElement('button');
  editBtn.textContent = 'EDIT';
  editBtn.classList.add('task-btns');
  editBtn.id = 'editBtn';
  let delBtn = document.createElement('button');
  delBtn.textContent = 'X';
  delBtn.classList.add('task-btns');
  delBtn.id = 'deleteBtn';
  // Append all contents to the div and div to the container
  newTask.append(checkbox, title, detailsBtn, dueDate, editBtn, delBtn);
  container.append(newTask);
}

// Control Modal
document.getElementById('addNew').addEventListener('click', () => {
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.bg-modal').style.display = 'none';
});
// Toggle between add task and add project forms
document.querySelector('#project-form-btn').addEventListener('click', () => {
  document.querySelector('#new-task-form').style.display = 'none';
  document.querySelector('#new-project-form').style.display = 'block';
});
document.querySelector('#task-form-btn').addEventListener('click', () => {
  document.querySelector('#new-project-form').style.display = 'none';
  document.querySelector('#new-task-form').style.display = 'block';
});
// Add the projects to nav
export function renderProjects(obj) {
  const ul = document.querySelector('#project-list');
  let li = document.createElement('li');
  let span = document.createElement('span');
  if (obj.title === 'Home') return;
  span.textContent = obj.title;
  li.append(span);
  ul.append(li);
}
// Event listener for home button
const homeBtn = document.querySelector('#home');
homeBtn.addEventListener('click', () => {
  document.querySelector('#container').innerHTML = '';
  allProjects[0].myArray.map(render);
});
// Event Listener to render the array in each project.
// Method of class Project was giving me problem so I moved it here.
const projectList = document.querySelector('#project-list');
function addEventToProject(e) {
  // Next line is to fix bug of empty spaces calling the function
  if (e.target.nodeName !== 'SPAN') return;
  document.querySelector('#container').innerHTML = '';
  let theProject = e.target.outerText.toLowerCase();
  // eslint-disable-next-line no-restricted-syntax
  for (let project of allProjects) {
    if (project.title.toLowerCase() === theProject) {
      project.myArray.map(render);
    }
  }
}
projectList.addEventListener('click', addEventToProject);

// Event Listener to delete a Task
function deleteTask(e) {
  if (e.target.id !== 'deleteBtn') return;
  let targetTitle = e.target.parentNode.children[1].outerText;
  // Delete from the Home array and Project if task is also in a project
  for (let i = 0; i < allProjects.length; i += 1) {
    for (let j = 0; j < allProjects[i].myArray.length; j += 1) {
      // Conditional statement to delete the target task
      if (targetTitle === allProjects[i].myArray[j].title) {
        allProjects[i].myArray.splice(j, 1);
        saveLocalProjects();
        container.innerHTML = '';
        if (allProjects[i].myArray.length !== 0) {
          allProjects[i].myArray.map(render);
        } else {
          allProjects[0].myArray.map(render);
        }
      }
      // Conditional statement to delete the project if it is not home
      // and that is the last task to be deleted
      if (allProjects[i].title !== 'Home' && allProjects[i].myArray.length === 0) {
        allProjects.splice(i, 1);
      }
      saveLocalProjects();
      document.querySelector('#project-list').innerHTML = '';
      allProjects.map(renderProjects);
    }
  }
}
container.addEventListener('click', deleteTask);

// Event Listener for the checkBox for marking done
function toggleDone(e) {
  if (e.target.id !== 'toggleDoneBox') return;
  let targetTitle = e.target.parentNode.children[1].outerText;
  // Loop through all Home array and Project if task is also in a project
  for (let i = 0; i < allProjects[0].myArray.length; i += 1) {
    if (targetTitle === allProjects[0].myArray[i].title) {
      if (allProjects[0].myArray[i].checklist === 'done') {
        allProjects[0].myArray[i].checklist = undefined;
      } else {
        allProjects[0].myArray[i].checklist = 'done';
      }
      saveLocalProjects();
      container.innerHTML = '';
      allProjects[0].myArray.map(render);
    }
  }
}
container.addEventListener('click', toggleDone);

// Event Listener for detailsBtn
function getTaskDetails(e) {
  if (e.target.id !== 'detailsBtn') return;
  let targetTitle = e.target.parentNode.children[1].outerText;
  for (let i = 0; i < allProjects[0].myArray.length; i += 1) {
    if (targetTitle === allProjects[0].myArray[i].title) {
      let targetTask = allProjects[0].myArray[i];
      let { title } = targetTask;
      let project = allProjects[0].title;
      // Convoluted conditionals and loop to reset value of project if the task
      // belongs to another project apart from home
      for (let j = 0; j < allProjects.length; j += 1) {
        for (let k = 0; k < allProjects[j].myArray.length; k += 1) {
          if (allProjects[j].title !== 'Home' && allProjects[j].myArray[k].title === targetTitle) {
            project = allProjects[j].title;
          }
        }
      }
      let { priority, dueDate } = targetTask;
      let details = targetTask.description;
      // eslint-disable-next-line no-use-before-define
      renderDetailsPopUp(title, project, priority, dueDate, details);
    }
  }
}
container.addEventListener('click', getTaskDetails);

function renderDetailsPopUp(title, project, priority, dueDate, details) {
  let body = document.querySelector('body');
  // Create div for modal bg and modal content
  let bgModal = document.createElement('div');
  bgModal.classList.add('bg-modal');
  bgModal.style.display = 'flex';
  let modalContents = document.createElement('div');
  modalContents.classList.add('details-pop-up');
  // Start Creating the details within the task object
  // Close
  let close = document.createElement('div');
  close.textContent = '+';
  close.classList.add('close');
  close.addEventListener('click', () => {
    bgModal.style.display = 'none';
  });
  // Title
  let titleDiv = document.createElement('div');
  let titleP = document.createElement('p');
  titleP.textContent = title;
  titleDiv.append(titleP);
  // Project
  let projectDiv = document.createElement('div');
  let projectT = document.createElement('span');
  projectT.textContent = 'Project:';
  let projectC = document.createElement('span');
  projectC.textContent = project;
  projectDiv.append(projectT, projectC);
  // Priority
  let priorityDiv = document.createElement('div');
  let priorityT = document.createElement('span');
  priorityT.textContent = 'Priority:';
  let priorityC = document.createElement('span');
  priorityC.textContent = priority;
  priorityDiv.append(priorityT, priorityC);
  // Due Date
  let dueDateDiv = document.createElement('div');
  let dueDateT = document.createElement('span');
  dueDateT.textContent = 'Due Date:';
  let dueDateC = document.createElement('span');
  dueDateC.textContent = dueDate;
  dueDateDiv.append(dueDateT, dueDateC);
  // Details
  let detailsDiv = document.createElement('div');
  let detailsT = document.createElement('span');
  detailsT.textContent = 'Details:';
  let detailsC = document.createElement('span');
  detailsC.textContent = details;
  detailsDiv.append(detailsT, detailsC);
  // Append all to modalContents
  modalContents.append(close, titleDiv, projectDiv, priorityDiv, dueDateDiv, detailsDiv);
  bgModal.append(modalContents);
  body.append(bgModal);
}
// Event Listener for editBtn
let edittedTaskIndex;
function editTask(e) {
  if (e.target.id !== 'editBtn') return;
  let targetTitle = e.target.parentNode.children[1].outerText;
  for (let i = 0; i < allProjects[0].myArray.length; i += 1) {
    if (targetTitle === allProjects[0].myArray[i].title) {
      edittedTaskIndex = i; // saved value of current iterated attribute for editing later
      let targetTask = allProjects[0].myArray[i];
      let { title, priority, dueDate } = targetTask;
      let details = targetTask.description;
      // eslint-disable-next-line no-use-before-define
      renderEditForm(title, priority, dueDate, details);
    }
  }
}
container.addEventListener('click', editTask);

// Render Edit Form Function
function renderEditForm(title, priority, dueDate, details) {
  let body = document.querySelector('body');
  // Remove the DOM created edit form
  if (document.contains(document.querySelector('.edit-bg-modal'))) {
    document.querySelector('.edit-bg-modal').remove();
  }
  // Create div for modal bg and modal content
  let bgModal = document.createElement('div');
  bgModal.classList.add('bg-modal');
  bgModal.style.display = 'flex';
  bgModal.classList.add('edit-bg-modal');
  let modalContents = document.createElement('div');
  modalContents.classList.add('modal-contents');
  modalContents.classList.add('edit-form-pop-up');
  // Start Creating the details within the Edit container
  // Close
  let close = document.createElement('div');
  close.textContent = '+';
  close.classList.add('close');
  close.addEventListener('click', () => {
    bgModal.style.display = 'none';
  });
  // Form
  let form = document.createElement('form');
  form.action = '#';
  form.classList.add('edit-task-form');
  // Title
  let titleInput = document.createElement('input');
  titleInput.type = 'text';
  titleInput.name = 'title';
  titleInput.classList.add('edit-task-title');
  titleInput.value = title;
  titleInput.required = true;
  // Details
  let detailsInput = document.createElement('input');
  detailsInput.type = 'text';
  detailsInput.name = 'details';
  detailsInput.classList.add('edit-task-details');
  detailsInput.value = details;
  detailsInput.required = true;
  // Labels for Due Date
  let dueDateLabel = document.createElement('label');
  dueDateLabel.for = 'due-date';
  // DueDate
  let dueDateInput = document.createElement('input');
  dueDateInput.type = 'date';
  dueDateInput.name = 'due-date';
  dueDateInput.classList.add('edit-task-due-date');
  dueDateInput.value = dueDate;
  dueDateInput.required = true;
  // Labels for Priority
  let priorityLabel = document.createElement('label');
  priorityLabel.for = 'priority';
  // Radio for Priority Low
  let lowPriorityRadio = document.createElement('input');
  lowPriorityRadio.type = 'radio';
  lowPriorityRadio.name = 'edit-priority';
  lowPriorityRadio.classList.add('edit-task-low');
  lowPriorityRadio.value = 'low';
  // Radio for Priority Medium
  let mediumPriorityRadio = document.createElement('input');
  mediumPriorityRadio.type = 'radio';
  mediumPriorityRadio.name = 'edit-priority';
  mediumPriorityRadio.classList.add('edit-task-medium');
  mediumPriorityRadio.value = 'medium';
  // Radio for Priority High
  let highPriorityRadio = document.createElement('input');
  highPriorityRadio.type = 'radio';
  highPriorityRadio.name = 'edit-priority';
  highPriorityRadio.classList.add('edit-task-high');
  highPriorityRadio.value = 'high';
  // Logic to specify which radio is checked
  switch (priority) {
    case lowPriorityRadio.value:
      lowPriorityRadio.checked = true;
      break;
    case mediumPriorityRadio.value:
      mediumPriorityRadio.checked = true;
      break;
    case highPriorityRadio.value:
      highPriorityRadio.checked = true;
  }
  // Confirm Edit Button
  let confirmEditBtn = document.createElement('input');
  confirmEditBtn.type = 'submit';
  confirmEditBtn.value = 'CONFIRM EDIT';
  confirmEditBtn.classList.add('confirmEditBtn');
  // Append all to form
  form.append(
    titleInput,
    detailsInput,
    dueDateLabel,
    dueDateInput,
    priorityLabel,
    lowPriorityRadio,
    mediumPriorityRadio,
    highPriorityRadio,
    confirmEditBtn,
  );
  // Append close and form to modal content
  modalContents.append(close, form);
  bgModal.append(modalContents);
  body.append(bgModal);
  // Add Event Listener to confirmEditBtn
  // eslint-disable-next-line no-use-before-define
  confirmEditBtn.addEventListener('click', confirmEdit);
}
// Function to set the new details into the target object
function setEdittedTask(edittedTask, newTitle, newDescription, newDueDate, newPriority) {
  edittedTask.title = newTitle;
  edittedTask.description = newDescription;
  edittedTask.dueDate = newDueDate;
  edittedTask.priority = newPriority;
}
// Event Listener for Confirm Edit Btn
function confirmEdit(e) {
  e.preventDefault();
  let newTitle = document.querySelector('.edit-task-title').value;
  let newDescription = document.querySelector('.edit-task-details').value;
  let newDueDate = document.querySelector('.edit-task-due-date').value;
  let newPriority = document.querySelector('input[name="edit-priority"]:checked').value;
  let edittedTask = allProjects[0].myArray[edittedTaskIndex];
  // Call a method that set the right details using the above as parameters/ argumets
  setEdittedTask(edittedTask, newTitle, newDescription, newDueDate, newPriority);
  saveLocalProjects();
  // The next line of code was added because the contents of the homeArray kept
  // duplicating during rendering. A temporary fix, find permanent fix later
  document.querySelector('#container').innerHTML = '';
  allProjects[0].myArray.map(render);
  document.querySelector('.edit-bg-modal').style.display = 'none';
  document.querySelector('.edit-task-form').reset();
}

// Event Listener for Today's task
const todayTaskBtn = document.querySelector('#today');
function renderTodaysTasks() {
  let todaysTasks = [];
  for (let i = 0; i < allProjects[0].myArray.length; i += 1) {
    let parsedDueDate = parseISO(allProjects[0].myArray[i].dueDate);
    if (isPast(parsedDueDate) || isToday(parsedDueDate)) {
      todaysTasks.push(allProjects[0].myArray[i]);
    }
  }
  document.querySelector('#container').innerHTML = '';
  todaysTasks.map(render);
}
todayTaskBtn.addEventListener('click', renderTodaysTasks);

// Event Listener for This Week's Tasks
const thisWeekTaskBtn = document.querySelector('#this-week');
function renderThisWeeksTasks() {
  let thisWeekTasks = [];
  for (let i = 0; i < allProjects[0].myArray.length; i += 1) {
    let parsedDueDate = parseISO(allProjects[0].myArray[i].dueDate);
    if (isThisWeek(parsedDueDate)) {
      thisWeekTasks.push(allProjects[0].myArray[i]);
    }
  }
  document.querySelector('#container').innerHTML = '';
  thisWeekTasks.map(render);
}
thisWeekTaskBtn.addEventListener('click', renderThisWeeksTasks);

export default render;
