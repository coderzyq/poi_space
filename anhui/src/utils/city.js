import {getCity} from "@/network/heatmap";
import Set from "@/assets/lib/Set";
//判断所需要的数据是否是数值
export function isNumber(val) {
    let regPos = /^\d+(\.\d+)?$/; //非负浮点数
    let regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    return regPos.test(val) || regNeg.test(val);
}

//获取安徽地级市
export function getCityData() {
    getCity().then(({data: res}) => {
        let city = new Set()
        res.forEach(item => {
            city.add(item['市'])
        })
        console.log(city)
        return city
    })
}
//各市旅游景区数量占比
export function count(str, res) {
    let patt = new RegExp(str)
    let count = 0
    res.forEach(item => {
        if (patt.test(item['区域名称'])) {
            count++
        }
    })
    return count
}

//旅游景区类型数量
export function mount(type, district, res, poi, area) {
    let patt = new RegExp(type)
    let pat = new RegExp(district)
    let Count = 0
    res.forEach(item => {
        if (patt.test(item[poi]) && pat.test(item[area])) {
            Count++
        }
    })
    return Count
}

//各地级市

export function city() {
    let city = new Set()
    city.add('合肥市')
    city.add('芜湖市')
    city.add('蚌埠市')
    city.add('淮南市')
    city.add('马鞍山市')
    city.add('淮北市')
    city.add('铜陵市')
    city.add('安庆市')
    city.add('黄山市')
    city.add('滁州市')
    city.add('阜阳市')
    city.add('宿州市')
    city.add('六安市')
    city.add('亳州市')
    city.add('池州市')
    city.add('宣城市')
    console.log(city)
    return city
}