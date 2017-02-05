var Info = require("./model.js");

exports.postInfo = function(req, res) {
	console.log(req.body);
	Info.create({data: req.body}, function(err, info) {
		if(err) {
			res.status(500).json(err);
		} else {
			console.log(info);
			res.json(info);
		}
	})
}

exports.getAllInfo = function(req, res) {
	Info.findById(req.params.id, function(err, info) {
		if(err) {
			res.status(500).json(err);
		} else {
			res.json(info);
		}
	})
}

exports.deleteInfo = function(req, res) {
	Info.findByIdAndRemove(req.params.id, function(err, info) {
		if(err) {
			res.status(500).json(err);
		} else {
			res.json(info);
		}
	})
}