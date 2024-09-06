let display = document.getElementById("display");
function clearDisplay() {
    display.value = "";

}
function appendToDisplay(operator) {
    display.value += operator

}
function calc() {
    try {
        display.value = eval(display.value)

    } catch (error) {
        display.value = "Error";


    }
}
function sin() {
    let expression = display.value;
    let angleInDegrees = expression;
    if (!isNaN(angleInDegrees)) {
        let angleInRadians = angleInDegrees * Math.PI / 180;
        display.value = Math.sin(angleInRadians);
    } else {
        display.value = 'Invalid Input';
    }
}
function cos() {
    let expression = display.value;
    let angleInDegrees = expression;
    if (!isNaN(angleInDegrees)) {
        let angleInRadians = angleInDegrees * Math.PI / 180;
        display.value = Math.cos(angleInRadians);
    } else {
        display.value = 'Invalid Input';
    }

}