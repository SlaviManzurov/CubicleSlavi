const { Router } = require('express')
const createProduct = require('../services/productServices')

const router = Router()


router.get('/', (req, res) => {
    let products = createProduct.getAll()
    res.render('home',{products})
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

    let product = createProduct.getOne(req.params.productId)
    res.render('details', {product})
})

module.exports = router;