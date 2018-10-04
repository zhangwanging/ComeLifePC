import Vue from '../base.js'
import Test from '$src/components/view/test/test.vue'

let vm=new Vue({
    el:'#app',
    components: {Test},
    template: '<Test/>'
})