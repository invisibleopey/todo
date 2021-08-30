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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _project_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-class.js */ "./src/project-class.js");


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
function renderProjects(obj) {
  const ul = document.querySelector("#project-list");
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.textContent = obj.title;
  span.classList.add("project");
  li.append(span);
  ul.append(li);
  // span.addEventListener("click", obj.renderProjectTasks.bind(obj));
}
// Event listener for home button
const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", () => {
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.restoreLocal)();
});
// Event Listener to render the array in each project.
// Method of class Project was giving me problem so I moved it here.
const projectList = document.querySelectorAll(".project");
projectList.forEach((element) =>
  element.addEventListener("click", addEventToProject)
);
function addEventToProject(e) {
  document.querySelector("#container").innerHTML = "";
  let theProject = e.target.outerText.toLowerCase();
  for (let project of _project_class_js__WEBPACK_IMPORTED_MODULE_1__.allProjects) {
    if (project.title.toLowerCase() === theProject) {
      project.myArray.map(render);
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveLocal": () => (/* binding */ saveLocal),
/* harmony export */   "restoreLocal": () => (/* binding */ restoreLocal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _project_class_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-class.js */ "./src/project-class.js");




let task1 = new _task_js__WEBPACK_IMPORTED_MODULE_0__.default(
  "Get Help",
  "To get some Kind of healp",
  "9-10-2021",
  "High",
  "False"
);
let task2 = new _task_js__WEBPACK_IMPORTED_MODULE_0__.default(
  "Get Help",
  "To get some Kind of healp",
  "9-10-2021",
  "High",
  "False"
);
let task3 = new _task_js__WEBPACK_IMPORTED_MODULE_0__.default(
  "Get Help",
  "To get some Kind of healp",
  "9-10-2021",
  "High",
  "False"
);
let homeArray = [];
// Local Storage
function saveLocal() {
  localStorage.setItem("homeArray", JSON.stringify(homeArray));
}
function restoreLocal() {
  homeArray = JSON.parse(localStorage.getItem("homeArray"));
  if (homeArray === null) homeArray = [];
  homeArray.map(_dom_js__WEBPACK_IMPORTED_MODULE_1__.default);
}
// Call this function everytime my app is revisited or reloaded
restoreLocal();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeArray);


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
const chores = new Projects("Chores");
let allProjects = [chores];

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
      allProjects[i].myArray.push(newTask);
    }
  }
  saveLocalProjects();
}
// Local Storage
function saveLocalProjects() {
  localStorage.setItem("allProjects", JSON.stringify(allProjects));
}
function restoreLocalProjects() {
  allProjects = JSON.parse(localStorage.getItem("allProjects"));
  if (allProjects === null) allProjects = [chores];
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _project_class_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-class.js */ "./src/project-class.js");




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
  addToArrays() {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.default.push(this);
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
  newTask.addToArrays();
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.saveLocal)();
  (0,_project_class_js__WEBPACK_IMPORTED_MODULE_2__.sortProject)(newTask);
  // The next line of code was added because the contents of the homeArray kept duplicating during rendering. A temporary fix, find permanent fix later
  document.querySelector("#container").innerHTML = "";
  _index_js__WEBPACK_IMPORTED_MODULE_0__.default.map(_dom_js__WEBPACK_IMPORTED_MODULE_1__.default);
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNPO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQVk7QUFDZCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDBEQUFXO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VPO0FBQ0M7QUFDWTs7QUFFMUMsZ0JBQWdCLDZDQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw2Q0FBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNkNBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGdCQUFnQiw0Q0FBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDYzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdEQUFjO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdEQUFjO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERXO0FBQ0k7QUFDVDtBQUNtQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQVM7QUFDWCxFQUFFLDhEQUFXO0FBQ2I7QUFDQTtBQUNBLEVBQUUsa0RBQWEsQ0FBQyw0Q0FBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7VUNuRHBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3QtY2xhc3MuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVzdG9yZUxvY2FsIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IGFsbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdC1jbGFzcy5qc1wiO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XG5mdW5jdGlvbiByZW5kZXIob2JqKSB7XG4gIC8vIENyZWF0ZSB0aGUgRGl2IGFuZCBpdHMgY29udGVudHNcbiAgbGV0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gIGNoZWNrYm94Lm5hbWUgPSBcImRvbmVcIjtcbiAgY2hlY2tib3guaWQgPSBcInRvZ2dsZURvbmVcIjtcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICBsZXQgZGV0YWlsc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRldGFpbHNCdG4udGV4dENvbnRlbnQgPSBcIkRFVEFJTFNcIjtcbiAgZGV0YWlsc0J0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1idG5zXCIpO1xuICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkdWVEYXRlLnRleHRDb250ZW50ID0gb2JqLmR1ZURhdGU7XG4gIGxldCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRURJVFwiO1xuICBlZGl0QnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJ0bnNcIik7XG4gIGxldCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZWxCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJ0bnNcIik7XG4gIC8vIEFwcGVuZCBhbGwgY29udGVudHMgdG8gdGhlIGRpdiBhbmQgZGl2IHRvIHRoZSBjb250YWluZXJcbiAgbmV3VGFzay5hcHBlbmQoY2hlY2tib3gsIHRpdGxlLCBkZXRhaWxzQnRuLCBkdWVEYXRlLCBlZGl0QnRuLCBkZWxCdG4pO1xuICBjb250YWluZXIuYXBwZW5kKG5ld1Rhc2spO1xufVxuXG4vLyBDb250cm9sIE1vZGFsXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZE5ld1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJnLW1vZGFsXCIpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmctbW9kYWxcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSk7XG4vLyBUb2dnbGUgYmV0d2VlbiBhZGQgdGFzayBhbmQgYWRkIHByb2plY3QgZm9ybXNcbmRvY3VtZW50XG4gIC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZm9ybS1idG5cIilcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdGFzay1mb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1wcm9qZWN0LWZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stZm9ybS1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC1mb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctdGFzay1mb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59KTtcbi8vIEFkZCB0aGUgcHJvamVjdHMgdG8gbmF2XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMob2JqKSB7XG4gIGNvbnN0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIik7XG4gIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgbGkuYXBwZW5kKHNwYW4pO1xuICB1bC5hcHBlbmQobGkpO1xuICAvLyBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvYmoucmVuZGVyUHJvamVjdFRhc2tzLmJpbmQob2JqKSk7XG59XG4vLyBFdmVudCBsaXN0ZW5lciBmb3IgaG9tZSBidXR0b25cbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIik7XG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHJlc3RvcmVMb2NhbCgpO1xufSk7XG4vLyBFdmVudCBMaXN0ZW5lciB0byByZW5kZXIgdGhlIGFycmF5IGluIGVhY2ggcHJvamVjdC5cbi8vIE1ldGhvZCBvZiBjbGFzcyBQcm9qZWN0IHdhcyBnaXZpbmcgbWUgcHJvYmxlbSBzbyBJIG1vdmVkIGl0IGhlcmUuXG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcbnByb2plY3RMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+XG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZEV2ZW50VG9Qcm9qZWN0KVxuKTtcbmZ1bmN0aW9uIGFkZEV2ZW50VG9Qcm9qZWN0KGUpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgbGV0IHRoZVByb2plY3QgPSBlLnRhcmdldC5vdXRlclRleHQudG9Mb3dlckNhc2UoKTtcbiAgZm9yIChsZXQgcHJvamVjdCBvZiBhbGxQcm9qZWN0cykge1xuICAgIGlmIChwcm9qZWN0LnRpdGxlLnRvTG93ZXJDYXNlKCkgPT09IHRoZVByb2plY3QpIHtcbiAgICAgIHByb2plY3QubXlBcnJheS5tYXAocmVuZGVyKTtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjtcbiIsImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2suanNcIjtcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vZG9tLmpzXCI7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdC1jbGFzcy5qc1wiO1xuXG5sZXQgdGFzazEgPSBuZXcgVGFzayhcbiAgXCJHZXQgSGVscFwiLFxuICBcIlRvIGdldCBzb21lIEtpbmQgb2YgaGVhbHBcIixcbiAgXCI5LTEwLTIwMjFcIixcbiAgXCJIaWdoXCIsXG4gIFwiRmFsc2VcIlxuKTtcbmxldCB0YXNrMiA9IG5ldyBUYXNrKFxuICBcIkdldCBIZWxwXCIsXG4gIFwiVG8gZ2V0IHNvbWUgS2luZCBvZiBoZWFscFwiLFxuICBcIjktMTAtMjAyMVwiLFxuICBcIkhpZ2hcIixcbiAgXCJGYWxzZVwiXG4pO1xubGV0IHRhc2szID0gbmV3IFRhc2soXG4gIFwiR2V0IEhlbHBcIixcbiAgXCJUbyBnZXQgc29tZSBLaW5kIG9mIGhlYWxwXCIsXG4gIFwiOS0xMC0yMDIxXCIsXG4gIFwiSGlnaFwiLFxuICBcIkZhbHNlXCJcbik7XG5sZXQgaG9tZUFycmF5ID0gW107XG4vLyBMb2NhbCBTdG9yYWdlXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxvY2FsKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImhvbWVBcnJheVwiLCBKU09OLnN0cmluZ2lmeShob21lQXJyYXkpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZXN0b3JlTG9jYWwoKSB7XG4gIGhvbWVBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJob21lQXJyYXlcIikpO1xuICBpZiAoaG9tZUFycmF5ID09PSBudWxsKSBob21lQXJyYXkgPSBbXTtcbiAgaG9tZUFycmF5Lm1hcChyZW5kZXIpO1xufVxuLy8gQ2FsbCB0aGlzIGZ1bmN0aW9uIGV2ZXJ5dGltZSBteSBhcHAgaXMgcmV2aXNpdGVkIG9yIHJlbG9hZGVkXG5yZXN0b3JlTG9jYWwoKTtcbmV4cG9ydCBkZWZhdWx0IGhvbWVBcnJheTtcbiIsImltcG9ydCB7IHJlbmRlclByb2plY3RzIH0gZnJvbSBcIi4vZG9tXCI7XG5cbmNsYXNzIFByb2plY3RzIHtcbiAgY29uc3RydWN0b3IodGl0bGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5teUFycmF5ID0gW107XG4gIH1cbiAgLy8gQWRkIGxvZ2ljIHRvIHJlbW92ZSB0aGUgcHJvamVjdHMgb25jZSBhbGwgdGhlIHRhc2tzIGFkZGVkIGFyZSBkZWxldGVkXG59XG5jb25zdCBjaG9yZXMgPSBuZXcgUHJvamVjdHMoXCJDaG9yZXNcIik7XG5leHBvcnQgbGV0IGFsbFByb2plY3RzID0gW2Nob3Jlc107XG5cbi8vIFVzZSBldmVudCBsaXN0ZW5lciB0byBjYWxsIHByb2plY3RzIGNsYXNzIHRvIGNyZWF0ZSBuZXcgYXJyYXlcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFByb2plY3RcIik7XG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGROZXdQcm9qZWN0KTtcbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3QoKSB7XG4gIGNyZWF0ZVByb2plY3QoKTtcbiAgLy8gZGlzcGxheSBwcm9qZWN0cyBhbmQgaGlkZSBtb2RhbHNcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgYWxsUHJvamVjdHMubWFwKHJlbmRlclByb2plY3RzKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZy1tb2RhbFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3QtZm9ybVwiKS5yZXNldCgpO1xuICBzYXZlTG9jYWxQcm9qZWN0cygpO1xufVxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbiAgLy8gVXNlZCB0aGlzIHRvIGdldCB2YWx1ZSBvZiB0aXRsZSBlaXRoZXIgSSBhbSBjcmVhdGluZyBhIG5ldyBwcm9qZWN0IGZyb21cbiAgLy8gcHJvamVjdCBmb3JtIG9yIGZyb20gdGFzayBmb3JtLlxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1wcm9qZWN0LXRpdGxlXCIpLnZhbHVlO1xuICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0cyh0aXRsZSk7XG4gIGFsbFByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG59XG5leHBvcnQgZnVuY3Rpb24gc29ydFByb2plY3QobmV3VGFzaykge1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lXCIpLnZhbHVlO1xuICBpZiAocHJvamVjdE5hbWUgPT09IFwiXCIpIHJldHVybjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhbGxQcm9qZWN0c1tpXS50aXRsZSA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgIGFsbFByb2plY3RzW2ldLm15QXJyYXkucHVzaChuZXdUYXNrKTtcbiAgICB9XG4gIH1cbiAgc2F2ZUxvY2FsUHJvamVjdHMoKTtcbn1cbi8vIExvY2FsIFN0b3JhZ2VcbmZ1bmN0aW9uIHNhdmVMb2NhbFByb2plY3RzKCkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFsbFByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGFsbFByb2plY3RzKSk7XG59XG5mdW5jdGlvbiByZXN0b3JlTG9jYWxQcm9qZWN0cygpIHtcbiAgYWxsUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsUHJvamVjdHNcIikpO1xuICBpZiAoYWxsUHJvamVjdHMgPT09IG51bGwpIGFsbFByb2plY3RzID0gW2Nob3Jlc107XG4gIGFsbFByb2plY3RzLm1hcChyZW5kZXJQcm9qZWN0cyk7XG59XG4vLyBDYWxsIHRoaXMgZnVuY3Rpb24gZXZlcnl0aW1lIG15IGFwcCBpcyByZXZpc2l0ZWQgb3IgcmVsb2FkZWRcbnJlc3RvcmVMb2NhbFByb2plY3RzKCk7XG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiIsImltcG9ydCBob21lQXJyYXkgZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7IHNhdmVMb2NhbCB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL2RvbS5qc1wiO1xuaW1wb3J0IHsgc29ydFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0LWNsYXNzLmpzXCI7XG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tsaXN0KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNoZWNrbGlzdCA9IGNoZWNrbGlzdDtcbiAgfVxuICBnZXREZXRhaWxzKCkge1xuICAgIC8vIENhbGwgdGhlIERPTSBNYW5pcHVsYXRpb24gdGhhdCB3aWxsIGdldCBkZXRhaWxzIGhlcmVcbiAgfVxuICBzZXREZXRhaWxzKCkge1xuICAgIC8vIENhbGwgdGhlIERPTSBNYW5pcHVsYXRpb24gdGhhdCB3aWxsIHNob3cgZm9ybSBhbmQgYWxsb3cgZW50cmllcyB0byBiZSBlbnRlcmVkXG4gIH1cbiAgZGVsZXRlVGFzaygpIHtcbiAgICAvLyBSZW1vdmUgdGhlIE9iamVjdCBmcm9tIHRoZSBBcnJheXMgaXQgaXMgbG9jYXRlZFxuICB9XG4gIGFkZFRvQXJyYXlzKCkge1xuICAgIGhvbWVBcnJheS5wdXNoKHRoaXMpO1xuICAgIC8vIElmIGJlbG9uZ3MgdG8gYSBwcm9qZWN0LCBwdXNoIHRvIHByb2plY3QgYXJyYXkgdG9vXG4gIH1cbiAgdG9nZ2xlQ2hlY2soKSB7XG4gICAgLy8gQ2hlY2sgb24gb3Igb2ZmIHRvIHNob3cgY29tcGxldGlvbiBvZiB0YXNrXG4gIH1cbn1cblxuLy8gVE9ETzogTW92ZSB0aGlzIGF3YXkgZnJvbSBoZXJlIG9uY2UgeW91IGZpbmQgYSBzb2x1dGlvbiB0byB3ZWJwYWNrIG1lc3Npbmcgd2l0aCBpbXBvcnRlZCBjbGFzc2VzXG4vLyBGb3JtIFN1Ym1pdCBCdXR0b25cbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFRvZG9cIik7XG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGROZXdUYXNrKTtcbmZ1bmN0aW9uIGFkZE5ld1Rhc2soZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stdGl0bGVcIikudmFsdWU7XG4gIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stZGV0YWlsc1wiKS52YWx1ZTtcbiAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLWR1ZS1kYXRlXCIpLnZhbHVlO1xuICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlO1xuICBsZXQgY2hlY2tsaXN0ID0gdW5kZWZpbmVkO1xuICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrbGlzdCk7XG4gIG5ld1Rhc2suYWRkVG9BcnJheXMoKTtcbiAgc2F2ZUxvY2FsKCk7XG4gIHNvcnRQcm9qZWN0KG5ld1Rhc2spO1xuICAvLyBUaGUgbmV4dCBsaW5lIG9mIGNvZGUgd2FzIGFkZGVkIGJlY2F1c2UgdGhlIGNvbnRlbnRzIG9mIHRoZSBob21lQXJyYXkga2VwdCBkdXBsaWNhdGluZyBkdXJpbmcgcmVuZGVyaW5nLiBBIHRlbXBvcmFyeSBmaXgsIGZpbmQgcGVybWFuZW50IGZpeCBsYXRlclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICBob21lQXJyYXkubWFwKHJlbmRlcik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmctbW9kYWxcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLWZvcm1cIikucmVzZXQoKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFRhc2s7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9