// モジュールの読み込みとExpressの開始
const express = require('express');
const app = express();

// アクセス先
app.get('/', function(req, res) {
    res.send('hello world');
});

// サーバの受付の開始
app.listen(3000);