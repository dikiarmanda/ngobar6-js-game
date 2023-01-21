const RESULT = document.querySelector('#hasil');
const SCORE = document.querySelector('#score');
let userScore = 0, compScore = 0;

function startGame(pilihan) {
    let userChoice = pilihan ;
    let array = ['Batu', 'Kertas', 'Gunting'];
    let compChoice = array[Math.floor(Math.random()*3)];
    let winner = compare(userChoice, compChoice);
    RESULT.classList = '';

    if (winner == 'User') {
        RESULT.innerHTML = winner + ' wins';
        RESULT.classList.add('bg-success', 'rounded-4', 'p-2');
    } else if (winner == 'Computer') {
        RESULT.innerHTML = winner + ' wins';
        RESULT.classList.add('bg-danger', 'rounded-4', 'p-2');
    } else {
        RESULT.innerHTML = winner;
        RESULT.classList.add('bg-secondary', 'rounded-4', 'p-2');
    }

    SCORE.innerHTML = `<span class="bg-secondary bg-opacity-50 rounded-4 py-2 px-3">User: ${userScore}</span><span class="bg-secondary bg-opacity-50 rounded-4 py-2 px-3">Computer: ${compScore}</span>`;
}

function compare(user, comp) {
    if (user === comp) {
        return 'Seri';
    } else if (user == 'Batu') {
        if (comp == 'Gunting') {
            userScore++;
            return 'User';
        } else if (comp == 'Kertas') {
            compScore++;
            return 'Computer';
        }
    } else if (user == 'Kertas') {
        if (comp == 'Batu') {
            userScore++;
            return 'User';
        } else if (comp == 'Gunting') {
            compScore++;
            return 'Computer';
        }
    } else if (user == 'Gunting') {
        if (comp == 'Kertas') {
            userScore++;
            return 'User';
        } else if (comp == 'Batu') {
            compScore++;
            return 'Computer';
        }
    }
}