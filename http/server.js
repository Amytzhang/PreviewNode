/**
 * 服务器端要做的常规任务
 * 1.首先有一个服务（创建服务：IIS/NGINX/APACHE/NODE[HTTP/HTTPS内置模块]）=>利用端口号区分服务
 * 2.接收客户端的请求信息（请求静态资源文件的、也有请求数据的）
 * 3.查找到对应的资源文件内容或者对应的数据信息
 * 4.把找到的内容返回给客户端
 */
let http = require("http"),
  url = require("url");
let path = require("path");
let { readFile } = require("../utils/fsPromise.js");
/**
 * 创建服务
 */
let server = http.createServer((req, res) => {
  //当客户端向服务器发送请求的时候，会触发此回调函数（请求n次，回调函数被执行N次），而且每一次都能获取本次请求的相关信息；
  //req:request 客户端的请求信息
  //res:response 服务端返回给客户端
  let { url: requestUrl } = req; //存储的是请求信息中的：资源文件的路径名称和问号传参的信息
  let { pathname, query } = url.parse(requestUrl, true);

  let path1 = path.resolve("./copy.txt");
  readFile(path1).then((result) => {
    console.log(result);
  });
  //返回客户端的信息
  res.end("path1");
});
server.listen(8686, () => {
  //创建成功
  console.log("listening on 8080 port!");
});
// let port = 80;
// function listen(port) {
//   try {
//     server.listen(port, () => {
//       //创建成功
//       console.log("server success,keep contact!!!");
//     });
//   } catch (error) {
//     console.log(error);
//     port++;
//     listen(port);
//   }
// }
// listen(80);
