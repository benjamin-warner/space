//
//	Point class
//

function point(){
	this.m_x = 0;
	this.m_y = 0;

	this.set = function(x, y){
		this.m_x = x;
		this.m_y = y;
	}

	this.get = function(){
		return {x: this.m_x, 
				y: this.m_y};
	}

	this.clone = function(cloneFrom){
		this.m_x = cloneFrom.m_x;
		this.m_y = cloneFrom.m_y;
	}
}