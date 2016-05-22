var canvas0 = document.getElementById("canvas0");
var ctx0 = canvas0.getContext("2d");

function drawTile0(){
	ctx0.beginPath();
	ctx0.moveTo(10,170);
	ctx0.lineTo(390,170);
	ctx0.moveTo(200,170);
	ctx0.lineTo(200,20);
	ctx0.lineWidth=2;
	
	ctx0.moveTo(50, 25); 
	ctx0.bezierCurveTo( 150, 170, 250, 170, 350, 25); 
	ctx0.stroke();
	
	ctx0.strokeStyle="white";
	ctx0.fillStyle="white";
	ctx0.stroke();
	
	ctx0.beginPath();
	ctx0.lineWidth= 1;
	ctx0.font= "13px arial";
	ctx0.fillText("optimism", 275, 190);
	drawArrow(ctx0, 340,185,370,185,8);
	
	ctx0.beginPath();
	ctx0.fillText("pessimism", 70, 190);
	drawArrow(ctx0, 60,185, 30, 185,8);
	
	ctx0.beginPath();
	ctx0.fillText("happiness", 220, 30);
	drawArrow(ctx0, 210, 40, 210, 20, 8);
	
	drawArrow(ctx0, 50, 90, 60, 70, 6);
	drawArrow(ctx0, 340, 90, 330, 70, 6);
}

function drawArrow(ctx,x1,y1,x2,y2,r){
	ctx.strokeStyle="white";
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.moveTo(x2,y2);
	
	var angle = 0.5;
	var lineAngle = Math.atan2(y2 - y1, x2 - x1);
	var angle1 = lineAngle + Math.PI + angle;
	var angle2 = lineAngle + Math.PI - angle;
		
	var a1 = x2 + Math.cos(angle1) * r;
	var a2 = y2 + Math.sin(angle1) * r;
	
	var b1 = x2 + Math.cos(angle2) * r;
	var b2 = y2 + Math.sin(angle2) * r;
	
	ctx.lineTo(a1,a2);
	ctx.lineTo(b1,b2);
	ctx.fill();
}

var canvas1 = document.getElementById("canvas1");
var ctx1 = canvas1.getContext("2d");

function drawTile1(){
	
}

function draw(){
	drawTile0();
	drawTile1();
//window.requestAnimationFrame(draw);
}

draw();