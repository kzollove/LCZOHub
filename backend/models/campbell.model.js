const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campbellSchema = new Schema({
    sensors: [],
    site: {type: Schema.Types.ObjectId, ref: 'Site'},
    comments: [{ body: String, date: Date }]
})

const Campbell = mongoose.model('Campbell', campbellSchema)

module.exports = Campbell;