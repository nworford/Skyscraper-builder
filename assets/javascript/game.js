

var goal;

/*
var sum = function(a, b)
{
	return a + b;
}
*/

var button_points = [0, 0, 0, 0, 0];
var points = 0;

$(document).ready(function() {
	var goal = Math.floor(Math.random() * 102) + 19;
	
	$("#your-random-target").html(goal);

	/* var x = sum(1, 2); */
	for(var i=1;i<=4;i++)
	{
		button_points[i] = 1 + Math.floor(Math.random() * 10);
		console.log("Setting up button " + i + " for " + button_points[i] + " points");
	
		$("#button-"+i).click(function(){
			var button_name = $(this).attr('id');
			console.log("Reading: " + button_name);
			var button_num = button_name[button_name.length-1];
			console.log("Button number; " + button_num);
			console.log("You got " + button_points[button_num] + " points");
			points = points + button_points[button_num];
			$("#your-score-points").html(points);
		});
	}

});

// $('button-1') $('button-2')  $('button-3')  $('button-4')

// one button is always 1 or 2. Depending on if number is even or odd?

//buttons are always the same % of total?


