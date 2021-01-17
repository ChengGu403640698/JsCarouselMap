//模仿一个数据服务器
var express = require('express');
var app = express();
app.get('/getImageList',(req,res)=>{
    var data = {
        'nameList':['1.png','2.png','3.png','4.png',
        '5.png','6.png','7.png','8.png','9.png'],
    }
    res.setHeader('Access-Control-Allow-Origin','*');
    console.log(JSON.stringify(data));
    res.send(JSON.stringify(data));
}).listen('1000',()=>{
    console.log('Sever is listening port 1000!');
})