const mongoose = require("mongoose")

const productSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name cannot be empty"]
    },
    age: {
        type: Number,
        required: [true, 10]
    },
    email: {
        type: String,
        required: [true, "email cannot be empty"]

    },
}, { timestamp: true },
)

const modal = mongoose.model("modal", productSchema);
module.exports = modal;