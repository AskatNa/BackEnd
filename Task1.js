const fs = require('fs');

fs.rename('NewFile.txt','RenamedFile.txt',function (err) {
    if(err) throw err;
    console.log("File has been renamed!");
})

fs.unlink('RenamedFile.txt',function (err) {
    if(err) throw err;
    console.log("File has been deleted!");
})