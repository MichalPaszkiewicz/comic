var canvas0 = document.getElementById("canvas0");
var ctx0 = canvas0.getContext("2d");

function isoCircleTop(ctx,x,y,w,colour){
	ctx.beginPath();
	ctx.moveTo(x-w/2,y);
	ctx.bezierCurveTo(x-w/2,y+w/3,x+w/2,y+w/3,x + w/2,y);
	ctx.bezierCurveTo(x+w/2,y-w/3,x-w/2,y-w/3,x - w/2,y);
	ctx.fillStyle=colour;
	ctx.fill();
}

function isoCircleRight(ctx,x,y,w,colour){
	ctx.beginPath();
	ctx.moveTo(x-w/2,y+w/2);
	ctx.bezierCurveTo(x,y+w,x+w,y,x+w/2,y-w/2);
	ctx.bezierCurveTo(x,y-w,x-w,y,x-w/2,y+w/2);
	ctx.fillStyle=colour;
	ctx.fill();
}

function isoCircleLeft(ctx,x,y,w,colour){
	ctx.beginPath();
	ctx.moveTo(x+w/2,y+w/2);
	ctx.bezierCurveTo(x,y+w,x-w,y,x-w/2,y-w/2);
	ctx.bezierCurveTo(x,y-w,x+w,y,x+w/2,y+w/2);
	ctx.fillStyle=colour;
	ctx.fill();
}

function drawTile0(){
	
}

var canvas1 = document.getElementById("canvas1");
var ctx1 = canvas1.getContext("2d");

function person1(ctx){
	ctx.beginPath();
	ctx.strokeStyle="black";
	ctx.arc(30, 80, 10, 0, 2 * Math.PI);
	ctx.moveTo(30,90);
	ctx.lineTo(30,120);
	ctx.lineTo(35,143);
	ctx.moveTo(30,120);
	ctx.lineTo(25,144);
	ctx.moveTo(30,100);
	ctx.lineTo(13,85);
	ctx.moveTo(30,100);
	ctx.lineTo(45,85);
	ctx.stroke();
}

function person2(ctx){
	ctx.beginPath();
	ctx.strokeStyle="black";
	ctx.arc(130, 85, 10, 0 , 2 * Math.PI);
	ctx.moveTo(130,95);
	ctx.lineTo(130,125);
	ctx.lineTo(134, 145);
	ctx.moveTo(130,95);
	ctx.lineTo(126,143);
	ctx.moveTo(130,103);
	ctx.lineTo(118,104);
	ctx.lineTo(106,101);
	ctx.moveTo(130,103);
	ctx.lineTo(134,112);
	ctx.lineTo(124,118);
	ctx.stroke();
}

function drawTile1(){
	person1(ctx1);
	person2(ctx1);
	
	ctx1.beginPath();
	ctx1.moveTo(140,70);
	ctx1.lineTo(144,60);
	ctx1.stroke();
}

var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");

function box(ctx,x,y, colour){
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x-50, y-30);
	ctx.lineTo(x-50, y-90);
	ctx.lineTo(x+50, y-130);
	ctx.lineTo(x+100, y-110);
	ctx.lineTo(x+100, y-55);
	ctx.lineTo(x,y);
	ctx.fillStyle=colour;
	ctx.fill();
	ctx.lineTo(x,y-62);
	ctx.lineTo(x-50,y-90);
	ctx.moveTo(x,y-62);
	ctx.lineTo(x+100,y-110);
	ctx.stroke();
}

function boxShading(ctx,x,y){
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x - 50, y - 30);
	ctx.lineTo(x - 50, y - 90);
	ctx.lineTo(x, y - 62);
	ctx.lineTo(x,y);
	ctx.fillStyle="rgba(0,0,0,0.2)";
	ctx.fill();
	
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x, y - 62);
	ctx.lineTo(x + 100, y - 110);
	ctx.lineTo(x + 100, y - 55);
	ctx.lineTo(x,y);
	ctx.fillStyle="rgba(0,0,0,0.1)";
	ctx.fill();
}

function label(ctx){
	// label
	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.strokeStyle = "black";
	ctx.moveTo(40, 70);
	ctx.lineTo(62, 83);
	ctx.lineTo(62, 103);
	ctx.lineTo(40, 90);
	ctx.lineTo(40, 70);
	ctx.fill();
	ctx.stroke();
	
	for(var i = 0; i < 5; i++){
		ctx.beginPath();
		ctx.moveTo(42, 75 + i * 3);
		ctx.lineTo(60, 86 + i * 3);
		ctx.stroke();
	}
}

function drawTile2(){
	box(ctx2,80,140,"rgba(242, 202, 97,0.9)");
	
	label(ctx2);
	
	boxShading(ctx2,80,140);

}


function draw(){
	drawTile0();
	drawTile1();
	drawTile2();
//window.requestAnimationFrame(draw);
}

draw();