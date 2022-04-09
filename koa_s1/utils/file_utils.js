//读取文件的工具方法
const fs = require('fs')

module.exports.getFileJsonData = (filePath) => {
    //根据文件的路径，读取文件内容，读取文件属于异步操作
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (error, data) => {
            if (error) {
                //读取文件失败
                reject(error)
            } else {
                //读取文件成功,读取文件属于异步
                resolve(data)
            }
        })
    })
}