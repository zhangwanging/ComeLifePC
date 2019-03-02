import axios from 'axios';

const host='http://localhost:6000';

//注意：这里列出url仅仅为了mock数据
const url={
    getPartAdviceUser:'/getAdviceUser/part',
    getEssaysByUserId:'/getEssaysByUserId',
    getDynamicsByUserId:'/getDynamicsByUserId',
    getUserAttention:'/getUserAttention',
    getCarousel:'/getCarousel',
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
    getCopyrightBooks:'/getCopyrightBooks',
    getUserCareList:'/getUserCareList',
    getUserCareProfile:'/getUserCareProfile',
    getUserBasicData:'/getUserBasicData',
    cancelAttention:'/cancelAttention',
    addAttention:'/addAttention',
    getAllRecommendAuthor:'/getAllRecommendAuthor'
};

// 创建axios实例
const service = axios.create({
    baseURL: host,
    timeout: 5000
});
/*
// request拦截器
service.interceptors.request.use(
    config => {
/!*        if (store.getters.token) {
            config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
        }*!/
        return config
    },
    error => {
        console.log(error)
        Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    response => {
        /!**
         * code为非20000是抛错 可结合自己业务进行修改
         *!/
        const res = response.data
        if (res.code !== 20000) {
            // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {

            }
            return Promise.reject('error')
        } else {
            return response.data
        }
    },
    error => {
        console.log('err' + error)
        return Promise.reject(error)
    }
)*/

const myAxios = function (obj) {
    service.post(obj.url, obj.data,{
        headers:obj.headers
    })
        .then(function (response) {
            obj.success(response)
        })
        .catch(function (error) {
            console.log(error);
            obj.fail(error)
        });
};

export{
    url,
    host,
    myAxios
}