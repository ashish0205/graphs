const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
    productName: {
    type: String,
    required: true,
    },
    currentYear: {
        type: Number,
        require:true
    },
    previousYear: {
        type: Number,
        require:true
    }
});

const prd = mongoose.model("products", dataSchema);

module.exports = prd;