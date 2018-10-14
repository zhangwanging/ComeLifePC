import {myAxios} from "../base";

const url={
    getCopyrightBooks:'/getCopyrightBooks'
}

/**
 * 获取版权书籍
 */
const getCopyrightBooks=function (data,fun) {
    myAxios({
        url:url.getCopyrightBooks,
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
    getCopyrightBooks
}