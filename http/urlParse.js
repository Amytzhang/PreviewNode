let url = require("url");
let str =
  "https://bilibili.com/video/BV1rV411n72v?p=353&vd_source=5d0e47d530d3db2b1e16559fcc785a0a";
console.log(url.parse(str, true));
//url.parse解析url，第二个参数默认false，设为true可以使query变为键值对形式数据
