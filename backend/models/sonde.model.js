const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sondeSchema = new Schema({
    name: { type: String, required: true, unique: true },
    notes: [{ date: Date, body: String }]
}, { timestamps: true })

const Sonde = mongoose.model('Sonde', sondeSchema)

module.exports = Sonde