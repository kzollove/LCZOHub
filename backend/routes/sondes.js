const router = require('express').Router();
let Sonde = require('../models/sonde.model');

router.route('/').get((req, res) => {
    Sonde.find()
        .then(sites => res.json(sites))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;

    const newSonde = new Sonde({
        name
    })

    newSonde.save()
        .then(() => res.json('Sonde added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
    Sonde.findById(req.params.id)
        .then(sonde => res.json(sonde))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router