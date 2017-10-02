var TIMESTEP = 0.01;
var ROBOT_RADIUS = 1;
var SCALE = 20; // pixels in 1 ft
var DRIVETRAIN = new Drivetrain();

function run() {
	//var move1 = new Move(0, new MotionProfile(0, 5, 0, 2, 10 * Math.PI), true);
	//var move2 = new Move(0, new MotionProfile(0, 1 / ROBOT_RADIUS, 0, 0.4, Math.PI * 2), false);

	var move1 = new Move(0, new MotionProfile(0, 5, 0, 2, 10), true);
	var move2 = new Move(1, new MotionProfile(0, 2, 0, 2, Math.PI), false);
	var move3 = new Move(move1.endTime, new MotionProfile(0, 5, 0, 2, -5), true);
	//var move4 = new Move(move1.endTime, new MotionProfile(0,

	simulateMoves([move1, move2, move3]);
}
