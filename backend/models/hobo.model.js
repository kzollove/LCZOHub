const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hoboSchema = new Schema({
    name: { type: String, unique: true },
    description: String,
}, { timestamps: true })

const Hobo = mongoose.model('Hobo', hoboSchema)

module.exports = Hobo