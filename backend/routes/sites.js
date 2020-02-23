const router = require('express').Router();
let Site = require('../models/site.model');

router.route('/').get((req, res) => {
    Site.find()
        .then(sites => res.json(sites))
        .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/:code').get((req, res) => {
    Site.findOne({code: req.params.code})
        .populate({
            path: 'deployment',
            match: { isDeployed: { $eq: true} },
            select: 'sonde dateDeployed' 
        })
        .populate({
            path: 'hobos',
            // match: { isDeployed: { $eq: true} },
            // select: 'sonde dateDeployed' 
        })
        .populate({
            path: 'campbell',
            // match: { isDeployed: { $eq: true} },
            // select: 'sonde dateDeployed' 
        })
        .exec()
        .then(site => res.json(site))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const code = req.body.code;
    const watershed = req.body.watershed;
    const location = req.body.location;
    const deployment = req.body.deployment;
    const sample = req.body.sample;
    const hobos = req.body.hobos;
    const campbell = req.body.campbell;
    const tags = req.body.tags;
    const comments = req.body.comments;

    const newSite = new Site({
        name,
        code,
        watershed,
        location,
        sample,
        deployment,
        hobos,
        campbell,
        tags,
        comments
    });

    newSite.save()
        .then(() => res.json('Site Added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})



module.exports = router
