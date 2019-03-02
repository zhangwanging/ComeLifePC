
import {myAxios} from "../base";

const url={
    getDynamicsByUserId:'/getDynamicsByUserId',
    getUserBasicData:'/getUserBasicData',
    getUserAttention:'/getUserAttention'
};
/*
获取用户动态数据
 */

const getDynamicsByUserId=function (data,fun) {
    myAxios({
        url:url.getDynamicsByUserId,
        data:data,
        success:function (res) {
            fun(null,res.data);
        },
        fail:function (res) {
            fun(res,null);
        }
    });
};

/**
 * 获取用户基本信息
 */

const getUserBasicData=function (data,fun) {
    myAxios({
        url:url.getUserBasicData,
        data:data,
        success:function (res) {
            fun(null,res.data);
        },
        fail:function (res) {
            fun(res,null);
        }
    });
};

/**
 获取用户关注（粉丝）列表
 */

const getUserAttention=function (data,fun) {
    myAxios({
        url:url.getUserAttention,
        data:data,
        success:function (res) {
            fun(null,res.data);
        },
        fail:function (res) {
            fun(res,null);
        }
    });
};

export {
    getDynamicsByUserId,
    getUserBasicData,
    getUserAttention
};