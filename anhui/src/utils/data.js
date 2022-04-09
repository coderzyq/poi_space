export function count(str, title, res, arname) {
    let patt = new RegExp(str)
    let count = []
    for (let i = 0; i < title.length; i++) {
        if (res[i]['区域名称'] === arname && patt.test(title[i])) {
            count.push(i)
        }
    }
    return count.length
}

export function sum(res, arname) {
    let count = 0
    for (let i = 0; i < res.length; i++) {
        if (res[i]['区域名称'] === arname) {
            count++
        }
    }
    return count
}

//判断所需要的数据是否是数值
export function isNumber(val) {
    let regPos = /^\d+(\.\d+)?$/; //非负浮点数
    let regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    return regPos.test(val) || regNeg.test(val);
}