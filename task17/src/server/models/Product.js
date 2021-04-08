const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    info: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("product", productSchema);