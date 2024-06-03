document.addEventListener('DOMContentLoaded', function() {
    const countElement = document.getElementById('count');
    const decreaseButton = document.getElementById('decrease');
    const resetButton = document.getElementById('reset');
    const increaseButton = document.getElementById('increase');

    let count = 0;

    countElement.textContent = count;

    decreaseButton.addEventListener('click', function() {
        count--;
        updateCount();
    });

    resetButton.addEventListener('click', function() {
        count = 0;
        updateCount();
    });

    increaseButton.addEventListener('click', function() {
        count++;
        updateCount();
    });

    function updateCount() {
        countElement.textContent = count;
    }
});
