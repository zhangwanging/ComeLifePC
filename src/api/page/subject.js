import {myAxios} from "../base";
const url={
    cancelAttention:'/cancelAttention',
    addAttention:'/addAttention'
}

/**
 * 取消关注
 */

const cancelAttention=function (data,fun) {
    myAxios({
        url:url.cancelAttention,
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
 * 添加关注
 */

const addAttention=function (data,fun) {
    myAxios({
        url:url.addAttention,
        data:data,
        success:function (res) {
            fun(null,res.data)
        },
        fail:function (res) {
            fun(res,null)
        }
    })
}

export{
    cancelAttention,
    addAttention
}
