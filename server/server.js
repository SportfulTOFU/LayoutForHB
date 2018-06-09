var express = require('express');
var app = express();
var mysql = require('./db.js')
var url = require('url');
var Q = require('q')
let async = require('async');
var Step = require('step');
var querystring = require('querystring');



//  主页输出 "Hello World"
app.get('/', function(req, res) {

   console.log("主页 GET 请求");
   res.send('Hello GET');
})


//  POST 请求
app.post('/', function(req, res) {
   console.log("主页 POST 请求");
   res.send('Hello POST');
})

//  /del_user 页面响应
app.get('/del_user', function(req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

   console.log("/del_user 响应 DELETE 请求");
   var result = {};
   result = mysql.query('SELECT * FROM 长江图', function(result) {
      // console.log(result);
      return res.json(result);
   })


})

//  /list_user 页面 GET 请求
app.get('/list_user', function(req, res) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
   let name = req.query.name;
   console.log("/list_user GET 请求" + req.query.name);

   mysql.query(name, function(result) {
      // console.log(result);
      // result1 = res.json(result);
      result1 = JSON.stringify(result);
      // console.log(result1);
      return res.json(result);

   }); //参数paraA通过invokeA获得

});

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/abcd', function(req, res) {

   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

   console.log("/ab*cd GET 请求");
   var result = {};
   result = mysql.query('SELECT * FROM 区域概览', function(result) {
      // console.log(result);
      return res.json(result);
   })

})


var server = app.listen(8081, function() {

   var host = server.address().address
   var port = server.address().port

   console.log("应用实例，访问地址为 http://%s:%s", host, port)

})