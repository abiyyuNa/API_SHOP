const Product = require('../models/product')


exports.home =(req,res)=>{
    res.send("wellcome to api shop")
}
exports.listProduct = async(req,res)=>{
    let data = await Product.find()
    res.send(JSON.stringify({"status":200, "error": null, "respon":data }))
}
exports.detailProduct = async(req,res)=>{
    let data = await Product.findById(req.params.id)
    res.send(JSON.stringify({"status":200, "error": null, "respon":data }))
}
exports.tambahProduct = async(req,res)=>{
    const products = new Product(req.body)
    const status = await products.save()
    res.send(JSON.stringify({"status":200, "error": null, "respon":status}))
}
exports.ubahProduct = async(req,res)=>{
    const {id} = req.params
    const status = await Product.update({_id : id}, req.body)
    res.send(JSON.stringify({"status":200, "error": null, "respon":status }))
}
exports.hapusProduct = async(req,res)=>{
    let {id} = req.params
    const status = await product.remove({_id : id})
    res.send(JSON.stringify({"status":200, "error": null, "respon":status }))
}