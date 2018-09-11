import Vuex from 'vuex'
import Vue from 'vue/dist/vue'

Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        fixTabActiveIndex:'',
        tabActive:''
    },
    getters:{
    },
    mutations:{
        setFixTabActiveIndex(state,index){
            state.fixTabActiveIndex=index
          //  state.tabActive
        }
    }
})

export default store