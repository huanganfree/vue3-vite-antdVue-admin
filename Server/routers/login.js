var express = require('express')
var router = express.Router()

router.use((req, res, next) => {
  next()
})

router.post('/', function (req, res) {
  res.statusCode = 200;
  res.json({
    code: 200,
    message: '成功',
  })
})


module.exports = router