<template>
    <el-row>
        <el-col>
            <ErrMsg :type="errType">
                <div class="item" v-for="item in items">
                    <p class="content">{{item.content}}</p>
                    <p class="time">{{new Date(item.time).toLocaleString()}}</p>
                </div>
            </ErrMsg>
        </el-col>
    </el-row>
</template>

<script>
    import ErrMsg from '$src/components/common/errormsg/ErrorMsg.vue'

    export default {
        name: "Home",
        components:{
            ErrMsg
        },
        data() {
            return {
                errType:0,
                items: []
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
                        that.errType=1
                        return
                    }
                    if (res.code === 0) {
                        if(res.data.length!==0){
                            that.items = res.data
                            that.errType=0
                        }else{
                            that.errType=2;
                        }
                    } else {
                        that.errType=1
                    }
                })
            }
        }
    }
</script>

<style scoped>

    .item {
        position: relative;
        min-height: 100px;
        border-bottom: 1px solid gray;
    }

    .content {

    }

    .time {
        position: absolute;
        right: 0px;
        bottom: 0px;
    }
</style>