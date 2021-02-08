const Cube = require('../models/cube')
const uniqid = require('uniqid')

function createProduct(data) {
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    )
    console.log(cube);
}

module.exports = createProduct;
