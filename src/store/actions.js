const actions = {
    kai({ commit }){
        commit("kai")
    },
    changeTitle({ commit }, n) {
        commit("change", n)
    },
    arrList1({commit},n){
        commit("addList",n)
    },
    imgUrl1({ commit },n){
        commit("imgUrl", n)
    },
    url1({ commit }, n) {
        commit("url", n)
    },
    isok1({ commit }) {
        commit("isok")
    },
    isok2({ commit }) {
        commit("isok2")
    },
    fileName1({ commit },name){
        commit("fileName",name)
    },
    next1({ commit }){
        commit("next")
    },
    last1({ commit }) {
        commit("last")
    }
}
export default actions