// Store the previous position and scale of the 'No' button
let previousPosition = { left: 0, top: 0 };
let currentScale = 1.0;

function handleNo() {
    const noButton = document.getElementById('buttons').lastElementChild;

    // Calculate maximum allowable positions
    const maxX = window.innerWidth - noButton.clientWidth;
    const maxY = window.innerHeight - noButton.clientHeight;

    // Calculate minimum distance from the previous position
    const minDistance = 100; // Adjust this value as needed

    // Generate a new position ensuring minimum distance
    let newPosition;
    do {
        newPosition = {
            left: Math.random() * maxX,
            top: Math.random() * maxY
        };
    } while (
        Math.abs(newPosition.left - previousPosition.left) < minDistance ||
        Math.abs(newPosition.top - previousPosition.top) < minDistance
    );

    // Update the previous position
    previousPosition = newPosition;

    // Teleport the 'No' button within the visible area
    noButton.style.position = 'absolute';
    noButton.style.left = newPosition.left + 'px';
    noButton.style.top = newPosition.top + 'px';
    

    // Increase the size of the 'Yes' button
    const yesButton = document.getElementById('buttons').firstElementChild;
    currentScale += 0.03; // Adjust this value for the desired scaling factor
    yesButton.style.transform = `scale(${currentScale})`;
    

    // Display the 'No' result with a sad GIF
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<img src="src/images/sad.gif" alt=":(">';
    resultDiv.style.display = 'block';
}

function handleYes() {
    // Hide buttons and display the 'Yay' result with a cute GIF
    const buttonsDiv = document.getElementById('buttons');
    const resultDiv = document.getElementById('result');
    
    buttonsDiv.style.display = 'none';
    resultDiv.innerHTML = '<p font-weight=400>Yay!</p><img src="src/images/cute.gif" alt=":)">';
    resultDiv.style.display = 'block';

    // Hide the h1 element
    const h1Element = document.querySelector('h1');
    h1Element.style.display = 'none';
}
