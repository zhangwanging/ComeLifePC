import request from '$src/api/request'

const url = request.url
const host = request.host

const Mock = require('mockjs')

/*
获取所有文章
 */

Mock.mock(host + url.getColdJoke, {
    'code': 0,
    'data|2': [{
        title: '@ctitle()',
        content: '@cparagraph(10,20)',
        author: '@ctitle()',
        imgUrl: '@dataImage()',
        lookNum: '@natural(0,1000)',
        commentNum: '@natural(0,1000)',
        likeNum: '@natural(0,1000)',
        time: '@datetime',
        '_id': '@integer'
    }]
})

/*
获取首页轮播图
 */

Mock.mock(host + url.getCarousel, {
    'code': 0,
    'data|4': [{
        url: '@url(http)',
        src: '@dataImage()'
    }]
})

/**
 * 获取部分推荐作者
 */

Mock.mock(host + url.getPartAdviceUser, {
    'code': 0,
    'data|5': [{
        id: '@integer',
        name: '@ctitle()',
        wordNum: '@natural(0,100000)',
        likeNum: '@natural(0,1000)',
        avatar: '@dataImage()'
    }]
})

/**
 * 获取文章列表
 */

Mock.mock(host + url.getEssaysByUserId, {
    'code': 0,
    'data|3': [{
        title: '@ctitle()',
        content: '@cparagraph(10,20)',
        author: '@ctitle()',
        imgUrl: '@dataImage()',
        lookNum: '@natural(0,1000)',
        commentNum: '@natural(0,1000)',
        likeNum: '@natural(0,1000)',
        time: '@datetime',
        '_id': '@integer'
    }]
})

/*
获取用户动态数据
 */
Mock.mock(host + url.getDynamicsByUserId, {
    'code': 0,
    'data': {
        id: '@integer',
        name: '@ctitle()',
        atavar: '@dataImage()',
        'contents|3': [
            {
                id: '@integer',
                type: 0,
                title: '@ctitle()',
                content: '@cparagraph(10,200)',
                author: '@ctitle()',
                commentNum: '@natural(0,1000)',
                imgUrl: '@dataImage()',
                likeNum: '@natural(0,1000)',
                time: '@datatime'
            }
        ]
    }
})

/*
获取用户关注列表
 */

Mock.mock(host + url.getUserAttention, {
    'code': 0,
    'data|3': [
        {
            id: '@integer',
            avatar: '@dataImage()',
            title: '@ctitle()',
            attentionNum: '@natural(0,1000)',
            fansNum: '@natural(0,1000)',
            essayNum: '@natural(0,1000)',
            wordNum: '@natural(0,1000)',
            likeNum: '@natural(0,1000)',
            isAttention: '@boolean()',
        }
    ]
})

/*
注册
 */

Mock.mock(host+url.register,{
    code:0,
    token:'@title()',
    data:{
        id:'@integer',
        name:'@ctitle()',
        avatar:'@dataImage()',
    }
})

/*
登录
 */

Mock.mock(host+url.login,{
    code:0,
    token:'@title()',
    data:{
        id:'@integer',
        name:'@ctitle()',
        avatar:'@dataImage()'
    }
})

/*
创建文集
 */

Mock.mock(host+url.createNote,{
    code:0,
    data:{
        id:'@integer',
        name: '@ctitle()'
    }
})

/*
获取文集
 */

Mock.mock(host+url.getNote,{
    code:0,
    'data|5': [{
        id:'@integer',
        name: '@ctitle()'
    }]
})

/*
根据各类型ID获取文章列表
 */

Mock.mock(host + url.getEssayById, {
    'code': 0,
    'data|5': [{
        title: '@ctitle()',
        content: '@cparagraph(10,20)',
        author: '@ctitle()',
        imgUrl: '@dataImage()',
        lookNum: '@natural(0,1000)',
        commentNum: '@natural(0,1000)',
        likeNum: '@natural(0,1000)',
        wordNum:'@natural(0,10000)',
        time: '@datetime',
        _id: '@integer'
    }]
})

/*
创建文章
 */

Mock.mock(host+url.createEssay,{
    code:0,
    data:{
        title: '@ctitle()',
        content: '@cparagraph(10,20)',
        author: '@ctitle()',
        imgUrl: '@dataImage()',
        lookNum: '@natural(0,1000)',
        commentNum: '@natural(0,1000)',
        likeNum: '@natural(0,1000)',
        wordNum:'@natural(0,10000)',
        time: '@datetime',
        _id: '@integer'
    }
})

/*
获取文章内容
 */

Mock.mock(host+url.getEssayContent,{
    code:0,
    data:{
        title:'@ctitle()',
        content:'@cparagraph(10,1000)'
    }
})






