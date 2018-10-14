<template>
    <el-row>
        <el-form
                ref="login"
                label-position="left"
                :model="form"
                label-width="70px"
                size="mini"
                :rules="rule">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username"/>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password"/>
            </el-form-item>
            <el-row
                    type="flex"
                    justify="space-between"
                    align="middle">
                <el-form-item class="remember-me" label="记住我">
                    <el-switch v-model="form.remember"/>
                </el-form-item>

                <ws-base-button-text @click='meetProblemClick' class="login-question">
                    登录遇到问题？
                </ws-base-button-text>

            </el-row>
            <el-button
                    type="primary"
                    @click="submitLoginClick('login')"
                    class="button"
                    size="mini">
                登录
            </el-button>

            <el-row class="footer">
                <el-row type="flex" justify="center">
                    <h5 class="font-size-content direct">社交账号登录</h5>
                </el-row>
                <el-row
                        class="other-type"
                        type="flex"
                        justify="center">
                    <ws-base-button-text
                            class="item-type"
                            @click="loginByWeixinClick">
                        <i class="iconfont-weixin iconfont icon-weixin1"></i>
                    </ws-base-button-text>
                    <ws-base-button-text
                            class="item-type"
                            @click="loginByQqClick">
                        <i class="iconfont-qq iconfont icon-qq"></i>
                    </ws-base-button-text>
                </el-row>
            </el-row>
        </el-form>
    </el-row>

</template>
<script>

    import WsBaseButtonText from '$src/components/base/button/ws-base-button-text.vue'
    import {login} from '$src/api/page/session.js'

    export default {
        name: 'ws-session-login',
        components:{
            WsBaseButtonText
        },
        data() {
            return {
                form: {
                    username: '123456',
                    password: '123456',
                    remember: false
                },
                rule:{
                    username:[
                        {required:true,message:'请输入用户名',trigger:'blur'}
                    ],
                    password:[
                        {required:true,message:'请输入密码',trigger:'blur'}
                    ]
                }
            }
        },
        methods: {
            showLoginFailMsg(){
              this.$message({
                  message: '登录失败',
                  type: 'warn'
              })
            },
            showLoginSuccessMsg(){
                this.$message({
                    message: '登录成功',
                    type: 'success'
                });
            },
            showWaitAchieveMsg(){
                this.$message({
                    message: '待实现',
                    type: 'warn'
                })
            },
            submitLoginClick(formName) {
                let that=this
                this.$refs[formName].validate((valid) => {
                    if(valid) {
                        that.loginRequest()
                    } else {
                        that.$message({
                            message: '输入不合法，请重新输入再登录',
                            type: 'warn'
                        })
                    }
                })
            },

            loginRequest(){
                var self = this;
                login(this.form,function (err,r) {
                    if(err){
                        self.showLoginFailMsg()
                        return
                    }
                    if (r.code === 0) {
                        self.setLoginSeccess(r)
                    } else {
                        self.showLoginFailMsg()
                    }
                })
            },
            setLoginSeccess(res){
                this.storage.setToken(res.token)
                this.$store.commit('setLoginStatus',true)
                this.$store.commit('setUserData',res.data)

                this.$router.replace({name: 'discover'})
                this.showLoginSuccessMsg()
            },
            loginByWeixinClick(){
                this.showWaitAchieveMsg()
            },
            loginByQqClick(){
                this.showWaitAchieveMsg()
            },
            meetProblemClick(){
                this.showWaitAchieveMsg()
            }
        }
    }
</script>

<style scoped>
    .button {
        width: 100%;
    }

    .el-form-item {
        margin-bottom: 10px;
    }

    /*记住我*/
    .remember-me{
        margin-bottom: 0 !important;
    }

    /*登录遇到问题*/
    .login-question {
        vertical-align: bottom;
    }

    .question a {
        cursor: pointer;
    }

    /*登录按钮*/
    .button{
        margin:20px 0 30px;
    }

    /*底部：社交账号一下*/
    .footer {
        margin-top:20px;
    }

    .direct {
        font-weight: normal;
        margin: 0;
    }

    .direct:before {
        content: '---------'
    }

    .direct:after {
        content: '---------'
    }

    /*其他登录/注册方式*/
    .other-type{
        margin-top:10px;
    }

    .other-type .item-type{
        display: inline-block;
        margin-right:20px;
    }

    .other-type .item-type:last-of-type{
        margin-right: 0;
    }
    /**/
    .other-type i{
        font-size:24px;
    }

    .other-type .iconfont-weixin{
        color:#67C23A;
    }

    .other-type .iconfont-qq{
        color:#409EFF;
    }

</style>