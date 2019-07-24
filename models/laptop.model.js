const mongoose = require("mongoose");

const laptopSchema = new mongoose.Schema({
    brand: String,
});

module.exports = mongoose.model("Laptop", laptopSchema); 