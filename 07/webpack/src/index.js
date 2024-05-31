// External JavaScript
import './styles/main.css';

console.log("External JavaScript is running!");

document.getElementById('myButton').addEventListener('click', function() {
    alert('Hello from external JavaScript!');
});

alert('connected!')