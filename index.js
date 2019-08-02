// 入口文件
// 引入path
const path = require('path');
// 引入express
const express = require('express');
const app = express();
// 引入路由文件
const router = require('./router.js');
//引入art-template
const template = require('art-template');
// 引入body-parser
const bodyParser = require('body-parser');
// 初始化模板引擎
app.engine('art', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');
// 挂载body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 启用静态资源
app.use('/www', express.static('public'));

app.use(router);

app.listen(3000, () => {
    console.log('running...');
})