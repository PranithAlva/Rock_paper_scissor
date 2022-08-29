/*
author:Pranith
 */

//reset button
function resetStatus() {
	document.getElementById("userScoreBox").innerText = "0";
	document.getElementById("computerScoreBox").innerText = "0";
	let board = document.querySelector("#board");
	let reset = document.getElementById("reset");
	board.removeChild(reset);
	let matchOutcome = document.getElementById("match-outcomes");
	matchOutcome.textContent = "";
	let result = document.querySelector("#result");
	result.textContent = "";
	let winnerBox = document.querySelector("#winner-board");
	winnerBox.textContent = "";
}

//display reset button
function addResetButton() {
	const winnerBoard = document.querySelector("#board");
	const reset = document.createElement("button");
	reset.setAttribute("id", "reset");
	reset.setAttribute(
		"style",
		"background:rgb(0, 162, 255);color:white;height:50px;"
	);
	reset.textContent = "Reset";
	winnerBoard.appendChild(reset);
	reset.addEventListener("click", () => {
		resetStatus();
	});
}

//function to check who has reached five points
function checkWinner() {
	userScore = Number(document.getElementById("userScoreBox").textContent);
	console.log(userScore);
	computerScore = Number(
		document.getElementById("computerScoreBox").textContent
	);
	console.log(computerScore);
	if (userScore == 5) {
		document.getElementById("winner-board").innerText = "You win!!!";
		addResetButton();
	}
	if (computerScore == 5) {
		document.getElementById("winner-board").innerText = "You Loose!!! :-(";
		addResetButton();
	}
}

//display result in html dox
function displayResult(verdict) {
	const matchOutcome = document.querySelector("#match-outcomes");
	const div = document.createElement("p");
	div.setAttribute("id", "inetermediate-result");
	div.textContent = verdict;
	matchOutcome.appendChild(div);
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

//main compute function
function playRound(playerSelection) {
	const computerSelection = getcomputerChoice();
	document.getElementById(
		"result"
	).innerText = `Computer chooses ${computerSelection}`;
	if (playerSelection == computerSelection) {
		displayResult(`It is a tie`);
		return;
	}
	if (
		(playerSelection == "rock" && computerSelection == "scissor") ||
		(playerSelection == "paper" && computerSelection == "rock") ||
		(playerSelection == "scissor" && computerSelection == "paper")
	) {
		let text = parseInt(document.getElementById("userScoreBox").textContent);
		document.getElementById("userScoreBox").innerText = ++text;
		displayResult(`You Win! ${playerSelection} beats ${computerSelection}`);

		return;
	}
	let text = parseInt(document.getElementById("computerScoreBox").textContent);
	document.getElementById("computerScoreBox").innerText = ++text;
	displayResult(`You Lose! ${computerSelection} beats ${playerSelection}`);
}

/*game function */
function game(keys) {
	playRound(keys);
	checkWinner();
}

const keys = document.querySelectorAll("button");
keys.forEach((keys) => {
	keys.addEventListener("click", () => {
		game(keys.id);
	});
});
