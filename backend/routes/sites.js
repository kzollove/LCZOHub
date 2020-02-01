const router = require('express').Router();
let Site = require('../models/site.model');
let Hobo = require('../models/hobo.model');
let Sonde = require('../models/sonde.model');
let Deployment = require('../models/deployment.model');
let Campbell = require('../models/campbell.model');


router.route('/').get((req, res) => {
    Site.find()
        .then(sites => res.json(sites))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Site.findById(req.params.id)
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



// //Add HOBO to existing site
// router.route('/add-hobo/:id').post((req, res) => {    
//     Site.findById(req.params.id)
//         .then(site => {
//             site.hobos.push(req.body.hoboId)
            
//             site.save()
//                 .then(() => res.json('HOBO Added to Site!'))
//                 .catch(err => res.status(400).json('Error: ' + err))
//         })
//         .catch(err => res.status(400).json('Error: ' + err))

//     Hobo.findById(req.body.hoboId)
//         .then(hobo => {
//             hobo.sites.push(req.params.id)

//             hobo.save()
//                 .then(() => res.json('Site added to HOBO!'))
//                 .catch(err => res.status(400).json('Error: ' + err))
//         })
//         .catch(err => res.status(400).json('Error: ' + err))
// })

// //Deploy Sonde
// router.route('/deploy-sonde/:id').post((req, res) => {  
    
//     const siteId = req.params.id;
//     const sondeId = req.body.sondeId;
//     const dateDeployed = Date.parse(req.body.dateDeployed);

//     const deployment = new Deployment({
//         sondeId,
//         siteId,
//         dateDeployed
//     })

//     console.log('COmplete')

//     console.log({sonde, dateDeployed})
 
//     Site.findOneAndUpdate({_id: siteId}, {$push: {sondes: deployment}})
//         .catch(err => res.status(400).json('Error: ' + err))

    // Sonde.findById(sondeId)
    //     .then(sonde => {
    //         sonde.sites.push({
    //             site: siteId,
    //             dateDeployed: dateDeployed
    //         })

    //         sonde.save()
    //             .then(() => res.json('Site logged in sonde!'))
    //             .catch(err => res.status(400).json('Error: ' + err))
    //     })
    //     .catch(err => res.status(400).json('Error: ' + err))
})


module.exports = router
