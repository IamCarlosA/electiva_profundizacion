const { request, response } = require('express');

//model
const Product = require('../models/product.model');

const createProduct = async (req = request, res = response) => {
    const product = req.body;

    const newProduct = new Product(product);
    await newProduct.save((error) => {
        if (!error) {
            res.status(201).json({
                "state": true,
                message: `Product ${product.name} created succefully`
            })
        } else {
            console.error(error)
            res.status(500).json({
                "state": false,
                "message": "Error server"
            });
        }
    });
}

const getAllProducts = async (req = request, res = response) => {

    await Product.find((error, products) => {
        if (!error) {
            res.status(200).json({
                "state": true,
                products
            })
        } else {
            console.error(error)
            res.status(500).json({
                "state": false,
                "message": "Error server"
            });
        }
    }).sort({ createdAt: -1 });

}

const getProductById = async (req = request, res = response) => {
    const id = req.params.id;

    await Product.findById(id, (error, product) => {
        if (!error) {
            if (product) {
                res.status(200).json({
                    "state": true,
                    product
                })
            } else {
                res.status(404).json({
                    "state": false,
                    "message": "Product not found"
                })
            }

        } else {
            console.error(error)
            res.status(500).json({
                "state": false,
                "message": "Error server"
            });
        }
    });

}

const updateProduct = async (req = request, res = response) => {
    const updateProduct = req.body;
    const id = req.params.id;
    await Product.findByIdAndUpdate(id, updateProduct, (error, product) => {
        if (!error) {
            if (product) {
                res.status(200).json({
                    "state": true,
                    "message": "Product updated"
                })
            } else {
                res.status(404).json({
                    "state": false,
                    "message": "Product not found"
                })
            }

        } else {
            console.error(error)
            res.status(500).json({
                "state": false,
                "message": "Error server"
            });
        }
    });

}

const deleteProduct = async (req = request, res = response) => {
    const id = req.params.id;
    await Product.findByIdAndDelete(id, (error, product) => {
        if (!error) {
            if (product) {
                res.status(200).json({
                    "state": true,
                    "message": "Product deleted"
                })
            } else {
                res.status(404).json({
                    "state": false,
                    "message": "Product not found"
                })
            }

        } else {
            console.error(error)
            res.status(500).json({
                "state": false,
                "message": "Error server"
            });
        }
    });

}


module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}