const game = () => {

	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;

	function playGame() {
		const optionRock = document.getElementById('game_options_rock');
		const optionPaper = document.getElementById('game_options_paper');
		const optionScissors = document.getElementById('game_options_scissors');

		const playerOptions = [optionRock, optionPaper, optionScissors];
		const computerOptions = ['rock', 'paper', 'scissors'];

		playerOptions.forEach(option => {
			option.addEventListener('click', function() {
				const movesLeft = document.getElementById('game_moves_left');

				moves++;
				movesLeft.innerText = `Moves left: ${10 - moves}`;

				let randomNumber = Math.floor(Math.random() * 3)
				let computerChoice = computerOptions[randomNumber]

				winner(this.innerText, computerChoice);

				if(moves == 10) {
					gameOver(playerOptions, movesLeft)
				}
			})
		})
	}

	function winner(player, computer) {
		const result = document.getElementById('game_result');
		const playerScoreBoard = document.getElementById('game_human_score');
		const computerScoreBoard = document.getElementById('game_computer_score');

		player = player.toLowerCase();
		computer = computer.toLowerCase();

		if(player === computer) {
			result.innerText = 'Tie!';

		}

		else if(player == 'rock') {

			if(computer == 'paper') {
				result.innerText = 'Computer Won!';
				computerScore++;
				computerScoreBoard.innerText = computerScore;
			} else {
				result.innerText = 'Player Won!';
				playerScore++;
				playerScoreBoard.innerText = playerScore;
			}
		}

		else if(player == 'paper') {

			if(computer == 'scissors') {
				result.innerText = 'Computer Won!';
				computerScore++;
				computerScoreBoard.innerText = computerScore;
			} else {
				result.innerText = 'Player Won!';
				playerScore++;
				playerScoreBoard.innerText = playerScore;
			}
		}

		else if(player == 'scissors') {

			if(computer == 'rock') {
				result.innerText = 'Computer Won!';
				computerScore++;
				computerScoreBoard.innerText = computerScore;
			} else {
				result.innerText = 'Player Won!';
				playerScore++;
				playerScoreBoard.innerText = playerScore;
			}
		}
	}

	const gameOver = (playerOptions, movesLeft) => {
		const gameOverResult = document.getElementById('game_over');
		const gameOptions = document.querySelector('.game_options');
		const gameMoveTitle = document.querySelector('.game_move_title')

		const result = document.getElementById('game_result');

		const restartButton = document.getElementById('game_reset')

		gameMoveTitle.style.display = 'none';
		gameOptions.style.display = 'none';
		movesLeft.style.display = 'none';
		result.style.display = 'none';

		if(playerScore > computerScore) {
			gameOverResult.innerText = 'Congrats, human! You won the game!';
			gameOverResult.style.color = 'green';
		} else if(playerScore < computerScore) {
			gameOverResult.innerText = 'Sorry, human. You lost the game.';
			gameOverResult.style.color = 'red';
		} else {
			gameOverResult.innerText = 'Tie! Try again!';
			gameOverResult.style.color = 'blue';
		}

		restartButton.style.display = 'initial';
		restartButton.addEventListener('click', () => {
			window.location.reload();
		})

	}

	playGame();

}

game();