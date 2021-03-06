 /******************************************************
 * PLEASE DO NOT EDIT THIS FILE
 * the verification process may break
 * ***************************************************/

'use strict';

var express = require('express');
var app = express();
  
app.get('/', function(req, res){
  
  var ip = req.headers['x-forwarded-for'].split(',')[0];
  var language = req.headers['accept-language'].split(',')[0];
  var software = /\((.+?)\)/.exec(req.headers['user-agent'])[1];
  res.json({ipaddress: ip, language: language, software: software});
})

app.listen(process.env.PORT, function () {
  console.log('Node.js listening ...');
});

