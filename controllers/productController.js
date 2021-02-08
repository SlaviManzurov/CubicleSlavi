const { Router } = require('express')
const createProduct = require('../services/productServices')

const router = Router()


router.get('/', (req, res) => {
    res.render('home')
})

router.get('/create', (req, res) => {
    res.render('create')
})

router.post('/create', (req, res) => {

    let data = req.body;
    createProduct(data)
    res.redirect('/')
})

router.get('/details/:productId', (req, res) => {
    res.render('details')
})

module.exports = router;