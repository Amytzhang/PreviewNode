let fs= require('fs');
// 读取文件目录  ./当前目录
/**
 * 同步读取输出readdirSync(path,编码格式)
 * 不指定格式会输出二进制
 * <Buffer 7b 0a 20 20 22 64 65 73 63 72 69 70 74 69 6f 6e 22 3a 20 22 22 2c 0a 20 20 22 64 65 70 65 6e 64 65 6e 63 69 65 73 22 3a 20 7b 0a 20 20 20 20 22 65 78 ... 46 more bytes>
 */
// let result = fs.readFileSync('./package.json','utf-8')
// console.log(result)

/**
 * 异步读取
 * 读取成功，触发回调函数(err,res) err失败结果，res读取成功结果 
*/
// fs.readdir('/Users/zhangtingting/Desktop',(err,res)=>{
//   if(!err) {
//     console.log(res)
//   } else {
//     console.log(err)
//   }
// })

// fs.readFile('./package.json','utf-8',(err,res)=>{
//   if(err!==null) return;
//   console.log(res)
// })
/** 
 * 2 写文件 
 * writeFileSync(path,content,编码)
 * 第一次path没找到新建一个（文件可以不存在但必须保证路径正确），如果第二次使用writeFileSync，第二次的content会覆盖第一次的内容
 */

// let result = fs.writeFileSync('./tryWrite.txt','你好2024','utf-8')
// console.log(result)
/** 
 * 追加内容 appendFileSync
 */
// fs.appendFileSync('./tryWrite.txt','lucky','utf-8')
// 异步操作方式可以监听成功或者失败，path如果文件不存在直接报错
// fs.writeFile('./tryWrite.txt','学习node进行中',(err)=>{
//   console.log(err)
// })

    /**
     * ------同步写入怎么处理无法监听报错信息
     */
    // let writeFileErr = null
    // try {
    //   fs.writeFileSync('./js/tryWrite.txt','try error', 'utf-8')
    // } catch (error) {
    //   writeFileErr = error
    // }finally{
    //   if(writeFileErr!==null){
    //     console.log('执行报错')
    //   }
    // }
/**
 * 拷贝文件  同步拷贝
 */
// fs.copyFileSync('./tryWrite.txt','./copy.txt');
/**
 * 异步拷贝
 */
// fs.copyFile('./tryWrite.txt','./copySync.txt',(err)=>{
//     console.log(err)
// });

/**
 * 删除目录+创建目录
 */
/**创建目录 */
// fs.mkdir('./mkdir',(err,res)=>{
//   console.log(err,res)
// })
/**
 * 删除目录：一定要保证目录中无文件，否则不让删除（报错-- ENOTEMPTY: directory not empty, ）s
 */
// fs.rmdir('./node_modules',(err,res)=>{
//   console.log(err,res)
// })

/**
 * 删除文件 unlink
 */
// fs.unlink('./copySync.txt',err=>{})