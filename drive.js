function Drivetrain() {
	this.x = 0;
	this.y = 0;
	this.t = 0;

	// execute a move for a given timestep
	this.drive = function(vforward, vturn, timestep) {
		this.x += vforward * Math.cos(this.t) * timestep;
		this.y += vforward * Math.sin(this.t) * timestep;
		this.t += vturn * timestep;
	};

	// return an array of x,y,t states for a set of moves
	this.sim = function(moves, timestep) {
		var pts = [];

		var totalTime = 0;
		for (var i = 0; i < moves.length; i++) {

			if (moves[i].endTime > totalTime) {
				totalTime = moves[i].endTime;
			}
		}

		var t = 0;
		for (var t = 0; t < totalTime; t += timestep) {
			var vforward = 0;
			var vturn = 0;
			for (var i = 0; i < moves.length; i++) {
				if (moves[i].isForward) {
					vforward += moves[i].getVelocity(t);
				} else {
					vturn += moves[i].getVelocity(t);
				}
			}

			this.drive(vforward, vturn, timestep);
			pts.push({
				x: this.x,
				y: this.y,
				t: this.t
			});
		}

		return pts;
	};

}
