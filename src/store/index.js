import Vuex from 'vuex'
import Vue from 'vue/dist/vue'

Vue.use(Vuex)

const store=new Vuex.Store({
    state:{
        loginStatus:false,
        userData:{}
    },
    getters:{
        loginStatus:state=>{
            return state.loginStatus
        },
        userData:state=>{
            return state.userData
        }
    },
    mutations:{
        setLoginStatus(state,loginStatus){
            state.loginStatus=loginStatus
        },
        setUserData(state,userData){
            state.userData=userData
        }
    }
})

export default store