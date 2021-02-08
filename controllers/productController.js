const { Router } = require('express')
const router = Router()
const Cube = require('../models/cube')
const uniqid = require('uniqid')


router.get('/', (req, res) => {
    res.render('home')
})

router.get('/create', (req, res) => {
    res.render('create')
})

router.post('/create', (req, res) => {

    let data = req.body;
    let cube = new Cube(uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    )
    console.log(cube);
    res.redirect('/')
})

router.get('/details/:productId', (req, res) => {
    res.render('details')
})

module.exports = router;