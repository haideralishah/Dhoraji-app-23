var mongoose = require('mongoose');

var TodosSchema = mongoose.Schema({
    todo: { type: String, required: true },
    userID: { type: String, required: true }
})

var TodosModel = mongoose.model('TodosModel', TodosSchema);

module.exports = TodosModel;