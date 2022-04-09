import axios from "./axios";

export function getHeatData() {
    return axios({
        url: '/anhui_poi'
    })
}
export function getImage() {
    return axios({
        url: '/base'
    })
}

export function getCity() {
    return axios({
        url: '/city_count'
    })
}

export class Information {
    constructor(result) {
        this.title = result['名称']
        this.image = result['url']
        this.address = result['地址']
        this.type = result['poi类型']
        this.area = result['区域名称']
    }
}