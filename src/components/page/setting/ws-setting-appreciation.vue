<template>
    <el-form label-position="left" ref="form" :model="form" label-width="120px">
        <el-form-item label="赞赏功能">
            <el-radio-group v-model="form.resource">
                <el-radio label="开启"></el-radio>
                <el-radio label="关闭"></el-radio>
            </el-radio-group>
            <p class="font-color-note">开启后赞赏按钮将出现在你的文章底部</p>
        </el-form-item>
        <el-form-item label="赞赏描述">
            <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">保存</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "ws-setting-appreciation",
        data:function () {
            return{
                form:{
                    resource:'',
                    desc:''
                }
            }
        }
    }
</script>

<style scoped>
    p{
        margin:0
    }
</style>