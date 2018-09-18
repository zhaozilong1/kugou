const mutations = {
    kai(state){
        state.hashM = state.arrList[0].hash
    },
    change(state, name) {
        state.title = name
    },
    addList(state, arr){
        state.arrList = arr
    },
    hashm(state,index){
        state.hashM = state.arrList[index].hash
        state.num = index
    },
    imgUrl(state,url){
        state.imgUrl = url.replace("{size}/", "")
    },
    url(state, url) {
        state.url = url
    },
    isok(state){
        state.isok=!state.isok
        let audio = document.getElementById("audio");
        audio.play()
    },
    isok2(state) {
        state.isok = !state.isok
        let audio = document.getElementById("audio");
        audio.pause()
    },
    fileName(state,name){
        state.fileName = name
    },
    next(state){
        state.num++
        if (state.num >= state.arrList.length){
            state.num = 0
        }
        state.hashM = state.arrList[state.num].hash
    },
    last(state) {
        state.num--
        if (state.num <= 0) {
            state.num = state.arrList.length
        }
        state.hashM = state.arrList[state.num].hash
    },
    jia(state){
        state.page++;
    },
    da(state){
        state.isda = true
    },
    x(state){
        state.isda = false
    }
}
export default mutations