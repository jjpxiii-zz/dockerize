var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Et non, la semaine commence mal');
console.log("il est "+new Date());
});
app.listen(3000, function () {
	console.log('hahaha log !');
});

