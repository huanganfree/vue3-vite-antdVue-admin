// 连接数据库

const mysql = require('mysql');
const dbConfig = require('./db.config');

// 对于node js程序，要想访问MYSQL也是通过网络发送SQL命令给MYSQL服务器
// 下面的链接数据库，就是node的MYSQL驱动程序
const connection = mysql.createConnection(dbConfig);

const dbQueryPromise = function(queryParams) {
  return new Promise((res,rej) => {
    connection.connect(error => {
      // 连接异常，抛出错误
      if (error) rej(error)
      connection.query(queryParams, function (error, results) {
        // 查询异常，抛出错误
        if (error) rej(error)
        res(results)
        connection.end();
      });
    });
  })
}

export default dbQueryPromise






