function Line(vstart, vmax, vend, accel, dist) {
	this.profile = new MotionProfile(vstart, vmax, vend, accel, dist);

	this.forwardSpeed = function(t) {
		return this.profile.getVelocity(t);
	};
	this.turnSpeed = function(t) {
		return 0;
	};

	this.totalTime = this.profile.totalTime;
}

function Pivot(vstart, vmax, vend, accel, angle) {
	this.profile = new MotionProfile(vstart, vmax, vend, accel, angle * ROBOT_RADIUS);

	this.forwardSpeed = function(t) {
		return 0;
	};
	this.turnSpeed = function(t) {
		return this.profile.getVelocity(t);
	};

	this.totalTime = this.profile.totalTime;
}

function Arc(vstart, vmax, vend, accel, angle, radius) {
	var distForward = radius * angle;
	var distTurn = ROBOT_RADIUS * angle;

	if (distForward > distTurn) {
		this.mpForward = new MotionProfile(vstart, vmax, vend, accel, distForward);
		this.mpTurn = new MotionProfileFromTime(angle, 0, 0, this.mpForward.tUp, this.mpForward.tHold, this.mpForward.tDown);
	} else {
		this.mpTurn = new MotionProfile(0, vmax / ROBOT_RADIUS, 0, accel, angle);
		this.mpForward = new MotionProfileFromTime(distForward, vstart, vend, this.mpTurn.tUp, this.mpTurn.tHold, this.mpTurn.tDown);
	}

	this.forwardSpeed = function(t) {
		//return distForward / this.mpForward.totalTime;
		return this.mpForward.getVelocity(t);
	}
	this.turnSpeed = function(t) {
		//return angle / this.mpForward.totalTime
		return this.mpTurn.getVelocity(t);
	}

	this.totalTime = this.mpForward.totalTime;
}
