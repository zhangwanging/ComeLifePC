import {myAxios} from "../base";
const url={
    getPartAdviceUser:'/getAdviceUser/part',
    getAllRecommendAuthor:'/getAllRecommendAuthor',
    cancelAttention:'/cancelAttention',
    addAttention:'/addAttention'
}

/**
 * 获取推荐作者
 */

const getPartAdviceUser=function (data,fun) {
    myAxios({
        url:url.getPartAdviceUser,
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
 * 获取所有推荐作者
 */

const getAllRecommendAuthor=function (data,fun) {
    myAxios({
        url:url.getAllRecommendAuthor,
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
    getPartAdviceUser,
    getAllRecommendAuthor,
    cancelAttention,
    addAttention
}
