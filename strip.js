var fs = require('fs');

function copyFile(source, folder, cb, unlink) {
    if (!fs.existsSync(folder + "")) {
        fs.mkdirSync(folder + "", 0766, function (err) {
            if (err) {
                done(err);
                response.send("ERROR! Can't make the directory! \n");    // echo the result back
            }
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
        done("complete");
    });
    rd.pipe(wr);
	
	if(unlink){
		fs.unlink(source, done);
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
		if("strip.js, .git, LICENSE".indexOf(files[i]) == -1){
			otherFiles.push(files[i]);
		}
	}
}

for(var i = 0; i < otherFiles.length; i++){
	var unlink = otherFiles[i] != "styles.css";
	copyFile(otherFiles[i], maxFile + 1, console.log, unlink);
}


