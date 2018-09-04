const Mock=require('mockjs')

console.log('nihaobuhao')

Mock.mock('http://localhost:3000/getColdJoke', {
    'code|0-1':0,
    'data|1-10':[{
        content:'@cparagraph(10,20)',
        time:'@datetime',
        '_id':'@integer'
    }]
})
