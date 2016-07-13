$(document).ready(function () {
	$("#board").hide();
	var startHTML = "<div class='screen screen-start' id='start'>";
	startHTML += "<header>";
	startHTML += "<h1>Tic Tac Toe</h1>";
	startHTML += "<a href='#' class='button'>Start game</a>";
	startHTML += "</header>";
	startHTML += "</div>";
	$("body").append(startHTML);
	$("a.button").click(function () {
		$("#start").hide();
		$("#board").show();
	});
});

/*

<div class="screen screen-start" id="start">
  <header>
    <h1>Tic Tac Toe</h1>
    <a href="#" class="button">Start game</a>
  </header>
</div>

*/