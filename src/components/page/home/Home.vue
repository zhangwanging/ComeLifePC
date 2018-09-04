<template>
    <el-row :gutter="40">
        <el-col :span="16">
            <el-row >
                <el-col>
                    <el-carousel height="270px" trigger="click">
                        <el-carousel-item v-for="item in carousels" :key="item.src">
                            <img :src="item.src" alt="" width="100%" height="100%">
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
                <el-col class="app-gutter">
                    <el-button class="hot" size="mini" type="primary">故事</el-button>
                    <el-button class="hot" size="mini" type="primary">摄影</el-button>
                    <el-button class="hot" size="mini" type="primary">手绘</el-button>
                    <el-button class="hot" size="mini" type="primary">读书</el-button>
                    <el-button class="hot" size="mini" type="primary">自然科普</el-button>
                    <el-button class="hot" size="mini" type="primary">IT.互联网</el-button>
                    <el-button class="hot" size="mini" type="primary">简单书影</el-button>
                </el-col>
                <el-col>
                    <ErrMsg :type="errType">
                        <el-card class="item" v-for="item in items" v-bind:key="item._id">
                            <p class="content">{{item.content}}</p>
                            <p class="time">{{new Date(item.time).toLocaleString()}}</p>
                        </el-card>
                        <el-button size="small" class="right-button" type="primary">阅读更多</el-button>
                    </ErrMsg>
                </el-col>
                <el-col>
                    <div>附加说明</div>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="8">
            <el-col>
                <el-button size="small" class="right-button"  type="primary">7日热门</el-button>
                <el-button size="small" class="right-button"  type="primary">30日热门</el-button>
                <el-button size="small" class="right-button"  type="primary">优选连载</el-button>
                <el-button size="small" class="right-button"  type="primary">简书版权</el-button>
                <el-button size="small" class="right-button"  type="primary">简书大学堂</el-button>
                <p>二维码</p>
            </el-col>
            <el-col>
                <p>推荐作者</p>
                <div>小万PPT</div>
                <div>小万PPT</div>
                <div>小万PPT</div>
                <div>小万PPT</div>
                <div>小万PPT</div>
                <div>小万PPT</div>
            </el-col>
            <el-col>
                <el-button size="small" class="right-button" type="primary">查看全部</el-button>
            </el-col>
        </el-col>
    </el-row>
</template>

<script>
    import ErrMsg from '$src/components/common/errormsg/ErrorMsg.vue'
    export default {
        name: "Home",
        components: {
            ErrMsg
        },
        data() {
            return {
                errType: 0,
                items: [],
                carousels:[{
                    src:require('$src/assets/img/error.png')
                },{
                    src:require('$src/assets/logo.png')
                },{
                    src:require('$src/assets/logo.png')
                }]
            }
        },
        created() {
            this.getColdJoke()
        },
        methods: {
            getColdJoke() {
                let that = this
                this.request.getColdJoke(undefined, function (err, res) {
                    if (err) {
                        that.errType = 1
                        return
                    }
                    if (res.code === 0) {
                        if (res.data.length !== 0) {
                            that.items = res.data
                            that.errType = 0
                        } else {
                            that.errType = 2;
                        }
                    } else {
                        that.errType = 1
                    }
                })
            }
        }
    }
</script>

<style scoped>


    .el-button+.el-button{
        margin-left:0;
    }

    .hot {
        margin-right: 10px;
        margin-bottom: 5px;
    }

    .item {
        position: relative;
        min-height: 100px;
        margin-bottom: 10px;
    }

    .content {

    }

    .time {
        position: absolute;
        right: 0px;
        bottom: 0px;
    }

    /*微调*/
    .app-gutter {
        margin-top:20px;
        margin-bottom: 20px;
    }

    .right-button{
        width:100%;
        margin-bottom: 10px;
    }

</style>