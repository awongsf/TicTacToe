var gameModule = (function(Game){

	// Create Game object with winner and username properties
	// set to blank string.
	var Game = { 
		winner: "",
		username: ""
	};

	// Get value of username input in start screen
	Game.getUsername = function () {
		Game.username = $("#start > header > input[type='text']").val();
	}

	// Start a new game by resetting the winner property,
	// hiding start and finish screens, resetting all boxes
	// in game board, and making it Player 1's turn
	Game.newGame = function () {

		Game.winner = "";
		$("#start").hide();
		$("#finish").hide();
		$("#board").show();
		$(".box").each(function () {
			this.style.backgroundImage = "none";
			$(this).removeClass("box-filled-1");
			$(this).removeClass("box-filled-2");
		});
		$("#player2").removeClass("active");
		$("#player1").addClass("active");
	}

	// Highlight empty squares by active player's symbol
	Game.beginTurn = function () {

		$(".box").each(function () {

			$(this).unbind();

			if ($(this).hasClass("box-filled-1") === false && $(this).hasClass("box-filled-2") === false) {

				if ($("#player1").hasClass("active")) {

					$(this).hover(

						function () {
							this.style.backgroundImage = "url('img/o.svg')";
						}, function () {
							this.style.backgroundImage = "none";
						}
					);
				} else if ($("#player2").hasClass("active")) {

					$(this).hover(

						function () {
							this.style.backgroundImage = "url('img/x.svg')";
						}, function () {
							this.style.backgroundImage = "none";
						}
					);
				}
			}
		});

		Game.play();
	}

	// When active player clicks on empty square, fill square with
	// player's symbol, check for winning combination on board, and 
	// allow next player to make move
	Game.play = function () {

		if ($("#player1").hasClass("active")) {

			console.log("Play 1");

			$(".box").each(function () {

				if ($(this).hasClass("box-filled-1") === false && $(this).hasClass("box-filled-2") === false) {

					$(this).click(function () {

						$(this).addClass("box-filled-1");
						$(this).unbind('mouseenter mouseleave');
						this.style.backgroundImage = "url('img/o.svg')";
						Game.checkForWin();
						Game.nextTurn();
					});
				}
			});

		} else if ($("#player2").hasClass("active")) {

			console.log("Play 2");

			$(".box").each(function () {

				if ($(this).hasClass("box-filled-1") === false && $(this).hasClass("box-filled-2") === false) {

					$(this).click(function () {

						$(this).addClass("box-filled-2");
						$(this).unbind('mouseenter mouseleave');
						this.style.backgroundImage = "url('img/x.svg')";
						Game.checkForWin();
						Game.nextTurn();
					});
				}
			});	
		}
	}

	// Remove 'active' class from current player and apply it
	// to the next player
	Game.nextTurn = function () {

		if ($("#player1").hasClass("active")) {

			$("#player1").removeClass("active");
			$("#player2").addClass("active");

			Game.beginTurn();

		} else if ($("#player2").hasClass("active")) {

			$("#player2").removeClass("active");
			$("#player1").addClass("active");

			Game.beginTurn();

		}
	}

	// Get box states and store in an array
	// Check array for a winning combination
	// If there is a winning combination, set value of
	// winner property and call displayWinner
	Game.checkForWin = function () {

		var check = [];

		$(".box").each(function () {
			if ($(this).hasClass("box-filled-1")) {
				check.push("player1");
			} else if ($(this).hasClass("box-filled-2")) {
				check.push("player2");
			} else {
				check.push("empty");
			}
		});
		
		if (check[0] !== "empty" && check[0] === check[1] && check[1] === check[2]) {

			Game.winner = check[0];
			Game.displayWinner();

		} else if (check[3] !== "empty" && check[3] === check[4] && check[4] === check[5]) {

			Game.winner = check[3];
			Game.displayWinner();

		} else if (check[6] !== "empty" && check[6] === check[7] && check[7] === check[8]) {
			
			Game.winner = check[6];
			Game.displayWinner();

		} else if (check[0] !== "empty" && check[0] === check[3] && check[3] === check[6]) {
			
			Game.winner = check[0];
			Game.displayWinner();

		} else if (check[1] !== "empty" && check[1] === check[4] && check[4] === check[7]) {
					
			Game.winner = check[1];
			Game.displayWinner();

		} else if (check[2] !== "empty" && check[2] === check[5] && check[5] === check[8]) {
					
			Game.winner = check[2];
			Game.displayWinner();

		} else if (check[0] !== "empty" && check[0] === check[4] && check[4] === check[8]) {
					
			Game.winner = check[0];
			Game.displayWinner();

		} else if (check[2] !== "empty" && check[2] === check[4] && check[4] === check[6]) {
					
			Game.winner = check[2];
			Game.displayWinner();

		} else if (check.includes("empty") === false){
					
			Game.winner = "Tie Game";
			Game.displayWinner();
		}
	}

	// Show finish screen and style it according to value of winner
	Game.displayWinner = function () {
		if (Game.winner === "player1") {

			$("#finish").removeClass("screen-win-two");
			$("#finish").removeClass("screen-win-tie");
			$(".message").html(Game.username + " wins!");
			$("#finish").addClass("screen-win-one");
			$("#finish").show();
			$("#board").hide();

		} else if (Game.winner === "player2") {

			$("#finish").removeClass("screen-win-one");
			$("#finish").removeClass("screen-win-tie");
			$(".message").html("CPU wins!");
			$("#finish").addClass("screen-win-two");
			$("#finish").show();
			$("#board").hide();

		} else if (Game.winner === "Tie Game") {

			$("#finish").removeClass("screen-win-one");
			$("#finish").removeClass("screen-win-two");
			$(".message").html("It's a Tie!");
			$("#finish").addClass("screen-win-tie");
			$("#finish").show();
			$("#board").hide();

		}
	}

	return Game;

}(gameModule || {}));
