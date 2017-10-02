var TIMESTEP = 0.01;
var ROBOT_RADIUS = 1;
var SCALE = 10; // pixels in 1 ft
var DRIVETRAIN = new Drivetrain();

function run() {
	//simulateMove(new Line(0, 5, 0, 2, 20));
	//simulateMove(new Pivot(0, 5, 0, 2, 1));
	//simulateMove(new Line(0, 5, 0, 2, 10));
	simulateMove(new Arc(5, 5, 0, 2, Math.PI * 2, 10));
	//simulateMove(new Line(5, 5, 5, 2, 10));
	//simulateMove(new Arc(5, 5, 5, 2, Math.PI, 10));
}
