var ctx;
var xOffset = 0;
var yOffset = 0;

function simulateMove(move) {
	var totalTime = move.totalTime;
	console.log(move);

	ctx.beginPath();
	for (var t = 0; t < totalTime; t += TIMESTEP) {
		DRIVETRAIN.followMove(move, t, TIMESTEP);
		ctx.lineTo(DRIVETRAIN.x * SCALE + xOffset, -DRIVETRAIN.y * SCALE + yOffset);
	}
	ctx.stroke();
}

function ready() {
	ctx = document.getElementById("canvas").getContext("2d");
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;

	xOffset = window.innerWidth / 2;
	yOffset = window.innerHeight / 2;
}
