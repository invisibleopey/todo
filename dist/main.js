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
  li.append(span);
  ul.append(li);
  li.addEventListener("click", obj.renderProjectTasks);
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
const homeBtn = document.querySelector("#home");
homeBtn.addEventListener("click", restoreLocal);
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



class Projects {
  constructor(title) {
    this.title = title;
    this.myArray = [];
  }
  renderProjectTasks() {
    document.querySelector("#container").innerHTML = "";
    if (this.Array === undefined) return;
    this.myArray.map(_dom__WEBPACK_IMPORTED_MODULE_0__.default);
    // Code to render content of this.myArray
  }
  // Add logic to remove the projects once all the tasks added are deleted
}
const chores = new Projects("Chores");
const allProjects = [chores];
allProjects.map(_dom__WEBPACK_IMPORTED_MODULE_0__.renderProjects);

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
  allProjects.map(_dom__WEBPACK_IMPORTED_MODULE_0__.renderProjects);
  document.querySelector(".bg-modal").style.display = "none";
  document.querySelector("#new-project-form").reset();
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hETztBQUNDO0FBQ1k7O0FBRTFDLGdCQUFnQiw2Q0FBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNkNBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZDQUFJO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsZ0JBQWdCLDRDQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDRTtBQUNZOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHlDQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixnREFBYzs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0RBQWM7QUFDaEM7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ1c7QUFDSTtBQUNUO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQWM7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBUztBQUNYO0FBQ0E7QUFDQSxFQUFFLGtEQUFhLENBQUMsNENBQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7O1VDakRwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0LWNsYXNzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpO1xuZnVuY3Rpb24gcmVuZGVyKG9iaikge1xuICAvLyBDcmVhdGUgdGhlIERpdiBhbmQgaXRzIGNvbnRlbnRzXG4gIGxldCBuZXdUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmV3VGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICBjaGVja2JveC5uYW1lID0gXCJkb25lXCI7XG4gIGNoZWNrYm94LmlkID0gXCJ0b2dnbGVEb25lXCI7XG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgbGV0IGRldGFpbHNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZXRhaWxzQnRuLnRleHRDb250ZW50ID0gXCJERVRBSUxTXCI7XG4gIGRldGFpbHNCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stYnRuc1wiKTtcbiAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IG9iai5kdWVEYXRlO1xuICBsZXQgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVESVRcIjtcbiAgZWRpdEJ0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1idG5zXCIpO1xuICBsZXQgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsQnRuLnRleHRDb250ZW50ID0gXCJYXCI7XG4gIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKFwidGFzay1idG5zXCIpO1xuICAvLyBBcHBlbmQgYWxsIGNvbnRlbnRzIHRvIHRoZSBkaXYgYW5kIGRpdiB0byB0aGUgY29udGFpbmVyXG4gIG5ld1Rhc2suYXBwZW5kKGNoZWNrYm94LCB0aXRsZSwgZGV0YWlsc0J0biwgZHVlRGF0ZSwgZWRpdEJ0biwgZGVsQnRuKTtcbiAgY29udGFpbmVyLmFwcGVuZChuZXdUYXNrKTtcbn1cblxuLy8gQ29udHJvbCBNb2RhbFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGROZXdcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZy1tb2RhbFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJnLW1vZGFsXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuLy8gVG9nZ2xlIGJldHdlZW4gYWRkIHRhc2sgYW5kIGFkZCBwcm9qZWN0IGZvcm1zXG5kb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWZvcm0tYnRuXCIpXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stZm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC1mb3JtXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWZvcm0tYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3QtZm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stZm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufSk7XG4vLyBBZGQgdGhlIHByb2plY3RzIHRvIG5hdlxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RzKG9iaikge1xuICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1saXN0XCIpO1xuICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gIGxpLmFwcGVuZChzcGFuKTtcbiAgdWwuYXBwZW5kKGxpKTtcbiAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9iai5yZW5kZXJQcm9qZWN0VGFza3MpO1xufVxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyO1xuIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xuaW1wb3J0IHJlbmRlciBmcm9tIFwiLi9kb20uanNcIjtcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0LWNsYXNzLmpzXCI7XG5cbmxldCB0YXNrMSA9IG5ldyBUYXNrKFxuICBcIkdldCBIZWxwXCIsXG4gIFwiVG8gZ2V0IHNvbWUgS2luZCBvZiBoZWFscFwiLFxuICBcIjktMTAtMjAyMVwiLFxuICBcIkhpZ2hcIixcbiAgXCJGYWxzZVwiXG4pO1xubGV0IHRhc2syID0gbmV3IFRhc2soXG4gIFwiR2V0IEhlbHBcIixcbiAgXCJUbyBnZXQgc29tZSBLaW5kIG9mIGhlYWxwXCIsXG4gIFwiOS0xMC0yMDIxXCIsXG4gIFwiSGlnaFwiLFxuICBcIkZhbHNlXCJcbik7XG5sZXQgdGFzazMgPSBuZXcgVGFzayhcbiAgXCJHZXQgSGVscFwiLFxuICBcIlRvIGdldCBzb21lIEtpbmQgb2YgaGVhbHBcIixcbiAgXCI5LTEwLTIwMjFcIixcbiAgXCJIaWdoXCIsXG4gIFwiRmFsc2VcIlxuKTtcbmxldCBob21lQXJyYXkgPSBbXTtcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIik7XG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXN0b3JlTG9jYWwpO1xuLy8gTG9jYWwgU3RvcmFnZVxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVMb2NhbCgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJob21lQXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkoaG9tZUFycmF5KSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVzdG9yZUxvY2FsKCkge1xuICBob21lQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaG9tZUFycmF5XCIpKTtcbiAgaWYgKGhvbWVBcnJheSA9PT0gbnVsbCkgaG9tZUFycmF5ID0gW107XG4gIGhvbWVBcnJheS5tYXAocmVuZGVyKTtcbn1cbi8vIENhbGwgdGhpcyBmdW5jdGlvbiBldmVyeXRpbWUgbXkgYXBwIGlzIHJldmlzaXRlZCBvciByZWxvYWRlZFxucmVzdG9yZUxvY2FsKCk7XG5leHBvcnQgZGVmYXVsdCBob21lQXJyYXk7XG4iLCJpbXBvcnQgcmVuZGVyIGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMgfSBmcm9tIFwiLi9kb21cIjtcblxuY2xhc3MgUHJvamVjdHMge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLm15QXJyYXkgPSBbXTtcbiAgfVxuICByZW5kZXJQcm9qZWN0VGFza3MoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBpZiAodGhpcy5BcnJheSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgdGhpcy5teUFycmF5Lm1hcChyZW5kZXIpO1xuICAgIC8vIENvZGUgdG8gcmVuZGVyIGNvbnRlbnQgb2YgdGhpcy5teUFycmF5XG4gIH1cbiAgLy8gQWRkIGxvZ2ljIHRvIHJlbW92ZSB0aGUgcHJvamVjdHMgb25jZSBhbGwgdGhlIHRhc2tzIGFkZGVkIGFyZSBkZWxldGVkXG59XG5jb25zdCBjaG9yZXMgPSBuZXcgUHJvamVjdHMoXCJDaG9yZXNcIik7XG5jb25zdCBhbGxQcm9qZWN0cyA9IFtjaG9yZXNdO1xuYWxsUHJvamVjdHMubWFwKHJlbmRlclByb2plY3RzKTtcblxuLy8gVXNlIGV2ZW50IGxpc3RlbmVyIHRvIGNhbGwgcHJvamVjdHMgY2xhc3MgdG8gY3JlYXRlIG5ldyBhcnJheVxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkUHJvamVjdFwiKTtcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZE5ld1Byb2plY3QpO1xuZnVuY3Rpb24gYWRkTmV3UHJvamVjdChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC10aXRsZVwiKS52YWx1ZTtcbiAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdHModGl0bGUpO1xuICBhbGxQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAvLyBkaXNwbGF5IHByb2plY3RzIGFuZCBoaWRlIG1vZGFsc1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbGlzdFwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICBhbGxQcm9qZWN0cy5tYXAocmVuZGVyUHJvamVjdHMpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJnLW1vZGFsXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC1mb3JtXCIpLnJlc2V0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIiwiaW1wb3J0IGhvbWVBcnJheSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgc2F2ZUxvY2FsIH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vZG9tLmpzXCI7XG5jbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY2hlY2tsaXN0KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmNoZWNrbGlzdCA9IGNoZWNrbGlzdDtcbiAgfVxuICBnZXREZXRhaWxzKCkge1xuICAgIC8vIENhbGwgdGhlIERPTSBNYW5pcHVsYXRpb24gdGhhdCB3aWxsIGdldCBkZXRhaWxzIGhlcmVcbiAgfVxuICBzZXREZXRhaWxzKCkge1xuICAgIC8vIENhbGwgdGhlIERPTSBNYW5pcHVsYXRpb24gdGhhdCB3aWxsIHNob3cgZm9ybSBhbmQgYWxsb3cgZW50cmllcyB0byBiZSBlbnRlcmVkXG4gIH1cbiAgZGVsZXRlVGFzaygpIHtcbiAgICAvLyBSZW1vdmUgdGhlIE9iamVjdCBmcm9tIHRoZSBBcnJheXMgaXQgaXMgbG9jYXRlZFxuICB9XG4gIGFkZFRvQXJyYXlzKCkge1xuICAgIGhvbWVBcnJheS5wdXNoKHRoaXMpO1xuICAgIC8vIElmIGJlbG9uZ3MgdG8gYSBwcm9qZWN0LCBwdXNoIHRvIHByb2plY3QgYXJyYXkgdG9vXG4gIH1cbiAgdG9nZ2xlQ2hlY2soKSB7XG4gICAgLy8gQ2hlY2sgb24gb3Igb2ZmIHRvIHNob3cgY29tcGxldGlvbiBvZiB0YXNrXG4gIH1cbn1cblxuLy8gVE9ETzogTW92ZSB0aGlzIGF3YXkgZnJvbSBoZXJlIG9uY2UgeW91IGZpbmQgYSBzb2x1dGlvbiB0byB3ZWJwYWNrIG1lc3Npbmcgd2l0aCBpbXBvcnRlZCBjbGFzc2VzXG4vLyBGb3JtIFN1Ym1pdCBCdXR0b25cbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFRvZG9cIik7XG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGROZXdUYXNrKTtcbmZ1bmN0aW9uIGFkZE5ld1Rhc2soZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stdGl0bGVcIikudmFsdWU7XG4gIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stZGV0YWlsc1wiKS52YWx1ZTtcbiAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLWR1ZS1kYXRlXCIpLnZhbHVlO1xuICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlO1xuICBsZXQgY2hlY2tsaXN0ID0gdW5kZWZpbmVkO1xuICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrbGlzdCk7XG4gIG5ld1Rhc2suYWRkVG9BcnJheXMoKTtcbiAgc2F2ZUxvY2FsKCk7XG4gIC8vIFRoZSBuZXh0IGxpbmUgb2YgY29kZSB3YXMgYWRkZWQgYmVjYXVzZSB0aGUgY29udGVudHMgb2YgdGhlIGhvbWVBcnJheSBrZXB0IGR1cGxpY2F0aW5nIGR1cmluZyByZW5kZXJpbmcuIEEgdGVtcG9yYXJ5IGZpeCwgZmluZCBwZXJtYW5lbnQgZml4IGxhdGVyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gIGhvbWVBcnJheS5tYXAocmVuZGVyKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZy1tb2RhbFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stZm9ybVwiKS5yZXNldCgpO1xufVxuZXhwb3J0IGRlZmF1bHQgVGFzaztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=