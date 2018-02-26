var mongoose = require('mongoose');

var ModelSchema = new mongoose.Schema({
	playername: String,
	game: Number
});

mongoose.model("Game", ModelSchema);