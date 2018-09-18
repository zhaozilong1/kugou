<template>
    <div class="daye">
        <div class="x" @click="$store.commit('x')">
            <i class="iconfont">&#xe71a;</i>
        </div>
        <div class="wx">
            <p>微信打赏</p>
            <img src="../assets/wx.jpg" alt="">
        </div>
        <div class="zfb">
            <p>支付宝打赏</p>
            <img src="../assets/zfb.jpg" alt="">
        </div>
    </div>
</template>