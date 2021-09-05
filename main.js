/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-class.js */ "./src/project-class.js");

const container = document.querySelector("#container");
function render(obj) {
  // Create the Div and its contents
  let newTask = document.createElement("div");
  newTask.classList.add("task");
  if (obj.checklist === "done") newTask.classList.add("done");
  let checkbox = document.createElement("input");
  if (obj.checklist === "done") checkbox.checked = true;
  checkbox.type = "checkbox";
  checkbox.name = "done";
  checkbox.id = "toggleDoneBox";
  let title;
  if (obj.checklist === "done") {
    title = document.createElement("del");
    title.textContent = obj.title;
  } else {
    title = document.createElement("p");
    title.textContent = obj.title;
  }
  let detailsBtn = document.createElement("button");
  detailsBtn.textContent = "DETAILS";
  detailsBtn.classList.add("task-btns");
  detailsBtn.id = "detailsBtn";
  let dueDate = document.createElement("p");
  dueDate.textContent = obj.dueDate;
  let editBtn = document.createElement("button");
  editBtn.textContent = "EDIT";
  editBtn.classList.add("task-btns");
  editBtn.id = "editBtn";
  let delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.classList.add("task-btns");
  delBtn.id = "deleteBtn";
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
function renderProjects(obj) {
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
  _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray.map(render);
});
// Event Listener to render the array in each project.
// Method of class Project was giving me problem so I moved it here.
const projectList = document.querySelector("#project-list");
projectList.addEventListener("click", addEventToProject);
function addEventToProject(e) {
  // Next line is to fix bug of empty spaces calling the function
  if (e.target.nodeName !== "SPAN") return;
  document.querySelector("#container").innerHTML = "";
  let theProject = e.target.outerText.toLowerCase();
  for (let project of _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects) {
    if (project.title.toLowerCase() === theProject) {
      project.myArray.map(render);
    }
  }
}
// Event Listener to delete a Task
container.addEventListener("click", deleteTask);
function deleteTask(e) {
  if (e.target.id !== "deleteBtn") return;
  let targetTitle = e.target.parentNode.children[1].outerText;
  // Delete from the Home array and Project if task is also in a project
  for (let i = 0; i < _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.length; i++) {
    for (let j = 0; j < _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].myArray.length; j++) {
      // Conditional statement to delete the target task
      if (targetTitle === _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].myArray[j].title) {
        _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].myArray.splice(j, 1);
        (0,_project_class_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalProjects)();
        container.innerHTML = "";
        if (_project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].myArray.length !== 0) {
          _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].myArray.map(render);
        } else {
          _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray.map(render);
        }
      }
      // Conditional statement to delete the project if it is not home
      // and that is the last task to be deleted
      if (
        _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].title !== "Home" &&
        _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].myArray.length === 0
      ) {
        _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.splice(i, 1);
      }
      (0,_project_class_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalProjects)();
      document.querySelector("#project-list").innerHTML = "";
      _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.map(renderProjects);
    }
  }
}
// Event Listener for the checkBox for marking done
container.addEventListener("click", toggleDone);
function toggleDone(e) {
  if (e.target.id !== "toggleDoneBox") return;
  let targetTitle = e.target.parentNode.children[1].outerText;
  // Loop through all Home array and Project if task is also in a project
  for (let i = 0; i < _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray.length; i++) {
    if (targetTitle === _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray[i].title) {
      if (_project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray[i].checklist === "done") {
        _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray[i].checklist = undefined;
      } else {
        _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray[i].checklist = "done";
      }
      (0,_project_class_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalProjects)();
      container.innerHTML = "";
      _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray.map(render);
    }
  }
}
// Event Listener for detailsBtn
container.addEventListener("click", getTaskDetails);
function getTaskDetails(e) {
  if (e.target.id !== "detailsBtn") return;
  let targetTitle = e.target.parentNode.children[1].outerText;
  for (let i = 0; i < _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray.length; i++) {
    if (targetTitle === _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray[i].title) {
      let targetTask = _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray[i];
      let title = targetTask.title;
      let project = _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].title;
      // Convoluted conditionals and loop to reset value of project if the task
      // belongs to another project apart from home
      for (let j = 0; j < _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.length; j++) {
        for (let k = 0; k < _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[j].myArray.length; k++) {
          if (
            _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[j].title !== "Home" &&
            _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[j].myArray[k].title === targetTitle
          ) {
            project = _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[j].title;
          }
        }
      }
      let priority = targetTask.priority;
      let dueDate = targetTask.dueDate;
      let details = targetTask.description;
      renderDetailsPopUp(title, project, priority, dueDate, details);
    }
  }
}
function renderDetailsPopUp(title, project, priority, dueDate, details) {
  let body = document.querySelector("body");
  // Create div for modal bg and modal content
  let bgModal = document.createElement("div");
  bgModal.classList.add("bg-modal");
  bgModal.style.display = "flex";
  let modalContents = document.createElement("div");
  modalContents.classList.add("details-pop-up");
  // Start Creating the details within the task object
  // Close
  let close = document.createElement("div");
  close.textContent = "+";
  close.classList.add("close");
  close.addEventListener("click", function () {
    bgModal.style.display = "none";
  });
  // Title
  let titleDiv = document.createElement("div");
  let titleP = document.createElement("p");
  titleP.textContent = title;
  titleDiv.append(titleP);
  // Project
  let projectDiv = document.createElement("div");
  let projectT = document.createElement("span");
  projectT.textContent = "Project:";
  let projectC = document.createElement("span");
  projectC.textContent = project;
  projectDiv.append(projectT, projectC);
  // Priority
  let priorityDiv = document.createElement("div");
  let priorityT = document.createElement("span");
  priorityT.textContent = "Priority:";
  let priorityC = document.createElement("span");
  priorityC.textContent = priority;
  priorityDiv.append(priorityT, priorityC);
  // Due Date
  let dueDateDiv = document.createElement("div");
  let dueDateT = document.createElement("span");
  dueDateT.textContent = "Due Date:";
  let dueDateC = document.createElement("span");
  dueDateC.textContent = dueDate;
  dueDateDiv.append(dueDateT, dueDateC);
  // Details
  let detailsDiv = document.createElement("div");
  let detailsT = document.createElement("span");
  detailsT.textContent = "Details:";
  let detailsC = document.createElement("span");
  detailsC.textContent = details;
  detailsDiv.append(detailsT, detailsC);
  // Append all to modalContents
  modalContents.append(
    close,
    titleDiv,
    projectDiv,
    priorityDiv,
    dueDateDiv,
    detailsDiv
  );
  bgModal.append(modalContents);
  body.append(bgModal);
}
// Event Listener for editBtn
let edittedTaskIndex;
container.addEventListener("click", editTask);
function editTask(e) {
  if (e.target.id !== "editBtn") return;
  let targetTitle = e.target.parentNode.children[1].outerText;
  for (let i = 0; i < _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray.length; i++) {
    if (targetTitle === _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray[i].title) {
      edittedTaskIndex = i; // saved value of current iterated attribute for editing later
      let targetTask = _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray[i];
      let title = targetTask.title;
      let priority = targetTask.priority;
      let dueDate = targetTask.dueDate;
      let details = targetTask.description;
      renderEditForm(title, priority, dueDate, details);
    }
  }
}
// Render Edit Form Function
function renderEditForm(title, priority, dueDate, details) {
  let body = document.querySelector("body");
  //Remove the DOM created edit form
  if (document.contains(document.querySelector(".edit-bg-modal"))) {
    document.querySelector(".edit-bg-modal").remove();
  }
  // Create div for modal bg and modal content
  let bgModal = document.createElement("div");
  bgModal.classList.add("bg-modal");
  bgModal.style.display = "flex";
  bgModal.classList.add("edit-bg-modal");
  let modalContents = document.createElement("div");
  modalContents.classList.add("modal-contents");
  modalContents.classList.add("edit-form-pop-up");
  // Start Creating the details within the Edit container
  // Close
  let close = document.createElement("div");
  close.textContent = "+";
  close.classList.add("close");
  close.addEventListener("click", function () {
    bgModal.style.display = "none";
  });
  // Form
  let form = document.createElement("form");
  form.action = "#";
  form.classList.add("edit-task-form");
  // Title
  let titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "title";
  titleInput.classList.add("edit-task-title");
  titleInput.value = title;
  titleInput.required = true;
  // Details
  let detailsInput = document.createElement("input");
  detailsInput.type = "text";
  detailsInput.name = "details";
  detailsInput.classList.add("edit-task-details");
  detailsInput.value = details;
  detailsInput.required = true;
  // Labels for Due Date
  let dueDateLabel = document.createElement("label");
  dueDateLabel.for = "due-date";
  // DueDate
  let dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "due-date";
  dueDateInput.classList.add("edit-task-due-date");
  dueDateInput.value = dueDate;
  dueDateInput.required = true;
  // Labels for Priority
  let priorityLabel = document.createElement("label");
  priorityLabel.for = "priority";
  // Radio for Priority Low
  let lowPriorityRadio = document.createElement("input");
  lowPriorityRadio.type = "radio";
  lowPriorityRadio.name = "edit-priority";
  lowPriorityRadio.classList.add("edit-task-low");
  lowPriorityRadio.value = "low";
  // Radio for Priority Medium
  let mediumPriorityRadio = document.createElement("input");
  mediumPriorityRadio.type = "radio";
  mediumPriorityRadio.name = "edit-priority";
  mediumPriorityRadio.classList.add("edit-task-medium");
  mediumPriorityRadio.value = "medium";
  // Radio for Priority High
  let highPriorityRadio = document.createElement("input");
  highPriorityRadio.type = "radio";
  highPriorityRadio.name = "edit-priority";
  highPriorityRadio.classList.add("edit-task-high");
  highPriorityRadio.value = "high";
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
  let confirmEditBtn = document.createElement("input");
  confirmEditBtn.type = "submit";
  confirmEditBtn.value = "CONFIRM EDIT";
  confirmEditBtn.classList.add("confirmEditBtn");
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
    confirmEditBtn
  );
  // Append close and form to modal content
  modalContents.append(close, form);
  bgModal.append(modalContents);
  body.append(bgModal);
  // Add Event Listener to confirmEditBtn
  confirmEditBtn.addEventListener("click", confirmEdit);
}
// Event Listener for Confirm Edit Btn
function confirmEdit(e) {
  e.preventDefault();
  let newTitle = document.querySelector(".edit-task-title").value;
  let newDescription = document.querySelector(".edit-task-details").value;
  let newDueDate = document.querySelector(".edit-task-due-date").value;
  let newPriority = document.querySelector(
    'input[name="edit-priority"]:checked'
  ).value;
  let edittedTask = _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray[edittedTaskIndex];
  // Call a method that set the right details using the above as parameters/ argumets
  setEdittedTask(
    edittedTask,
    newTitle,
    newDescription,
    newDueDate,
    newPriority
  );
  (0,_project_class_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalProjects)();
  // The next line of code was added because the contents of the homeArray kept duplicating during rendering. A temporary fix, find permanent fix later
  document.querySelector("#container").innerHTML = "";
  _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray.map(render);
  document.querySelector(".edit-bg-modal").style.display = "none";
  document.querySelector(".edit-task-form").reset();
}
// Function to set the new details into the target object
function setEdittedTask(
  edittedTask,
  newTitle,
  newDescription,
  newDueDate,
  newPriority
) {
  edittedTask.title = newTitle;
  edittedTask.description = newDescription;
  edittedTask.dueDate = newDueDate;
  edittedTask.priority = newPriority;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);


/***/ }),

/***/ "./src/project-class.js":
/*!******************************!*\
  !*** ./src/project-class.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allProjects": () => (/* binding */ allProjects),
/* harmony export */   "sortProject": () => (/* binding */ sortProject),
/* harmony export */   "saveLocalProjects": () => (/* binding */ saveLocalProjects),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");


class Projects {
  constructor(title) {
    this.title = title;
    this.myArray = [];
  }
  // Add logic to remove the projects once all the tasks added are deleted
}
const home = new Projects("Home");
const chores = new Projects("Chores");
let allProjects = [home, chores];

// Use event listener to call projects class to create new array
const addProjectBtn = document.querySelector("#addProject");
addProjectBtn.addEventListener("click", addNewProject);
function addNewProject() {
  createProject();
  // display projects and hide modals
  document.querySelector("#project-list").innerHTML = "";
  allProjects.map(_dom__WEBPACK_IMPORTED_MODULE_0__.renderProjects);
  document.querySelector(".bg-modal").style.display = "none";
  document.querySelector("#new-project-form").reset();
  saveLocalProjects();
}
function createProject() {
  // Used this to get value of title either I am creating a new project from
  // project form or from task form.
  let title = document.querySelector("#new-project-title").value;
  let newProject = new Projects(title);
  allProjects.push(newProject);
}
function sortProject(newTask) {
  const projectName = document.querySelector("#project-name").value;
  if (projectName === "") return;
  for (let i = 0; i < allProjects.length; i++) {
    if (allProjects[i].title === projectName) {
      // Push the same object, so that by reference, any change to one is a change to all
      for (let j = 0; j < allProjects[0].myArray.length; j++) {
        if (newTask.title === allProjects[0].myArray[j].title)
          allProjects[i].myArray.push(allProjects[0].myArray[j]);
      }
    }
  }
}
// Local Storage
function saveLocalProjects() {
  localStorage.setItem("allProjects", JSON.stringify(allProjects));
}
function restoreLocalProjects() {
  allProjects = JSON.parse(localStorage.getItem("allProjects"));
  if (allProjects === null) allProjects = [home, chores];
  allProjects.map(_dom__WEBPACK_IMPORTED_MODULE_0__.renderProjects);
}
// Call this function everytime my app is revisited or reloaded
restoreLocalProjects();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-class.js */ "./src/project-class.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");




class Task {
  constructor(title, description, dueDate, priority, checklist) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = checklist;
  }
  getDetails() {
    // Call the DOM Manipulation that will get details here
  }
  setDetails() {
    // Call the DOM Manipulation that will show form and allow entries to be entered
  }
  deleteTask() {
    // Remove the Object from the Arrays it is located
  }
  addToHomeArray() {
    _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray.push(this);
    // If belongs to a project, push to project array too
  }
  toggleCheck() {
    // Check on or off to show completion of task
  }
}

// TODO: Move this away from here once you find a solution to webpack messing with imported classes
// Form Submit Button
const addTaskBtn = document.querySelector("#addTodo");
addTaskBtn.addEventListener("click", addNewTask);
function addNewTask(e) {
  e.preventDefault();
  let title = document.querySelector("#new-task-title").value;
  let description = document.querySelector("#new-task-details").value;
  let dueDate = document.querySelector("#new-task-due-date").value;
  let priority = document.querySelector('input[name="priority"]:checked').value;
  let checklist = undefined;
  let newTask = new Task(title, description, dueDate, priority, checklist);
  newTask.addToHomeArray();
  (0,_project_class_js__WEBPACK_IMPORTED_MODULE_0__.sortProject)(newTask);
  (0,_project_class_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalProjects)();
  // The next line of code was added because the contents of the homeArray kept duplicating during rendering. A temporary fix, find permanent fix later
  document.querySelector("#container").innerHTML = "";
  _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[0].myArray.map(_dom_js__WEBPACK_IMPORTED_MODULE_1__.default);
  document.querySelector(".bg-modal").style.display = "none";
  document.querySelector("#new-task-form").reset();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _project_class_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-class.js */ "./src/project-class.js");




// Call this function everytime my app is revisited or reloaded
_project_class_js__WEBPACK_IMPORTED_MODULE_2__.allProjects[0].myArray.map(_dom_js__WEBPACK_IMPORTED_MODULE_1__.default);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONkI7QUFDQztBQUNtQjs7QUFFakQ7QUFDQSx5RUFBMEIsQ0FBQyw0Q0FBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdC1jbGFzcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsUHJvamVjdHMsIHNhdmVMb2NhbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdC1jbGFzcy5qc1wiO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XG5mdW5jdGlvbiByZW5kZXIob2JqKSB7XG4gIC8vIENyZWF0ZSB0aGUgRGl2IGFuZCBpdHMgY29udGVudHNcbiAgbGV0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICBpZiAob2JqLmNoZWNrbGlzdCA9PT0gXCJkb25lXCIpIG5ld1Rhc2suY2xhc3NMaXN0LmFkZChcImRvbmVcIik7XG4gIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaWYgKG9iai5jaGVja2xpc3QgPT09IFwiZG9uZVwiKSBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgY2hlY2tib3gubmFtZSA9IFwiZG9uZVwiO1xuICBjaGVja2JveC5pZCA9IFwidG9nZ2xlRG9uZUJveFwiO1xuICBsZXQgdGl0bGU7XG4gIGlmIChvYmouY2hlY2tsaXN0ID09PSBcImRvbmVcIikge1xuICAgIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRlbFwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgfSBlbHNlIHtcbiAgICB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICB9XG4gIGxldCBkZXRhaWxzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGV0YWlsc0J0bi50ZXh0Q29udGVudCA9IFwiREVUQUlMU1wiO1xuICBkZXRhaWxzQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJ0bnNcIik7XG4gIGRldGFpbHNCdG4uaWQgPSBcImRldGFpbHNCdG5cIjtcbiAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IG9iai5kdWVEYXRlO1xuICBsZXQgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVESVRcIjtcbiAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1idG5zXCIpO1xuICBlZGl0QnRuLmlkID0gXCJlZGl0QnRuXCI7XG4gIGxldCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZWxCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJ0bnNcIik7XG4gIGRlbEJ0bi5pZCA9IFwiZGVsZXRlQnRuXCI7XG4gIC8vIEFwcGVuZCBhbGwgY29udGVudHMgdG8gdGhlIGRpdiBhbmQgZGl2IHRvIHRoZSBjb250YWluZXJcbiAgbmV3VGFzay5hcHBlbmQoY2hlY2tib3gsIHRpdGxlLCBkZXRhaWxzQnRuLCBkdWVEYXRlLCBlZGl0QnRuLCBkZWxCdG4pO1xuICBjb250YWluZXIuYXBwZW5kKG5ld1Rhc2spO1xufVxuXG4vLyBDb250cm9sIE1vZGFsXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZE5ld1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJnLW1vZGFsXCIpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmctbW9kYWxcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSk7XG4vLyBUb2dnbGUgYmV0d2VlbiBhZGQgdGFzayBhbmQgYWRkIHByb2plY3QgZm9ybXNcbmRvY3VtZW50XG4gIC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZm9ybS1idG5cIilcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdGFzay1mb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1wcm9qZWN0LWZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZm9ybS1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC1mb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdGFzay1mb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59KTtcbi8vIEFkZCB0aGUgcHJvamVjdHMgdG8gbmF2XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMob2JqKSB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIik7XG4gIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaWYgKG9iai50aXRsZSA9PT0gXCJIb21lXCIpIHJldHVybjtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgbGkuYXBwZW5kKHNwYW4pO1xuICB1bC5hcHBlbmQobGkpO1xufVxuLy8gRXZlbnQgbGlzdGVuZXIgZm9yIGhvbWUgYnV0dG9uXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lXCIpO1xuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICBhbGxQcm9qZWN0c1swXS5teUFycmF5Lm1hcChyZW5kZXIpO1xufSk7XG4vLyBFdmVudCBMaXN0ZW5lciB0byByZW5kZXIgdGhlIGFycmF5IGluIGVhY2ggcHJvamVjdC5cbi8vIE1ldGhvZCBvZiBjbGFzcyBQcm9qZWN0IHdhcyBnaXZpbmcgbWUgcHJvYmxlbSBzbyBJIG1vdmVkIGl0IGhlcmUuXG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1saXN0XCIpO1xucHJvamVjdExpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZEV2ZW50VG9Qcm9qZWN0KTtcbmZ1bmN0aW9uIGFkZEV2ZW50VG9Qcm9qZWN0KGUpIHtcbiAgLy8gTmV4dCBsaW5lIGlzIHRvIGZpeCBidWcgb2YgZW1wdHkgc3BhY2VzIGNhbGxpbmcgdGhlIGZ1bmN0aW9uXG4gIGlmIChlLnRhcmdldC5ub2RlTmFtZSAhPT0gXCJTUEFOXCIpIHJldHVybjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgbGV0IHRoZVByb2plY3QgPSBlLnRhcmdldC5vdXRlclRleHQudG9Mb3dlckNhc2UoKTtcbiAgZm9yIChsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0cykge1xuICAgIGlmIChwcm9qZWN0LnRpdGxlLnRvTG93ZXJDYXNlKCkgPT09IHRoZVByb2plY3QpIHtcbiAgICAgIHByb2plY3QubXlBcnJheS5tYXAocmVuZGVyKTtcbiAgICB9XG4gIH1cbn1cbi8vIEV2ZW50IExpc3RlbmVyIHRvIGRlbGV0ZSBhIFRhc2tcbmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlVGFzayk7XG5mdW5jdGlvbiBkZWxldGVUYXNrKGUpIHtcbiAgaWYgKGUudGFyZ2V0LmlkICE9PSBcImRlbGV0ZUJ0blwiKSByZXR1cm47XG4gIGxldCB0YXJnZXRUaXRsZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5bMV0ub3V0ZXJUZXh0O1xuICAvLyBEZWxldGUgZnJvbSB0aGUgSG9tZSBhcnJheSBhbmQgUHJvamVjdCBpZiB0YXNrIGlzIGFsc28gaW4gYSBwcm9qZWN0XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFsbFByb2plY3RzW2ldLm15QXJyYXkubGVuZ3RoOyBqKyspIHtcbiAgICAgIC8vIENvbmRpdGlvbmFsIHN0YXRlbWVudCB0byBkZWxldGUgdGhlIHRhcmdldCB0YXNrXG4gICAgICBpZiAodGFyZ2V0VGl0bGUgPT09IGFsbFByb2plY3RzW2ldLm15QXJyYXlbal0udGl0bGUpIHtcbiAgICAgICAgYWxsUHJvamVjdHNbaV0ubXlBcnJheS5zcGxpY2UoaiwgMSk7XG4gICAgICAgIHNhdmVMb2NhbFByb2plY3RzKCk7XG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBpZiAoYWxsUHJvamVjdHNbaV0ubXlBcnJheS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICBhbGxQcm9qZWN0c1tpXS5teUFycmF5Lm1hcChyZW5kZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsbFByb2plY3RzWzBdLm15QXJyYXkubWFwKHJlbmRlcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIENvbmRpdGlvbmFsIHN0YXRlbWVudCB0byBkZWxldGUgdGhlIHByb2plY3QgaWYgaXQgaXMgbm90IGhvbWVcbiAgICAgIC8vIGFuZCB0aGF0IGlzIHRoZSBsYXN0IHRhc2sgdG8gYmUgZGVsZXRlZFxuICAgICAgaWYgKFxuICAgICAgICBhbGxQcm9qZWN0c1tpXS50aXRsZSAhPT0gXCJIb21lXCIgJiZcbiAgICAgICAgYWxsUHJvamVjdHNbaV0ubXlBcnJheS5sZW5ndGggPT09IDBcbiAgICAgICkge1xuICAgICAgICBhbGxQcm9qZWN0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgICBzYXZlTG9jYWxQcm9qZWN0cygpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGFsbFByb2plY3RzLm1hcChyZW5kZXJQcm9qZWN0cyk7XG4gICAgfVxuICB9XG59XG4vLyBFdmVudCBMaXN0ZW5lciBmb3IgdGhlIGNoZWNrQm94IGZvciBtYXJraW5nIGRvbmVcbmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlRG9uZSk7XG5mdW5jdGlvbiB0b2dnbGVEb25lKGUpIHtcbiAgaWYgKGUudGFyZ2V0LmlkICE9PSBcInRvZ2dsZURvbmVCb3hcIikgcmV0dXJuO1xuICBsZXQgdGFyZ2V0VGl0bGUgPSBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuWzFdLm91dGVyVGV4dDtcbiAgLy8gTG9vcCB0aHJvdWdoIGFsbCBIb21lIGFycmF5IGFuZCBQcm9qZWN0IGlmIHRhc2sgaXMgYWxzbyBpbiBhIHByb2plY3RcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0c1swXS5teUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRhcmdldFRpdGxlID09PSBhbGxQcm9qZWN0c1swXS5teUFycmF5W2ldLnRpdGxlKSB7XG4gICAgICBpZiAoYWxsUHJvamVjdHNbMF0ubXlBcnJheVtpXS5jaGVja2xpc3QgPT09IFwiZG9uZVwiKSB7XG4gICAgICAgIGFsbFByb2plY3RzWzBdLm15QXJyYXlbaV0uY2hlY2tsaXN0ID0gdW5kZWZpbmVkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxsUHJvamVjdHNbMF0ubXlBcnJheVtpXS5jaGVja2xpc3QgPSBcImRvbmVcIjtcbiAgICAgIH1cbiAgICAgIHNhdmVMb2NhbFByb2plY3RzKCk7XG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGFsbFByb2plY3RzWzBdLm15QXJyYXkubWFwKHJlbmRlcik7XG4gICAgfVxuICB9XG59XG4vLyBFdmVudCBMaXN0ZW5lciBmb3IgZGV0YWlsc0J0blxuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnZXRUYXNrRGV0YWlscyk7XG5mdW5jdGlvbiBnZXRUYXNrRGV0YWlscyhlKSB7XG4gIGlmIChlLnRhcmdldC5pZCAhPT0gXCJkZXRhaWxzQnRuXCIpIHJldHVybjtcbiAgbGV0IHRhcmdldFRpdGxlID0gZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlblsxXS5vdXRlclRleHQ7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHNbMF0ubXlBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0YXJnZXRUaXRsZSA9PT0gYWxsUHJvamVjdHNbMF0ubXlBcnJheVtpXS50aXRsZSkge1xuICAgICAgbGV0IHRhcmdldFRhc2sgPSBhbGxQcm9qZWN0c1swXS5teUFycmF5W2ldO1xuICAgICAgbGV0IHRpdGxlID0gdGFyZ2V0VGFzay50aXRsZTtcbiAgICAgIGxldCBwcm9qZWN0ID0gYWxsUHJvamVjdHNbMF0udGl0bGU7XG4gICAgICAvLyBDb252b2x1dGVkIGNvbmRpdGlvbmFscyBhbmQgbG9vcCB0byByZXNldCB2YWx1ZSBvZiBwcm9qZWN0IGlmIHRoZSB0YXNrXG4gICAgICAvLyBiZWxvbmdzIHRvIGFub3RoZXIgcHJvamVjdCBhcGFydCBmcm9tIGhvbWVcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBhbGxQcm9qZWN0c1tqXS5teUFycmF5Lmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgYWxsUHJvamVjdHNbal0udGl0bGUgIT09IFwiSG9tZVwiICYmXG4gICAgICAgICAgICBhbGxQcm9qZWN0c1tqXS5teUFycmF5W2tdLnRpdGxlID09PSB0YXJnZXRUaXRsZVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJvamVjdCA9IGFsbFByb2plY3RzW2pdLnRpdGxlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IHByaW9yaXR5ID0gdGFyZ2V0VGFzay5wcmlvcml0eTtcbiAgICAgIGxldCBkdWVEYXRlID0gdGFyZ2V0VGFzay5kdWVEYXRlO1xuICAgICAgbGV0IGRldGFpbHMgPSB0YXJnZXRUYXNrLmRlc2NyaXB0aW9uO1xuICAgICAgcmVuZGVyRGV0YWlsc1BvcFVwKHRpdGxlLCBwcm9qZWN0LCBwcmlvcml0eSwgZHVlRGF0ZSwgZGV0YWlscyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiByZW5kZXJEZXRhaWxzUG9wVXAodGl0bGUsIHByb2plY3QsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXRhaWxzKSB7XG4gIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIC8vIENyZWF0ZSBkaXYgZm9yIG1vZGFsIGJnIGFuZCBtb2RhbCBjb250ZW50XG4gIGxldCBiZ01vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmdNb2RhbC5jbGFzc0xpc3QuYWRkKFwiYmctbW9kYWxcIik7XG4gIGJnTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICBsZXQgbW9kYWxDb250ZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsQ29udGVudHMuY2xhc3NMaXN0LmFkZChcImRldGFpbHMtcG9wLXVwXCIpO1xuICAvLyBTdGFydCBDcmVhdGluZyB0aGUgZGV0YWlscyB3aXRoaW4gdGhlIHRhc2sgb2JqZWN0XG4gIC8vIENsb3NlXG4gIGxldCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNsb3NlLnRleHRDb250ZW50ID0gXCIrXCI7XG4gIGNsb3NlLmNsYXNzTGlzdC5hZGQoXCJjbG9zZVwiKTtcbiAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBiZ01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG4gIC8vIFRpdGxlXG4gIGxldCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0aXRsZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGl0bGVQLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIHRpdGxlRGl2LmFwcGVuZCh0aXRsZVApO1xuICAvLyBQcm9qZWN0XG4gIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHByb2plY3RUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHByb2plY3RULnRleHRDb250ZW50ID0gXCJQcm9qZWN0OlwiO1xuICBsZXQgcHJvamVjdEMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcHJvamVjdEMudGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICBwcm9qZWN0RGl2LmFwcGVuZChwcm9qZWN0VCwgcHJvamVjdEMpO1xuICAvLyBQcmlvcml0eVxuICBsZXQgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgcHJpb3JpdHlUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHByaW9yaXR5VC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCI7XG4gIGxldCBwcmlvcml0eUMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcHJpb3JpdHlDLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XG4gIHByaW9yaXR5RGl2LmFwcGVuZChwcmlvcml0eVQsIHByaW9yaXR5Qyk7XG4gIC8vIER1ZSBEYXRlXG4gIGxldCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGR1ZURhdGVUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGR1ZURhdGVULnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcbiAgbGV0IGR1ZURhdGVDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGR1ZURhdGVDLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcbiAgZHVlRGF0ZURpdi5hcHBlbmQoZHVlRGF0ZVQsIGR1ZURhdGVDKTtcbiAgLy8gRGV0YWlsc1xuICBsZXQgZGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBkZXRhaWxzVCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBkZXRhaWxzVC50ZXh0Q29udGVudCA9IFwiRGV0YWlsczpcIjtcbiAgbGV0IGRldGFpbHNDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGRldGFpbHNDLnRleHRDb250ZW50ID0gZGV0YWlscztcbiAgZGV0YWlsc0Rpdi5hcHBlbmQoZGV0YWlsc1QsIGRldGFpbHNDKTtcbiAgLy8gQXBwZW5kIGFsbCB0byBtb2RhbENvbnRlbnRzXG4gIG1vZGFsQ29udGVudHMuYXBwZW5kKFxuICAgIGNsb3NlLFxuICAgIHRpdGxlRGl2LFxuICAgIHByb2plY3REaXYsXG4gICAgcHJpb3JpdHlEaXYsXG4gICAgZHVlRGF0ZURpdixcbiAgICBkZXRhaWxzRGl2XG4gICk7XG4gIGJnTW9kYWwuYXBwZW5kKG1vZGFsQ29udGVudHMpO1xuICBib2R5LmFwcGVuZChiZ01vZGFsKTtcbn1cbi8vIEV2ZW50IExpc3RlbmVyIGZvciBlZGl0QnRuXG5sZXQgZWRpdHRlZFRhc2tJbmRleDtcbmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZWRpdFRhc2spO1xuZnVuY3Rpb24gZWRpdFRhc2soZSkge1xuICBpZiAoZS50YXJnZXQuaWQgIT09IFwiZWRpdEJ0blwiKSByZXR1cm47XG4gIGxldCB0YXJnZXRUaXRsZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5bMV0ub3V0ZXJUZXh0O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByb2plY3RzWzBdLm15QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGFyZ2V0VGl0bGUgPT09IGFsbFByb2plY3RzWzBdLm15QXJyYXlbaV0udGl0bGUpIHtcbiAgICAgIGVkaXR0ZWRUYXNrSW5kZXggPSBpOyAvLyBzYXZlZCB2YWx1ZSBvZiBjdXJyZW50IGl0ZXJhdGVkIGF0dHJpYnV0ZSBmb3IgZWRpdGluZyBsYXRlclxuICAgICAgbGV0IHRhcmdldFRhc2sgPSBhbGxQcm9qZWN0c1swXS5teUFycmF5W2ldO1xuICAgICAgbGV0IHRpdGxlID0gdGFyZ2V0VGFzay50aXRsZTtcbiAgICAgIGxldCBwcmlvcml0eSA9IHRhcmdldFRhc2sucHJpb3JpdHk7XG4gICAgICBsZXQgZHVlRGF0ZSA9IHRhcmdldFRhc2suZHVlRGF0ZTtcbiAgICAgIGxldCBkZXRhaWxzID0gdGFyZ2V0VGFzay5kZXNjcmlwdGlvbjtcbiAgICAgIHJlbmRlckVkaXRGb3JtKHRpdGxlLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGV0YWlscyk7XG4gICAgfVxuICB9XG59XG4vLyBSZW5kZXIgRWRpdCBGb3JtIEZ1bmN0aW9uXG5mdW5jdGlvbiByZW5kZXJFZGl0Rm9ybSh0aXRsZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRldGFpbHMpIHtcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgLy9SZW1vdmUgdGhlIERPTSBjcmVhdGVkIGVkaXQgZm9ybVxuICBpZiAoZG9jdW1lbnQuY29udGFpbnMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWJnLW1vZGFsXCIpKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1iZy1tb2RhbFwiKS5yZW1vdmUoKTtcbiAgfVxuICAvLyBDcmVhdGUgZGl2IGZvciBtb2RhbCBiZyBhbmQgbW9kYWwgY29udGVudFxuICBsZXQgYmdNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJnTW9kYWwuY2xhc3NMaXN0LmFkZChcImJnLW1vZGFsXCIpO1xuICBiZ01vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgYmdNb2RhbC5jbGFzc0xpc3QuYWRkKFwiZWRpdC1iZy1tb2RhbFwiKTtcbiAgbGV0IG1vZGFsQ29udGVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbENvbnRlbnRzLmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250ZW50c1wiKTtcbiAgbW9kYWxDb250ZW50cy5jbGFzc0xpc3QuYWRkKFwiZWRpdC1mb3JtLXBvcC11cFwiKTtcbiAgLy8gU3RhcnQgQ3JlYXRpbmcgdGhlIGRldGFpbHMgd2l0aGluIHRoZSBFZGl0IGNvbnRhaW5lclxuICAvLyBDbG9zZVxuICBsZXQgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjbG9zZS50ZXh0Q29udGVudCA9IFwiK1wiO1xuICBjbG9zZS5jbGFzc0xpc3QuYWRkKFwiY2xvc2VcIik7XG4gIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgYmdNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0pO1xuICAvLyBGb3JtXG4gIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uYWN0aW9uID0gXCIjXCI7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcImVkaXQtdGFzay1mb3JtXCIpO1xuICAvLyBUaXRsZVxuICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIHRpdGxlSW5wdXQubmFtZSA9IFwidGl0bGVcIjtcbiAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZWRpdC10YXNrLXRpdGxlXCIpO1xuICB0aXRsZUlucHV0LnZhbHVlID0gdGl0bGU7XG4gIHRpdGxlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAvLyBEZXRhaWxzXG4gIGxldCBkZXRhaWxzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRldGFpbHNJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIGRldGFpbHNJbnB1dC5uYW1lID0gXCJkZXRhaWxzXCI7XG4gIGRldGFpbHNJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZWRpdC10YXNrLWRldGFpbHNcIik7XG4gIGRldGFpbHNJbnB1dC52YWx1ZSA9IGRldGFpbHM7XG4gIGRldGFpbHNJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIC8vIExhYmVscyBmb3IgRHVlIERhdGVcbiAgbGV0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZHVlRGF0ZUxhYmVsLmZvciA9IFwiZHVlLWRhdGVcIjtcbiAgLy8gRHVlRGF0ZVxuICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkdWVEYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICBkdWVEYXRlSW5wdXQubmFtZSA9IFwiZHVlLWRhdGVcIjtcbiAgZHVlRGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRhc2stZHVlLWRhdGVcIik7XG4gIGR1ZURhdGVJbnB1dC52YWx1ZSA9IGR1ZURhdGU7XG4gIGR1ZURhdGVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIC8vIExhYmVscyBmb3IgUHJpb3JpdHlcbiAgbGV0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHByaW9yaXR5TGFiZWwuZm9yID0gXCJwcmlvcml0eVwiO1xuICAvLyBSYWRpbyBmb3IgUHJpb3JpdHkgTG93XG4gIGxldCBsb3dQcmlvcml0eVJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBsb3dQcmlvcml0eVJhZGlvLnR5cGUgPSBcInJhZGlvXCI7XG4gIGxvd1ByaW9yaXR5UmFkaW8ubmFtZSA9IFwiZWRpdC1wcmlvcml0eVwiO1xuICBsb3dQcmlvcml0eVJhZGlvLmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRhc2stbG93XCIpO1xuICBsb3dQcmlvcml0eVJhZGlvLnZhbHVlID0gXCJsb3dcIjtcbiAgLy8gUmFkaW8gZm9yIFByaW9yaXR5IE1lZGl1bVxuICBsZXQgbWVkaXVtUHJpb3JpdHlSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgbWVkaXVtUHJpb3JpdHlSYWRpby50eXBlID0gXCJyYWRpb1wiO1xuICBtZWRpdW1Qcmlvcml0eVJhZGlvLm5hbWUgPSBcImVkaXQtcHJpb3JpdHlcIjtcbiAgbWVkaXVtUHJpb3JpdHlSYWRpby5jbGFzc0xpc3QuYWRkKFwiZWRpdC10YXNrLW1lZGl1bVwiKTtcbiAgbWVkaXVtUHJpb3JpdHlSYWRpby52YWx1ZSA9IFwibWVkaXVtXCI7XG4gIC8vIFJhZGlvIGZvciBQcmlvcml0eSBIaWdoXG4gIGxldCBoaWdoUHJpb3JpdHlSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaGlnaFByaW9yaXR5UmFkaW8udHlwZSA9IFwicmFkaW9cIjtcbiAgaGlnaFByaW9yaXR5UmFkaW8ubmFtZSA9IFwiZWRpdC1wcmlvcml0eVwiO1xuICBoaWdoUHJpb3JpdHlSYWRpby5jbGFzc0xpc3QuYWRkKFwiZWRpdC10YXNrLWhpZ2hcIik7XG4gIGhpZ2hQcmlvcml0eVJhZGlvLnZhbHVlID0gXCJoaWdoXCI7XG4gIC8vIExvZ2ljIHRvIHNwZWNpZnkgd2hpY2ggcmFkaW8gaXMgY2hlY2tlZFxuICBzd2l0Y2ggKHByaW9yaXR5KSB7XG4gICAgY2FzZSBsb3dQcmlvcml0eVJhZGlvLnZhbHVlOlxuICAgICAgbG93UHJpb3JpdHlSYWRpby5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgbWVkaXVtUHJpb3JpdHlSYWRpby52YWx1ZTpcbiAgICAgIG1lZGl1bVByaW9yaXR5UmFkaW8uY2hlY2tlZCA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGhpZ2hQcmlvcml0eVJhZGlvLnZhbHVlOlxuICAgICAgaGlnaFByaW9yaXR5UmFkaW8uY2hlY2tlZCA9IHRydWU7XG4gIH1cbiAgLy8gQ29uZmlybSBFZGl0IEJ1dHRvblxuICBsZXQgY29uZmlybUVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbmZpcm1FZGl0QnRuLnR5cGUgPSBcInN1Ym1pdFwiO1xuICBjb25maXJtRWRpdEJ0bi52YWx1ZSA9IFwiQ09ORklSTSBFRElUXCI7XG4gIGNvbmZpcm1FZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJjb25maXJtRWRpdEJ0blwiKTtcbiAgLy8gQXBwZW5kIGFsbCB0byBmb3JtXG4gIGZvcm0uYXBwZW5kKFxuICAgIHRpdGxlSW5wdXQsXG4gICAgZGV0YWlsc0lucHV0LFxuICAgIGR1ZURhdGVMYWJlbCxcbiAgICBkdWVEYXRlSW5wdXQsXG4gICAgcHJpb3JpdHlMYWJlbCxcbiAgICBsb3dQcmlvcml0eVJhZGlvLFxuICAgIG1lZGl1bVByaW9yaXR5UmFkaW8sXG4gICAgaGlnaFByaW9yaXR5UmFkaW8sXG4gICAgY29uZmlybUVkaXRCdG5cbiAgKTtcbiAgLy8gQXBwZW5kIGNsb3NlIGFuZCBmb3JtIHRvIG1vZGFsIGNvbnRlbnRcbiAgbW9kYWxDb250ZW50cy5hcHBlbmQoY2xvc2UsIGZvcm0pO1xuICBiZ01vZGFsLmFwcGVuZChtb2RhbENvbnRlbnRzKTtcbiAgYm9keS5hcHBlbmQoYmdNb2RhbCk7XG4gIC8vIEFkZCBFdmVudCBMaXN0ZW5lciB0byBjb25maXJtRWRpdEJ0blxuICBjb25maXJtRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29uZmlybUVkaXQpO1xufVxuLy8gRXZlbnQgTGlzdGVuZXIgZm9yIENvbmZpcm0gRWRpdCBCdG5cbmZ1bmN0aW9uIGNvbmZpcm1FZGl0KGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgbmV3VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdGFzay10aXRsZVwiKS52YWx1ZTtcbiAgbGV0IG5ld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRhc2stZGV0YWlsc1wiKS52YWx1ZTtcbiAgbGV0IG5ld0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdGFzay1kdWUtZGF0ZVwiKS52YWx1ZTtcbiAgbGV0IG5ld1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAnaW5wdXRbbmFtZT1cImVkaXQtcHJpb3JpdHlcIl06Y2hlY2tlZCdcbiAgKS52YWx1ZTtcbiAgbGV0IGVkaXR0ZWRUYXNrID0gYWxsUHJvamVjdHNbMF0ubXlBcnJheVtlZGl0dGVkVGFza0luZGV4XTtcbiAgLy8gQ2FsbCBhIG1ldGhvZCB0aGF0IHNldCB0aGUgcmlnaHQgZGV0YWlscyB1c2luZyB0aGUgYWJvdmUgYXMgcGFyYW1ldGVycy8gYXJndW1ldHNcbiAgc2V0RWRpdHRlZFRhc2soXG4gICAgZWRpdHRlZFRhc2ssXG4gICAgbmV3VGl0bGUsXG4gICAgbmV3RGVzY3JpcHRpb24sXG4gICAgbmV3RHVlRGF0ZSxcbiAgICBuZXdQcmlvcml0eVxuICApO1xuICBzYXZlTG9jYWxQcm9qZWN0cygpO1xuICAvLyBUaGUgbmV4dCBsaW5lIG9mIGNvZGUgd2FzIGFkZGVkIGJlY2F1c2UgdGhlIGNvbnRlbnRzIG9mIHRoZSBob21lQXJyYXkga2VwdCBkdXBsaWNhdGluZyBkdXJpbmcgcmVuZGVyaW5nLiBBIHRlbXBvcmFyeSBmaXgsIGZpbmQgcGVybWFuZW50IGZpeCBsYXRlclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICBhbGxQcm9qZWN0c1swXS5teUFycmF5Lm1hcChyZW5kZXIpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtYmctbW9kYWxcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdGFzay1mb3JtXCIpLnJlc2V0KCk7XG59XG4vLyBGdW5jdGlvbiB0byBzZXQgdGhlIG5ldyBkZXRhaWxzIGludG8gdGhlIHRhcmdldCBvYmplY3RcbmZ1bmN0aW9uIHNldEVkaXR0ZWRUYXNrKFxuICBlZGl0dGVkVGFzayxcbiAgbmV3VGl0bGUsXG4gIG5ld0Rlc2NyaXB0aW9uLFxuICBuZXdEdWVEYXRlLFxuICBuZXdQcmlvcml0eVxuKSB7XG4gIGVkaXR0ZWRUYXNrLnRpdGxlID0gbmV3VGl0bGU7XG4gIGVkaXR0ZWRUYXNrLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gIGVkaXR0ZWRUYXNrLmR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICBlZGl0dGVkVGFzay5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xufVxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyO1xuIiwiaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMgfSBmcm9tIFwiLi9kb21cIjtcblxuY2xhc3MgUHJvamVjdHMge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLm15QXJyYXkgPSBbXTtcbiAgfVxuICAvLyBBZGQgbG9naWMgdG8gcmVtb3ZlIHRoZSBwcm9qZWN0cyBvbmNlIGFsbCB0aGUgdGFza3MgYWRkZWQgYXJlIGRlbGV0ZWRcbn1cbmNvbnN0IGhvbWUgPSBuZXcgUHJvamVjdHMoXCJIb21lXCIpO1xuY29uc3QgY2hvcmVzID0gbmV3IFByb2plY3RzKFwiQ2hvcmVzXCIpO1xuZXhwb3J0IGxldCBhbGxQcm9qZWN0cyA9IFtob21lLCBjaG9yZXNdO1xuXG4vLyBVc2UgZXZlbnQgbGlzdGVuZXIgdG8gY2FsbCBwcm9qZWN0cyBjbGFzcyB0byBjcmVhdGUgbmV3IGFycmF5XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRQcm9qZWN0XCIpO1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkTmV3UHJvamVjdCk7XG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0KCkge1xuICBjcmVhdGVQcm9qZWN0KCk7XG4gIC8vIGRpc3BsYXkgcHJvamVjdHMgYW5kIGhpZGUgbW9kYWxzXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1saXN0XCIpLmlubmVySFRNTCA9IFwiXCI7XG4gIGFsbFByb2plY3RzLm1hcChyZW5kZXJQcm9qZWN0cyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmctbW9kYWxcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1wcm9qZWN0LWZvcm1cIikucmVzZXQoKTtcbiAgc2F2ZUxvY2FsUHJvamVjdHMoKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gIC8vIFVzZWQgdGhpcyB0byBnZXQgdmFsdWUgb2YgdGl0bGUgZWl0aGVyIEkgYW0gY3JlYXRpbmcgYSBuZXcgcHJvamVjdCBmcm9tXG4gIC8vIHByb2plY3QgZm9ybSBvciBmcm9tIHRhc2sgZm9ybS5cbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC10aXRsZVwiKS52YWx1ZTtcbiAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdHModGl0bGUpO1xuICBhbGxQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRQcm9qZWN0KG5ld1Rhc2spIHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmFtZVwiKS52YWx1ZTtcbiAgaWYgKHByb2plY3ROYW1lID09PSBcIlwiKSByZXR1cm47XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYWxsUHJvamVjdHNbaV0udGl0bGUgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICAvLyBQdXNoIHRoZSBzYW1lIG9iamVjdCwgc28gdGhhdCBieSByZWZlcmVuY2UsIGFueSBjaGFuZ2UgdG8gb25lIGlzIGEgY2hhbmdlIHRvIGFsbFxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxQcm9qZWN0c1swXS5teUFycmF5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChuZXdUYXNrLnRpdGxlID09PSBhbGxQcm9qZWN0c1swXS5teUFycmF5W2pdLnRpdGxlKVxuICAgICAgICAgIGFsbFByb2plY3RzW2ldLm15QXJyYXkucHVzaChhbGxQcm9qZWN0c1swXS5teUFycmF5W2pdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8vIExvY2FsIFN0b3JhZ2VcbmV4cG9ydCBmdW5jdGlvbiBzYXZlTG9jYWxQcm9qZWN0cygpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGxQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xufVxuZnVuY3Rpb24gcmVzdG9yZUxvY2FsUHJvamVjdHMoKSB7XG4gIGFsbFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbFByb2plY3RzXCIpKTtcbiAgaWYgKGFsbFByb2plY3RzID09PSBudWxsKSBhbGxQcm9qZWN0cyA9IFtob21lLCBjaG9yZXNdO1xuICBhbGxQcm9qZWN0cy5tYXAocmVuZGVyUHJvamVjdHMpO1xufVxuLy8gQ2FsbCB0aGlzIGZ1bmN0aW9uIGV2ZXJ5dGltZSBteSBhcHAgaXMgcmV2aXNpdGVkIG9yIHJlbG9hZGVkXG5yZXN0b3JlTG9jYWxQcm9qZWN0cygpO1xuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iLCJpbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3QtY2xhc3MuanNcIjtcbmltcG9ydCB7IHNhdmVMb2NhbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdC1jbGFzcy5qc1wiO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9kb20uanNcIjtcbmltcG9ydCB7IHNvcnRQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC1jbGFzcy5qc1wiO1xuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrbGlzdCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jaGVja2xpc3QgPSBjaGVja2xpc3Q7XG4gIH1cbiAgZ2V0RGV0YWlscygpIHtcbiAgICAvLyBDYWxsIHRoZSBET00gTWFuaXB1bGF0aW9uIHRoYXQgd2lsbCBnZXQgZGV0YWlscyBoZXJlXG4gIH1cbiAgc2V0RGV0YWlscygpIHtcbiAgICAvLyBDYWxsIHRoZSBET00gTWFuaXB1bGF0aW9uIHRoYXQgd2lsbCBzaG93IGZvcm0gYW5kIGFsbG93IGVudHJpZXMgdG8gYmUgZW50ZXJlZFxuICB9XG4gIGRlbGV0ZVRhc2soKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBPYmplY3QgZnJvbSB0aGUgQXJyYXlzIGl0IGlzIGxvY2F0ZWRcbiAgfVxuICBhZGRUb0hvbWVBcnJheSgpIHtcbiAgICBhbGxQcm9qZWN0c1swXS5teUFycmF5LnB1c2godGhpcyk7XG4gICAgLy8gSWYgYmVsb25ncyB0byBhIHByb2plY3QsIHB1c2ggdG8gcHJvamVjdCBhcnJheSB0b29cbiAgfVxuICB0b2dnbGVDaGVjaygpIHtcbiAgICAvLyBDaGVjayBvbiBvciBvZmYgdG8gc2hvdyBjb21wbGV0aW9uIG9mIHRhc2tcbiAgfVxufVxuXG4vLyBUT0RPOiBNb3ZlIHRoaXMgYXdheSBmcm9tIGhlcmUgb25jZSB5b3UgZmluZCBhIHNvbHV0aW9uIHRvIHdlYnBhY2sgbWVzc2luZyB3aXRoIGltcG9ydGVkIGNsYXNzZXNcbi8vIEZvcm0gU3VibWl0IEJ1dHRvblxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkVG9kb1wiKTtcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZE5ld1Rhc2spO1xuZnVuY3Rpb24gYWRkTmV3VGFzayhlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdGFzay10aXRsZVwiKS52YWx1ZTtcbiAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdGFzay1kZXRhaWxzXCIpLnZhbHVlO1xuICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stZHVlLWRhdGVcIikudmFsdWU7XG4gIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWU7XG4gIGxldCBjaGVja2xpc3QgPSB1bmRlZmluZWQ7XG4gIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tsaXN0KTtcbiAgbmV3VGFzay5hZGRUb0hvbWVBcnJheSgpO1xuICBzb3J0UHJvamVjdChuZXdUYXNrKTtcbiAgc2F2ZUxvY2FsUHJvamVjdHMoKTtcbiAgLy8gVGhlIG5leHQgbGluZSBvZiBjb2RlIHdhcyBhZGRlZCBiZWNhdXNlIHRoZSBjb250ZW50cyBvZiB0aGUgaG9tZUFycmF5IGtlcHQgZHVwbGljYXRpbmcgZHVyaW5nIHJlbmRlcmluZy4gQSB0ZW1wb3JhcnkgZml4LCBmaW5kIHBlcm1hbmVudCBmaXggbGF0ZXJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgYWxsUHJvamVjdHNbMF0ubXlBcnJheS5tYXAocmVuZGVyKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZy1tb2RhbFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stZm9ybVwiKS5yZXNldCgpO1xufVxuZXhwb3J0IGRlZmF1bHQgVGFzaztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9kb20uanNcIjtcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdC1jbGFzcy5qc1wiO1xuXG4vLyBDYWxsIHRoaXMgZnVuY3Rpb24gZXZlcnl0aW1lIG15IGFwcCBpcyByZXZpc2l0ZWQgb3IgcmVsb2FkZWRcbmFsbFByb2plY3RzWzBdLm15QXJyYXkubWFwKHJlbmRlcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=