<template>
    <el-row class="container-ws-message">
        <!--左栏-->
        <el-col class="container-left">
            <el-row>
                <el-menu
                        router
                        :default-active="defaultActive">
                    <el-menu-item
                            index="comment"
                            :route="{name:'comment'}"
                            class="container-menu-item">
                        <template slot="title">
                            <i class="iconfont icon-31xiaoxi"></i>
                            <span>评论</span>
                        </template>
                    </el-menu-item>

                    <el-menu-item
                            index="information"
                            :route="{name:'information'}"
                            class="container-menu-item">
                        <template slot="title">
                            <i class="iconfont icon-chanpincanshu"></i>
                            <span>简信</span>
                        </template>
                    </el-menu-item>

                    <el-menu-item
                            index="contribution"
                            :route="{name:'contribution'}"
                            class="container-menu-item">
                        <template slot="title">
                            <i class="iconfont icon-31dingdan"></i>
                            <span>投稿请求</span>
                        </template>
                    </el-menu-item>

                    <el-menu-item
                            index="favour"
                            :route="{name:'favour'}"
                            class="container-menu-item">
                        <template slot="title">
                            <i class="iconfont icon-31dianzan"></i>
                            <span>喜欢和赞</span>
                        </template>
                    </el-menu-item>

                    <el-menu-item
                            index="attention"
                            :route="{name:'attention'}"
                            class="container-menu-item">
                        <template slot="title">
                            <i class="iconfont icon-guanzhu2"></i>
                            <span>关注</span>
                        </template>
                    </el-menu-item>

                    <el-menu-item
                            index="admire"
                            :route="{name:'admire'}"
                            class="container-menu-item">
                        <template slot="title">
                            <i class="iconfont icon-31hongbao"></i>
                            <span>赞赏和付费</span>
                        </template>
                    </el-menu-item>

                    <el-menu-item
                            index="warn"
                            :route="{name:'warn'}"
                            class="container-menu-item">
                        <template slot="title">
                            <i class="iconfont icon-xinxi"></i>
                            <span>其他提醒</span>
                        </template>
                    </el-menu-item>
                </el-menu>
            </el-row>
        </el-col>

        <el-col class="container-right" :offset="7" :span="17">
            <router-view name="message"></router-view>
        </el-col>
    </el-row>
</template>

<script>


    export default {
        name: "ws-message",
        components:{

        },
        props:['defaultActive'],
        data() {
            return {

            }
        },
        created(){
            console.log('defaultActive:'+this.defaultActive)
        }
    }
</script>

<style scoped>

    .container-ws-message{

    }

    /*左栏*/

    .container-left {
        position:fixed;
        top:0;
        bottom:0;
        width:200px;
        margin-top:80px;
        overflow-y: scroll;
    }


    .container-menu-item {
        display: flex;
        align-items: center;
        height: 40px;
        padding-left:10px !important;
    }

    .el-menu-item .iconfont{
        margin-right:5px;
    }

    /*右栏*/

    .container-right{
        padding-left:25px;
    }

</style>