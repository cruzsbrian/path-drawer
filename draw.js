var ctx;
var xOffset = 0;
var yOffset = 0;

function simulateMoves(moves) {
	console.log(moves);
	var totalTime = 0;
	for (var i = 0; i < moves.length; i++) {
		if (moves[i].endTime > totalTime) {
			totalTime = moves[i].endTime;
		}
	}

	ctx.beginPath();

	var t = 0;
	setInterval(function() {
		var vforward = 0;
		var vturn = 0;
		for (var i = 0; i < moves.length; i++) {
			if (moves[i].isForward) {
				vforward += moves[i].getVelocity(t);
			} else {
				vturn += moves[i].getVelocity(t);
			}
		}

		DRIVETRAIN.drive(vforward, vturn, TIMESTEP);
		ctx.lineTo(DRIVETRAIN.x * SCALE + xOffset, -DRIVETRAIN.y * SCALE + yOffset);
		ctx.stroke();

		t += TIMESTEP;
	}, 1000 * TIMESTEP);
}

function ready() {
	ctx = document.getElementById("canvas").getContext("2d");
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;

	xOffset = window.innerWidth / 2;
	yOffset = window.innerHeight / 2;

	ctx.lineWidth = 2;
}
