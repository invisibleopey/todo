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
container.addEventListener("click", toggleDone);
function toggleDone(e) {
  if (e.target.id !== "toggleDoneBox") return;
  let targetTitle = e.target.parentNode.children[1].outerText;
  // Loop through all Home array and Project if task is also in a project
  for (let i = 0; i < _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects.length; i++) {
    for (let j = 0; j < _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].myArray.length; j++) {
      if (targetTitle === _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].myArray[j].title) {
        if (_project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].myArray[j].checklist === "done") {
          _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].myArray[j].checklist = undefined;
        } else {
          _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].myArray[j].checklist = "done";
        }
        (0,_project_class_js__WEBPACK_IMPORTED_MODULE_0__.saveLocalProjects)();
        container.innerHTML = "";
        _project_class_js__WEBPACK_IMPORTED_MODULE_0__.allProjects[i].myArray.map(render);
      }
    }
  }
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
      allProjects[i].myArray.push(newTask);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONkI7QUFDQztBQUNtQjs7QUFFakQ7QUFDQSx5RUFBMEIsQ0FBQyw0Q0FBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdC1jbGFzcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsUHJvamVjdHMsIHNhdmVMb2NhbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdC1jbGFzcy5qc1wiO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWluZXJcIik7XG5mdW5jdGlvbiByZW5kZXIob2JqKSB7XG4gIC8vIENyZWF0ZSB0aGUgRGl2IGFuZCBpdHMgY29udGVudHNcbiAgbGV0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICBpZiAob2JqLmNoZWNrbGlzdCA9PT0gXCJkb25lXCIpIG5ld1Rhc2suY2xhc3NMaXN0LmFkZChcImRvbmVcIik7XG4gIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaWYgKG9iai5jaGVja2xpc3QgPT09IFwiZG9uZVwiKSBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgY2hlY2tib3gubmFtZSA9IFwiZG9uZVwiO1xuICBjaGVja2JveC5pZCA9IFwidG9nZ2xlRG9uZUJveFwiO1xuICBsZXQgdGl0bGU7XG4gIGlmIChvYmouY2hlY2tsaXN0ID09PSBcImRvbmVcIikge1xuICAgIHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRlbFwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgfSBlbHNlIHtcbiAgICB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICB9XG4gIGxldCBkZXRhaWxzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGV0YWlsc0J0bi50ZXh0Q29udGVudCA9IFwiREVUQUlMU1wiO1xuICBkZXRhaWxzQnRuLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWJ0bnNcIik7XG4gIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGR1ZURhdGUudGV4dENvbnRlbnQgPSBvYmouZHVlRGF0ZTtcbiAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFRElUXCI7XG4gIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stYnRuc1wiKTtcbiAgbGV0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbEJ0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICBkZWxCdG4uY2xhc3NMaXN0LmFkZChcInRhc2stYnRuc1wiKTtcbiAgZGVsQnRuLmlkID0gXCJkZWxldGVCdG5cIjtcbiAgLy8gQXBwZW5kIGFsbCBjb250ZW50cyB0byB0aGUgZGl2IGFuZCBkaXYgdG8gdGhlIGNvbnRhaW5lclxuICBuZXdUYXNrLmFwcGVuZChjaGVja2JveCwgdGl0bGUsIGRldGFpbHNCdG4sIGR1ZURhdGUsIGVkaXRCdG4sIGRlbEJ0bik7XG4gIGNvbnRhaW5lci5hcHBlbmQobmV3VGFzayk7XG59XG5cbi8vIENvbnRyb2wgTW9kYWxcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkTmV3XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmctbW9kYWxcIikuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZy1tb2RhbFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KTtcbi8vIFRvZ2dsZSBiZXR3ZWVuIGFkZCB0YXNrIGFuZCBhZGQgcHJvamVjdCBmb3Jtc1xuZG9jdW1lbnRcbiAgLnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1mb3JtLWJ0blwiKVxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLWZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXByb2plY3QtZm9ybVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1mb3JtLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1wcm9qZWN0LWZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLWZvcm1cIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn0pO1xuLy8gQWRkIHRoZSBwcm9qZWN0cyB0byBuYXZcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0cyhvYmopIHtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbGlzdFwiKTtcbiAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBpZiAob2JqLnRpdGxlID09PSBcIkhvbWVcIikgcmV0dXJuO1xuICBzcGFuLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICBsaS5hcHBlbmQoc3Bhbik7XG4gIHVsLmFwcGVuZChsaSk7XG59XG4vLyBFdmVudCBsaXN0ZW5lciBmb3IgaG9tZSBidXR0b25cbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVcIik7XG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gIGFsbFByb2plY3RzWzBdLm15QXJyYXkubWFwKHJlbmRlcik7XG59KTtcbi8vIEV2ZW50IExpc3RlbmVyIHRvIHJlbmRlciB0aGUgYXJyYXkgaW4gZWFjaCBwcm9qZWN0LlxuLy8gTWV0aG9kIG9mIGNsYXNzIFByb2plY3Qgd2FzIGdpdmluZyBtZSBwcm9ibGVtIHNvIEkgbW92ZWQgaXQgaGVyZS5cbmNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWxpc3RcIik7XG5wcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkRXZlbnRUb1Byb2plY3QpO1xuZnVuY3Rpb24gYWRkRXZlbnRUb1Byb2plY3QoZSkge1xuICAvLyBOZXh0IGxpbmUgaXMgdG8gZml4IGJ1ZyBvZiBlbXB0eSBzcGFjZXMgY2FsbGluZyB0aGUgZnVuY3Rpb25cbiAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lICE9PSBcIlNQQU5cIikgcmV0dXJuO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRhaW5lclwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICBsZXQgdGhlUHJvamVjdCA9IGUudGFyZ2V0Lm91dGVyVGV4dC50b0xvd2VyQ2FzZSgpO1xuICBmb3IgKGxldCBwcm9qZWN0IG9mIGFsbFByb2plY3RzKSB7XG4gICAgaWYgKHByb2plY3QudGl0bGUudG9Mb3dlckNhc2UoKSA9PT0gdGhlUHJvamVjdCkge1xuICAgICAgcHJvamVjdC5teUFycmF5Lm1hcChyZW5kZXIpO1xuICAgIH1cbiAgfVxufVxuLy8gRXZlbnQgTGlzdGVuZXIgdG8gZGVsZXRlIGEgVGFza1xuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUYXNrKTtcbmZ1bmN0aW9uIGRlbGV0ZVRhc2soZSkge1xuICBpZiAoZS50YXJnZXQuaWQgIT09IFwiZGVsZXRlQnRuXCIpIHJldHVybjtcbiAgbGV0IHRhcmdldFRpdGxlID0gZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlblsxXS5vdXRlclRleHQ7XG4gIC8vIERlbGV0ZSBmcm9tIHRoZSBIb21lIGFycmF5IGFuZCBQcm9qZWN0IGlmIHRhc2sgaXMgYWxzbyBpbiBhIHByb2plY3RcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsUHJvamVjdHNbaV0ubXlBcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKHRhcmdldFRpdGxlID09PSBhbGxQcm9qZWN0c1tpXS5teUFycmF5W2pdLnRpdGxlKSB7XG4gICAgICAgIGFsbFByb2plY3RzW2ldLm15QXJyYXkuc3BsaWNlKGosIDEpO1xuICAgICAgICBzYXZlTG9jYWxQcm9qZWN0cygpO1xuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgYWxsUHJvamVjdHNbaV0ubXlBcnJheS5tYXAocmVuZGVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8vIFRPRE86IEV2ZW50IExpc3RlbmVyIGZvciBlZGl0QnRuIGFuZCBkZXRhaWxzQnRuXG4vLyBFdmVudCBMaXN0ZW5lciBmb3IgdGhlIGNoZWNrQm94IGZvciBtYXJraW5nIGRvbmVcbmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlRG9uZSk7XG5mdW5jdGlvbiB0b2dnbGVEb25lKGUpIHtcbiAgaWYgKGUudGFyZ2V0LmlkICE9PSBcInRvZ2dsZURvbmVCb3hcIikgcmV0dXJuO1xuICBsZXQgdGFyZ2V0VGl0bGUgPSBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuWzFdLm91dGVyVGV4dDtcbiAgLy8gTG9vcCB0aHJvdWdoIGFsbCBIb21lIGFycmF5IGFuZCBQcm9qZWN0IGlmIHRhc2sgaXMgYWxzbyBpbiBhIHByb2plY3RcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgYWxsUHJvamVjdHNbaV0ubXlBcnJheS5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKHRhcmdldFRpdGxlID09PSBhbGxQcm9qZWN0c1tpXS5teUFycmF5W2pdLnRpdGxlKSB7XG4gICAgICAgIGlmIChhbGxQcm9qZWN0c1tpXS5teUFycmF5W2pdLmNoZWNrbGlzdCA9PT0gXCJkb25lXCIpIHtcbiAgICAgICAgICBhbGxQcm9qZWN0c1tpXS5teUFycmF5W2pdLmNoZWNrbGlzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGxQcm9qZWN0c1tpXS5teUFycmF5W2pdLmNoZWNrbGlzdCA9IFwiZG9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIHNhdmVMb2NhbFByb2plY3RzKCk7XG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBhbGxQcm9qZWN0c1tpXS5teUFycmF5Lm1hcChyZW5kZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyO1xuIiwiaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMgfSBmcm9tIFwiLi9kb21cIjtcblxuY2xhc3MgUHJvamVjdHMge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLm15QXJyYXkgPSBbXTtcbiAgfVxuICAvLyBBZGQgbG9naWMgdG8gcmVtb3ZlIHRoZSBwcm9qZWN0cyBvbmNlIGFsbCB0aGUgdGFza3MgYWRkZWQgYXJlIGRlbGV0ZWRcbn1cbmNvbnN0IGhvbWUgPSBuZXcgUHJvamVjdHMoXCJIb21lXCIpO1xuY29uc3QgY2hvcmVzID0gbmV3IFByb2plY3RzKFwiQ2hvcmVzXCIpO1xuZXhwb3J0IGxldCBhbGxQcm9qZWN0cyA9IFtob21lLCBjaG9yZXNdO1xuXG4vLyBVc2UgZXZlbnQgbGlzdGVuZXIgdG8gY2FsbCBwcm9qZWN0cyBjbGFzcyB0byBjcmVhdGUgbmV3IGFycmF5XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRQcm9qZWN0XCIpO1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkTmV3UHJvamVjdCk7XG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0KCkge1xuICBjcmVhdGVQcm9qZWN0KCk7XG4gIC8vIGRpc3BsYXkgcHJvamVjdHMgYW5kIGhpZGUgbW9kYWxzXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1saXN0XCIpLmlubmVySFRNTCA9IFwiXCI7XG4gIGFsbFByb2plY3RzLm1hcChyZW5kZXJQcm9qZWN0cyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmctbW9kYWxcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1wcm9qZWN0LWZvcm1cIikucmVzZXQoKTtcbiAgc2F2ZUxvY2FsUHJvamVjdHMoKTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4gIC8vIFVzZWQgdGhpcyB0byBnZXQgdmFsdWUgb2YgdGl0bGUgZWl0aGVyIEkgYW0gY3JlYXRpbmcgYSBuZXcgcHJvamVjdCBmcm9tXG4gIC8vIHByb2plY3QgZm9ybSBvciBmcm9tIHRhc2sgZm9ybS5cbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctcHJvamVjdC10aXRsZVwiKS52YWx1ZTtcbiAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdHModGl0bGUpO1xuICBhbGxQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRQcm9qZWN0KG5ld1Rhc2spIHtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmFtZVwiKS52YWx1ZTtcbiAgaWYgKHByb2plY3ROYW1lID09PSBcIlwiKSByZXR1cm47XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYWxsUHJvamVjdHNbaV0udGl0bGUgPT09IHByb2plY3ROYW1lKSB7XG4gICAgICBhbGxQcm9qZWN0c1tpXS5teUFycmF5LnB1c2gobmV3VGFzayk7XG4gICAgfVxuICB9XG59XG4vLyBMb2NhbCBTdG9yYWdlXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxvY2FsUHJvamVjdHMoKSB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWxsUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoYWxsUHJvamVjdHMpKTtcbn1cbmZ1bmN0aW9uIHJlc3RvcmVMb2NhbFByb2plY3RzKCkge1xuICBhbGxQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbGxQcm9qZWN0c1wiKSk7XG4gIGlmIChhbGxQcm9qZWN0cyA9PT0gbnVsbCkgYWxsUHJvamVjdHMgPSBbaG9tZSwgY2hvcmVzXTtcbiAgYWxsUHJvamVjdHMubWFwKHJlbmRlclByb2plY3RzKTtcbn1cbi8vIENhbGwgdGhpcyBmdW5jdGlvbiBldmVyeXRpbWUgbXkgYXBwIGlzIHJldmlzaXRlZCBvciByZWxvYWRlZFxucmVzdG9yZUxvY2FsUHJvamVjdHMoKTtcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xuIiwiaW1wb3J0IHsgYWxsUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0LWNsYXNzLmpzXCI7XG5pbXBvcnQgeyBzYXZlTG9jYWxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3QtY2xhc3MuanNcIjtcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vZG9tLmpzXCI7XG5pbXBvcnQgeyBzb3J0UHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3QtY2xhc3MuanNcIjtcbmNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjaGVja2xpc3QpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuY2hlY2tsaXN0ID0gY2hlY2tsaXN0O1xuICB9XG4gIGdldERldGFpbHMoKSB7XG4gICAgLy8gQ2FsbCB0aGUgRE9NIE1hbmlwdWxhdGlvbiB0aGF0IHdpbGwgZ2V0IGRldGFpbHMgaGVyZVxuICB9XG4gIHNldERldGFpbHMoKSB7XG4gICAgLy8gQ2FsbCB0aGUgRE9NIE1hbmlwdWxhdGlvbiB0aGF0IHdpbGwgc2hvdyBmb3JtIGFuZCBhbGxvdyBlbnRyaWVzIHRvIGJlIGVudGVyZWRcbiAgfVxuICBkZWxldGVUYXNrKCkge1xuICAgIC8vIFJlbW92ZSB0aGUgT2JqZWN0IGZyb20gdGhlIEFycmF5cyBpdCBpcyBsb2NhdGVkXG4gIH1cbiAgYWRkVG9Ib21lQXJyYXkoKSB7XG4gICAgYWxsUHJvamVjdHNbMF0ubXlBcnJheS5wdXNoKHRoaXMpO1xuICAgIC8vIElmIGJlbG9uZ3MgdG8gYSBwcm9qZWN0LCBwdXNoIHRvIHByb2plY3QgYXJyYXkgdG9vXG4gIH1cbiAgdG9nZ2xlQ2hlY2soKSB7XG4gICAgLy8gQ2hlY2sgb24gb3Igb2ZmIHRvIHNob3cgY29tcGxldGlvbiBvZiB0YXNrXG4gIH1cbn1cblxuLy8gVE9ETzogTW92ZSB0aGlzIGF3YXkgZnJvbSBoZXJlIG9uY2UgeW91IGZpbmQgYSBzb2x1dGlvbiB0byB3ZWJwYWNrIG1lc3Npbmcgd2l0aCBpbXBvcnRlZCBjbGFzc2VzXG4vLyBGb3JtIFN1Ym1pdCBCdXR0b25cbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFRvZG9cIik7XG5hZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGROZXdUYXNrKTtcbmZ1bmN0aW9uIGFkZE5ld1Rhc2soZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stdGl0bGVcIikudmFsdWU7XG4gIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LXRhc2stZGV0YWlsc1wiKS52YWx1ZTtcbiAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLWR1ZS1kYXRlXCIpLnZhbHVlO1xuICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlO1xuICBsZXQgY2hlY2tsaXN0ID0gdW5kZWZpbmVkO1xuICBsZXQgbmV3VGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrbGlzdCk7XG4gIG5ld1Rhc2suYWRkVG9Ib21lQXJyYXkoKTtcbiAgc29ydFByb2plY3QobmV3VGFzayk7XG4gIHNhdmVMb2NhbFByb2plY3RzKCk7XG4gIC8vIFRoZSBuZXh0IGxpbmUgb2YgY29kZSB3YXMgYWRkZWQgYmVjYXVzZSB0aGUgY29udGVudHMgb2YgdGhlIGhvbWVBcnJheSBrZXB0IGR1cGxpY2F0aW5nIGR1cmluZyByZW5kZXJpbmcuIEEgdGVtcG9yYXJ5IGZpeCwgZmluZCBwZXJtYW5lbnQgZml4IGxhdGVyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFpbmVyXCIpLmlubmVySFRNTCA9IFwiXCI7XG4gIGFsbFByb2plY3RzWzBdLm15QXJyYXkubWFwKHJlbmRlcik7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmctbW9kYWxcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy10YXNrLWZvcm1cIikucmVzZXQoKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFRhc2s7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2suanNcIjtcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vZG9tLmpzXCI7XG5pbXBvcnQgeyBhbGxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3QtY2xhc3MuanNcIjtcblxuLy8gQ2FsbCB0aGlzIGZ1bmN0aW9uIGV2ZXJ5dGltZSBteSBhcHAgaXMgcmV2aXNpdGVkIG9yIHJlbG9hZGVkXG5hbGxQcm9qZWN0c1swXS5teUFycmF5Lm1hcChyZW5kZXIpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9