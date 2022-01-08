$(document).ready(function(){

	// Home screen transitions
	var titleOpacity = 0,
		graphOpacity = 0,
		arrowOpacity = 0;

	settingInterval(titleOpacity, 1.02, "tvGraphTitle", 50);

	setTimeout(function(){
		settingInterval(graphOpacity, 0.62, "tradingViewGraph", 50);
	}, 1500);

	setTimeout(function(){
		settingInterval(arrowOpacity, 1.02, "scrollDownArrow", 15);
	}, 3000);

	function settingInterval(startingOpacity, desiredOpacity, elementId, timer){
		setInterval(function(){
			if(startingOpacity <= desiredOpacity){
				$("#" + elementId).css("opacity", startingOpacity);
				startingOpacity += 0.02;
			}
		}, timer);
	}
});

var hasMembership;

$("#emailSection form").change(function(){
	if($("input[name='has_membership']:checked").val() == 'no'){
		$("input[name='membership']").parent().hide();
		$("input[name='membership']").prop("required", false);
		hasMembership = false;
	}
	else{
		$("input[name='membership']").parent().show();
		$("input[name='membership']").prop("required", true);
		hasMembership = true;
	}
});

$("input[name='Submit']").on("click", function(event){
	event.preventDefault();

	var emailContent = "mailto:rodrigogonzalezrg544@gmail.com?subject=";

	emailContent += $("input[name='subject']").val();

	emailContent += "&body=";

	if(hasMembership == true){
		emailContent += "Membership ID: " + $("input[name='membership']").val() + "%0A";
	}
	
	emailContent += "Name: " + $("input[name='name']").val() + "%0A";
	emailContent += "Number: " + $("input[name='phone_number']").val() + "%0A";
	emailContent += "Message: " + $("textarea[name='body']").val();

	window.location.href = emailContent;
});