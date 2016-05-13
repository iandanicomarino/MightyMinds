"use strict";

var config = require('../../config/secrets.js');
var jwt = require('jsonwebtoken');
var Token = require ('../model/Token.js');

module.exports.createToken = function() {

	var auth = {};
	var d1 = new Date();
	var recipe = config.CLAIMS;
	recipe.email = "user.email";

	recipe.expiry = new Date(d1.getTime() + config.TOKEN_EXPIRY*60000);
    console.log('expiry', recipe.expiry);
	var token = jwt.sign(recipe, config.APP_SECRET);
	var toSave = {
		email:"cool stuff",
		token:token
	}
    Token(toSave).save(function (err,docs){
		if (err) return ("Invalid Token")
		else return (docs.token);

	});
	// redis.set(recipe.email, auth.token, function (err, ok) {
	// 	if (err) { done(err); return; }
	// 	done(null, auth);
	// });
}

module.exports.verifyToken = function (token, email, done) {

	var tkn = jwt.decode(token);

    if (tkn.email != email) {
        return done(false, {"Unauthorized":config.ERROR_MESSAGE.INVALID_TOKEN});
    }

	redis.get(tkn.email, function (err, ok) {

		if (err) { done(false, {"Unauthorized":config.ERROR_MESSAGE.INVALID_TOKEN}); return; };

		if (!ok) {
			done(false, {"Unauthorized":config.ERROR_MESSAGE.INVALID_TOKEN}); return;
		};

		var dateNow = new Date();
		if (Date.parse(dateNow) > Date.parse(tkn.expiry)) {
			redis.del(tkn.email, function (err, deleted) {
				if (err) { console.log("Error deleting token. But it doesn't matter"); return; };
				console.log("Token deleted.");
			})
			done(false, {"Unauthorized":config.ERROR_MESSAGE.INVALID_TOKEN}); // invalid
		}else{
			done(true); // valid
		}
	})
}

module.exports.logout = function (email, done) {
	redis.del(email, function (err, deleted) {
		if (err) { console.log("Error deleting token. But it doesn't matter"); return; };
		console.log("Token deleted.");
        done("Logged out successfully!");
	})
}
