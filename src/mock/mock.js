import request from '$src/init/request'
const url=request.url
const host=request.host

const Mock=require('mockjs')

console.log('nihaobuhao')

Mock.mock(host+url.getColdJoke, {
    'code':0,
    'data|2':[{
        title:'@ctitle()',
        content:'@cparagraph(10,20)',
        author:'@ctitle()',
        imgUrl:'@dataImage()',
        commentNum:'@natural(0,1000)',
        likeNum:'@natural(0,1000)',
        time:'@datetime',
        '_id':'@integer'
    }]
})

Mock.mock(host+url.getCarousel,{
    'code':0,
    'data|4':[{
        url:'@url(http)',
        src:'@dataImage()'
    }]
})

/**
 * 获取部分推荐作者
 */

Mock.mock(host+url.getPartAdviceUser,{
    'code':0,
    'data|5':[{
        id:'@integer',
        name:'@ctitle()',
        wordNum:'@natural(0,100000)',
        likeNum:'@natural(0,1000)',
        avatar:'@dataImage()'
    }]
})
