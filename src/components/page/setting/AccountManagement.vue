<template>
    <el-form label-position="left" ref="form" :model="form" label-width="120px">
        <el-form-item label="打包下载文章">
            <el-button type="primary" size="small">下载所有文章</el-button>
        </el-form-item>
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="删除账号" name="1">
               <p>永久删除帐号</p>
                <ul>
                    <li>如果你不小心创建出了多余的帐号，或在绑定帐号的时候提示帐号被占用，你可以在简书帐号绑定解绑相关问题汇总中获得相关帮助。</li>
                    <li>如果你对简书上的某些内容、功能或社区规则不满意，你可以在帮助与反馈页向我们提出。</li>
                    <li>删除帐号前，请确保已经没有任何公开或私密文章，且钱包中全部余额已清零。</li>
                    <li>删除帐号是不可逆的操作，删除后将无法恢复。</li>
                </ul>
                <el-row>
                    <el-button size="small" type="primary">保留我的账号</el-button>
                    <el-button size="small" type="danger">删除账号</el-button>
                </el-row>
            </el-collapse-item>
        </el-collapse>
    </el-form>
</template>

<script>
    export default {
        name: "AccountManagement",
        data() {
            return {
                activeNames: ['1']
            };
        },
        methods: {
            handleChange(val) {
                console.log(val);
            }
        }
    }
</script>

<style scoped>
    li{
        list-style-type: disc;
    }
</style>