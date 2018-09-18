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
    getUserAttention:'/getUserAttention',
    register:'/register',
    login:'/login',
    createNote:'/createNote',
    getNote:'/getNote',
    getEssayById:'/getEssayById',
    createEssay:'/createEssay',
    getEssayContent:'/getEssayContent',
    updateNote:'/updateNote',
    delNote:'/delNote',
    getEssayDetail:'/getEssayDetail',
    addComment:'/addComment',
    addCommentAdmire:'/addCommentAdmire',
    delCommentAdmire:'/delCommentAdmire',
    getSerial:'/getSerial',
    getCopyrightBooks:'/getCopyrightBooks'
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

/**
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

/**
注册
 */

const register=function (data,fun) {
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

/*
获取文章详情
 */

const getEssayDetail=function (data,fun) {
    myAxios({
        url:url.getEssayDetail,
        data:data,
        success:function (res) {
            if(res.data.code===0){
                let comments=res.data.data.comments
                for(let i=0;i<comments.length;i++){
                    comments[i].isSendBoxShow=false
                    comments[i].inputContent=''
                }
            }
            fun(null,res.data)
        },
        fail:function (res) {
            fun(res,null)
        }
    })
}

/**
 * 提交评论
 */


const addComment=function (data,fun) {
    myAxios({
        url:url.addComment,
        data:data,
        success:function (res) {
            res.data.data.inputContent=''
            res.data.data.isSendBoxShow=false
            fun(null,res.data)
        },
        fail:function (res) {
            fun(res,null)
        }
    })
}

/**
 * 添加评论赞
 */

const addCommentAdmire=function (data,fun) {
    myAxios({
        url:url.addCommentAdmire,
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
 * 删除评论赞
 */

const delCommentAdmire=function (data,fun) {
    myAxios({
        url:url.delCommentAdmire,
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
    getUserAttention,
    register,
    login,
    createNote,
    getNote,
    getEssayById,
    createEssay,
    getEssayContent,
    updateNote,
    delNote,
    getEssayDetail,
    addComment,
    delCommentAdmire,
    addCommentAdmire,
    getSerial,
    getCopyrightBooks
}









