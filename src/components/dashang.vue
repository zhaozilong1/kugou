<template>
    <div class="dashang">
        <div @click="$store.commit('da')">
            <i class="iconfont">&#xe758;</i>
        </div>
    </div>
</template>
<script>
    import { mapState } from "vuex";
    export default {
        computed: mapState([
            "isda"
        ]) 
    }
</script>