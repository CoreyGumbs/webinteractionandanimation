window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
  			
		//create variables for our x, y, r and offset
		var x = theCanvas.width/2;
		var y = theCanvas.height/2;
		var radius = 75;
		var offset = 50;

		ctx.save();

		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2*Math.PI, false);
		ctx.clip();

		//draw a blue circle inside clipping mask
		ctx.beginPath();
		ctx.arc(x-offset, y-offset, radius, 0, 2*Math.PI, false);
		ctx.fillStyle  = "blue";
		ctx.fill();
		

		//draw a yellow circle inside clipping mask
		ctx.beginPath();
		ctx.arc(x+offset, y, radius, 0, 2*Math.PI, false);
		ctx.fillStyle  = "yellow";
		ctx.fill();

		//draw a red circle inside clipping mask
		ctx.beginPath();
		ctx.arc(x, y+offset, radius, 0, 2*Math.PI, false);
		ctx.fillStyle  = "red";
		ctx.fill();

		ctx.restore();

		//stroke the circle

		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2*Math.PI, false);
		ctx.lineWidth = 10;
		ctx.strokeStyle = "blue";
		ctx.stroke();
     						
		}
	}
}