const router = require('express').Router();
let Hobo = require('../models/hobo.model');

router.route('/').get((req, res) => {
    Hobo.find()
        .then(sites => res.json(sites))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;

    const newHobo = new Hobo({ name })
    
    newHobo.save()
        .then(() => res.json('HOBO added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Hobo.findById(req.params.id)
        .then(hobo => res.json(hobo))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router