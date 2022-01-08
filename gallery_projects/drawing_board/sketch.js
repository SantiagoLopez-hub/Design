var option,
	sizeX,
	sizeY,
	colour;

function setup(){
	createCanvas(windowWidth, windowHeight - windowHeight/5);
	background(255);
	$("#options").before($("main"));
}

function draw(){
	mousePressed();

	option = $("input[name='figure']:checked").val();
	sizeX = $("#sizeX").val();
	sizeY = $("#sizeY").val();
	colour = $("input[name='colour']").val();

	fill(colour);
}

function mousePressed(){
	switch(option){
		case "circle":
			circle(mouseX, mouseY, sizeX);

			$("#sizeX").prop("placeholder", "Size");
			$("#sizeY").prop("disabled", true);
			break;
		case "square":
			rect(
				mouseX - (sizeX / 2),
				mouseY - (sizeX / 2),
				sizeX,
				sizeX
			);

			$("#sizeX").prop("placeholder", "Size");
			$("#sizeY").prop("disabled", true);
			break;
		case "triangle":
			triangle(
				mouseX - (sizeX / 3), mouseY,
				mouseX, mouseY - (sizeY / 3),
				mouseX + (sizeX / 3), mouseY
			);

			$("#sizeX").prop("placeholder", "Width");
			$("#sizeY").prop("disabled", false);
			break;
		case "rectangle":
			rect(
				mouseX - (sizeX / 2),
				mouseY - (sizeY / 2),
				sizeX,
				sizeY
			);

			$("#sizeX").prop("placeholder", "Width");
			$("#sizeY").prop("disabled", false);
			break;
		default:
			break;
	}
}