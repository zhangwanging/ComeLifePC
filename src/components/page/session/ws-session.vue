<template>
    <el-row type="flex" justify="center" align="middle" class="container">
        <el-card>
            <el-col class="container-wrapper">
                <el-tabs v-model="activeName" :stretch="true">
                    <el-tab-pane label="注册" name="register">
                        <router-view name="register"></router-view>
                        <ws-session-register name="register"/>
                    </el-tab-pane>
                    <el-tab-pane label="登录" name="login">
                        <ws-session-login  name="login"/>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </el-card>
    </el-row>
</template>

<script>

    import WsSessionRegister from '$src/components/page/session/ws-session-register.vue'
    import WsSessionLogin from '$src/components/page/session/ws-session-login.vue'

    export default {
        name: "ws-session",
        components:{
            WsSessionRegister,
            WsSessionLogin
        },
        data() {
            return {
                activeName: 'register'
            };
        },
        created() {
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
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