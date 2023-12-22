
// Detecting Button press

let buttons = document.querySelectorAll(".drum");
for(let i = 0; i < buttons.length; i++) 
{

    buttons[i].addEventListener("click", function()
    {
 
        var buttonsinHtml = this.innerHTML;

       makesound(buttonsinHtml);

       btnAnimation(buttonsinHtml);


    }
    )
}

// Detecting Keyboard press

document.addEventListener("keypress", function(event){

    makesound(event.key);

    btnAnimation(event.key);

});

function makesound (key){

    switch(key){
        case"w":
        var cymbal = new Audio("cymbal.mp3");
        cymbal.play();
        break;

        case"a":
        var  tom1= new Audio("tom1.mp3");
        tom1.play();
        break;

        case"s":
        var kick = new Audio("kick.mp3");
        kick.play();
        break;

        case"d":
        var lowertom = new Audio("lowertom.mp3");
        lowertom.play();
        break;

        case"j":
        var cymbal = new Audio("cymbal.mp3");
        cymbal.play();
        break;

        case"k":
        var badjoke = new Audio("bad-joke.mp3");
        badjoke.play();
        break;

        case"l":
        var kick = new Audio("kick.mp3");
        kick.play();
        break;

        default: console.log(buttonsinHtml);
    }

}

function btnAnimation(currentKey){

   var activebtn =  document.querySelector("." + currentKey)

   activebtn.classList.add("pressed");

   setTimeout(function(){
    activebtn.classList.remove("pressed")
   }, 100);

}