import {myAxios} from "../base";

const url={
    createNote:'/createNote',
    getNote:'/getNote',
    updateNote:'/updateNote',
    delNote:'/delNote',
    createEssay:'/createEssay',
    getEssayContent:'/getEssayContent',
    getEssayById:'/getEssayById'
}

/**
 创建文集
 */

const createNote=function (data,fun) {
    myAxios({
        url:url.createNote,
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
 获取文集
 */

const getNote=function (data,fun) {
    myAxios({
        url:url.getNote,
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
更新文集名
 */
const updateNote=function (data,fun) {
    myAxios({
        url:url.updateNote,
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
删除文集名
 */

const delNote=function (data,fun) {
    myAxios({
        url:url.delNote,
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
 新建文章
 */

const createEssay=function (data,fun) {
    myAxios({
        url:url.createEssay,
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
 获取文章内容
 */

const getEssayContent=function (data,fun) {
    myAxios({
        url:url.getEssayContent,
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
 * 根据各类型ID获取文章列表
 */

const getEssayById=function (data,fun) {
    myAxios({
        url:url.getEssayById,
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
    createNote,
    getNote,
    updateNote,
    delNote,
    createEssay,
    getEssayContent,
    getEssayById
}