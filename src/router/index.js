import Vue from 'vue'
import Router from 'vue-router'

const Home =()=> import('../view/home/Home.vue')
const Cart =()=> import('../view/cart/Cart.vue')
const Category =()=> import('../view/category/Category.vue')
const Profile =()=> import('../view/profile/Profile.vue')

Vue.use(Router)

const routes=[
    {
        path:'',
        redirect:'./home'
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/profile',
        component:Profile
    } 

]

//创建路由对象
 const router =new Router({
     routes,
     mode:'history'
 })

 //导出router

 export default router