//Sprawdzamy czy sa potrzebne moduly i startujemy aplikacje express
const express = require("express");
var path = require('path');

const app = express();

//Metoda do uwierzytelnienia
function authentication(req, res, next) {
	var authheader = req.headers.authorization;
	console.log(req.headers);

	//Jezeli headery okna uwierzytelnienia nie isteniaja, zwroc error
	if (!authheader) {
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err)
	}
	//Pobieranie wartosci z okna uwierzytelnienia
	var auth = new Buffer.from(authheader.split(' ')[1],
		'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1];

	//Jezeli credentiale sie zgadzaja to przechodzimy na strone-->Hello world
	if (user == '' && pass == '') {

		next();
	//Jezeli credentiale sie nie zgadzaja to ma wywalic blad
	} else {
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err);
	}

}

//Flow aplikacji, uwierzytelnienia a nastepnie odpalenie widoku z index.html --> Hello world
app.use(authentication)
app.use(express.static(path.join(__dirname, 'public')));

//Setupowanie servera i dodanie loga do konsoli o tym ze serwer sie odpalil
app.listen((3000), () => {
	console.log("Server is Running");
})