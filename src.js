let lamina = undefined;
let inputline = undefined;
let startbutton = undefined;
let gamestate = undefined;
let usercommand = undefined;
let shipstatus = "good";
let hullstatus = "stable";

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
    lamina.textContent = "Welcome to Lamina!\nthe industry standard command interpereter for space-bourne vessels\nType 'help' for a list of commands";
    
    startbutton.style.display = "none";
    inputline.value = "$ ";
    inputline.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            e.preventDefault();  
            if (!e.repeat) {
                prompt();
            }
        }
        if (inputline.selectionStart <= 2) {
            if (e.key == "ArrowLeft" || e.key == "ArrowUp" || e.key == "Backspace") {
                e.preventDefault();
            }
            inputline.selectionStart = 2
        }
    });
    
    inputline.focus();
    inputline.setSelectionRange(2 ,inputline.value.length);
}

function prompt() {
    lamina.textContent += "\n" + inputline.value;
    usercommand = inputline.value;
    inputline.value = "$ ";
    inputline.focus;
    lamina.rows += 1;
    checkUserCommand(usercommand.split(" "));
}

function checkUserCommand(cmd) {
    switch (cmd[1]) {
        case "help":
            lamina.textContent += "\nFor more information on a specific command, type HELP command-name\nstatus\t displays the general status of the ship"
            lamina.rows += 2;
        break;
        case "status":
            if (cmd.length > 2) { //more modifiers, etc. would go here

            } else {
                lamina.textContent += "\n> Status is " + shipstatus + ".\n> Hull is " + hullstatus;
                lamina.rows += 2;
            }
        break;
    }
}






