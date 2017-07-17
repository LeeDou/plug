const express = require('express');
const app = express();

app.get('/', function (req, res) {
	res.send('hello word');
})

app.get('/getinfo', function(req, res, next) {
  var _callback = req.query.callback;
  console.log(_callback);
  var _data = {
		"data": [
			{ "firstName":"John" , "lastName":"Doe" },
			{ "firstName":"Anna" , "lastName":"Smith" },
			{ "firstName":"Peter" , "lastName":"Jones" }
		],
		"status": "200",
		"msg": "error"
	}

  if (_callback){
      res.type('text/javascript');
      let data = JSON.stringify(_data);
      res.send(_callback + '(' + data + ')');
  }
  else{
      res.json(_data);
  }
});

const server = app.listen(3000, function () {
	let host = server.address().address;
	let port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
})