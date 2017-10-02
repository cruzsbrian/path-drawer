function MotionProfile(vstart, vmax, vend, a, dist) {
	this.vStart = vstart;
	this.vMax = vmax;
	this.vEnd = vend;
	this.accelUp = a;
	this.accelDown = a;

	this.tUp = (this.vMax - this.vStart) / this.accelUp;
	this.tDown = (this.vMax - this.vEnd) / this.accelDown;

	var distUp = (this.vStart + this.vMax) * this.tUp / 2;
	var distDown = (this.vEnd + this.vMax) * this.tDown / 2;

	if (Math.abs(dist) > distUp + distDown) {
		this.tHold = (Math.abs(dist) - (distUp + distDown)) / this.vMax;
	} else {
		this.vMax = Math.sqrt((2 * this.accelUp * Math.abs(dist) + Math.pow(this.vStart, 2) + Math.pow(this.vEnd, 2)) / 2);

		if (this.vMax < this.vStart) {
			this.vStart = this.vMax;
			console.log("Distance is too short for given v_start, v_end, and accel. Using slower v_start.");
		}
		if (this.vMax < this.vEnd) {
			this.vEnd = this.vMax;
			console.log("Distance is too short for given v_start, v_end, and accel. Using slower v_end.");
		}

		this.tUp = (this.vMax - this.vStart) / this.accelUp;
		this.tDown = (this.vMax - this.vEnd) / this.accelDown;
		this.tHold = 0;
	}

	if (dist < 0) {
		this.vStart = -this.vStart;
		this.vMax = -this.vMax;
		this.vEnd = -this.vEnd;
		this.accelUp = -this.accelUp;
		this.accelDown = -this.accelDown;
	}

	this.totalTime = this.tUp + this.tHold + this.tDown;

	this.getVelocity = function(t) {
		if (t < this.tUp) {
			return this.vStart + t * this.accelUp;
		} else if (t - this.tUp < this.tHold) {
			return this.vMax;
		} else if (t - this.tUp - this.tHold < this.tDown) {
			return this.vMax - (t - this.tUp - this.tHold) * this.accelDown;
		}

		return 0;
	};
}
