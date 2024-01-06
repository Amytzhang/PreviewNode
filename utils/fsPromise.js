let fs = require("fs");
let pathR = require("path");
function readFile(path) {
  //传进来的资源判断，如果是img之类的不能使用utf-8的编码格式
  let suffixREG = /\.([0-9a-zA-Z]+)$/;
  let suffix = suffixREG.test(path) ? suffixREG.exec(path)[1] : "";
  let encoding =
    /^(PNG|GIF|JPG|JPEG|WEBP|BMP|ICO|SVG|MP3|MP4|WAV|OGG|M3U8)$/i.test(suffix)
      ? null
      : "utf8";
  let pathName = pathR.resolve(path);
  return new Promise((resolve, reject) => {
    fs.readFile(pathName, encoding, (err, res) => {
      if (err !== null) {
        reject(err);
        return;
      }
      resolve(res);
    });
  });
}
module.exports = {
  readFile
};
