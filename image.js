//模仿一个图片服务器
var express = require('express')
var app = express()
app.use(express.static(__dirname))
app.listen('1010',()=>{
    console.log('app2 is listening 1010');
});