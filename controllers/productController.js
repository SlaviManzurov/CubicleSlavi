const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/create', (req, res) => {
    res.render('create')
})

router.post('/create', (req,res) => {
    console.log(req.body);
})

router.get('/details/:productId',(req,res)=>{
    res.render('details')
})

module.exports = router;