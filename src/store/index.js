import Vuex from 'vuex'
import Vue from 'vue/dist/vue'

Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        count:0,
        title:'首页',
        isLogin:false
    },
    mutations:{
        increment(state){
            state.count++
        },
        setTitle(state,navbar){
            state.title=navbar.title
        },
        setLogin(state,flag){
            state.isLogin=flag
        }

    }
})

export default store