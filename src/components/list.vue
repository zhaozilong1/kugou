<template>
    <div>
        
        <loading-vue v-show="arrList.length == 0"></loading-vue>
        <ul class="list">
            <li :class="{active:index == num}" v-for='(key,index) in arrList' @click="$store.commit('hashm',index)">
                <b>{{index + 1}}</b><span>{{key.filename}}</span>
            </li>
        </ul>
         <div class="jia" @click="$store.commit('jia')" v-show="arrList.length != 0">
            加载更多
        </div>
        <daye-vue v-if="isda"></daye-vue>
        <dashang-vue></dashang-vue>
       
        <play-vue v-show="hashM != ''"></play-vue>
        
        
    </div>
</template>
<script>
    import play from "./play.vue";
    import dashang from "./dashang.vue";
    import daye from "./daye.vue";
    import { mapState,mapMutations } from "vuex";
    export default {
        components:{
            "play-vue":play,
            "dashang-vue":dashang,
            "daye-vue":daye
        },
        mounted:function(){
            this.$http.get("http://www.wbshow.top/kugou.php",{
                params:{
                    page:this.page
                }
            }).then(function (res) {
                this.$store.dispatch("arrList1", res.data.songs.list)
                if(this.num == 0){
                    this.$store.dispatch("kai")
                }
            }.bind(this))
        },
        watch: {
            page() {
                   this.$http.get("http://www.wbshow.top/kugou.php", {
                    params: {
                        page: this.page
                    }
                }).then(function (res) {
                    var  arr = this.arrList.concat(res.data.songs.list);
                    this.$store.commit("addList",arr);
                }.bind(this))
            },
        },
        computed: mapState([
                "arrList",
                "hashM",
                "num",
                "page",
                "isda"
            ]) 
    }
</script>