let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let jumping = 0;
let counter = 0;

// Function to initialize the hole's position
function initializeHole() {
    let random = -((Math.random() * 500) + 200);
    hole.style.top = random + "px";
}
initializeHole();

// Event listener to reinitialize the hole's position and update the score
hole.addEventListener('animationiteration', () => {
    initializeHole();
    counter++;
    document.getElementById('score').innerText = `Score: ${counter}`;
});

// Main game loop
let startTheGame = setInterval(() => {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping == 0) {
        character.style.top = (characterTop + 3) + "px";
    }

    // Collision detection
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let blockHeight = parseInt(window.getComputedStyle(block).getPropertyValue("height"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(700 - characterTop);

    // Check if the character hits the block or misses the hole
    if ((characterTop > blockHeight) || ((blockLeft < 100) && (blockLeft > -200) && ((cTop < holeTop) || (cTop > holeTop + 150)))) {
        alert("Game over. Score: " + counter);
        document.getElementById('char-img').src = 'gameImages/bird3.png';
        character.style.top = 100 + "px";
        counter = 0;
        initializeHole();
    }

    // Adjust the speed of the block and hole animations based on the score
    if (counter == 5) {
        block.style.animation = 'block 4s linear infinite';
        hole.style.animation = 'block 4s linear infinite';
    } else if (counter == 60) {
        block.style.animation = 'block 3s linear infinite';
        hole.style.animation = 'block 3s linear infinite';
    } else if (counter == 100) {
        block.style.animation = 'block 2s linear infinite';
        hole.style.animation = 'block 2s linear infinite';
    }
}, 20);

// Function to handle the jump action
function jump() {
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(() => {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if (jumpCount < 15) {
            character.style.top = (characterTop - 5) + "px";
        }
        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        jumpCount++;
    }, 10);
}

// Event listener for the jump action when the spacebar is pressed
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        if (jumping == 0) {
            jump();
        }
    }
});
