var verletParticle = {
	oldXY: null,
	XY: null,
	gravity: 0.3,

	create: function(oldX, oldY, x, y, sizeR){
		var obj = Object.create(this);

		obj.oldXY = vector.create(oldX, oldY);
		obj.XY = vector.create(x, y);
		obj.setSize(sizeR);
		return obj;
	},

	setOldXY: function(vecOldXY){
		this.oldXY.setX(vecOldXY.getX());
		this.oldXY.setY(vecOldXY.getY());
	},

	getXPosition: function(){
		return this.XY.getX();
	},

	getYPosition: function(){
		return this.XY.getY();
	},

	setXY: function(vecXY){
		this.XY.setX(vecXY.getX());
		this.XY.setY(vecXY.getY());
	},

	setSize: function(sizeR){
		this.size = sizeR;
	},

	getSize: function(){
		return this.size;
	},

	warp: function(newX, newY){
		var offsetX = newX - this.XY.getX(),
			offsetY = newX - this.XY.getY();

		this.XY.setX(newX);
		this.XY.setY(newY);

		this.oldXY.setX(this.oldXY.getX() + offsetX);
		this.oldXY.setY(this.oldXY.getY() + offsetY);
	},

	debugVelocity: function(){
		console.log(this.XY.getX() - this.oldXY.getX(),
		 			this.oldXY.getY() - this.oldXY.getY());
	},

	update: function(){
		var tempX = this.XY.getX(),
			tempY = this.XY.getY(),

			distX = this.XY.getX() - this.oldXY.getX(),
			distY = this.XY.getY() - this.oldXY.getY();

		this.XY.setX(this.XY.getX() + distX);
		this.XY.setY(this.XY.getY() + distY + this.gravity);

		if(this.XY.getY() >= window.innerHeight){
			this.XY.setY(window.innerHeight - this.size);
			this.oldXY.setY(window.innerHeight + (this.oldXY.getY() - this.oldXY.getY()) );
		}
		
		this.oldXY.setX(tempX);
		this.oldXY.setY(tempY);
	}
};
