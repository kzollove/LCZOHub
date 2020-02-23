const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deploymentSchema = new Schema({
    sonde: { type: String, required: true},
    site: {type: Schema.Types.ObjectId, ref: 'Site'},
    dateDeployed: { type: Date },
    dateRetrieved: { type: Date },
    isDeployed: Boolean,
    comments: [{ body: String, date: Date }] 
})

const Deployment = mongoose.model('Deployment', deploymentSchema)

module.exports = Deployment;