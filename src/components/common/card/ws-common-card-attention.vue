<template>
    <el-row class="container-ws-common-recommend-author-detail-item">

        <!--作者简介-->
        <el-row @click.native="ToDetailClick"
                class="container-author">
            <el-row>
                <img :class="[round?'':'avatar-rectangle','avatar']" :src="avatar" alt="">
            </el-row>
            <h3 class="author font-size-smalltitle">{{name}}</h3>
            <p class="profile">{{profile}}</p>
        </el-row>

        <!--关注按钮-->
        <el-row type="flex" justify="center">
            <el-button
                    v-if="isAttention"
                    @click="cancelAttentionClick"
                    class="btn-attention"
                    type="info"
                    size="mini"
                    plain
                    round>
                <i class="el-icon-check"></i>
                已关注
            </el-button>
            <el-button
                    v-else
                    @click="addAttentionClick"
                    class="btn-attention"
                    type="success"
                    size="mini"
                    round>
                <i class="el-icon-plus"></i>
                关注
            </el-button>
        </el-row>

    </el-row>
</template>

<script>
    export default {
        name: "ws-common-card-attention",
        props: {
            //头像
            avatar: {
                type: String
            },
            //名称
            name: {
                type: String
            },
            //说明文字
            profile: {
                type: String
            },
            //是否已关注
            isAttention: {
                type: Boolean
            },
            //头像是否圆形
            round:{
                type:Boolean,
                default:false
            }
        },
        data() {
            return {}
        },
        methods: {
            //添加关注
            addAttentionClick() {
                this.$emit('add-attention-click')
            },
            //取消关注
            cancelAttentionClick() {
                this.$emit('cancel-attention-click')
            },
            //整体（头像，名称，说明文字）点击
            ToDetailClick() {
                this.$emit('detail-click')
            }
        }
    }
</script>

<style scoped>
    .container-ws-common-recommend-author-detail-item {
        padding: 30px 18px 0;
        margin-top: 30px;
        border: 1px solid gainsboro;
        background-color: whitesmoke;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    }

    .container-ws-common-recommend-author-detail-item:hover {
        box-shadow: 0 3px 1px 4px whitesmoke;
    }

    /*作者简介*/
    .container-author {
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
    }

    .avatar {
        position: absolute;
        top: -60px;
        left: calc(100% - 30px);
        width: 60px;
        height: 60px;
        -webkit-border-radius: 30px;
        -moz-border-radius: 30px;
        border-radius: 30px;
    }

    .avatar-rectangle{
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    }

    .author {
        margin: 10px 0;
    }

    /*TODO:只有webkit内核有效*/
    .profile {
        height:42px;
        line-height: 14px;
        font-size:12px;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    /*关注按钮*/
    .btn-attention {
        width: 50%;
        margin: 20px 0;
    }
</style>