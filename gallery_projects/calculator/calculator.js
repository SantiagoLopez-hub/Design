var number1,
	number2,
	arithmeticOption,
	result;

$(document).ready(function(){
	factorNumber();
	
	$("#arithmeticOption").on("change", function(){
		factorNumber();
	});
});

function factorNumber(){
	if($("#arithmeticOption").val() == "!"){
		$("input[name='number2']").prop("disabled", true);
	}
	else{	
		$("input[name='number2']").prop("disabled", false);
	}
}

$("form").on("submit", function(event){
	// Prevent the form from reloading the page
	event.preventDefault();
	
	number1 = parseInt($("input[name='number1']").val());
	number2 = parseInt($("input[name='number2']").val());
	arithmeticOption = $("#arithmeticOption").val();

	switch(arithmeticOption){
		case "+":
			result = "The sum of " + number1 
				+ " and " + number2 
				+ " equals to <br><span id=\"resultNumber\">"
				+ (number1 + number2) + "</span>";
			break;
		case "-":
			result = "The substraction of " + number1
				+ " and " + number2
				+ " equals to <br><span id=\"resultNumber\">"
				+ (number1 - number2) + "</span>";
			break;
		case "x":
			result = "The multiplication of " + number1
				+ " and " + number2
				+ " equals to <br><span id=\"resultNumber\">"
				+ (number1 * number2) + "</span>";
			break;
		case "/":
			result = "The division of " + number1
				+ " by " + number2
				+ " equals to <br><span id=\"resultNumber\">"
				+ (number1 / number2) + "</span>";
			break;
		case "%":
			result = "The remainder of the division between "
				+ number1 + " and " + number2
				+ " equals to <br><span id=\"resultNumber\">"
				+ (number1 % number2) + "</span>";
			break;
		case "!":
			temp_num = number1;
			for(var i = temp_num - 1; i >= 1; i--){
				temp_num *= i;
			}

			result = "The factorial of " + number1
				+ " equals to <br><span id=\"resultNumber\">" 
				+ temp_num + "</span>";
			break;
		default:
			break;
	}

	$("#result").html(result);
});