var auth = require('http-auth');
var basic = auth.basic({
    realm: "broccoli-project", // change this to your client / project name
    file: __dirname + "/password" // gevorg:gpass, Sarah:testpass ...
});
var express = require('express');
var app = express();

app.use(auth.connect(basic));
app.use(express.static('dist'));
var server = app.listen(process.env.PORT || 8088, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
