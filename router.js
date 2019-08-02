const express = require('express');
const router = express.Router();
const server = require('./server.js');

// 渲染主页
router.get('/', server.showDriver);

// 添加车手信息
router.post('/addDriver', server.addDriver);

// 修改车手信息
router.post('/reviseDriver', server.reviseDriver);

// // 删除车手信息
router.get('/deleteDriver', server.deleteDriver);

// 公开router
module.exports = router;