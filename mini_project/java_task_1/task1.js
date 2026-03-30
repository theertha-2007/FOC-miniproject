const myButton = document.getElementById('myButton');
const messageParagraph = document.getElementById('message');
myButton.addEventListener('click', function() {
    messageParagraph.textContent = 'You clicked the button! The JavaScript file is working.';
    alert('Hello from the external JavaScript file!');
});