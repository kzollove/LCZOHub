const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hobologSchema = new Schema({
    hobo: {type: Schema.Types.ObjectId, ref: 'Hobo'},
    site: {type: Schema.Types.ObjectId, ref: 'Site'},
    downloads: [{ type: Date }],
    comments: [{ body: String, date: Date }]
})

const Hobolog = mongoose.model('Hobolog', hobologSchema)

module.exports = Hobolog;