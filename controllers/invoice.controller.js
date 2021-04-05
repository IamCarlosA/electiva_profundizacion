const { request, response } = require('express');

//models
const Invoice = require('../models/invoice.model');
const Product = require('../models/product.model');

const createInvoice = async (req = request, res = response) => {
    const invoice = req.body;
    validate(invoice.products, async (resp) => {
        if (resp == false) {
            const newInvoice = new Invoice(invoice);
            await newInvoice.save((error) => {
                if (!error) {
                    res.status(201).json({
                        "state": true,
                        message: `Invoice created succefully`
                    })
                } else {
                    console.error(error)
                    res.status(500).json({
                        "state": false,
                        "message": "Error server"
                    });
                }
            });
        } else {
            res.status(500).json({
                status: false,
                "message": resp
            });
        }
    })

}


const getInvoiceById = async (req = request, res = response) => {
    const id = req.params.id;
    await Invoice.findById(id)
        .populate('products.product')
        .exec((error, invoice) => {
            if (!error) {
                if (invoice) {
                    res.status(200).json({
                        "state": true,
                        invoice
                    })
                } else {
                    res.status(404).json({
                        "state": false,
                        "message": "invoice not found"
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

const getAllInvoice = async (req = request, res = response) => {

    await Invoice.find()
        .populate('products.product')
        .exec((error, invoices) => {
            if (!error) {
                res.status(200).json({
                    "state": true,
                    invoices
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

const validate = async (products, callback) => {
    let products_id = [];
    products.forEach(element => {
        products_id.push(element.product);
    });

    let errores = [];
    let cantidad;
    Product.find({})
        .where("_id").in(products_id)
        .exec(async (err, data) => {
            for (let i = 0; i < data.length; i++) {

                cantidad = products.find(p => p.product == data[i]._id).qty;
                if (cantidad > data[i].stock) {

                    errores.push(
                        `Cantidad insuficiente en ${data[i].name}`
                    )
                }
            }
            if (errores.length == 0) {
                for (let i = 0; i < data.length; i++) {
                    let cantidad_nueva = data[i].stock - cantidad;
                    await Product.findByIdAndUpdate(data[i]._id, {
                        stock: cantidad_nueva
                    })
                }
            }


            callback(errores.length == 0 ? false : errores);

        })

}



module.exports = {
    createInvoice,
    getInvoiceById,
    getAllInvoice
}