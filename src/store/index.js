import Vuex from 'vuex';
import Vue from 'vue/dist/vue';
import mutations from './mutations';

Vue.use(Vuex);

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
    mutations
});

export default store;