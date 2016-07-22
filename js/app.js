$(document).ready(function () {
	$("#board").hide();
	var finishHTML = "<div class='screen screen-win' id='finish'>";
	finishHTML += "<header>";
	finishHTML += "<h1>Tic Tac Toe</h1>";
	finishHTML += "<p class='message'></p>";
	finishHTML += "<a href='#' class='button'>New game</a>"
	finishHTML += "</header>";
	finishHTML += "</div>";
	$("body").append(finishHTML);
	$("#finish").hide();
	var startHTML = "<div class='screen screen-start' id='start'>";
	startHTML += "<header>";
	startHTML += "<h1>Tic Tac Toe</h1>";
	startHTML += "<a href='#' class='button'>Start game</a>";
	startHTML += "</header>";
	startHTML += "</div>";
	$("body").append(startHTML);
	$("a.button").click(function () {
		GameUI.newGame();
		GameUI.beginTurn();
	});
});

//var newGame = new GameBoard();














