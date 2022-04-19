let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
//changing user choice of 'r' 'p' or 's' into the full word
function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors"
}
//scorekeeping + result notification
function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    userScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `Your ${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
    userChoice_div.classList.add('win')
}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    computerScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `Your ${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lose!`;
    userChoice_div.classList.add('lose')
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `Your ${convertToWord(userChoice)} ties ${convertToWord(computerChoice)}. It is a draw!`;
    userChoice_div.classList.add('tie')
}

//game logic for who wins and who loses
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            //console.log("user Wins.");
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            //console.log("user loses.");
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            //console.log("It is a tie.");
            break;
    }
    
}
//accessing the user choice
function main () {
    
    rock_div.addEventListener('click', function() {
        game("r")
        //console.log("hey you clicked on rock");
    })
    
    paper_div.addEventListener('click', function() {
        game("p")
        //console.log("hey you clicked on paper");
    })
    
    scissors_div.addEventListener('click', function() {
        game("s")
        //console.log("hey you clicked on scissors");
    })
}
main();
