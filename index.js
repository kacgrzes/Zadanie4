var fs = require('fs');
var colors = require('colors');

function dirContentToTxt(dirPath, filename) {
    var str = '';

    try {
        fs.readdir(dirPath, function (err, data) {
            if (err) {
                console.error('Wystąpił błąd przy odczycie zawartości katalogu: '.red, err.message);
                return;
            };

            fs.writeFile(filename, data, function (err) {
                if (err) {
                    console.error('Wystąpił błąd przy zapisie do pliku: '.red, err.message);
                    return;
                }
                console.log('Zapisano zawartość katalogu: '.blue, dirPath, ' do pliku: '.blue, filename);
            });
        });
    } catch (e) {
        console.error('wystąpił błąd: '.red, e.message);
    }
}

dirContentToTxt('c:/windows/', 'dir.txt');