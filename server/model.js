var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var InfoSchema = new Schema({
	num1: Number,
	num2: Number,
	num3: Number,
	num4: Number,
	num5: Number,
	num6: Number,
	num7: Number,
	num8: Number,
	num9: Number,
	num10: Number,
	num11: Number,
	num12: Number
})
module.exports = mongoose.model("Info", InfoSchema);