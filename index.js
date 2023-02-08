// Add Event Listeners for .drum buttons
document.querySelectorAll('.drum')
    .forEach((el) => {
    el.addEventListener("click", function() {
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
});

// Add Event Listener for keyboard
document.addEventListener("keydown", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
})

// Play audio clip depending on key parameter (string letter);
function playSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            let crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "k":
            let kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        case "l":
            let snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector(`.${currentKey}`);
    activeButton.classList.add('pressed');
    setTimeout(function () {
        activeButton.classList.remove('pressed');
    }, 200);
}
