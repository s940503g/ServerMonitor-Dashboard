// require Express
var express = require('express');

// 實例化一個 Express物件
var app = express();

app.use(express.static('public'));
app.listen(8080, function () {
    console.log('ready on port 8080');
});
