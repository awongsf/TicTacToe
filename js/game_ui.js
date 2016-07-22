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