var listOfButtons = document.querySelectorAll(".drum");

for (let index = 0; index < listOfButtons.length; index++) {

    listOfButtons[index].addEventListener("click", function(){
        buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);        
    });
}

document.addEventListener("keydown", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);

});


function playSound(input) {
    switch (input) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
        break;

        case "j":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;

        case "k":
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;

        case "l":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
    
        default:
            consol.log(input);
            break;
    }

}

function buttonAnimation(pressedKey) {
    var theButton = document.querySelector("." + pressedKey);
    theButton.classList.add("pressed");

    setTimeout(function () {
        theButton.classList.remove("pressed");
    }, 100);

}
