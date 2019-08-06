const mongoose = require("mongoose");

const laptopSchema = new mongoose.Schema({
    brand: String,
    name: String,
    image: String,
    image2: String,
    image3: String,
    original: Number,
    savings: Number,
    price: Number
});

module.exports = mongoose.model("Laptop", laptopSchema); 