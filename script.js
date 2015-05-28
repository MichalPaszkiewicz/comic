var canvas0 = document.getElementById("canvas0");
var ctx0 = canvas0.getContext("2d");

function drawTile0(){
	
}
var canvas1 = document.getElementById("canvas1");
var ctx1 = canvas1.getContext("2d");

function drawTile1(){
	
}
var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");

function drawTile2(){
	
}

function draw(){
drawTile0();
drawTile1();
drawTile2();
window.requestAnimationFrame(draw);
}

draw();