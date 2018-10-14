import {myAxios} from "../base";


const url={
    getUserCareList:'/getUserCareList',
    getUserCareProfile:'/getUserCareProfile'
}
/**
 * 获取关注用户列表
 */
const getUserCareList=function (data,fun) {
    myAxios({
        url:url.getUserCareList,
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
 * 获取关注用户概括
 */

const getUserCareProfile=function (data,fun) {
    myAxios({
        url:url.getUserCareProfile,
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
    getUserCareList,
    getUserCareProfile
}