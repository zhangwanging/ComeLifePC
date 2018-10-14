import {myAxios} from "../base";

const url={
    register:'/register',
    login:'/login'
}

/**
 注册
 */

const register=function(data,fun) {
    myAxios({
        url:url.register,
        data:data,
        success:function (res) {
            fun(null,res.data)
        },
        fail:function (res) {
            fun(res,null)
        }
    })
}

/**
 登录
 */

const login=function (data,fun) {
    myAxios({
        url:url.login,
        data:data,
        success:function (res) {
            fun(null,res.data)
        },
        fail:function (res) {
            fun(res,null)
        }
    })
}

export {
    register,
    login
}