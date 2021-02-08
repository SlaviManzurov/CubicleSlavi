const productController = require('../controllers/productController')
// TODO: Require Controllers...

module.exports = (app) => {
    app.use('/', productController)
};