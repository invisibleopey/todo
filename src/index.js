// eslint-disable-next-line no-unused-vars
import Task from './task';
import render from './dom';
import { allProjects } from './project-class';

let userName = localStorage.getItem('userName');
if (!userName && userName === null) {
  // eslint-disable-next-line no-alert
  userName = prompt('Welcome, please enter your name...');
  localStorage.setItem('userName', userName);
}
const welcomeMessage = document.querySelector('#welcome-msg');
welcomeMessage.textContent = `Welcome back, ${userName}`;
// Call this function everytime my app is revisited or reloaded
allProjects[0].myArray.map(render);
