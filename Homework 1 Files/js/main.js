/*
     Name: Corey Gumbs
     Date: July 8, 2015
     Class & Section:  WIA-C201507
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message

*/

if(Modernizr.canvas){
	//Canvas is supported


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here


	
	var theCanvas = document.getElementById("Canvas1");
	var ctx = theCanvas.getContext("2d");
	
	//Declaring Styles

	ctx.strokeStyle = "black";
	ctx.fillStyle = "blue";
	ctx.lineWidth = 5;

	//Drawing of rectangle

	ctx.strokeRect(0, 0, 50, 100);
	ctx.fillRect(0, 0, 50, 100);
	
	


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here

//if(Modernizr.canvas){
	//Canvas is supported
	
	var theCanvas2 = document.getElementById("Canvas2");
	var ctx2 = theCanvas2.getContext("2d");
	
	//Declaring Styles

	ctx2.strokeStyle = "black";
	ctx2.fillStyle = "rgba(255, 0, 0, .5)";
	ctx2.lineWidth = 2;

	//full circle
	ctx2.beginPath();
	ctx2.arc(50, 50, 30, 0, 2 * Math.PI);
	ctx2.fill();
	ctx2.stroke();	
	
	



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
	
	var theCanvas3 = document.getElementById("Canvas3");
	var ctx3 = theCanvas3.getContext("2d");
	
	//Declaring Styles

	ctx3.strokeStyle = "green";
	ctx3.fillStyle = "red";
	ctx3.lineWidth = 8;
	
	//Star begins

	ctx3.lineJoin = "miter";
	ctx3.beginPath();
	ctx3.moveTo(100, 100);
	ctx3.lineTo(125, 250);
	ctx3.lineTo(30, 150);
	ctx3.lineTo(150, 150);
	ctx3.lineTo(30, 250);
	ctx3.closePath();
	ctx3.fill();
	ctx3.stroke();

	




/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

	var theCanvas4 = document.getElementById("Canvas4");
	var ctx4 = theCanvas4.getContext("2d");

	//declaring Styles
	ctx4.strokeStyle = "blue";
	ctx4.fillStyle = "red";
	ctx4.lineWidth =  5;

	//position elements to center of canvas
	ctx4.translate(ctx4.canvas.width/2, ctx4.canvas.height/2);
	//1/2 circle/Arc
	ctx4.beginPath();
	ctx4.arc(0,0, 200, 0, 1 * Math.PI, true);

	//bezier curves below arc
	ctx4.moveTo(-200, 0);
	ctx4.bezierCurveTo(-200, -20, -10, -50, 0, 0);
	ctx4.moveTo(0,0);
	ctx4.bezierCurveTo(0, 0, 0, -50, 200, 0);
	
	//fill in all elements
	ctx4.fill();
	ctx4.stroke();	

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here




//End Modernizer
}else {
		//Canvas is not supported
		alert("Canvas is not  by your browser.");
		console.log("Canvas is not supported by your browser.");
		document.getElementById('container').innerHTML("<img src='image/newbrowser.png' alt='Keep Calm, You need a better browser' />");
		}