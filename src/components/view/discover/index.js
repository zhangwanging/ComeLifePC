import Vue from '../base.js'
import WsDiscover from '$src/components/view/discover/ws-discover.vue'

let vm=new Vue({
    el:'#app',
    components: {WsDiscover},
    template: '<WsDiscover/>'
})