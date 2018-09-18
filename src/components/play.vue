<template>
    <div class="play">
        <div class="img">
            <img :src="imgUrl" alt="">
        </div>
        <div class="kongzhi">
            <i class="iconfont last" @click="$store.dispatch('last1')">&#xe638;</i>
            <i class="iconfont back" @click="$store.dispatch('isok1')" v-show="!isok">&#xe719;</i>
            <i class="iconfont suspend" @click="$store.dispatch('isok2')" v-show="isok">&#xe6c2;</i>
            <i class="iconfont next" @click="$store.dispatch('next1')">&#xe637;</i>
        </div>
        <div class="">
            
        </div>
        <marquee>
            {{ fileName }}
        </marquee>
        <audio :src="url" autoplay style="display:none;" id="audio"></audio>
    </div>
</template>
<script>
    import { mapState,mapMutations } from "vuex";
    export default {
        watch:{
            hashM(){
                this.$http.get("http://www.wbshow.top/music.php",{
                    params:{
                        hash:this.hashM
                    }
                }).then(function (res) {
                    this.$store.dispatch("imgUrl1", res.data.imgUrl)
                    this.$store.dispatch("url1", res.data.url)
                    this.$store.dispatch("fileName1", res.data.fileName)
                    
                }.bind(this))
            }
        },
        computed:mapState([
            "hashM",
            "imgUrl",
            "url",
            "isok",
            "fileName",
            "num"
        ])
    }
</script>