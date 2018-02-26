var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Player = mongoose.model('Player')
var Temp = mongoose.model('Temp');
var Game = mongoose.model('Game');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getdata', function(req, res, next){
	//Player.find({}).exec(function(err, docs){res.json({"model":docs});})
	Player.find({}).sort({score: 'descending'}).limit(5).exec(function(err, docs) { res.json({"model": docs}); });
});

router.post('/create-player', function(req , res, next){
	var player = new Player({playername: req.body.playername, score: req.body.score});
	player.save();
	res.send("success");

});

router.post('/store-temp',function(req,res, next){
	var temp = new Temp({playername: "migo", setcounter: req.body.setcounter});
	Temp.find({playername: "migo"}).exec(function(err,docs){
	if(docs.length){
		Temp.find({playername: "migo"}).remove().exec();
		temp.save();
	}
	else
		temp.save();
	})
	
})
router.get('/get-temp', function(req, res, next){
	Temp.find({playername: "migo"}, function(err, temp){
		if(err) return next(err);

		if(!temp.length)
			res.send("null");
		else
			res.json({"model":temp});
	})
})

router.post('/store-game',function(req,res, next){
	var game = new Game({playername: "migo", game: req.body.game});
	Game.find({playername: "migo"}).exec(function(err,docs){
	if(docs.length){
		Game.find({playername: "migo"}).remove().exec();
		game.save();
	}
	else
		game.save();
	})
	
})

router.get('/get-game', function(req, res, next){
	Game.find({playername: "migo"}, function(err, game){
		if(err) return next(err);

		if(!game.length)
			res.send("null");
		else
			res.json({"model":game});
	})
})
module.exports = router;
