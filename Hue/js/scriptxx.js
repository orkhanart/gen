var canvas, ctx;
var mycircle;

// circle movement
var dx = 6;
var dy = 8;

var width;
var height;

// objects :----------------------------------------------------
function Circle(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}

// draw functions :-----------------------------------------------

function clear() { // clear canvas function
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function drawcircle(ctx, x, y, radius) { // draw circle function
    ctx.fillStyle = 'rgba(255, 0, 255, 1.0)';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
}

function drawscene() { // main drawScene function

    clear(); // clear canvas
	
	
	//first movement than bounce
	
	if (mycircle.x + dx > width || mycircle.x + dx < 0)
    		dx = -dx;
  		  if (mycircle.y + dy > height || mycircle.y + dy < 0)
    		dy = -dy;
	
	
	mycircle.x += dx;
	mycircle.y += dy;
	
	drawcircle(ctx, mycircle.x, mycircle.y, mycircle.radius);
}

// initialization-----------------------------------------

$(function(){
    canvas = document.getElementById('scene');
    ctx = canvas.getContext('2d');
	
	width = canvas.width;
    height = canvas.height;
	var circleradius = 15;
	var x = Math.random()*width;
    var y = Math.random()*height;
	
	mycircle = new Circle(x,y,circleradius); //call the circle object anf build the circcle
							  
 	setInterval(drawscene, 30); // loop drawScene
	});