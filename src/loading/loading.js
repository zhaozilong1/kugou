import Loading from "./loading.vue";
const loading={
    install:function (vue) {
        vue.component("loading-vue", Loading)
    }
}
export default loading;