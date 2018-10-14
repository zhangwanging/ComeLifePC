import {myAxios} from "../base";

const url={
    getSerial:'/getSerial'
}

/**
 * 获取优选连载
 */
const getSerial=function (data,fun) {
    myAxios({
        url:url.getSerial,
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
    getSerial
}