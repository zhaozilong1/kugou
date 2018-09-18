import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
import list from "../components/list.vue";
import top from "../components/top.vue";
import my from "../components/my.vue";
var routes=[
    { path: "/list", component: list },
    { path: "/top", component: top },
    { path: "/my", component: my },
    {path:"*",redirect:"/list"}
]
var router=new VueRouter({
    routes
})
export default router;