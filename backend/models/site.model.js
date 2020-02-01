const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const geoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
})

const siteSchema = new Schema({
    name: { type: String, required: true, unique: true, trim: true },
    code: { type: String, required: true, unique: true},
    watershed: String,
    location: geoSchema,
    sample: [{
        name: String,
        details: String
    }],
    deployment: [{ type: Schema.Types.ObjectId, ref: 'Deploment' }],
    hobos: [{ type: Schema.Types.ObjectId, ref: 'Hobolog'}],
    campbell: { type: Schema.Types.ObjectId, ref: 'Campbell' },
    tags: [String],
    comments: [{ body: String, date: Date }]
}, { timestamps: true });

const Site = mongoose.model('Site', siteSchema);

module.exports = Site;