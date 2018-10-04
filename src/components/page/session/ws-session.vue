<template>
    <el-row
            type="flex"
            justify="center"
            align="middle"
            class="container">
        <el-card>
            <el-col class="container-wrapper">
                <el-tabs
                        v-model="activePanelName"
                        :stretch="true"
                        @tab-click="handleTabClick">
                    <el-tab-pane label="注册" name="register">
                        <ws-session-register name="register"/>
                    </el-tab-pane>
                    <el-tab-pane label="登录" name="login">
                        <ws-session-login name="login"/>
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
        components: {
            WsSessionRegister,
            WsSessionLogin
        },
        data() {
            return {
                activePanelName: 'register'
            };
        },
        created() {
            this.init()
        },
        methods: {
            init() {
                this.setActivePanal()
            },
            setActivePanal(name = 'login') {
                this.activePanelName = name
                this.$router.replace('/session/' + name)
            },
            handleTabClick(tab, event) {
                this.setActivePanal(tab.name)
            }
        }
    }
</script>

<style scoped>

    .container {
        height: 100%;
    }

    .container-wrapper {
        width: 250px;
        height: 400px;
    }

    /*子面板*/
    .el-tab-pane {
        padding: 15px 15px;
    }

</style>