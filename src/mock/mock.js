const Mock=require('mockjs')

console.log('nihaobuhao')

Mock.mock('http://localhost:3000/getColdJoke', {
    'code':0,
    'data|1-10':[{
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
