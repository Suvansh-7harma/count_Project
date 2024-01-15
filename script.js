let count = 0;

function updateDisplay() {
    document.getElementById('counter-display').innerText = count;
}

function increaseCount() {
    count++;
    updateDisplay();
}

function decreaseCount() {
    if (count > 0) {
        count--;
        updateDisplay();
    }
}

function resetCount() {
    count = 0;
    updateDisplay();
}
