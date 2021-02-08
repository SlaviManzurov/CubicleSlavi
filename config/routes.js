// TODO: Require Controllers...
const productController = require('../controllers/productController')
const aboutController = require('../controllers/aboutController')


module.exports = (app) => {
    app.use('/', productController)
    app.use('/about', aboutController)
};