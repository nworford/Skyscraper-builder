ABOUT Skyscraper Builder Game:

Skyscraper Builder Game is a jQuery homework assignment. Instructions were as follows:

1.Watch the demo.

2.The player will have to guess the answer, just like in Hangman. This time, though, the player will guess with numbers instead of letters. 

3.Here's how the app works:

	-There will be four crystals displayed as buttons on the page.

	-The player will be shown a random number at the start of the game.

	-When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

		-Your game will hide this amount until the player clicks a crystal.
		
		-When they do click one, update the player's score counter.


-The player wins if their total score matches the random number from the beginning of the game.

-The player loses if their score goes above the random number.

-The game restarts whenever the player wins or loses.

	-When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden 	values. Of course, the user's score (and score counter) will reset to zero.

-The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.


Option 1 Game design notes

-The random number shown at the start of the game should be between 19 - 120.

-Each crystal should have a random hidden value between 1 - 12.

TECH USED: HTML, CSS, JavaScript, jQuery

HIGHLIGHT CODE:


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


CONCLUSION: 
	In completing this assignment, I got an introduction into how to use jQuery.

GRADE: A-

INSTRUCTOR COMMENT:

from Dylan Acup 
December 4th, 7:33 pm

Great job on the assignment! The UI looks very clean and the game runs flawlessly. Also, you made good use of comments in your code to explain the functionality. Keep up the good work!
