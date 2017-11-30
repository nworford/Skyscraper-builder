

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
	};

//reset game
var reset = {

}


// when button is clicked, add value to points

$("#button-"+i).click(function(){

$('#your-score-points') = $('#your-score-points') + button_points[i];

$('#your-score-points').html(points);

};


var buildingFinished = false;
var buildingFailed = false;

if ($('#your-score-points') == $('#your-random-target')) { 

	$('buildingFinished') = true;

	console.log('You win!');

	$('#wins').html();


};

if ($('#your-score-points') > $('#your-random-target')) { 

	$('#buildingFailed') = true;

	console.log('You lose!');

	$('#losses')++;

	$('#losses').html();

};


else () {

	console.log('game is not over yet')
};

if ($('buildingFailed') == true) { 
	reset()
};

if ($('buildingFinished') == true) { 
	reset()
};

else () {
	console.log('game is not over yet!');
}

});

// $('button-1') $('button-2')  $('button-3')  $('button-4')




