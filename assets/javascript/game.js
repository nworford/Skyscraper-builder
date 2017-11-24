

var goal;


var sum = function(a, b)
{
	return a + b;
}


$(document).ready(function() {
	var goal = Math.floor(Math.random() * 102) + 19;
	
	$("#random-number").html(goal);

	var x = sum(1, 2);

});


