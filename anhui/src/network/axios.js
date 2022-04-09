import originAxios from '@/network/axios'

export default function axios(option) {
    return new Promise((resolve, reject) => {
        //1.创建axios实例
        const instance = originAxios.create({
            baseURL: 'http://192.168.8.45:8889'
        })
        //2.传入对象进行网络请求
        instance(option).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}