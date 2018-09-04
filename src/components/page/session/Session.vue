<template>
    <el-row type="flex" justify="center" align="middle" class="container">
        <el-card>
            <el-col class="container-wrapper">
                <el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">
                    <el-tab-pane label="注册" name="register">
                        <router-view name="register"></router-view>
                    </el-tab-pane>
                    <el-tab-pane label="登录" name="login">
                        <router-view name="login"></router-view>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </el-card>
    </el-row>
</template>

<script>
    export default {
        name: "Session",
        data() {
            return {
                activeName: 'first'
            };
        },
        created() {
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
                this.$router.replace({name: this.activeName})
            }
        }
    }
</script>

<style scoped>

    .container {
        height: 100%;
    }

    .container-wrapper {
        width: 300px;
        height: 400px;
    }

    /*子面板*/
    .el-tab-pane{
        padding: 15px 20px;
    }

</style>