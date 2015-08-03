var t = 0;

var canvas0 = document.getElementById("canvas0");
var ctx0 = canvas0.getContext("2d");

function drawTile0(){
	var canvas = canvas0;
	var ctx = ctx0;
	
	ctx.clearRect(0,0,canvas.width, canvas.height);
	
	var top = 60 + 3 * Math.sin( (t % 30) * Math.PI / 15);
	var mid = 90 + Math.sin( (t % 30) * Math.PI / 15);
	var bot = 100;
	var l = 5 * Math.sin( (t % 200) * Math.PI / 100);
	
	ctx.beginPath();
	ctx.moveTo(20 + l, 100);
	ctx.bezierCurveTo(20 + l, top, 180 + l, top, 180 + l, bot);
	ctx.bezierCurveTo(180 + l, mid, 140 + l, mid,140 + l, bot);
	ctx.bezierCurveTo(140 + l, mid, 100 + l, mid, 100 + l,bot);
	ctx.bezierCurveTo(100 + l, mid, 60 + l,  mid, 60 + l, bot);
	ctx.bezierCurveTo(60 + l,  mid, 20 + l,  mid, 20 + l, bot);
	ctx.fill();
	
	ctx.beginPath();
	
	for(var i = 0; i < 5; i++){
		ctx.moveTo(i * 40 + 20 + l, bot);
		ctx.lineTo(bot + l, bot + 20);
	}
	
	ctx.stroke();
	
	// head
	ctx.beginPath();
	ctx.arc(100 + l, bot + 15, 4, 0, 2 * Math.PI);
	ctx.fill();
	
	ctx.beginPath();
	// body
	ctx.moveTo(100 + l, bot + 20);
	ctx.lineTo(100 + l, bot + 30);
	
	// arms
	ctx.moveTo(100 + l - 6, bot + 23 - 3);
	ctx.lineTo(100 + l, bot + 23);
	ctx.lineTo(100 + l + 6, bot + 23 - 3);
	
	// legs
	ctx.moveTo(100 + l - 2, bot + 38);
	ctx.lineTo(100 + l, bot + 30);
	ctx.lineTo(100 + l + 2, bot + 38);
	
	ctx.stroke();
}

var canvas1 = document.getElementById("canvas1");
var ctx1 = canvas1.getContext("2d");

var stars = [];

for(var i = 0; i < 500; i++){
	var x = Math.random() * 200;
	var y = Math.random() * 200;
	stars.push({x: x, y: y});
}

function drawTile1(){
	var canvas = canvas1;
	var ctx = ctx1;
	
	ctx.clearRect(0,0, canvas.width, canvas.height);
	
	ctx.fillStyle = "white";
	// stars
	for(var i = 0; i < stars.length; i++){
		ctx.beginPath();
		ctx.rect(stars[i].x, stars[i].y, 1, 1);
		
		ctx.fill();
	}
	
	// hole
	ctx.beginPath();
	ctx.fillStyle = "black";
	ctx.arc(100, 100, 35, 0, 2 * Math.PI);
	ctx.fill();
}

var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");

function butterfly(ctx, x, y, r, w){
	ctx.beginPath();
	
	ctx.moveTo(x, y);
	ctx.bezierCurveTo(x + w,y - r * 4,x + w,y + r * 3,x, y);
	ctx.bezierCurveTo(x - w,y - r * 4,x - w,y + r * 3,x, y);
	ctx.arc(x, y - 3, 2, 0 , 2 * Math.PI);
	ctx.arc(x , y + 3, 2, 0 , 2 * Math.PI);
	
	ctx.fill();
}

function drawTile2(){
	var canvas = canvas2;
	var ctx = ctx2;
	
	ctx.clearRect(0,0,canvas.width, canvas.height);
	
	butterfly(ctx, 100, 90, 20, 30 + 5 * Math.sin(( t % 40) * Math.PI / 20));
}

var canvas3 = document.getElementById("canvas3");
var ctx3 = canvas3.getContext("2d");

function drawTile3(){
	var canvas = canvas3;
	var ctx = ctx3;
	
	ctx.clearRect(0,0,canvas.width, canvas.height);
	ctx.font = "italic 20px lucida console";
	ctx.textAlign = "center";
	ctx.fillText("t = " + t, 100,100);
}

var canvas4 = document.getElementById("canvas4");
var ctx4 = canvas4.getContext("2d");

function infinity(ctx, x, y, r){
	ctx.beginPath();
	
	ctx.moveTo(x, y);
	ctx.bezierCurveTo(x + r * 2,y - r * 2,x + r * 2,y + r * 2,x, y);
	ctx.bezierCurveTo(x - r * 2,y - r * 2,x - r * 2,y + r * 2,x, y);
	
	ctx.stroke();
}

function drawTile4(){
	var canvas = canvas4;
	var ctx = ctx4;
	
	ctx.clearRect(0,0, canvas.width, canvas.height);
	
	ctx.font = "lucida console";
	ctx.textAlign = "center";
	ctx.font = "10px lucida console";
	ctx.fillText("f(n + 1) = (f(n) + S / f(n))/2", 100,90);
	ctx.fillText("n", 75,110);
	
	ctx.moveTo(85, 107);
	ctx.lineTo(100, 107);
	ctx.moveTo(95, 102);
	ctx.lineTo(100, 107);
	ctx.lineTo(95, 112);
	
	ctx.stroke();
	
	infinity(ctx, 112, 107, 5);
}


function draw(){
	t++;
	drawTile0();
	drawTile1();
	drawTile2();
	drawTile3();
	drawTile4();
  window.requestAnimationFrame(draw);
}

draw();