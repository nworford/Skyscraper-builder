

var goal_max = 120; //target points to win (120 max, 19 minimum)
var goal_min = 19;
var goal = 0; //no particular goal to start out with

var button_points = [0, 0, 0, 0, 0];
var points = 0;
var losses = 0;
var wins = 0;

var buildingFinished = false;
var buildingFailed = false;

var setupGame = function() {
	buildingFinished = false;
	buildingFailed = false;
	points = 0;
	//pick a goal
	//.        round down.random 0.0-0.99 times (range+1) to generate 0-range, plus minimum
	goal = Math.floor(Math.random() * (goal_max-goal_min+1)) + goal_min;
	for(var i=1;i<=4;i++) // 4 buttons: 1, 2, 3, and 4
	{
		//next "points" is between 1 and 10 (1 + random 0.0-0.9999 * 10)
		button_points[i] = 1 + Math.floor(Math.random() * 10);
		console.log("Setting up button " + i + " for " + button_points[i] + " points");
	}
}

var refreshPoints = function() { 
	$("#your-random-target").html(goal); //put the goal on the screen
	$("#your-score-points").html(points);
}

var refreshDisplay = function() {
	$('#wins').html(wins);
	$('#losses').html(losses);

}

//checks if game over (capable of resetting entire game if so)
var checkGame = function() {
	if (points == goal) { 
		buildingFinished = true;
		console.log('You win!');
		wins++;

		$('#message').html("You completed the skyscraper!");

		setupGame();
	}
	else if (points > goal) { 
		buildingFailed = true;
		console.log('You lose!');
		losses++;

		$('#message').html("Your skyscraper failed!");

		setupGame();
	}
	else {
		console.log('game is not over yet')
		$('#message').html("Good Luck!");
	}
}

$(document).ready(function() {
	
	//wire up all the buttons
	for(var i=1;i<=4;i++) // 4 buttons: 1, 2, 3, and 4
	{
		//get the next button ("#button-X"), where X is 1, 2, 3, o 4
		$("#button-"+i).click(function(){ //when that button (any button) is clicked:
			//get the ID of the button (button-1, button-2, button-3, button-4)
			var button_name = $(this).attr('id');
			//get the number off the button (last letter of the button name)
			var button_num = button_name[button_name.length-1];
			//get the number of new points that button is worth
			var points_earned = button_points[button_num];		
			points = points + points_earned;
			//$('#your-score-points') = $('#your-score-points') + button_points[i];

			checkGame();
			refreshPoints(); //ALWAYS refresh points
			refreshDisplay(); //stuff changed, update the screen
		});
	};

	//start the first game
	setupGame();
	refreshPoints(); //ALWAYS refresh points
	refreshDisplay();
});

// $('button-1') $('button-2')  $('button-3')  $('button-4')




