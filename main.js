var ROBOT_RADIUS = 1;
var ROBOT_WIDTH = 2;
var ROBOT_LENGTH = 2.5

function run() {
	var drivetrain = new Drivetrain();

	//var move1 = new Move(0, new MotionProfile(0, 5, 0, 2, 10 * Math.PI), true);
	//var move2 = new Move(0, new MotionProfile(0, 1, 0, 0.4, Math.PI * 2), false);

	var move1 = new Move(0, new MotionProfile(0, 3, 0, 2, 9.2), true);
	var move2 = new Move(1, new MotionProfile(0, 2, 0, 2, Math.PI), false);
	var move3 = new Move(move1.endTime, new MotionProfile(0, 5, 0, 2, -3), true);
	var move4 = new Move(move3.endTime, new MotionProfile(0, 5, 0, 3, Math.PI), false);

	//var pts = drivetrain.sim([move1, move2], 0.01);
	var pts = drivetrain.sim([move1, move2, move3, move4], 0.01);

	animateRobot(pts, 0.01);
}
