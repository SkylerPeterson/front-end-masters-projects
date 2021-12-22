let lastFunc = undefined;
let runningTally = 0;

function updateTally() {
    const screen = document.querySelector('.calc-screen');
    switch (lastFunc) {
        case 'divide':
            runningTally /= parseInt(screen.innerText);
            break;
        case 'multiply':
            runningTally *= parseInt(screen.innerText);
            break;
        case 'subtract':
            runningTally -= parseInt(screen.innerText);
            break;
        case 'add':
            runningTally += parseInt(screen.innerText);
            break;
        default:
            return;
    }
}

document.querySelector('.clear').addEventListener('click', function(event) {
    document.querySelector('.calc-screen').innerText = '0';
    runningTally = 0;
    lastFunc = undefined;
});

document.querySelector('.backspace').addEventListener('click', function(event) {
    const screen = document.querySelector('.calc-screen');
    if (screen.innerText.length === 1) {
        screen.innerText = '0';
    } else {
        screen.innerText = screen.innerText.substr(0, screen.innerText.length - 1);
    }
});

document.querySelectorAll('.num-btn').forEach(function(numBtn) {
    numBtn.addEventListener('click', function(event) {
        const screen = document.querySelector('.calc-screen');
        if (screen.innerText === '0') {
            screen.innerText = '';
        }
        screen.innerText += this.innerText;
    });
});

document.querySelector('#equals').addEventListener('click', function(event) {
    updateTally();
    lastFunc = undefined;
    document.querySelector('.calc-screen').innerText = runningTally;
});

document.querySelectorAll('.func-btn').forEach(function(funcBtn) {
    funcBtn.addEventListener('click', function(event) {
        if (this.id == 'equals') {
            return;
        }
        lastFunc = this.id;
        updateTally();
        runningTally = parseInt(document.querySelector('.calc-screen').innerText);
        document.querySelector('.calc-screen').innerText = '0';
    });
});