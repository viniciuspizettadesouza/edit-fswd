// Form JavaScript
console.log("Form JavaScript is running!");

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    
    const output = document.getElementById('output');
    output.textContent = `Hello, ${name}! Form submitted.`;
});
