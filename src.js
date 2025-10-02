let gamestate = "bootup"; //gamestate will be how the game knows what is going on. right now, it will be the default playing state,
                           //"console, for coding reasons."

document.getElementById("startbutton").addEventListener("click", () => {
    gamestate = "console";
    document.getElementById("inputline").style.display = "block";
    document.getElementById("startbutton").style.display = "none";
});


while (gamestate == "console") {
    document.getElementById("inputline").focus();
}
