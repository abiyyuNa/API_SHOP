var mongoose = require('mongoose')

var ProductSchema = mongoose.Schema({
    title: {
        type :String,
        require: true
    },
    slug: {
        type: String
    },
    desc: {
        type: String,
        require: true
    },
    categories: {
        type:String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    image: {
        type: String
    },
},
{
    timestamps: true
})

var Product=module.exports = mongoose.model('products', ProductSchema)