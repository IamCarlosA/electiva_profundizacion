const { Schema, model } = require('mongoose');

const invoiceSchema = Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    products: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true
        },
        qty: {
            type: Number,
            required: true
        }
    }],
    iva: { type: Number, required: true },
    total: { type: Number, required: true }

}, { timestamps: true });



module.exports = model('Invoice', invoiceSchema);