// var Game = {
// 	winner: "",

// 	checkForWin: function () {
// 		var boxes = [];
// 		boxes = $(".box").toArray();
// 		var check = [];

// 		for (i = 0; i < boxes.length; i++) {
// 			if (boxes[i].className.includes("box-filled-1")) {
// 				check.push("player1");
// 			} else if (boxes[i].className.includes("box-filled-2")) {
// 				check.push("player2");
// 			} else {
// 				check.push("empty");
// 			}
// 		}
		
// 		if (check[0] !== "empty" && check[0] === check[1] && check[1] === check[2]) {

// 			this.winner = check[0];
// 			this.displayWinner();

// 		} else if (check[3] !== "empty" && check[3] === check[4] && check[4] === check[5]) {

// 			this.winner = check[3];
// 			this.displayWinner();

// 		} else if (check[6] !== "empty" && check[6] === check[7] && check[7] === check[8]) {
			
// 			this.winner = check[6];
// 			this.displayWinner();

// 		} else if (check[0] !== "empty" && check[0] === check[3] && check[3] === check[6]) {
			
// 			this.winner = check[0];
// 			this.displayWinner();

// 		} else if (check[1] !== "empty" && check[1] === check[4] && check[4] === check[7]) {
					
// 			this.winner = check[1];
// 			this.displayWinner();

// 		} else if (check[2] !== "empty" && check[2] === check[5] && check[5] === check[8]) {
					
// 			this.winner = check[2];
// 			this.displayWinner();

// 		} else if (check[0] !== "empty" && check[0] === check[4] && check[4] === check[8]) {
					
// 			this.winner = check[0];
// 			this.displayWinner();

// 		} else if (check[2] !== "empty" && check[2] === check[4] && check[4] === check[6]) {
					
// 			this.winner = check[2];
// 			this.displayWinner();

// 		} else if (check.includes("empty") === false){
					
// 			this.winner = "Tie Game";
// 			this.displayWinner();
// 		}
// 	},

// 	displayWinner: function () {
// 		if (this.winner === "player1") {

// 			$("#finish").removeClass("screen-win-two");
// 			$("#finish").removeClass("screen-win-tie");
// 			$(".message").html("Winner");
// 			$("#finish").addClass("screen-win-one");
// 			$("#finish").show();
// 			$("#board").hide();

// 		} else if (this.winner === "player2") {

// 			$("#finish").removeClass("screen-win-one");
// 			$("#finish").removeClass("screen-win-tie");
// 			$(".message").html("Winner");
// 			$("#finish").addClass("screen-win-two");
// 			$("#finish").show();
// 			$("#board").hide();

// 		} else if (this.winner === "Tie Game") {

// 			$("#finish").removeClass("screen-win-one");
// 			$("#finish").removeClass("screen-win-two");
// 			$(".message").html("It's a Tie!");
// 			$("#finish").addClass("screen-win-tie");
// 			$("#finish").show();
// 			$("#board").hide();

// 		}
// 	}
// };
