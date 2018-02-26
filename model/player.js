var mongoose = require('mongoose');

var ModelSchema = new mongoose.Schema({
	playername: String,
	score: Number
});

mongoose.model("Player", ModelSchema);