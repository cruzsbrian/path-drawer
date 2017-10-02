var ctx;
var xOffset = 0;
var yOffset = 0;
var scale = 40;	// pixels/ft
var dotRadius = 5;

// draw the path given an array of points
function drawPath(pts) {
	ctx.strokeStyle = "black";
	ctx.beginPath();
	for (var i = 0; i < pts.length; i++) {
		ctx.lineTo(-pts[i].y * scale + xOffset, -pts[i].x * scale + yOffset);
	}
	ctx.stroke();
}

// draw the robot at a given point
function drawRobot(pt) {
	var centerX = pt.x;
	var centerY = pt.y;

	// adopt robot's coordinate system for the drawing
	ctx.translate(-centerY * scale + xOffset, -centerX * scale + yOffset);
	ctx.rotate(-pt.t);

	// frame rectangle
	ctx.strokeStyle = "red";
	ctx.beginPath();
	ctx.rect(-ROBOT_WIDTH * scale / 2, -ROBOT_LENGTH * scale / 2, ROBOT_WIDTH * scale, ROBOT_LENGTH * scale);
	ctx.stroke();

	// center dot
	ctx.fillStyle = "red";
	ctx.beginPath();
	ctx.arc(0, 0, dotRadius, 2 * Math.PI, false);
	ctx.fill();

	// reset coordinate system
	ctx.rotate(pt.t);
	ctx.translate(centerY * scale - xOffset, centerX * scale - yOffset);
}

// starts a looping animation of the robot through the path
function animateRobot(pts, timestep) {
	var t = 0;
	setInterval(function() {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		drawPath(pts);
		drawRobot(pts[t]);

		t++;
		if (t === pts.length) {
			t = 0;
		}
	}, timestep * 1000);
}

function ready() {
	ctx = document.getElementById("canvas").getContext("2d");
	ctx.canvas.width = window.innerWidth;
	ctx.canvas.height = window.innerHeight;

	xOffset = window.innerWidth / 2;
	yOffset = window.innerHeight / 2;

	ctx.lineWidth = 2;
}
