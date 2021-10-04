const Product = require('../models/productModel')

const readData = (req, res) => {
    Product.find({})
    .then(result => res.send(result))
    .catch((err) => res.send(`Error fetching data! - ${err}`))
}

const readDataById = (req, res) => {
    Product.findById(req.params.id)
    .then((result) => res.send(result))
    .catch((err) => res.send(`Error fetching data! - ${err}`))
}

const create = (req, res) => {
    let {
        id,
        name,
        description,
        price,
        quantity
    } = req.body
    let product = new Product({
        id,
        name,
        description,
        price,
        quantity
    })
    console.log(product)
    if (id && name && price)
        product.save()
        .then(() => res.send('Data stored into Database'))
        .catch(() => res.send('Failed to store data into Database'))
    else
        res.send('Please fill all necessary fields')
}

const updateById = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send('Data updated'))
    .catch((err) => res.send(err))
}

const deleteById = (req,res)=>{
    Product.findByIdAndRemove(req.params.id)
    .then(()=>res.send('Product deleted'))
    .catch((err)=>res.send(err))
}

module.exports = {
    readData,
    readDataById,
    create,
    updateById,
    deleteById
}