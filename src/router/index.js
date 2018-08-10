import Vue from 'vue/dist/vue'
import Router from 'vue-router'
import Home from '$src/components/page/home/Home.vue'
import Index from '$src/components/page/Index.vue'
import Register from '$src/components/page/register/Register.vue'
import Login from '$src/components/page/login/Login.vue'
import WriteEssay from '$src/components/page/writeessay/WriteEssay.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path:'/',
            redirect:'/index/home'
        },
        {
            name:'index',
            path:'/index',
            components:{
                index:Index
            },
            children:[
                {
                    name:'home',
                    path:'home',
                    components:{
                        'main':Home
                    }
                },
                {
                    name:'register',
                    path:'register',
                    components:{
                        'main':Register
                    }
                },
                {
                    name:'login',
                    path:'login',
                    components:{
                        'main':Login
                    }
                }

            ]
        },
        //essay
        {
            name:'writeessay',
            path:'writeessay',
            components:{
                'writeessay':WriteEssay
            }
        }
    ]
})
