var hours = 0,
	minutes = 0,
	seconds = 0;

$("#startTimer").on("click", function(){
	$(this).prop("disabled", true);
	$(this).css("opacity", "0.5");
	$(this).css("cursor", "default");

	var timer = setInterval(function(){
		if(seconds > 58){
			seconds = -1;
			minutes++;
		}
		if(minutes > 59){
			minutes = 0;
			hours++;
		}

		seconds++;
		time = hours + ":" + minutes + ":" + seconds;
		$("#watch").html(time);

		$("#stopTimer").on("click", function(){
			clearInterval(timer);
			startTimerMod();
			$("#startTimer").html("Continue");
		});
		
		$("#resetTimer").on("click", function(){
			startTimerMod();
			$("#startTimer").html("Start");

			clearInterval(timer);
			hours = 0;
			minutes = 0;
			seconds = 0;
			time = hours + ":" + minutes + ":" + seconds;
			$("#watch").html(time);
		});

		function startTimerMod(){
			$("#startTimer").prop("disabled", false);
			$("#startTimer").css("opacity", "1");
			$("#startTimer").css("cursor", "pointer");
		}
	}, 1000);
});
