# fs文件操作

## 1.读取文件

  ```js
    let fs= require('fs');
  ```

### 1-1.同步读取输出 readdirSync(path,编码格式)
  
  > 不指定格式会输出流格式
  <Buffer 7b 0a 20 20 22 64 65 73 63 72 69 70 74 69 6f 6e 22 3a 20 22 22 2c 0a 20 20 22 64 65 70 65 6e 64 65 6e 63 69 65 73 22 3a 20 7b 0a 20 20 20 20 22 65 78 ... 46 more bytes>

  ```js
    let result = fs.readFileSync('./package.json','utf-8')
    console.log(result)
  ```

### 1-2.异步读取文件 readdir

  读取成功，触发回调函数(err,res) err失败结果，res读取成功结果 

  ```js
    fs.readdir('/Users/zhangtingting/Desktop',(err,res)=>{
      if(!err) {
        console.log(res)
      } else {
        console.log(err)
      }
    })
  ```
