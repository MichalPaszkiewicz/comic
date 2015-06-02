			var fireParticles = [];
			
			var canvas = document.getElementById("tom-and-jerry");
			var canvas2 = document.getElementById("tom-and-jerry2");
			var canvas3 = document.getElementById("tom-and-jerry3");
			var canvas4 = document.getElementById("tom-and-jerry4");
			var ctx = canvas.getContext("2d");
			var ctx2 = canvas2.getContext("2d");
			var ctx3 = canvas3.getContext("2d");
			var ctx4 = canvas4.getContext("2d");
			
			function addParticle(num){
			
				for(var i = 0; i < num; i++){
					var x = 200 * Math.random();
					var y = canvas.height + 30;
					var r = 30 * Math.random();
					var red = 255;
					var green = ~~(100 + 155 * Math.random());
					var alpha = (0.3 + Math.random() / 2);
				}
				
				fireParticles.push({x:x,y:y,r:r,red:red, green:green, alpha:alpha});
			}
			
			function moveParticles(){
				var newOnes = [];
				for(var i = 0; i < fireParticles.length; i++){
					fireParticles[i].y-= Math.random();
					fireParticles[i].x += Math.random() / 2 + Math.sin(400 * fireParticles[i].alpha + Math.random()) / 2;
					if(fireParticles[i].x < canvas.height - fireParticles[i].y){
						fireParticles[i].r-= 0.1;
					}
					fireParticles[i].r = Math.max(0.5, fireParticles[i].r -= (canvas.height / (20 * fireParticles[i].y)) * Math.random());
					fireParticles[i].green = Math.max(Math.round(fireParticles[i].green - Math.random()), 0);
					fireParticles[i].alpha -= 0.0001;
					
					if(fireParticles[i].y > 0 && fireParticles[i].x < canvas.width + 30){						
						newOnes.push(fireParticles[i]);
					}
				}
				fireParticles = newOnes;
			}
			
			var addFire = false;
			
			function frameOne(){
				moveParticles();
				
				addFire = !addFire;
				
				var fpLength = fireParticles.length;
			
				if(fpLength < 200 && addFire){
					addParticle(1);
				}
				
				ctx.clearRect(0,0, canvas.width, canvas.height);
				
				for(var i = 0; i < fpLength; i++){	
					ctx.beginPath();
					ctx.arc(fireParticles[i].x,fireParticles[i].y,fireParticles[i].r,0, Math.PI * 2);
					ctx.fillStyle = "rgba(" + fireParticles[i].red + "," + fireParticles[i].green + ",0," + fireParticles[i].alpha + ")";
					ctx.fill();
				}	
			}
			
			function drawBall(x,y,r, col,col2){
				ctx2.beginPath();
				var grad=ctx.createLinearGradient(x - r, y - r, x, y);
				grad.addColorStop(0,col);
				grad.addColorStop(1,col2);
				ctx2.fillStyle=grad;
			
				ctx2.beginPath();
				ctx2.arc(x, y, r, 0, 2 * Math.PI);
				ctx2.fill();
			}
			
			function droplets(){
				for(var i = 0; i < t.length; i++){
					if(t[i] / 100 > Math.PI / 2){
						t[i] = 0;
					}
					
					var x = 110 - 11 * Math.sin(t[i] / 20);			
					if(t[i] / 100 > Math.PI / 7){
						x += 10 * Math.sin(t[i] / 20) - 8;
					}	
					var val = (t[i]) / 50;
					var y =70 + 110 * Math.sin(val / 2);	

					ctx2.beginPath();
					ctx2.arc(x, y, 4, 0, 2 * Math.PI);
					ctx2.fill();	
				}
			}
			
			function eye(x,y){
				drawBall(x,y,10,"white","gray");
				ctx2.beginPath();
				ctx2.moveTo(x - 7.1,y - 7.1);
				ctx2.lineTo(x - 17, y + 5);
				ctx2.lineTo(x - 9, y + 15);
				ctx2.lineTo(x + 7.1, y + 7.1);
				ctx2.fill();
				drawBall(x-1,y, 5,"blue","rgb(102, 102, 135)");
				drawBall(x-1,y,2,"white","black");
			}
			
			function mouth(){
				ctx2.strokeStyle="white";
				var x = 100;
				var y = 86;
				var grad=ctx.createLinearGradient(x - 30, y - 30, x, y + 10);
				grad.addColorStop(0,"rgb(178, 122, 58)");
				grad.addColorStop(1,"black");
				ctx2.fillStyle=grad;
				ctx2.beginPath();
				ctx2.moveTo(x, y);
				ctx2.bezierCurveTo(x - 5,y - 15,x -20,y -21,x-=22,y-=18);
				ctx2.bezierCurveTo(x - 5, y - 3, x - 15, y+10, x-=8,y+=20);
				ctx2.bezierCurveTo(x + 5, y + 10, x + 20, y + 15, 100,86);
				ctx2.fill();
				
				ctx2.beginPath();
				drawBall(75, 68, 5, "white","black");
				
				var x0 = x = 85;
				var y0 = y = 100;
				grad=ctx.createLinearGradient(x - 30, y - 30, x, y + 10);
				grad.addColorStop(0,"rgb(178, 122, 58)");
				grad.addColorStop(1,"black");
				ctx2.fillStyle=grad;
				ctx2.beginPath();
				ctx2.moveTo(x, y);
				ctx2.bezierCurveTo(x - 5,y - 15,x -20,y -21,x-=12,y-=15);
				ctx2.bezierCurveTo(x, y - 3, x - 15, y+10, x-=8,y+=12);
				ctx2.bezierCurveTo(x + 5, y + 10, x + 15, y + 12, x0,y0);
				ctx2.fill();
			}
			
			function whiskers(){
				ctx2.beginPath();
				ctx2.strokeStyle="black";
				ctx2.moveTo(94,83);
				ctx2.bezierCurveTo(95,81,120,90,145,87);
				ctx2.moveTo(90,85);
				ctx2.bezierCurveTo(108,88,115,92,140,105);
				ctx2.moveTo(88,91);
				ctx2.bezierCurveTo(93,94,105,90,130,120);
				ctx2.stroke();
			}
			
			function frameTwo(){
				ctx2.clearRect(0,0, canvas.width, canvas.height);
				
				drawBall(140,90,50,"rgb(48, 29, 13)","black");
				
				eye(98,64);
				
				drawBall(46,148,50,"rgb(153, 96, 62)","black");
				drawBall(120,100,50,"rgb(153, 96, 62)","black");
				drawBall(20,220,120,"rgb(153, 96, 62)","black");
										
				ctx2.beginPath();
				ctx2.moveTo(110,70);
				ctx2.bezierCurveTo(80, 110, 110, 120, 100, 180);
				ctx2.lineTo(105,180);
				ctx2.bezierCurveTo(110, 120, 90, 110, 110, 70);
				var grad=ctx.createLinearGradient(50, 50, canvas2.width - 80, canvas2.height - 20);
				grad.addColorStop(0,"red");
				grad.addColorStop(1,"black");
				ctx2.fillStyle=grad;
				ctx2.strokeStyle = "darkred";
				ctx2.fillStyle = grad;
				ctx2.stroke();
				ctx2.fill();	
						
				droplets();
				
				ctx2.beginPath();
				ctx2.arc(110, 70, 10, 0, 2 * Math.PI);
				ctx2.fillStyle= "black";
				ctx2.fill();
				
				eye(110,70);
				mouth();
				
				drawBall(180,110,55,"rgb(48, 29, 13)","black");
				drawBall(180,110,50,"black","rgb(48, 29, 13)");
				
				whiskers();
			}
			
			function f3bg(){
				var grad=ctx3.createLinearGradient(0, 0, 0, canvas3.height);
				grad.addColorStop(0,"rgb(62,62,72)");
				grad.addColorStop(1,"rgb(15,15,25)");
				ctx3.fillStyle=grad;
				
				ctx3.beginPath();
				ctx3.rect(0,0,canvas3.width, canvas3.height);
				ctx3.fill();
			}
			
			var rainParticles = [];
			
			for(var i = 0; i < 18; i++){
				rainParticles.push({x: canvas.width * (2 * Math.random()-1),y: canvas.height * Math.random(),r:1});
			}
			
			function f3moveRain(){
				for(var i = 0; i < rainParticles.length; i++){
					rainParticles[i].x+=5;
					rainParticles[i].y+=10;
				}
			}
			
			function f3setRain(){
				var newRain = [];
				for(var i = 0; i < rainParticles.length; i++){
					if(rainParticles[i].y > canvas3.height + 20){
						newRain.push({x: canvas.width * (2 * Math.random() - 1), y: 0, r: 1});
					}
					else{
						newRain.push(rainParticles[i]);
					}
				}
				rainParticles = newRain;
			}
			
			function f3rain(s,f){			
				ctx3.shadowBlur = 5;
				ctx3.shadowColor="rgb(30,30,50)";
				
				for(var i = s; i < f; i++){
					var rp = rainParticles[i];
					
					for(var j = 0; j < 8; j++){
						ctx3.beginPath();
						var r = (200 - 3 * j);
						var g = r;
						var b = r;
						ctx3.fillStyle="rgba(" + r + "," + g + "," + b + ",0.3)";
						ctx3.arc(rp.x - j,rp.y - 2 * j,rp.r,0,Math.PI * 2);
						ctx3.fill();
					}
					
				}
			}
			
			function f3lightning(){
				if(t[0] == 6 || t[0] == 12 || t[0] == 16){
					ctx3.fillStyle="rgba(120,120,98,0.8)";
					ctx3.rect(0,0,canvas.width, canvas.height);
					ctx3.fill();
				}
			}
			
			function f3drawing(){
				ctx3.beginPath();
				var grad=ctx3.createLinearGradient(canvas3.width, 50, 20, canvas3.height);
				grad.addColorStop(0,"rgb(82, 59, 34)");
				grad.addColorStop(1,"black");
				ctx3.fillStyle=grad;
				ctx3.shadowBlur=0;
				ctx3.arc(80,105,20,0,2 * Math.PI);
				ctx3.fill();
				ctx3.beginPath();
				ctx3.arc(100,105,3,0,2 * Math.PI);
				ctx3.fill();
				ctx3.beginPath();
				ctx3.arc(75,85,15,0,2 * Math.PI);
				ctx3.fill();
				ctx3.beginPath();
				ctx3.arc(60,90,15,0,2 * Math.PI);
				ctx3.fill();
				ctx3.beginPath();
				ctx3.arc(70,150,40,0,2 * Math.PI);
				ctx3.fill();
				ctx3.beginPath();
				ctx3.moveTo(30,150);
				ctx3.lineTo(40,200);
				ctx3.lineTo(100,200);
				ctx3.lineTo(110,150);
				ctx3.fill();
				// arm
				ctx3.beginPath();
				ctx3.moveTo(95,120);
				ctx3.lineTo(120,135);
				ctx3.lineTo(160,120);
				ctx3.lineTo(160,130);
				ctx3.bezierCurveTo(114,170,108,170,80,140);
				ctx3.fill();
				// cheese
				ctx3.beginPath();
				grad=ctx3.createLinearGradient(canvas.width, 80, 180, 150);
				grad.addColorStop(0,"#A9A900");
				grad.addColorStop(1,"black");
				ctx3.fillStyle=grad;
				ctx3.moveTo(163, 100);
				ctx3.lineTo(183, 100);
				ctx3.lineTo(183, 120);
				ctx3.lineTo(163, 120);
				ctx3.lineTo(163, 0);
				ctx3.closePath();
				//holes
				ctx3.arc(168,105,1,0,2 * Math.PI, true);
				ctx3.closePath();
				ctx3.arc(180,109,1,0,2 * Math.PI, true);
				ctx3.closePath();
				ctx3.arc(166,112,3,0,2 * Math.PI, true);
				ctx3.closePath();
				ctx3.arc(178,118,2,0,2 * Math.PI, true);
				ctx3.closePath();
				ctx3.arc(175,101,1.5,0,2 * Math.PI, true);
				ctx3.closePath();
				ctx3.fill();
				//hand
				grad=ctx3.createLinearGradient(canvas3.width, 50, 20, canvas3.height);
				grad.addColorStop(0,"rgb(82, 59, 34)");
				grad.addColorStop(1,"black");
				ctx3.fillStyle=grad;
				ctx3.beginPath();
				ctx3.moveTo(160,120);
				ctx3.bezierCurveTo(161,110,165,122,170,118);
				ctx3.bezierCurveTo(172,115,177,120,185,115);
				ctx3.bezierCurveTo(190,114,180,125,185,123);
				ctx3.bezierCurveTo(180,125,170,120,160,130);
				ctx3.fill();
				//right hand(left for viewer);
				ctx3.beginPath();
				ctx3.moveTo(40,125);
				ctx3.lineTo(10,200);
				ctx3.lineTo(10,210);
				ctx3.lineTo(50,170);
				ctx3.fill();
			}
			
			function frameThree(){
				f3bg();
				
				f3moveRain();
				f3setRain();
				
				f3rain(0,10);
				
				f3lightning();
				
				f3drawing();
				
				f3rain(11,rainParticles.length);
			}
			
			var buildings = [];
			
			for(var i = 0; i < 5; i++){
				buildings.push({x:Math.random() * 200, h:Math.random() * 70, w: Math.random() * 30 + 15});
			}
			
			for(var i = 0; i < 10; i++){
				buildings.push({x:Math.random() * 200, h:Math.random() * 10, w: Math.random() * 10 + 10});
			}
			
			function frameFour(){
				ctx4.beginPath();
				ctx4.rect(0,0,canvas4.width, canvas4.height);
				ctx4.fillStyle= "#300";
				ctx4.fill();
				
				for(var i = 0; i < fireParticles.length; i++){	
					ctx4.beginPath();
					ctx4.arc(fireParticles[i].x,fireParticles[i].y - 40,fireParticles[i].r,0, Math.PI * 2);
					ctx4.fillStyle = "rgba(" + fireParticles[i].red + "," + fireParticles[i].green + ",0," + fireParticles[i].alpha + ")";
					ctx4.fill();
				}
				
				ctx4.fillStyle="black";
				ctx4.beginPath();
				ctx4.rect(0,canvas.height,canvas.width,-5);
				ctx4.fill();
				for(var i = 0; i < buildings.length;i++){
					ctx4.beginPath();
					ctx4.rect(buildings[i].x,canvas.height-5,buildings[i].w,-buildings[i].h);
					ctx4.fill();
				}
				
				ctx4.fill();
				ctx4.fillStyle="#181414";
				ctx4.beginPath();
				ctx4.rect(10,200,20,-40);			
				ctx4.rect(30,200,20,-40);		
				ctx4.rect(60,200,20,-30);
				ctx4.rect(90,200,20,-10);
				ctx4.rect(120,200,20,-60);
				ctx4.rect(60,200,20,-40);
				ctx4.rect(160,200,120,-30);
				ctx4.fill();
			}
			
			var t = [0,20,50,110];
			
			function draw(){
				for(var i = 0; i < t.length; i++){
					t[i]++;
				}
				
				frameOne();
				frameTwo();
				frameThree();
				frameFour();
				
				window.requestAnimationFrame(draw);
			}
			
			draw();