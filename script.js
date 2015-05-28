var canvas0 = document.getElementById("canvas0");
var ctx0 = canvas0.getContext("2d");

function triangle(canvas,ctx, colour){
	ctx.beginPath();
	ctx.fillStyle=colour;
	ctx.moveTo(50,canvas.height - 30);
	ctx.lineTo(canvas.width - 50, canvas.height - 30);
	ctx.lineTo(canvas.width / 2, 80);
	ctx.fill();
}

function drawTile0(){
	ctx0.clearRect(0,0,canvas0.width, canvas0.height);
	triangle(canvas0, ctx0, "yellow");
	ctx0.fillStyle="white";
	ctx0.textAlign="center"
	ctx0.font="18px cursive"
	ctx0.beginPath();
	ctx0.fillText("Speed", 35, canvas0.height - 10);
	ctx0.beginPath();
	ctx0.fillText("Low cost", canvas0.width/2, 70);
	ctx0.beginPath();
	ctx0.fillText("Quality", canvas0.width - 40, canvas0.height - 10);
}

var canvas1 = document.getElementById("canvas1");
var ctx1 = canvas1.getContext("2d");

function drawTile1(){
	ctx1.clearRect(0,0,canvas1.width, canvas1.height);
	triangle(canvas1, ctx1, "red");
	ctx1.fillStyle="white";
	ctx1.textAlign="center";
	ctx1.font="18px cursive";
	ctx1.beginPath();
	ctx1.fillText("Ridiculous cost", canvas1.width / 2, canvas1.height - 10);
	ctx1.beginPath();
	ctx1.fillText("Idling", 160, 120);
	ctx1.beginPath();
	ctx1.fillText("Failure*", 40, 120);
}

var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");

function room(canvas, ctx){
	ctx.beginPath();
	ctx.strokeStyle="black";
	ctx.moveTo(0,120);
	ctx.lineTo(canvas.width,70);
	ctx.stroke();
}

function person(canvas, ctx){
	ctx.beginPath();
	ctx.strokeStyle="black";
	//legs
	ctx.moveTo(30,153);
	ctx.lineTo(50,150);
	ctx.lineTo(40,130);
	ctx.moveTo(35,149);
	ctx.lineTo(55,145);
	ctx.lineTo(40,130);
	//trunk
	ctx.lineTo(60,90);
	//arms
	ctx.moveTo(50,110);
	ctx.lineTo(55,125);
	ctx.lineTo(70,120);
	ctx.stroke();
	
	ctx.beginPath();
	ctx.arc(60,90,15,0,2*Math.PI);
	ctx.fill();
}

function drawTile2(){
	ctx2.clearRect(0,0,canvas2.width, canvas2.height);
	room(canvas2,ctx2);
	person(canvas2,ctx2);
}

function draw(){
	drawTile0();
	drawTile1();
	drawTile2();
	window.requestAnimationFrame(draw);
}

draw();