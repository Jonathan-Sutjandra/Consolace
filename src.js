let lamina = undefined;
let inputline = undefined;
let startbutton = undefined;
let gamestate = undefined;
let usercommand = undefined;

function autogrow(element) {
  element.style.height = "5px";
  element.style.height = (element.scrollHeight) + "px";
}

function setup() {
    lamina = document.getElementById("lamina");
    inputline = document.getElementById("inputline");
    startbutton = document.getElementById("startbutton");
    gamestate = "console";
    inputline.style.display = "block";
    lamina.style.display = "block";
    lamina.textContent = "Welcome to Lamina!\nthe industry command interpereter for space-bourne vessels";
    
    startbutton.style.display = "none";
    inputline.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            e.preventDefault();  
            if (e.repeat) {
                inputline.value = "";
            } else {
                prompt();
            }
        }
        
    });
    inputline.addEventListener("keyup", (e) => {
        if (e.key == "Enter") {
            inputline.value = "";
        }
    });
    inputline.focus();
}



function prompt() {
    lamina.textContent += "\n" + inputline.value;
    usercommand = inputline.textContent;
    inputline.value = "";
    inputline.focus;
    lamina.rows += 1;

}

while (gamestate == "console") {
    inputline.focus();
}


