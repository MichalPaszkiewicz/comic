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

var t = 0;

function saw(x,y,canvas, ctx){
	ctx.beginPath();
	ctx.moveTo(x,y - 2);
	ctx.lineTo(x - 5,y+7);
	ctx.lineTo(x ,y+8)
	ctx.lineTo(x+40,y+3);
	ctx.lineTo(x+40,y - 3);
	ctx.lineTo(x,y-2);
	ctx,fillStyle="white";
	ctx.fill();
	//handle
	ctx.moveTo(x+1,y);
	ctx.lineTo(x+5,y);
	ctx.lineTo(x + 1, y+6);
	ctx.lineTo(x - 2, y+6);
	ctx.lineTo(x+1,y);
	ctx.moveTo(x + 9, y - 2);
	ctx.lineTo(x + 2, y + 8);
	ctx.stroke();
}

function wood(canvas,ctx){
	ctx.beginPath();
	ctx.moveTo(72,112);
	ctx.lineTo(120,150);
	ctx.lineTo(120,155);
	ctx.lineTo(114,157);
	ctx.lineTo(68,117);
	ctx.lineTo(68,113);
	ctx.lineTo(72,112);
	ctx.fillStyle="brown";
	ctx.fill();
	ctx.moveTo(120,150);
	ctx.lineTo(114,152);
	ctx.lineTo(114,157);
	ctx.moveTo(114,152);
	ctx.lineTo(68,113);
	ctx.stroke();
	ctx.fillStyle="white";
}

function person(canvas, ctx){
	t++;
	ctx.beginPath();
	ctx.strokeStyle="black";
	var x = 30;
	var y = 158;
	//legs
	ctx.moveTo(x,y);
	ctx.lineTo(x+20,y-3);
	ctx.lineTo(x+10,y-23);
	
	ctx.moveTo(x-4,y-8);
	ctx.lineTo(x+17,y-12);
	ctx.lineTo(x+10,y-23);
	//trunk
	ctx.lineTo(x+30,y-63);
	//left arm
	ctx.moveTo(x+20,y-43);
	ctx.lineTo(x+31,y-35);
	ctx.lineTo(x+50,y-37);
	//right arm
	ctx.moveTo(x+20,y-43);
	ctx.lineTo(x+25 + 10 * Math.sin(t / 4),y-25 + 2 * Math.cos(t/2));
	ctx.lineTo(x+42 + 10 * Math.sin(t / 4),y-28);
	ctx.stroke();
	
	saw(x+42 + 10 * Math.sin(t / 4),y-28,canvas,ctx)
	
	//head
	ctx.beginPath();
	ctx.arc(x+30,y-63,15,0,2*Math.PI);
	ctx.fillStyle="white";
	ctx.fill();
	ctx.stroke();
}

function drawTile2(){
	ctx2.clearRect(0,0,canvas2.width, canvas2.height);
	room(canvas2,ctx2);
	wood(canvas2,ctx2);
	person(canvas2,ctx2);
}

function draw(){
	drawTile0();
	drawTile1();
	drawTile2();
	window.requestAnimationFrame(draw);
}

draw();