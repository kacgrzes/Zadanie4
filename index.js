var fs = require('fs');
var colors = require('colors');

function dirContentToTxt(dirPath, filename) {
    var str = '';
    fs.readdir(dirPath, function (err, data) {
        if (err) throw err;

        for (i = 0; i < data.length - 1; i++) {
            str += data[i] + '\r\n';
        }
        str += data[data.length - 1];

        fs.writeFile(filename, str, function (err) {
            if (err) throw err;
            console.log('Zapisano zawartość katalogu: '.blue, dirPath, ' do pliku: '.blue, filename);
        });
    });
}

dirContentToTxt('c:/windows/', 'dir.txt');