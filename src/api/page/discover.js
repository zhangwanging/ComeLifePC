import {myAxios} from "../base";

const url={
    getCarousel:'/getCarousel',
    getPartAdviceUser:'/getAdviceUser/part'
}

/**
 * 获取首页轮播图
 */

const getCarousel=function (data,fun) {
    myAxios({
        url:url.getCarousel,
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

export{
    getCarousel,
    getPartAdviceUser
}
