const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deploymentSchema = new Schema({
    sonde: { type: String, required: true},
    site: {type: Schema.Types.ObjectId, ref: 'Site'},
    dateDeployed: { type: Date },
    dateRetrieved: { type: Date },
    isDeployed: Boolean
})

const Deployment = mongoose.model('Deploy', deploymentSchema)

module.exports = Deployment;