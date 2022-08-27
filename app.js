let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('Rock');
const paper_div = document.getElementById('Paper');
const scissors_div = document.getElementById('Scissors');

const getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const win = (user, computer) => {
    const userChoice_div = document.getElementById(user);
    userScore_span.innerText = ++userScore;
    result_div.innerText = user + ' beats ' + computer + ". You WIN !!!";
    userChoice_div.classList.add('green-glow');
    setTimeout(() => {
        userChoice_div.classList.remove('green-glow');
    },1000);
}



const lose = (user, computer) => {
    const userChoice_div = document.getElementById(user);
    computerScore_span.innerText = ++computerScore;
    result_div.innerText = computer + ' beats ' + user + ". You LOSE !!!";
    userChoice_div.classList.add('red-glow');
    setTimeout(() => {
        userChoice_div.classList.remove('red-glow');
    },1000);
}

const draw = (user, computer) => {
    const userChoice_div = document.getElementById(user);
    result_div.innerText = computer + ' and ' + user + " are same. DRAW !!!";
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => {
        userChoice_div.classList.remove('grey-glow');
    },1000);
}

const game = (userChoice) => {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case 'RockScissors':
        case 'PaperRock':
        case 'ScissorsPaper':
            win(userChoice, computerChoice);
            break;
        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            lose(userChoice, computerChoice);
            break;
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
            draw(userChoice, computerChoice);
            break;
    }
}

const main = () => {
    rock_div.addEventListener('click', (event) => {
        game('Rock');
    });

    paper_div.addEventListener('click', (event) => {
        game('Paper');
    });

    scissors_div.addEventListener('click', (event) => {
        game('Scissors');
    });
}

main();