const input = document.createElement('input');
document.body.appendChild(input);
input.type = "number";
input.max = 64;
input.style.marginBottom = '10px';
input.placeholder = "Enter size of grid up to 64";

let inputValue = '';

// Listens for input and removes any character that isn't numerical
input.addEventListener('input', () => {
    input.value = input.value.replace(/[^0-9]/g, '');

    // Sets input to 64 if a higher number is entered
    if (input.value > 64) {
        input.value = 64;
    }

    // Converts string to int
    inputValue = parseInt(input.value);
});

const btn = document.createElement('button');
document.body.append(btn)
btn.textContent = 'Generate Grid';
btn.style.marginBottom = '10px';

const padContainer = document.getElementById('pad-container');
document.body.appendChild(padContainer);


function generateGrid() {
    // Resets grid
    padContainer.innerHTML = '';

    for (let i = 0; i < inputValue * inputValue; i++) {
        let pad = document.createElement('div');
        padContainer.appendChild(pad);

        // Assigns each pad element an equal width and height
        pad.style.width = `${100 / inputValue}%`;
        pad.style.height = `${100 / inputValue}%`;

        pad.addEventListener('mouseover', () => {
            pad.style.backgroundColor = 'black';
        });
    };
};

btn.addEventListener('click', generateGrid);