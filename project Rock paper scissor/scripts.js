let option = [`rock`, `paper`, `scissor`];
let computerselect;
let usercount = 0;
let computercount = 0;
function computerplay() {
    let computerrandom = Math.floor(Math.random() * option.length);
    computerselect = option[computerrandom];
}

let playertemp;
let playerselect;

function userselect() {
    playertemp = prompt("Enter the player selection ");
    playerselect = playertemp.toLowerCase();

}

function getresults(computer, player) {
    if ((computer === 'rock' && player === 'paper') || (computer === 'paper' && player === 'scissor') ||
        (computer === 'scissor' && player === 'rock')) {
        console.log("user wins");
        usercount++;
    }
    else if (computer === player) {
        console.log("Tie");
    }
    else {
        console.log("Computer wins");
        computercount++;
    }
}

function final() {
    if (usercount > computercount) {
        console.log("User Won");
    }
    else {
        console.log("Computer Won");
    }
}

function game() {

    for (let i = 0; i < 5; i++) {
        userselect();
        computerplay();
        getresults(computerselect, playerselect);
        if (i === 4) {
            final();
        }
    }

}