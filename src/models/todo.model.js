const mongoose = require ('mongoose');
const todoSchema = new mongoose.Schema(
    {
        item: {type: String, require: true},
    },
    {
        versionKey: false,
        timestamps: true
    }
);
module.exports = mongoose.model("item", todoSchema);