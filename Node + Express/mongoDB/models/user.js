var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userName: { type: String, required: true },
    registrationDate: { type: Date, default: Date.now() }
})


var UserModel = mongoose.model("UserModel", UserSchema);

module.exports = UserModel


