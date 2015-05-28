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
	ctx0.font="20px Arial"
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
	ctx1.font="20px Arial";
	ctx1.beginPath();
	ctx1.fillText("Ridiculous cost", canvas1.width / 2, canvas1.height - 10);
	ctx1.beginPath();
	ctx1.fillText("Idling", 160, 120);
	ctx1.beginPath();
	ctx1.fillText("Failure", 40, 120);
}

var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");

function drawTile2(){
	ctx3.clearRect(0,0,canvas3.width, canvas3.height);
}

function draw(){
	drawTile0();
	drawTile1();
	drawTile2();
	window.requestAnimationFrame(draw);
}

draw();