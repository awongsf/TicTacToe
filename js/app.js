var gameModule = (function(Game){

	$(document).ready(function () {

		// Create and append HTML for start screen and finish screen.
		// Hide board screen and finish screen.
		$("#board").hide();
		var finishHTML = "<div class='screen screen-win' id='finish'>";
		finishHTML += "<header>";
		finishHTML += "<h1>Tic Tac Toe</h1>";
		finishHTML += "<p class='message'></p>";
		finishHTML += "<a href='#' class='button'>New game</a>";
		finishHTML += "</header>";
		finishHTML += "</div>";
		$("body").append(finishHTML);
		$("#finish").hide();
		var startHTML = "<div class='screen screen-start' id='start'>";
		startHTML += "<header>";
		startHTML += "<h1>Tic Tac Toe</h1>";
		startHTML += "<input type='text' placeholder='Player 1' name='username1'>";
		startHTML += "<input type='text' placeholder='Player 2' name='username2'><br>";
		startHTML += "<a href='#' class='button'>Start game</a>";
		startHTML += "</header>";
		startHTML += "</div>";
		$("body").append(startHTML);

		// Set width and position the username input in start screen
		$("#start > header > input[type='text']").css({
			"margin": "50px",
			"text-align": "center",
			"width": "250px"
		});

		// When user clicks 'Start game' or 'New game' button,
		// get username, display it on board screen, and
		// begin a new game.
		$("a.button").click(function () {
			if (Game.playerOne === "" && Game.playerTwo === "") {
				Game.getUsername();
				var usernamesHTML = "<h1>" + Game.playerOne + "</h1>";
				usernamesHTML += "<h1>" + Game.playerTwo + "</h1>";
				$("#board > header").append(usernamesHTML);
				$("#board > header > h1:nth-child(3)").css({
					"left": "2.5%",
					"position": "absolute",
					"top": "6rem"
				});
				$("#board > header > h1:nth-child(4)").css({
					"right": "7%",
					"position": "absolute",
					"top": "6rem"
				});
			}
			Game.newGame();
			Game.beginTurn();
		});
	});

	return Game;

}(gameModule || {}));