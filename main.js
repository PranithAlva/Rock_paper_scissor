/* playRound function*/
function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) return [`It is a Tie`, 0, 0];
	if (
		(playerSelection == "rock" && computerSelection == "scissor") ||
		(playerSelection == "paper" && computerSelection == "rock") ||
		(playerSelection == "scissor" && computerSelection == "paper")
	)
		return [`You Win! ${playerSelection} beats ${computerSelection}`, 1, 0];
	return [`You Lose! ${computerSelection} beats ${playerSelection}`, 0, 1];
}

/*get computer choice */
function getcomputerChoice() {
	const computerChoiceList = ["rock", "paper", "scissor"];
	let computerSelection =
		//Math.floor to bring integer value
		//array length is multiplied to set limit of the integers to that of the length of the array under consideration
		computerChoiceList[Math.floor(Math.random() * computerChoiceList.length)];
	return computerSelection;
}

/*game function */
function game() {
	let userScore = 0;
	let computerScore = 0;
	for (let i = 0; i < 5; i++) {
		/*capture user input */
		let playerSelection = prompt("Rock/Paper/Scissor");
		/*adjust the input to be case-insensitive */
		playerSelection = playerSelection.toLowerCase();
		/*capture computer input*/
		const computerSelection = getcomputerChoice();
		result = playRound(playerSelection, computerSelection);
		console.log(result[0]);
		computerScore += result[2];
		userScore += result[1];
	}
	/*Decide the winner*/
	let decision = "You Lose!!";
	if (computerScore == userScore) {
		decision = "It is a tie!!";
		console.log(decision);
	} else if (userScore > computerScore) {
		decision = "You Win!!";
		console.log(decision);
	} else {
		console.log(decision);
	}

	/*write scores into html*/
	document.getElementById("userScoreBox").innerText = userScore;
	document.getElementById("computerScoreBox").innerText = computerScore;
	document.getElementById("result").innerText = decision;
}
/*function call*/
game();
