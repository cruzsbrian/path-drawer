function Move(startTime, profile, forward) {
	this.startTime = startTime;
	this.profile = profile;
	this.isForward = forward;

	this.endTime = this.startTime + profile.totalTime;

	this.getVelocity = function(t) {
		if (t >= this.startTime && t < this.endTime) {
			return this.profile.getVelocity(t - this.startTime);
		} else {
			return 0;
		}
	}
}

function MoveFollowingMove(move, profile, forward) {
	this.startTime = move.endTime;
	this.profile = profile;
	this.isForward = forward;

	this.endTime = this.startTime + profile.totalTime;
	this.getVelocity = function(t) {
		if (t >= startTime && t < endTime) {
			return profile.getVelocity(t - startTime);
		} else {
			return 0;
		}
	}
}
