var mongoose = require('mongoose'),
	express = require('express'),
	path = require('path'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	morgan = require('morgan');

//instatiating express
var app = express();

// requiring files
var info = require('./server/servCtrl.js')

// middleware
app.use(express.static(path.join(__dirname, '/public')));
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//routes
app.post("/api/info", info.postInfo);
app.get("/api/info", info.getAllInfo);
app.delete("/api/info/:id", info.deleteInfo);


// connections
var mongoUri = 'mongodb://localhost:27017/info';
mongoose.connect(mongoUri, function() {
	console.log("I'm connected to the database at: " + mongoUri);
})

var port = process.env.PORT || 9004;
app.listen(port, function() {
	console.log("I'm on port: " + port);
})