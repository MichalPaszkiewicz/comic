var fs = require('fs');
var sys = require("sys");

var args = process.argv;

function moveFiles(keepAll){
	console.log("\r\n* Moving files\r\n");
	function copyFile(source, folder, cb, unlink) {
		if (!fs.existsSync(folder + "")) {
			fs.mkdirSync(folder + "", 0766, function (err) {
				if (err) {	done(err);	}
			});
		}
		var cbCalled = false;

		var rd = fs.createReadStream(source);
		rd.on("error", function (err) {
			done(err);
		});
		var wr = fs.createWriteStream(folder + "/" + source);
		wr.on("error", function (err) {
			done(err);
		});
		wr.on("close", function (ex) {
			// do nothing
			//done("complete");
		});
		rd.pipe(wr);
		
		if(unlink){
			fs.unlink(source);
		}
		
		function done(err) {
			if (!cbCalled) {
				cb(err);
				cbCalled = true;
			}
		}
	}

	var files = fs.readdirSync(__dirname);

	var maxFile = 0;
	var otherFiles = [];

	for(var i = 0; i < files.length; i++){
		if(parseInt(files[i]) > maxFile){
			maxFile = parseInt(files[i]);
		}
		else{
			if("strip.js, .git, LICENSE, templates, master.html, tile.html, canvas.js".indexOf(files[i]) == -1){
				otherFiles.push(files[i]);
			}
		}
	}

	for(var i = 0; i < otherFiles.length; i++){
		var keepOriginal = keepAll || otherFiles[i] == "styles.css";
		var unlink = !keepOriginal;
		copyFile(otherFiles[i], maxFile + 1, console.log, unlink);
	}
}

function createNewBlank(){
	console.log("\r\n* Creating new blank file\r\n");
	
	var numberOfItems = 3;
	
	fs.readFile('templates/master.html', function(err, dataMaster){
		console.log("Writing index");
		if(err){ throw err; }
		
		var masterString = dataMaster.toString();
	
		fs.readFile('templates/tile.html', function(err, dataTile){
			if(err){ throw err; }
			console.log("Getting tile");
			
			var tileString = dataTile.toString();
			var allTiles = "";
			
			for(var i = 0; i < numberOfItems; i++){
				allTiles += tileString.replace("{TILENO}", i + "").replace("{TEXT}","{TXT}")
			}
			
			masterString = masterString.replace("{TILES}", allTiles);
				
			fs.writeFile("index.html", masterString, function(err) {
				if(err) {	return console.log(err);	}

				console.log("The file was saved!\r\n");
			}); 
		});
	
	})
	
	fs.readFile('templates/canvas.js', function(err, dataJS){
		console.log("Writing js");
		if(err){	throw err;	}
		
		var canvasString = dataJS.toString();
		var jsString = "";
		
		for(var i = 0; i < numberOfItems; i++){
			jsString += canvasString.replace(/{TILENO}/g, i + "");
		}
		
		fs.writeFile("script.js", jsString, function(err) {
			if(err) {	return console.log(err);	}
        
			console.log("The file was saved!\r\n");
		}); 
	});
}

function commandMessage(){
	console.log("\r\n\r\n");
	console.log("\t******************************");
	console.log("\t********** COMMANDS **********");
	console.log("\t******************************\r\n\r\n");
	console.log("\tmove \t-- moves current directory into next sub folder");
	console.log("\tcopy \t-- copies current directory into next sub folder");
	console.log("\tnew \t-- creates new blank strip");
	console.log("\tclear \t-- clears console");
	console.log("\r\n\r\n");
}

function control(value){	
	switch(value){
		case "move":
			moveFiles(false);
			break;
		case "copy":
			moveFiles(true);
			break;
		case "new":
			createNewBlank();
			break;
		case "clear":
			console.log('\033[2J');
			break;
		default:
			console.log("Incorrect input. Please use one of the following commands:");
			commandMessage();
	}	
}

if(args.length > 2){	
	control(args[2]);
}
else{
	commandMessage();
}

var stdin = process.openStdin();

stdin.addListener("data", function(d) {
	control(d.toString().replace("\r","").replace("\n",""));
});