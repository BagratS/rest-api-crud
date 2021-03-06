const express = require('express');
const productsData = require('../data/products-data')
const router = express.Router();

//router.use(express.json());

router.get('/', (req, res, next) => {  //products
    res.status(201).send({
        message: "Handling GET requests for /products...",
        product: productsData.product1,
    })
})

router.post('/', (req, res, next) => {  //products
    res.status(201).send({
        message: "Handling GET requests for /products...",
        product: productsData.product2,
    })
})

router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    if(id === 'UNIQUE_ID') {
        res.json({
            message: `We've got a ${id} id...`
        })
    } else if(id === productsData.product1.id) {
        res.json({
            message: `We've got a ${productsData.product1.id} id...`
        });
    } else {
        res.send({
            message: `We've got a ${id} id...`
        });
    }
})


module.exports = router;