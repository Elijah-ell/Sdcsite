var mongoose = require('mongoose');

var ModelSchema = new mongoose.Schema({
	playername: String,
	setcounter: Number
});

mongoose.model("Temp", ModelSchema);