!function(){

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

	var Game = {
		
		winner: "",

		checkForWin: function () {
			var boxes = [];
			boxes = $(".box").toArray();
			var check = [];

			for (i = 0; i < boxes.length; i++) {
				if (boxes[i].className.includes("box-filled-1")) {
					check.push("player1");
				} else if (boxes[i].className.includes("box-filled-2")) {
					check.push("player2");
				} else {
					check.push("empty");
				}
			}
			
			if (check[0] !== "empty" && check[0] === check[1] && check[1] === check[2]) {

				this.winner = check[0];
				this.displayWinner();

			} else if (check[3] !== "empty" && check[3] === check[4] && check[4] === check[5]) {

				this.winner = check[3];
				this.displayWinner();

			} else if (check[6] !== "empty" && check[6] === check[7] && check[7] === check[8]) {
				
				this.winner = check[6];
				this.displayWinner();

			} else if (check[0] !== "empty" && check[0] === check[3] && check[3] === check[6]) {
				
				this.winner = check[0];
				this.displayWinner();

			} else if (check[1] !== "empty" && check[1] === check[4] && check[4] === check[7]) {
						
				this.winner = check[1];
				this.displayWinner();

			} else if (check[2] !== "empty" && check[2] === check[5] && check[5] === check[8]) {
						
				this.winner = check[2];
				this.displayWinner();

			} else if (check[0] !== "empty" && check[0] === check[4] && check[4] === check[8]) {
						
				this.winner = check[0];
				this.displayWinner();

			} else if (check[2] !== "empty" && check[2] === check[4] && check[4] === check[6]) {
						
				this.winner = check[2];
				this.displayWinner();

			} else if (check.includes("empty") === false){
						
				this.winner = "Tie Game";
				this.displayWinner();
			}
		},

		displayWinner: function () {
			if (this.winner === "player1") {

				$("#finish").removeClass("screen-win-two");
				$("#finish").removeClass("screen-win-tie");
				$(".message").html("Winner");
				$("#finish").addClass("screen-win-one");
				$("#finish").show();
				$("#board").hide();

			} else if (this.winner === "player2") {

				$("#finish").removeClass("screen-win-one");
				$("#finish").removeClass("screen-win-tie");
				$(".message").html("Winner");
				$("#finish").addClass("screen-win-two");
				$("#finish").show();
				$("#board").hide();

			} else if (this.winner === "Tie Game") {

				$("#finish").removeClass("screen-win-one");
				$("#finish").removeClass("screen-win-two");
				$(".message").html("It's a Tie!");
				$("#finish").addClass("screen-win-tie");
				$("#finish").show();
				$("#board").hide();

			}
		}
	};

	var GameUI = {
		newGame: function () {

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
		},

		beginTurn: function () {

			$(".box").each(function () {

				$(this).unbind();

				if ($(this).hasClass("box-filled-1") === false && $(this).hasClass("box-filled-2") === false) {

					if ($("#player1").hasClass("active")) {

						console.log("Set hover 1");

						$(this).hover(

							function () {
								this.style.backgroundImage = "url('img/o.svg')";
							}, function () {
								this.style.backgroundImage = "none";
							}
						);
					} else if ($("#player2").hasClass("active")) {

						console.log("Set hover 2");

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

			GameUI.play();
		},

		play: function () {

			if ($("#player1").hasClass("active")) {

				console.log("Play 1");

				$(".box").each(function () {

					if ($(this).hasClass("box-filled-1") === false && $(this).hasClass("box-filled-2") === false) {

						$(this).click(function () {

							$(this).addClass("box-filled-1");
							$(this).unbind('mouseenter mouseleave');
							this.style.backgroundImage = "url('img/o.svg')";
							Game.checkForWin();
							GameUI.nextTurn();
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
							GameUI.nextTurn();
						});
					}
				});	
			}
		},

		nextTurn: function () {

			if ($("#player1").hasClass("active")) {

				console.log("Next turn 1");

				$("#player1").removeClass("active");
				$("#player2").addClass("active");

				GameUI.beginTurn();

			} else if ($("#player2").hasClass("active")) {

				console.log("Next turn 2");

				$("#player2").removeClass("active");
				$("#player1").addClass("active");

				GameUI.beginTurn();

			} else {
				console.log("No more turns!");
			}
		}
	};

}();