function whoWon(winner){
	if(winner === 'rock'){
		return "Rock smashes scissors";
	} else if (winner === 'scissors') {
		return "Scissors shred paper";
	} else {
		return "Paper covers rock";
	}
}

function oneRound(playChoice){
	var choices = [
		{
			name: 'rock',
			beats: 'scissors'
		},
		{
			name: 'scissors',
			beats: 'paper'
		},
		{
			name: 'paper',
			beats: 'rock'
		}
	]

	var compChoice = choices[Math.floor(Math.random()*3)];

	var result = document.getElementById('result');
	var score = document.getElementById('score');

	if(compChoice.name === playChoice){
		result.innerHTML = "The computer chose " + playChoice + ", too. It's a tie!";
	} else if (compChoice.beats === playChoice){
		statement = whoWon(compChoice.name);
		compScore++;
		result.innerHTML = "The computer chose " + compChoice.name + ". " + statement + ", sorry. Computer wins.";
	} else {
		statement = whoWon(playChoice);
		playScore++;
		result.innerHTML = "The computer chose " + compChoice.name + ". " + statement + "! Hurrah! You win!";
	}
	score.innerHTML = "CURRENT SCORE <br/> Player: " + playScore + " Computer: " + compScore
}

var compScore = 0;
var playScore = 0;

var rock = document.getElementById('rockButton');
var paper = document.getElementById('paperButton');
var scissors = document.getElementById('scissorsButton');

rock.onclick = function(){
	oneRound('rock');
};

paper.onclick = function(){
	oneRound('paper');
};

scissors.onclick = function(){
	oneRound('scissors');
};