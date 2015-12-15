window.onload = function(){
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight;


		var v1 = new verletBody();
		v1.setPosition(0,0);
		v1.setVelocity(1,1);
		console.log(v1.m_x, v1.m_y, v1.m_lastX, v1.m_lastY);
		
		v1.warpTo(2,2);
		console.log(v1.m_x, v1.m_y, v1.m_lastX, v1.m_lastY);

		v1.update();
		console.log(v1.m_x, v1.m_y, v1.m_lastX, v1.m_lastY);

		v1.setVelocity(0,0);
		console.log(v1.m_x, v1.m_y, v1.m_lastX, v1.m_lastY);

		var p1 = new point();
		console.log(p1.m_x);
		console.log(p1.get().x,p1.get().y)

	// draw();

	// function draw(){
	// 	requestAnimationFrame(draw);
	// }
};
