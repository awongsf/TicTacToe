var gameModule = (function(Game){

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
		startHTML += "<input type='text' placeholder='Please enter your name' name='username'><br>";
		startHTML += "<a href='#' class='button'>Start game</a>";
		startHTML += "</header>";
		startHTML += "</div>";
		$("body").append(startHTML);
		$("#start > header > input[type='text']").css({
			"margin": "50px 0",
			"text-align": "center",
			"width": "250px"
		});
		$("a.button").click(function () {
			if (Game.username == "") {
				Game.getUsername();
				var usernamesHTML = "<h1>" + Game.username + "</h1>";
				usernamesHTML += "<h1>CPU</h1>";
				$("#board > header").append(usernamesHTML);
				$("#board > header > h1:nth-child(3)").css({
					"left": "2.5%",
					"position": "absolute",
					"top": "6rem"
				});
				$("#board > header > h1:nth-child(4)").css({
					"right": "3%",
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