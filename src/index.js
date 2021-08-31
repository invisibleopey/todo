import Task from "./task.js";
import render from "./dom.js";
import { allProjects } from "./project-class.js";

// Call this function everytime my app is revisited or reloaded
allProjects[0].myArray.map(render);
