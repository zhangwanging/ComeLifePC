<template>
    <transition name="fade">
        <el-row>
            <!--标题-->
            <h1>{{essay.title}}</h1>

            <!--作者简介-->
            <el-row class='container-user' type="flex" align="middle">
                <img class='avatar' :src="essay.avatar" alt="">
                <el-col>
                    <span>{{essay.author}}</span>
                    <p class="container-author-outline hidden-sm-and-down">
                        <span>{{essay.time}}</span>
                        <span>字数 {{essay.wordNum}}</span>
                        <span>阅读 {{essay.viewNum}}</span>
                        <span>评论 {{essay.commentNum}}</span>
                        <span>喜欢 {{essay.likeNum}}</span>
                    </p>
                </el-col>
            </el-row>

            <!--内容区域-->
            <el-row>
                <el-col>{{essay.content}}</el-col>
            </el-row>

            <!--赞赏支持-->
            <ws-common-essay-detail-admire/>

            <!--评论-->
            <el-row
                class="container-comment-mine"
                type="flex">
                <img
                    :src="essay.avatar"
                    alt=""
                    class="avatar">
                <el-col>
                    <el-input
                        v-model="comment.mine.inputContent"
                        @focus="comment.mine.isShow=true"
                        type="textarea"
                        placeholder="写下你的评论..."></el-input>
                    <el-row
                        v-if="comment.mine.isShow"
                        class="container-sendbox">
                        <ws-base-button-text
                            class="button"
                            @click="comment.mine.isShow=false">取消
                        </ws-base-button-text>
                        <el-button
                            class="button"
                            @click="sendMyCommentClick"
                            round
                            type="primary"
                            size="mini">发送
                        </el-button>
                    </el-row>
                </el-col>
            </el-row>

            <!--所有评论列表-->
            <el-row>
                <h4>{{essay.comments?essay.comments.length:0}} 条评论</h4>
                <hr>
                <el-row
                    v-for="(item,index) in essay.comments"
                    :key="index"
                    class="container-comment-all">

                    <!--评论人简介-->
                    <el-row type="flex" align="middle">
                        <img class="avatar"
                             :src="item.avatar"
                             alt="">
                        <el-row>
                            <div>{{item.name}}</div>
                            <div class="time">{{item.time}}</div>
                        </el-row>
                    </el-row>
                    <!--评论内容-->
                    <el-row class="container-comment-content">
                        <p>{{item.content}}</p>
                    </el-row>
                    <!--赞数目-->
                    <el-row class="container-favour-feedback" type="flex">
                        <ws-base-button-text>
                            <span @click="delCommentAdmireClick(index)"
                                  v-if="item.isAdmire">
                                <i class="iconfont icon-zan2"></i>
                                {{item.admireNum}}人赞
                            </span>
                            <span
                                @click="addCommentAdmireClick(index)"
                                v-else>
                                <i class="iconfont icon-31dianzan"></i>
                                {{item.admireNum}}人赞
                            </span>
                        </ws-base-button-text>
                        <ws-base-button-text
                            @click="feedBackParentClick(item,index)">
                            <span><i class="iconfont icon-xiaoxi"></i> 回复</span>
                        </ws-base-button-text>
                    </el-row>

                    <!--子评论列表-->
                    <el-row class="container-subcomment border-color-first">

                        <!--subcomment item-->
                        <el-row
                            v-for="(subitem,subindex) in item.subcomments"
                            :key="subindex"
                            class="container-subcomment-item border-color-first">
                            <el-row>
                                <span>{{subitem.name}}</span>：<span>{{subitem.content}}</span>
                            </el-row>
                            <el-row class="profile">
                                <span>{{subitem.time}}</span>
                                <ws-base-button-text
                                    @click="feedBackChildClick(item,index,subitem.name)">
                                    <i class="iconfont icon-xiaoxi"></i>
                                    <span>回复</span>
                                </ws-base-button-text>
                            </el-row>
                        </el-row>

                        <!--评论发送框-->
                        <el-row
                            class="container-subcomment-sendbox">
                            <ws-base-button-text
                                @click="feedBackParentClick(item,index)"
                                class="comment-add">
                                <i></i><span>添加新评论</span>
                            </ws-base-button-text>
                            <el-col v-if="item.isSendBoxShow"
                                    class="subcomment-sendbox">
                                <el-input
                                    v-model="item.inputContent"
                                    :ref="'refContentInput' + index"
                                    class="subcomment-content"
                                    type="textarea"
                                    placeholder="写下你的评论..."/>

                                <el-row class="container-sendbox">
                                    <ws-base-button-text
                                        @click="closeCommentSendBoxClick(item)"
                                        class="button">
                                        取消
                                    </ws-base-button-text>
                                    <el-button
                                        @click="sendFeedbackClick(index)"
                                        class="button"
                                        round
                                        type="primary"
                                        size="mini">
                                        发送
                                    </el-button>
                                </el-row>
                            </el-col>
                        </el-row>
                    </el-row>
                </el-row>
            </el-row>
        </el-row>
    </transition>
</template>

<script>

    import WsCommonEssayDetailAdmire from '$src/components/common/essay/ws-common-essay-detail-admire.vue';
    import WsBaseButtonText from '$src/components/base/button/ws-base-button-text.vue';
    import {getEssayDetail, addCommentAdmire, delCommentAdmire, addComment}
        from '$src/api/common/essay.js';


    export default {
        name: "ws-common-essay-detail",
        components: {
            WsBaseButtonText,
            WsCommonEssayDetailAdmire
        },
        data() {
            return {
                comment: {
                    mine: {
                        isShow: false,
                        inputContent: ''
                    },
                    all: {
                        isSendBoxShow: false,
                        refContentInput: 'refContentInput',
                        inputContent: ''
                    }
                },
                essay: {}
            };
        },
        created() {
            this.init();
        },
        methods: {

            init() {
                this.getEssayDetailRequest();
            },

            //获取文章详情
            getEssayDetailRequest() {
                let that = this;
                getEssayDetail({}, function (err, res) {
                    if (res.code === 0) {
                        that.essay = res.data;
                    }
                });
            },

            //添加评论请求
            addCommentRequest(fun) {
                addComment({}, function (err, res) {
                    if (res.code === 0) {
                        fun(res.data);
                    }
                });
            },

            //打开评论编辑框
            openCommentSendBox(item, index, fun) {
                fun = fun || function () {
                };
                let that = this;
                item.isSendBoxShow = true;
                this.$nextTick(function () {
                    that.$refs['refContentInput' + index][0].focus();
                    fun();
                });
            },

            //关闭评论编辑框
            closeCommentSendBox(item) {
                item.isSendBoxShow = false;
            },

            //发送评论事件
            sendMyCommentClick() {
                let that = this;
                this.addCommentRequest(function (data) {
                    that.essay.comments.push(data);
                    that.comment.mine.isShow = false;
                    that.$message({
                        message: '评论成功',
                        type: 'success'
                    });
                });
            },


            //发送回复事件
            sendFeedbackClick(index) {
                let that = this;
                this.addCommentRequest(function (data) {
                    that.essay.comments[index].subcomments.push(data);
                    that.essay.comments[index].isSendBoxShow = false;
                    that.$message({
                        message: '回复成功',
                        type: 'success'
                    });
                });
            },

            //事件
            closeCommentSendBoxClick(item) {
                this.closeCommentSendBox(item);
            },

            //从我打开评论编辑框事件
            feedBackParentClick(item, index) {
                let that = this;
                this.openCommentSendBox(item, index, function () {
                    that.$refs['refContentInput' + index][0].value = '';
                });
            },

            //从别人的回复打开评论编辑框
            feedBackChildClick(item, index, subitemName) {
                let that = this;
                this.openCommentSendBox(item, index, function () {
                    that.$refs['refContentInput' + index][0].value = '@' + subitemName + ' ';
                });
            },

            //评论添加赞
            addCommentAdmireRequest(fun) {
                addCommentAdmire({}, function (err, res) {
                    if (res.code === 0) {
                        fun(res.data);
                    }
                });
            },

            //评论删除赞
            delCommentAdmireRequest(fun) {
                delCommentAdmire({}, function (err, res) {
                    if (res.code === 0) {
                        fun(res.data);
                    }
                });
            },

            addCommentAdmireClick(index) {
                let that = this;
                this.addCommentAdmireRequest(function (data) {
                    that.essay.comments[index].isAdmire = true;
                    that.essay.comments[index].admireNum++;
                });
            },

            delCommentAdmireClick(index) {
                let that = this;
                this.delCommentAdmireRequest(function (data) {
                    that.essay.comments[index].isAdmire = false;
                    that.essay.comments[index].admireNum--;
                });
            }
        }
    };
</script>

<style scoped lang="scss">

    h1 {
        color: $font-color-title;
    }

    .avatar {
        margin-right: 10px;
        @include round(36px);
    }

    /*作者简介*/
    .container-user {
        margin: 10px 0;

        p {
            margin: 0;

            span {
                color: $font-color-note;
            }
        }

        .container-author-outline span {
            margin-right: 5px;
        }
    }

    /*评论*/

    .container-comment-mine {
        margin-bottom: 14px;

        .container-sendbox {
            margin-top: 10px;
            text-align: end;

            .button {
                margin-left: 20px;
            }
        }
    }

    /*所有评论*/
    .container-comment-all {
        padding: 15px 0;

        .time {
            color: $font-color-note;
        }

        .container-comment-content {
            margin: 10px 0;

            p {
                margin: 0;
            }
        }

        .container-favour-feedback {
            margin-bottom: 10px;

            span, i {
                color: $font-color-note;
            }

            span {
                margin-right: 5px;
            }
        }

        /*子评论列表*/
        .container-subcomment {
            padding: 5px 15px;
            @include border(left);

            .profile {
                span, i {
                    color: $font-color-note;
                }
            }

            .container-subcomment-item {
                padding: 10px 0;
                @include border(bottom, 1px, dashed);
            }

            .container-subcomment-sendbox {
                margin-top: 10px;

                .comment-add {
                    margin-bottom: 20px;
                }

                .subcomment-content {
                    margin-bottom: 10px;
                }
            }
        }
    }

</style>