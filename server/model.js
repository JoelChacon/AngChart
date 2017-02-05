var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var InfoSchema = new Schema({
	data: [Number]
})
module.exports = mongoose.model("Info", InfoSchema);