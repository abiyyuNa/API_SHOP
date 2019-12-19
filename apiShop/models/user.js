var mongoose = require('mongoose')

var UserSchema = mongoose.Schema({
    username: {
        type :String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    alamat: {
        type:String,
        require: true
    },
    noTelp: {
        type: String,
        require: true
    },

},
{
    timestamps: true
})

var User=module.exports = mongoose.model('users', UserSchema)