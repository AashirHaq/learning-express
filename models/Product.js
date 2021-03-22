const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename), 
    'storage', 
    'products.json'
);

const recordsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if(err){
            return cb([]);
        }
        cb(JSON.parse(fileContent));
    });
}

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        recordsFromFile(records => {
            records.push(this);
            fs.writeFile(p, JSON.stringify(records), (err) => {
                console.log(err);
            })
        })
    }

    static list(cb) {
        recordsFromFile(cb)
    }
}