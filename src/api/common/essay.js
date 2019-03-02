import {myAxios} from "../base";

const url = {
    getEssaysByUserId: '/getEssaysByUserId',
    getEssayDetail: '/getEssayDetail',
    addCommentAdmire: '/addCommentAdmire',
    delCommentAdmire: '/delCommentAdmire',
    addComment: '/addComment'
};
/**
 * 获取文章列表
 */

const getEssaysByUserId = function (data, fun) {
    myAxios({
        url: url.getEssaysByUserId,
        data: data,
        success: function (res) {
            fun(null, res.data);
        },
        fail: function (res) {
            fun(res, null);
        }
    });
};

/*
获取文章详情
 */

const getEssayDetail = function (data, fun) {
    myAxios({
        url: url.getEssayDetail,
        data: data,
        success: function (res) {
            if (res.data.code === 0) {
                let comments = res.data.data.comments;
                for (let i = 0; i < comments.length; i++) {
                    comments[i].isSendBoxShow = false;
                    comments[i].inputContent = '';
                }
            }
            fun(null, res.data);
        },
        fail: function (res) {
            fun(res, null);
        }
    });
};

/**
 * 添加评论里的赞
 */

const addCommentAdmire = function (data, fun) {
    myAxios({
        url: url.addCommentAdmire,
        data: data,
        success: function (res) {
            fun(null, res.data);
        },
        fail: function (res) {
            fun(res, null);
        }
    });
};

/**
 * 删除评论里的赞
 */

const delCommentAdmire = function (data, fun) {
    myAxios({
        url: url.delCommentAdmire,
        data: data,
        success: function (res) {
            fun(null, res.data);
        },
        fail: function (res) {
            fun(res, null);
        }
    });
};

/**
 * 提交评论
 */

const addComment = function (data, fun) {
    myAxios({
        url: url.addComment,
        data: data,
        success: function (res) {
            res.data.data.inputContent = '';
            res.data.data.isSendBoxShow = false;
            fun(null, res.data);
        },
        fail: function (res) {
            fun(res, null);
        }
    });
};

export {
    getEssaysByUserId,
    getEssayDetail,
    addCommentAdmire,
    delCommentAdmire,
    addComment
};
