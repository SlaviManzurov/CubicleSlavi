const Cube = require('../models/cube')
const uniqid = require('uniqid')
const fs = require('fs')
const path = require('path')

let productData = require('../config/database.json')

function getAll() {
    return productData
}

function getOne(id) {
    return  productData.find(x => x.id == id)
}

function createProduct(data) {
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    )

    productData.push(cube)
    console.log(cube);

    fs.writeFile(__dirname + '/../config/database.json', JSON.stringify(productData),(err) => {
        if (err) {
            console.log(err);
            return
        }
    })
}

module.exports = {
    getOne,
    getAll,
    createProduct,
};
