// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv = document.getElementById('app');
if (typeof appDiv !== 'undefined' && appDiv !== null) {
  appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
}
