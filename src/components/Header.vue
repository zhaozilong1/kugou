<template>
    <header>
        {{title}}
    </header>
</template>
<script>
    import { mapState } from "vuex";
    export default{
        computed:mapState([
            "title"
        ]),
        watch:{
            '$route'(to, from, next){
                if(to.path == "/list"){
                    this.$store.dispatch("changeTitle","歌单")
                }else if(to.path == "/top"){
                    this.$store.dispatch("changeTitle", "排行榜")
                } else {
                    this.$store.dispatch("changeTitle", "我的")
                }
            }
        }
    }
</script>