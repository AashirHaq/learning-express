const records = [];

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        records.push(this);
    }

    static list() {
        return records;
    }
}