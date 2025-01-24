
var button = document.getElementById("btna");
button.addEventListener("click", function() {
    button.style.backgroundColor = "green";
    button.disabled = true;
    
});
var buttonTwo = document.getElementById("btnb");
buttonTwo.addEventListener("click", function() {
    buttonTwo.style.backgroundColor = "green";
    buttonTwo.disabled = true;
    
});
var buttonc = document.getElementById("btnc");
buttonc.addEventListener("click", function() {
    buttonc.style.backgroundColor = "green";
    buttonc.disabled = true;
    
});
var buttond = document.getElementById("btnd");
buttond.addEventListener("click", function() {
    buttond.style.backgroundColor = "green";
    buttond.disabled = true;
    
});
var buttone = document.getElementById("btne");
buttone.addEventListener("click", function() {
    buttone.style.backgroundColor = "green";
    buttone.disabled = true;
    
});
var buttonf = document.getElementById("btnf");
buttonf.addEventListener("click", function() {
    buttonf.style.backgroundColor = "green";
    buttonf.disabled = true;
    
});
var buttong = document.getElementById("btng");
buttong.addEventListener("click", function() {
    buttong.style.backgroundColor = "green";
    buttong.disabled = true;
    
});
var buttonh = document.getElementById("btnh");
buttonh.addEventListener("click", function() {
    buttonh.style.backgroundColor = "green";
    buttonh.disabled = true;
    
});
let buttoni = document.getElementById("btni");
buttoni.addEventListener("click", function() {
    buttoni.style.backgroundColor = "green";
    buttoni.disabled = true;
    
});
let buttonj = document.getElementById("btnj");
var isDisabled = false; // Custom variable to track state

buttonj.addEventListener("click", function () {
    if (isDisabled) {
        // Enable the button and change color to blue
        buttonj.style.backgroundColor = "blue";
        isDisabled = false;
    } else {
        // Disable the button and change color to green
        buttonj.style.backgroundColor = "green";
        isDisabled = true;
    }
});

let buttonk = document.getElementById("btnk");
var isDisabled = false; 
// Custom variable to track state

buttonk.addEventListener("click", function () {
    if (isDisabled) {
        // Enable the button and change color to blue
        buttonk.style.backgroundColor = "blue";
        isDisabled = false;
    } else {
        // Disable the button and change color to green
        buttonk.style.backgroundColor = "green";
        isDisabled = true;
    }
});