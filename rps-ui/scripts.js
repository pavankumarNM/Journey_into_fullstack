
let playercount = 0;
let computercount = 0;

const buttons = document.querySelectorAll('input');

function computerplay() {
    let option = ['rock', 'paper', 'scissor'];
    let computerrandom = Math.floor(Math.random() * option.length);
    return computerselect = option[computerrandom];

}

function disableButton() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}




function getresults(playerselect) {
    const computerselect = computerplay();
    let result = ''
    if ((playerselect ==='rock' && computerselect ==='scissors' ) ||
     (playerselect === 'scissors' && computerselect === 'paper') ||
     (playerselect === 'paper' && computerselect === 'rock')) {

        playercount += 1;
        result = ("you Win! " + playerselect + ' beats ' + computerselect
            + "<br><br>Player score: " + playercount + "<br>Computerscore: " + computercount)

        if (playercount == 5) {
            result += '<br><br>You won the game ! Reload the page to play again'
            disableButton();
        }
    }
    else if (computerselect === playerselect) {
        result = ('It\'s a Tie .  You both choose' + playerselect
            + "<br><br>Player score: " + playercount + "<br>Comuter score: " + computercount)
    }
    else {
        computercount += 1;
        result = ("You lose! " + computerselect + ' beats ' + playerselect
            + "<br><br>Player score: " + playercount + "<br>Computerscore: " + computercount)

        if (computercount == 5) {
            result += '<br><br>I won the game! Reload the game to play again';
            disableButton();
        }
        document.getElementById('result').innerHTML = result;
        return;
    }
}


buttons.forEach(button => {
    button.addEventListener('click', function () {

        getresults(button.value);

    })
});