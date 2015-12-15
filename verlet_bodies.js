//
//	Verlet vector class
//

function verletBody(){
	this.m_x = 0;
	this.m_y = 0;
	this.m_lastX = 0;
	this.m_lastY = 0;

	this.setPosition = function(x, y){
		this.m_x = x;
		this.m_y = y;
	}

	this.setVelocity = function(xVelocity, yVelocity){
		this.m_lastX = this.m_x - xVelocity;
		this.m_lastY = this.m_y - yVelocity;
	}

	this.add = function(vBody){
		this.m_x += vBody.m_x;
		this.m_y += vBody.m_y;
	}

	this.warpTo = function(x, y){
		var diffX = this.m_x - this.m_lastX,
			diffY = this.m_y - this.m_lastY;
		this.m_x = x;
		this.m_y = y;
		this.m_lastX = x - diffX;
		this.m_lastY = y - diffY;
	}

	this.update = function(){
		var tempX = this.m_x,
			tempY = this.m_y;
		this.m_x += (this.m_x - this.m_lastX);
		this.m_y += (this.m_y - this.m_lastY);
		this.m_lastX = tempX;
		this.m_lastY = tempY;
	}

}