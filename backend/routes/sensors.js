const router = require('express').Router();
const Deployment = require('../models/deployment.model');
const Hobolog = require('../models/hobolog.model');
const Campbell = require('../models/campbell.model');
const Site = require('../models/site.model')

router.route('/deployments').get((req, res) => {
    Deployment.find()
        .then(deployment => res.json(deployment))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/deployments/:id').get((req, res) => {
    Deployment.findById(req.params.id)
        .then(deployment => res.json(deployment))
        .catch(err => res.status(400).json('Error: ' + err))
});
router.route('/deployments/deploy').post((req, res) => {

    const sonde = req.body.sonde;
    const site = req.body.site;
    const dateDeployed = Date.parse(req.body.dateDeployed);
    //const dateRetrieved = Date.parse(req.body.dateRetrieved);
    const isDeployed = req.body.isDeployed;
    const comments = req.body.comments;

    const newDeployment = new Deployment({
        sonde,
        site,
        dateDeployed,
        //dateRetrieved,
        isDeployed,
        comments
    });

    Site.findById(site)
    .then(site => {
        site.deployment.push(newDeployment);

        site.save()
            .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))

    newDeployment.save()
        .then(() => res.json('Sonde Deployed'))
        .catch(err => res.status(400).json('Error:' + err))
})

router.route('/hobos').get((req, res) => {
    Hobolog.find()
        .then(hobolog => res.json(hobolog))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('hobos/:id').get((req, res) => {
    Hobolog.findById(req.params.id)
        .then(hobolog => res.json(hobolog))
        .catch(err => res.status(400).json('Error: ' + err))
});
router.route('/hobos/launch').post((req, res) => {
    const hobo = req.body.hobo;
    const site = req.body.site;
    const downloads = req.body.downloads;
    const comments = req.body.comments;

    const newHobolog = new Hobolog({
        hobo,
        site,
        downloads,
        comments
    });

    Site.findById(site)
        .then(site => {
            site.hobos.push(newHobolog);

            site.save()
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))

    newHobolog.save()
        .then(() => res.json('HOBOs Launched'))
        .catch(err => res.status(400).json(err))
})

router.route('/campbell').get((req, res) => {
    Campbell.find()
        .then(campbell => res.json(campbell))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/campbell/:id').get((req, res) => {
    Campbell.findById(req.params.id)
        .then(campbell => res.json(campbell))
        .catch(err => res.status(400).json('Error: ' + err))
});
router.route('/campbell/add').post((req, res) => {

    const sensors = req.body.sensors;
    const site = req.body.site;
    const comments = req.body.comments;

    const newCampbell = new Campbell({
        sensors,
        site,
        comments
    });

    Site.findById(site)
        .then(site => {
            site.campbell = newCampbell;
            site.save()
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))

    newCampbell.save()
        .then(() => res.json('Campbell Added'))
        .catch(err => res.status(400).json(err))
})

module.exports = router