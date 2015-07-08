window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

				//create a variable to hold our image
				var srcImg = document.getElementById("img1");

				//draw image directly on to canvas
				//ctx.drawImage(srcImg, 0,0);

				//draw a scaled down image
				//drawImage(srcImg, dx, dy, dw, dh);

				//ctx.drawImage(srcImg, 50, 50, 240, 300);

				//draw a slice image
				//drawImage(srcImg, sx, sy, sw, sh, dx, dy, dw, dh)
     		
     		//ctx.drawImage(srcImg, 285, 40, 95, 140, 50, 50, 190, 240 );
			
				//create variable that holds video

				var srcVid =document.getElementById("vid1");
				srcVid.play();

				//setInterval(function, time -ms)

				setInterval(function(){

					ctx.drawImage(srcVid, 0,0, 480, 270);

				}, 30);


		}
	}
}