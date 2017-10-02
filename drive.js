function Drivetrain() {
	this.x = 0;
	this.y = 0;
	this.t = 0;

	// execute a move for a given timestep
	this.followMove = function(move, currentTime, timestep) {
		var vforward = move.forwardSpeed(currentTime);
		var vturn = move.turnSpeed(currentTime);

		this.x += vforward * Math.cos(this.t) * timestep;
		this.y += vforward * Math.sin(this.t) * timestep;
		this.t += vturn * timestep;
	};
}
