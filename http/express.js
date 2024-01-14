let express = require("express"),
  path = require("path");
let { readFile } = require("../utils/fsPromise.js");
let app = express();
app.listen(8080, () => {
  console.log("express server success");
});
/**
 * 静态资源文件的处理
 * express.static([path]):到指定的目录中寻找客户端需要的资源文件内容，并且将其返回
 * response对象
 * res.end:结束响应并返回内容
 * res.json:返回给客户端内容，只不过传递的数据可以是json对象（内部会帮我们将其转换为json字符串=》服务返回给客户端大的内容一般都是字符串或者buffer格式）
 * res.type:返回content-type的类型值
 * res.send:最常用的给客户端返回信息（可以传递对象/path/buffer/txt等），基于send是通过响应体返回给客户端信息
 * res.status:返回状态码
 * res.set:设置响应头信息 res.set([key],[value]) res.set({key:value})
 *
 */
// app.use(express.static("../client"));
// app.use((req, res) => {
//   res.status(404);
//   res.send("not found...");
// });

/**
 * 案例：
 * 解析浏览器请求的地址
 * http://localhost:8080/list?lv=dev
 * 根据lv后参数读取package.json相对应的环境信息
 */

app.get("/list", (req, res) => {
  let params = req.query;
  for (let key in params) {
    if (key === "lv") {
      let pathName = path.resolve("./package.json");
      readFile(pathName)
        .then((resOut) => {
          let result = JSON.parse(resOut);
          let outResult = null;
          if (params[key] == "dev") {
            outResult = result.devDependencies;
          } else {
            outResult = result.dependencies;
          }
          res.status(200);
          res.type("application/json");
          res.send(JSON.stringify(outResult));
        })
        .catch((err) => {
          res.status(500);
          res.type("application/json");
          res.send(err);
        });
    }
  }
  console.log(params);
});
/**
 * post 请求
 * http://localhost:8080/add  请求主体 name="zhangsan" age="10"
 * */
app.post("/add", (req, res) => {});
