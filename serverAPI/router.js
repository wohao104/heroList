const express = require('express');
const router = express.Router();

const ctrl = require('./controller.js')


router.get('/', (req, res) => {
  res.send('搭建服务器成功')
})

router.get('/getAllHero', ctrl.getAllHero)

router.post('/addHero',ctrl.addHero)

router.get('/getHero/:id', ctrl.getHero)

router.post('/updateHero/:id', ctrl.updateHero)

router.post('/deleteHero/:id', ctrl.deleteHero)

module.exports = router