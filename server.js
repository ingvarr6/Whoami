 /******************************************************
 * PLEASE DO NOT EDIT THIS FILE
 * the verification process may break
 * ***************************************************/

'use strict';

var express = require('express');
var app = express();
  
app.get('/', function(req, res){
  console.log(req.headers)
  res.send(req.headers.host);
})

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});

