const fs = require('fs-extra');

const dir = 'temp/'
const file = 'pubs.json'


fs.pathExists(dir)
    .then(exists => {
        if (exists) {
            console.log("Dir il existe donc je suprimme");
            return fs.remove(dir);
        } return;
    })
    .then(() => {
        console.log("cree un temp");
        return fs.ensureDir(dir);
    })
    .then(() => {
        
        return fs.writeJson('./temp/pubs.json', {name: 'fs-extra'})
    })
    .then(() =>{
        fs.watchFile(file, (curr, prev) => {
            console.log(`the current mtime is: ${curr.mtime}`);
            console.log(`the previous mtime was: ${prev.mtime}`);
            })
        })

    
