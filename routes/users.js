var mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect("mongodb://127.0.0.1:27017/n133");

var userSchema = mongoose.Schema({
    username: String,
    password: String,
    friends: {
        type: Array,
        default: []
    },
    email: String,
    photo: String

})

module.exports = mongoose.model("user", userSchema);