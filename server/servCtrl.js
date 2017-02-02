var Info = require("./model.js");

exports.postInfo = function(req, res) {
	Info.create(req.body, function(err, info) {
		if(err) {
			res.status(500).json(err);
		} else {
			res.json(info);
		}
	})
}

exports.getAllInfo = function(req, res) {
	Info.find(req.body, function(err, info) {
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