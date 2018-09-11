import Vue from 'vue/dist/vue'
import axios from 'axios'

const host='http://localhost:3000'

const $ajax = axios.create({
    //baseURL: 'https://www.zhangw.xyz',
    baseURL: host,
    timeout: 5000,
    headers: {}
});

const myAxios = function (obj) {
    $ajax.post(obj.url, obj.data,{
        headers:obj.headers
    })
        .then(function (response) {
            obj.success(response)
        })
        .catch(function (error) {
            console.log(error);
            obj.fail(error)
        });
}

const url={
    addColdJoke:'/addColdJoke',
    getColdJoke:'/getColdJoke',
    delColdJoke:'/delColdJoke',
    editColdJoke:'/editColdJoke',
    getCarousel:'/getCarousel',
    getPartAdviceUser:'/getAdviceUser/part',
    getEssaysByUserId:'/getEssaysByUserId',
    getDynamicsByUserId:'/getDynamicsByUserId',
    getUserAttention:'/getUserAttention'
}
/*
* 冷笑话
* */
const addColdJoke=function (data,fun) {
    myAxios({
        url:url.addColdJoke,
        data:data,
        success:function (res) {
            fun(null,res.data)
        },
        fail:function(res){
            fun(res,null)
        }
    })
}

const getColdJoke=function(data,fun){
    myAxios({
        url:url.getColdJoke,
        data:data,
        success:function (res) {
            fun(null,res.data)
        },
        fail:function (res) {
            fun(res,null)
        }
    })
}

const delColdJoke=function (data,fun) {
    myAxios({
        url:url.delColdJoke,
        data:data,
        success:function (res) {
            fun(null,res.data)
        },
        fail:function (res) {
            fun(res,null)
        }
    })
}

const editColdJoke=function (data,fun) {
    myAxios({
        url:url.editColdJoke,
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

/**
 * 获取文章列表
 */

const getEssaysByUserId=function (data,fun) {
    myAxios({
        url:url.getEssaysByUserId,
        data:data,
        success:function (res) {
            fun(null,res.data)
        },
        fail:function (res) {
            fun(res,null)
        }
    })
}

/*
获取用户动态数据
 */

const getDynamicsByUserId=function (data,fun) {
    myAxios({
        url:url.getDynamicsByUserId,
        data:data,
        success:function (res) {
            fun(null,res.data)
        },
        fail:function (res) {
            fun(res,null)
        }
    })
}

/*
获取用户关注列表
 */

const getUserAttention=function (data,fun) {
    myAxios({
        url:url.getUserAttention,
        data:data,
        success:function (res) {
            fun(null,res.data)
        },
        fail:function (res) {
            fun(res,null)
        }
    })
}


export default {
    host,
    url,
    addColdJoke,
    getColdJoke,
    delColdJoke,
    editColdJoke,
    getCarousel,
    getPartAdviceUser,
    getEssaysByUserId,
    getDynamicsByUserId,
    getUserAttention
}









