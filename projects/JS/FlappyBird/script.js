let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let jumping = 0;
let counter = 0;


function initializeHole() {
    let random = -((Math.random() * 500) + 200);
    hole.style.top = random + "px";
}
initializeHole()



hole.addEventListener('animationiteration', () => {
    initializeHole()
    counter++;
});


let startTheGame = setInterval(() => {
    let array = []
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping == 0) {
        character.style.top = (characterTop + 3) + "px";
        array.push(counter)
        document.getElementById('score').innerText = `Score:${array[0]}`;
    }
    if (array[0] == 5) {
        block.style.animation = 'block 4s linear infinite'
        hole.style.animation = 'block 4s linear infinite'


    } else if (array[0] == 60) {
        block.style.animation = 'block 3s linear infinite'
        hole.style.animation = 'block 3s linear infinite'

    }
    else if (array[0] == 100) {
        block.style.animation = 'block 2s linear infinite'
        hole.style.animation = 'block 2s linear infinite'
    }

    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let blockHiegth = parseInt(window.getComputedStyle(block).getPropertyValue("height"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(700 - characterTop);
    if ((characterTop > blockHiegth) || ((blockLeft < 100) && (blockLeft > -200) && ((cTop < holeTop) || (cTop > holeTop + 150)))) {
        alert("Game over. Score: " + (counter));

        document.getElementById('char-img').src = 'gameImages/bird3.png'
        character.style.top = 100 + "px";
        counter = 0;
        initializeHole()
    }
}, 10);


let jump = () => {
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function () {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if ((characterTop > 6) && (jumpCount < 15)) {
            character.style.top = (characterTop - 5) + "px";
            document.getElementById('char-img').src = 'gameImages/bird2.png'
        }
        if (jumpCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jumpCount = 0;
        }
        if (jumpCount % 100 === 0) {
            document.getElementById('char-img').src = 'gameImages/bird3.png';
        }
        jumpCount++;
        return
    }, 10);
}


