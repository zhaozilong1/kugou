import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
import state from "./state.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

const store=new Vuex.Store({
    mutations,
    actions,
    state
})
export default store;