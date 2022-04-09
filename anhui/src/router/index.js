import Vue from 'vue'
import VueRouter from "vue-router"

const Login = () => import('@/views/Login')
const User = () => import('@/views/User')
const HeatMap = () => import('@/views/HeatMap')
const AllView = () => import('@/views/AllView')
const WordCloud = () => import('@/views/WordCloud')
const Pin = () => import('@/views/Pin')
const InformationQuery = () => import('@/views/InformationQuery')
const Pie = () => import('@/components/content/pie/Pie')
const Bar = () => import('@/components/content/bar/Bar')
const PolyLine = () => import('@/components/content/line/PolyLine')
//1.安装
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/user',
        component: User,
        query: {
            username: '',
            password: ''
        }
    },
    {
        path: '/heatmap',
        component: HeatMap,

    },
    {
        path: '/pin',
        component: Pin
    },
    {
        path: '/allview',
        component: AllView
    },
    {
        path: '/informationQuery',
        component: InformationQuery
    },
    {
        path: '/allview/pie',
        component: Pie
    },
    {
        path: '/allview/bar',
        component: Bar
    },
    {
        path: '/allview/polyline',
        component: PolyLine
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/allview/wordCloud',
        component: WordCloud
    },
]

// 3.创建路由对象
const router = new VueRouter({
    mode: 'history',
    routes
})

// 4.导出
export default router