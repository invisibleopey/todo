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
      if (targetTitle === _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].myArray[j].title) {
        _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].myArray.splice(j, 1);
        (0,_project_class_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalProjects)();
        container.innerHTML = "";
        _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].myArray.map(render);
      }
    }
  }
}
// TODO: Event Listener for editBtn and detailsBtn
// Event Listener for the checkBox for marking done
// TODO: Found a bug here, fix it
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0JBQXdCO0FBQzFDO0FBQ0E7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdEQUFjO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RHlCO0FBQ007QUFDekI7QUFDbUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwRUFBMkI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw4REFBVztBQUNiLEVBQUUsb0VBQWlCO0FBQ25CO0FBQ0E7QUFDQSxFQUFFLHlFQUEwQixDQUFDLDRDQUFNO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ25EcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjZCO0FBQ0M7QUFDbUI7O0FBRWpEO0FBQ0EseUVBQTBCLENBQUMsNENBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3QtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbFByb2plY3RzLCBzYXZlTG9jYWxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3QtY2xhc3MuanNcIjtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpO1xuZnVuY3Rpb24gcmVuZGVyKG9iaikge1xuICAvLyBDcmVhdGUgdGhlIERpdiBhbmQgaXRzIGNvbnRlbnRzXG4gIGxldCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgaWYgKG9iai5jaGVja2xpc3QgPT09IFwiZG9uZVwiKSBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJkb25lXCIpO1xuICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlmIChvYmouY2hlY2tsaXN0ID09PSBcImRvbmVcIikgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gIGNoZWNrYm94Lm5hbWUgPSBcImRvbmVcIjtcbiAgY2hlY2tib3guaWQgPSBcInRvZ2dsZURvbmVCb3hcIjtcbiAgbGV0IHRpdGxlO1xuICBpZiAob2JqLmNoZWNrbGlzdCA9PT0gXCJkb25lXCIpIHtcbiAgICB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkZWxcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gIH0gZWxzZSB7XG4gICAgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgfVxuICBsZXQgZGV0YWlsc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRldGFpbHNCdG4udGV4dENvbnRlbnQgPSBcIkRFVEFJTFNcIjtcbiAgZGV0YWlsc0J0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1idG5zXCIpO1xuICBkZXRhaWxzQnRuLmlkID0gXCJkZXRhaWxzQnRuXCI7XG4gIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGR1ZURhdGUudGV4dENvbnRlbnQgPSBvYmouZHVlRGF0ZTtcbiAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFRElUXCI7XG4gIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stYnRuc1wiKTtcbiAgbGV0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbEJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICBkZWxCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stYnRuc1wiKTtcbiAgZGVsQnRuLmlkID0gXCJkZWxldGVCdG5cIjtcbiAgLy8gQXBwZW5kIGFsbCBjb250ZW50cyB0byB0aGUgZGl2IGFuZCBkaXYgdG8gdGhlIGNvbnRhaW5lclxuICBuZXdUYXNrLmFwcGVuZChjaGVja2JveCwgdGl0bGUsIGRldGFpbHNCdG4sIGR1ZURhdGUsIGVkaXRCdG4sIGRlbEJ0bik7XG4gIGNvbnRhaW5lci5hcHBlbmQobmV3VGFzayk7XG59XG5cbi8vIENvbnRyb2wgTW9kYWxcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkTmV3XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmctbW9kYWxcIikuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZy1tb2RhbFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KTtcbi8vIFRvZ2dsZSBiZXR3ZWVuIGFkZCB0YXNrIGFuZCBhZGQgcHJvamVjdCBmb3Jtc1xuZG9jdW1lbnRcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1mb3JtLWJ0blwiKVxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLWZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3QtZm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1mb3JtLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1wcm9qZWN0LWZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLWZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pO1xuLy8gQWRkIHRoZSBwcm9qZWN0cyB0byBuYXZcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cyhvYmopIHtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbGlzdFwiKTtcbiAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBpZiAob2JqLnRpdGxlID09PSBcIkhvbWVcIikgcmV0dXJuO1xuICBzcGFuLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICBsaS5hcHBlbmQoc3Bhbik7XG4gIHVsLmFwcGVuZChsaSk7XG59XG4vLyBFdmVudCBsaXN0ZW5lciBmb3IgaG9tZSBidXR0b25cbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIik7XG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gIGFsbFByb2plY3RzWzBdLm15QXJyYXkubWFwKHJlbmRlcik7XG59KTtcbi8vIEV2ZW50IExpc3RlbmVyIHRvIHJlbmRlciB0aGUgYXJyYXkgaW4gZWFjaCBwcm9qZWN0LlxuLy8gTWV0aG9kIG9mIGNsYXNzIFByb2plY3Qgd2FzIGdpdmluZyBtZSBwcm9ibGVtIHNvIEkgbW92ZWQgaXQgaGVyZS5cbmNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIik7XG5wcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkRXZlbnRUb1Byb2plY3QpO1xuZnVuY3Rpb24gYWRkRXZlbnRUb1Byb2plY3QoZSkge1xuICAvLyBOZXh0IGxpbmUgaXMgdG8gZml4IGJ1ZyBvZiBlbXB0eSBzcGFjZXMgY2FsbGluZyB0aGUgZnVuY3Rpb25cbiAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lICE9PSBcIlNQQU5cIikgcmV0dXJuO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICBsZXQgdGhlUHJvamVjdCA9IGUudGFyZ2V0Lm91dGVyVGV4dC50b0xvd2VyQ2FzZSgpO1xuICBmb3IgKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RzKSB7XG4gICAgaWYgKHByb2plY3QudGl0bGUudG9Mb3dlckNhc2UoKSA9PT0gdGhlUHJvamVjdCkge1xuICAgICAgcHJvamVjdC5teUFycmF5Lm1hcChyZW5kZXIpO1xuICAgIH1cbiAgfVxufVxuLy8gRXZlbnQgTGlzdGVuZXIgdG8gZGVsZXRlIGEgVGFza1xuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUYXNrKTtcbmZ1bmN0aW9uIGRlbGV0ZVRhc2soZSkge1xuICBpZiAoZS50YXJnZXQuaWQgIT09IFwiZGVsZXRlQnRuXCIpIHJldHVybjtcbiAgbGV0IHRhcmdldFRpdGxlID0gZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlblsxXS5vdXRlclRleHQ7XG4gIC8vIERlbGV0ZSBmcm9tIHRoZSBIb21lIGFycmF5IGFuZCBQcm9qZWN0IGlmIHRhc2sgaXMgYWxzbyBpbiBhIHByb2plY3RcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsUHJvamVjdHNbaV0ubXlBcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKHRhcmdldFRpdGxlID09PSBhbGxQcm9qZWN0c1tpXS5teUFycmF5W2pdLnRpdGxlKSB7XG4gICAgICAgIGFsbFByb2plY3RzW2ldLm15QXJyYXkuc3BsaWNlKGosIDEpO1xuICAgICAgICBzYXZlTG9jYWxQcm9qZWN0cygpO1xuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgYWxsUHJvamVjdHNbaV0ubXlBcnJheS5tYXAocmVuZGVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8vIFRPRE86IEV2ZW50IExpc3RlbmVyIGZvciBlZGl0QnRuIGFuZCBkZXRhaWxzQnRuXG4vLyBFdmVudCBMaXN0ZW5lciBmb3IgdGhlIGNoZWNrQm94IGZvciBtYXJraW5nIGRvbmVcbi8vIFRPRE86IEZvdW5kIGEgYnVnIGhlcmUsIGZpeCBpdFxuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVEb25lKTtcbmZ1bmN0aW9uIHRvZ2dsZURvbmUoZSkge1xuICBpZiAoZS50YXJnZXQuaWQgIT09IFwidG9nZ2xlRG9uZUJveFwiKSByZXR1cm47XG4gIGxldCB0YXJnZXRUaXRsZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5bMV0ub3V0ZXJUZXh0O1xuICAvLyBMb29wIHRocm91Z2ggYWxsIEhvbWUgYXJyYXkgYW5kIFByb2plY3QgaWYgdGFzayBpcyBhbHNvIGluIGEgcHJvamVjdFxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFByb2plY3RzWzBdLm15QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGFyZ2V0VGl0bGUgPT09IGFsbFByb2plY3RzWzBdLm15QXJyYXlbaV0udGl0bGUpIHtcbiAgICAgIGlmIChhbGxQcm9qZWN0c1swXS5teUFycmF5W2ldLmNoZWNrbGlzdCA9PT0gXCJkb25lXCIpIHtcbiAgICAgICAgYWxsUHJvamVjdHNbMF0ubXlBcnJheVtpXS5jaGVja2xpc3QgPSB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGxQcm9qZWN0c1swXS5teUFycmF5W2ldLmNoZWNrbGlzdCA9IFwiZG9uZVwiO1xuICAgICAgfVxuICAgICAgc2F2ZUxvY2FsUHJvamVjdHMoKTtcbiAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgYWxsUHJvamVjdHNbMF0ubXlBcnJheS5tYXAocmVuZGVyKTtcbiAgICB9XG4gIH1cbn1cbi8vIEV2ZW50IExpc3RlbmVyIGZvciBkZXRhaWxzQnRuXG5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldFRhc2tEZXRhaWxzKTtcbmZ1bmN0aW9uIGdldFRhc2tEZXRhaWxzKGUpIHtcbiAgaWYgKGUudGFyZ2V0LmlkICE9PSBcImRldGFpbHNCdG5cIikgcmV0dXJuO1xuICBsZXQgdGFyZ2V0VGl0bGUgPSBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuWzFdLm91dGVyVGV4dDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0c1swXS5teUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRhcmdldFRpdGxlID09PSBhbGxQcm9qZWN0c1swXS5teUFycmF5W2ldLnRpdGxlKSB7XG4gICAgICBsZXQgdGFyZ2V0VGFzayA9IGFsbFByb2plY3RzWzBdLm15QXJyYXlbaV07XG4gICAgICBsZXQgdGl0bGUgPSB0YXJnZXRUYXNrLnRpdGxlO1xuICAgICAgbGV0IHByb2plY3QgPSBhbGxQcm9qZWN0c1swXS50aXRsZTtcbiAgICAgIC8vIENvbnZvbHV0ZWQgY29uZGl0aW9uYWxzIGFuZCBsb29wIHRvIHJlc2V0IHZhbHVlIG9mIHByb2plY3QgaWYgdGhlIHRhc2tcbiAgICAgIC8vIGJlbG9uZ3MgdG8gYW5vdGhlciBwcm9qZWN0IGFwYXJ0IGZyb20gaG9tZVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGFsbFByb2plY3RzW2pdLm15QXJyYXkubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBhbGxQcm9qZWN0c1tqXS50aXRsZSAhPT0gXCJIb21lXCIgJiZcbiAgICAgICAgICAgIGFsbFByb2plY3RzW2pdLm15QXJyYXlba10udGl0bGUgPT09IHRhcmdldFRpdGxlXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcm9qZWN0ID0gYWxsUHJvamVjdHNbal0udGl0bGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgcHJpb3JpdHkgPSB0YXJnZXRUYXNrLnByaW9yaXR5O1xuICAgICAgbGV0IGR1ZURhdGUgPSB0YXJnZXRUYXNrLmR1ZURhdGU7XG4gICAgICBsZXQgZGV0YWlscyA9IHRhcmdldFRhc2suZGVzY3JpcHRpb247XG4gICAgICByZW5kZXJEZXRhaWxzUG9wVXAodGl0bGUsIHByb2plY3QsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXRhaWxzKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHJlbmRlckRldGFpbHNQb3BVcCh0aXRsZSwgcHJvamVjdCwgcHJpb3JpdHksIGR1ZURhdGUsIGRldGFpbHMpIHtcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgLy8gQ3JlYXRlIGRpdiBmb3IgbW9kYWwgYmcgYW5kIG1vZGFsIGNvbnRlbnRcbiAgbGV0IGJnTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBiZ01vZGFsLmNsYXNzTGlzdC5hZGQoXCJiZy1tb2RhbFwiKTtcbiAgYmdNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gIGxldCBtb2RhbENvbnRlbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxDb250ZW50cy5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy1wb3AtdXBcIik7XG4gIC8vIFN0YXJ0IENyZWF0aW5nIHRoZSBkZXRhaWxzIHdpdGhpbiB0aGUgdGFzayBvYmplY3RcbiAgLy8gQ2xvc2VcbiAgbGV0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2xvc2UudGV4dENvbnRlbnQgPSBcIitcIjtcbiAgY2xvc2UuY2xhc3NMaXN0LmFkZChcImNsb3NlXCIpO1xuICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGJnTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9KTtcbiAgLy8gVGl0bGVcbiAgbGV0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHRpdGxlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0aXRsZVAudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgdGl0bGVEaXYuYXBwZW5kKHRpdGxlUCk7XG4gIC8vIFByb2plY3RcbiAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgcHJvamVjdFQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcHJvamVjdFQudGV4dENvbnRlbnQgPSBcIlByb2plY3Q6XCI7XG4gIGxldCBwcm9qZWN0QyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBwcm9qZWN0Qy50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gIHByb2plY3REaXYuYXBwZW5kKHByb2plY3RULCBwcm9qZWN0Qyk7XG4gIC8vIFByaW9yaXR5XG4gIGxldCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBwcmlvcml0eVQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcHJpb3JpdHlULnRleHRDb250ZW50ID0gXCJQcmlvcml0eTpcIjtcbiAgbGV0IHByaW9yaXR5QyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBwcmlvcml0eUMudGV4dENvbnRlbnQgPSBwcmlvcml0eTtcbiAgcHJpb3JpdHlEaXYuYXBwZW5kKHByaW9yaXR5VCwgcHJpb3JpdHlDKTtcbiAgLy8gRHVlIERhdGVcbiAgbGV0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgZHVlRGF0ZVQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZHVlRGF0ZVQudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOlwiO1xuICBsZXQgZHVlRGF0ZUMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZHVlRGF0ZUMudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xuICBkdWVEYXRlRGl2LmFwcGVuZChkdWVEYXRlVCwgZHVlRGF0ZUMpO1xuICAvLyBEZXRhaWxzXG4gIGxldCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGRldGFpbHNUID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGRldGFpbHNULnRleHRDb250ZW50ID0gXCJEZXRhaWxzOlwiO1xuICBsZXQgZGV0YWlsc0MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZGV0YWlsc0MudGV4dENvbnRlbnQgPSBkZXRhaWxzO1xuICBkZXRhaWxzRGl2LmFwcGVuZChkZXRhaWxzVCwgZGV0YWlsc0MpO1xuICAvLyBBcHBlbmQgYWxsIHRvIG1vZGFsQ29udGVudHNcbiAgbW9kYWxDb250ZW50cy5hcHBlbmQoXG4gICAgY2xvc2UsXG4gICAgdGl0bGVEaXYsXG4gICAgcHJvamVjdERpdixcbiAgICBwcmlvcml0eURpdixcbiAgICBkdWVEYXRlRGl2LFxuICAgIGRldGFpbHNEaXZcbiAgKTtcbiAgYmdNb2RhbC5hcHBlbmQobW9kYWxDb250ZW50cyk7XG4gIGJvZHkuYXBwZW5kKGJnTW9kYWwpO1xufVxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyO1xuIiwiaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMgfSBmcm9tIFwiLi9kb21cIjtcblxuY2xhc3MgUHJvamVjdHMge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLm15QXJyYXkgPSBbXTtcbiAgfVxuICAvLyBBZGQgbG9naWMgdG8gcmVtb3ZlIHRoZSBwcm9qZWN0cyBvbmNlIGFsbCB0aGUgdGFza3MgYWRkZWQgYXJlIGRlbGV0ZWRcbn1cbmNvbnN0IGhvbWUgPSBuZXcgUHJvamVjdHMoXCJIb21lXCIpO1xuY29uc3QgY2hvcmVzID0gbmV3IFByb2plY3RzKFwiQ2hvcmVzXCIpO1xuZXhwb3J0IGxldCBhbGxQcm9qZWN0cyA9IFtob21lLCBjaG9yZXNdO1xuXG4vLyBVc2UgZXZlbnQgbGlzdGVuZXIgdG8gY2FsbCBwcm9qZWN0cyBjbGFzcyB0byBjcmVhdGUgbmV3IGFycmF5XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRQcm9qZWN0XCIpO1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkTmV3UHJvamVjdCk7XG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0KCkge1xuICBjcmVhdGVQcm9qZWN0KCk7XG4gIC8vIGRpc3BsYXkgcHJvamVjdHMgYW5kIGhpZGUgbW9kYWxzXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1saXN0XCIpLmlubmVySFRNTCA9IFwiXCI7XG4gIGFsbFByb2plY3RzLm1hcChyZW5kZXJQcm9qZWN0cyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmctbW9kYWxcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1wcm9qZWN0LWZvcm1cIikucmVzZXQoKTtcbiAgc2F2ZUxvY2FsUHJvamVjdHMoKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gIC8vIFVzZWQgdGhpcyB0byBnZXQgdmFsdWUgb2YgdGl0bGUgZWl0aGVyIEkgYW0gY3JlYXRpbmcgYSBuZXcgcHJvamVjdCBmcm9tXG4gIC8vIHByb2plY3QgZm9ybSBvciBmcm9tIHRhc2sgZm9ybS5cbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC10aXRsZVwiKS52YWx1ZTtcbiAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdHModGl0bGUpO1xuICBhbGxQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRQcm9qZWN0KG5ld1Rhc2spIHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmFtZVwiKS52YWx1ZTtcbiAgaWYgKHByb2plY3ROYW1lID09PSBcIlwiKSByZXR1cm47XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYWxsUHJvamVjdHNbaV0udGl0bGUgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICAvLyBQdXNoIHRoZSBzYW1lIG9iamVjdCwgc28gdGhhdCBieSByZWZlcmVuY2UsIGFueSBjaGFuZ2UgdG8gb25lIGlzIGEgY2hhbmdlIHRvIGFsbFxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhbGxQcm9qZWN0c1swXS5teUFycmF5Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChuZXdUYXNrLnRpdGxlID09PSBhbGxQcm9qZWN0c1swXS5teUFycmF5W2pdLnRpdGxlKVxuICAgICAgICAgIGFsbFByb2plY3RzW2ldLm15QXJyYXkucHVzaChhbGxQcm9qZWN0c1swXS5teUFycmF5W2pdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8vIExvY2FsIFN0b3JhZ2VcbmV4cG9ydCBmdW5jdGlvbiBzYXZlTG9jYWxQcm9qZWN0cygpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGxQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShhbGxQcm9qZWN0cykpO1xufVxuZnVuY3Rpb24gcmVzdG9yZUxvY2FsUHJvamVjdHMoKSB7XG4gIGFsbFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFsbFByb2plY3RzXCIpKTtcbiAgaWYgKGFsbFByb2plY3RzID09PSBudWxsKSBhbGxQcm9qZWN0cyA9IFtob21lLCBjaG9yZXNdO1xuICBhbGxQcm9qZWN0cy5tYXAocmVuZGVyUHJvamVjdHMpO1xufVxuLy8gQ2FsbCB0aGlzIGZ1bmN0aW9uIGV2ZXJ5dGltZSBteSBhcHAgaXMgcmV2aXNpdGVkIG9yIHJlbG9hZGVkXG5yZXN0b3JlTG9jYWxQcm9qZWN0cygpO1xuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iLCJpbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3QtY2xhc3MuanNcIjtcbmltcG9ydCB7IHNhdmVMb2NhbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdC1jbGFzcy5qc1wiO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9kb20uanNcIjtcbmltcG9ydCB7IHNvcnRQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC1jbGFzcy5qc1wiO1xuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrbGlzdCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5jaGVja2xpc3QgPSBjaGVja2xpc3Q7XG4gIH1cbiAgZ2V0RGV0YWlscygpIHtcbiAgICAvLyBDYWxsIHRoZSBET00gTWFuaXB1bGF0aW9uIHRoYXQgd2lsbCBnZXQgZGV0YWlscyBoZXJlXG4gIH1cbiAgc2V0RGV0YWlscygpIHtcbiAgICAvLyBDYWxsIHRoZSBET00gTWFuaXB1bGF0aW9uIHRoYXQgd2lsbCBzaG93IGZvcm0gYW5kIGFsbG93IGVudHJpZXMgdG8gYmUgZW50ZXJlZFxuICB9XG4gIGRlbGV0ZVRhc2soKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBPYmplY3QgZnJvbSB0aGUgQXJyYXlzIGl0IGlzIGxvY2F0ZWRcbiAgfVxuICBhZGRUb0hvbWVBcnJheSgpIHtcbiAgICBhbGxQcm9qZWN0c1swXS5teUFycmF5LnB1c2godGhpcyk7XG4gICAgLy8gSWYgYmVsb25ncyB0byBhIHByb2plY3QsIHB1c2ggdG8gcHJvamVjdCBhcnJheSB0b29cbiAgfVxuICB0b2dnbGVDaGVjaygpIHtcbiAgICAvLyBDaGVjayBvbiBvciBvZmYgdG8gc2hvdyBjb21wbGV0aW9uIG9mIHRhc2tcbiAgfVxufVxuXG4vLyBUT0RPOiBNb3ZlIHRoaXMgYXdheSBmcm9tIGhlcmUgb25jZSB5b3UgZmluZCBhIHNvbHV0aW9uIHRvIHdlYnBhY2sgbWVzc2luZyB3aXRoIGltcG9ydGVkIGNsYXNzZXNcbi8vIEZvcm0gU3VibWl0IEJ1dHRvblxuY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkVG9kb1wiKTtcbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZE5ld1Rhc2spO1xuZnVuY3Rpb24gYWRkTmV3VGFzayhlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdGFzay10aXRsZVwiKS52YWx1ZTtcbiAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdGFzay1kZXRhaWxzXCIpLnZhbHVlO1xuICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stZHVlLWRhdGVcIikudmFsdWU7XG4gIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWU7XG4gIGxldCBjaGVja2xpc3QgPSB1bmRlZmluZWQ7XG4gIGxldCBuZXdUYXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tsaXN0KTtcbiAgbmV3VGFzay5hZGRUb0hvbWVBcnJheSgpO1xuICBzb3J0UHJvamVjdChuZXdUYXNrKTtcbiAgc2F2ZUxvY2FsUHJvamVjdHMoKTtcbiAgLy8gVGhlIG5leHQgbGluZSBvZiBjb2RlIHdhcyBhZGRlZCBiZWNhdXNlIHRoZSBjb250ZW50cyBvZiB0aGUgaG9tZUFycmF5IGtlcHQgZHVwbGljYXRpbmcgZHVyaW5nIHJlbmRlcmluZy4gQSB0ZW1wb3JhcnkgZml4LCBmaW5kIHBlcm1hbmVudCBmaXggbGF0ZXJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgYWxsUHJvamVjdHNbMF0ubXlBcnJheS5tYXAocmVuZGVyKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZy1tb2RhbFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stZm9ybVwiKS5yZXNldCgpO1xufVxuZXhwb3J0IGRlZmF1bHQgVGFzaztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9kb20uanNcIjtcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdC1jbGFzcy5qc1wiO1xuXG4vLyBDYWxsIHRoaXMgZnVuY3Rpb24gZXZlcnl0aW1lIG15IGFwcCBpcyByZXZpc2l0ZWQgb3IgcmVsb2FkZWRcbmFsbFByb2plY3RzWzBdLm15QXJyYXkubWFwKHJlbmRlcik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=