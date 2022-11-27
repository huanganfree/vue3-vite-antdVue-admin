const express = require('express')
const app = express() // 这个app是什么？
const loginRouter = require('./routers/login')

// 所有的路由，统一配置cors
app.use((req, res, next) =>{
  res.setHeader("Access-Control-Allow-Origin", "*")
  next()
})

// 登录接口路由
app.use('/login', loginRouter)


app.listen(8000, () => {
  console.log('server is running in 8000!');
})