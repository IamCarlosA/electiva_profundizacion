const { request, response } = require('express');

//model
const Product = require('../models/product.model');

const createProduct = async (req = request, res = response) => {
    res.send("Crear producto");
}

const getAllProducts = async (req = request, res = response) => {
    res.send("todos los productos");
}

const getProductById = async (req = request, res = response) => {
    res.send("producto 1");
}

const updateProduct = async (req = request, res = response) => {
    res.send("producto actualizado");
}

const deleteProduct = async (req = request, res = response) => {
    res.send("producto eliminado");
}


module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct   
}