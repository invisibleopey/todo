import Task from "./task.js";
import render from "./dom.js";
import { allProjects } from "./project-class.js";

let userName = localStorage.getItem("userName");
if (!userName || userName === null) {
  userName = prompt("Welcome, please enter your name...");
  localStorage.setItem("userName", userName);
}
let welcomeMessage = document.querySelector("#welcome-msg");
welcomeMessage.textContent = `Welcome back, ${userName}`;
// Call this function everytime my app is revisited or reloaded
allProjects[0].myArray.map(render);
