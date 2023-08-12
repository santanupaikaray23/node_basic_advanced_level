var fs = require('fs');

fs.writeFile('MyCode.txt',"My Nodejs Code", function(err){
    if(err) throw err;
    console.log("File Created")
})