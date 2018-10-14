<template>
    <el-row class='container-ws-session-register'>
        <el-form
                class="font-size-content"
                ref="register"
                label-position="left"
                :model="form"
                label-width="80px"
                size="mini"
                :status-icon='true'
                :rules="rule">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="password2">
                <el-input v-model="form.password2"></el-input>
            </el-form-item>
            <el-button
                    size="mini"
                    type="primary"
                    @click="onSubmitRegister('register')"
                    class="button">注册
            </el-button>
        </el-form>
        <el-row>
                <span class="description font-color-minor">
                    点击 “注册” 即表示您同意并愿意遵守简书
                    <router-link class="font-color-primary"
                                 :to="{name:'essaydetail'}">
                        <span class="font-color-primary">用户协议</span>
                    </router-link> 和
                    <router-link
                                 :to="{name:'essaydetail'}">
                        <span class="font-color-primary">隐私政策</span>
                    </router-link>
                </span>
        </el-row>
        <el-row class="footer">
            <el-row type="flex" justify="center">
                <h5 class="font-size-content direct">社交账号直接注册</h5>
            </el-row>
            <el-row class="other-type" type="flex" justify="center">
                <ws-base-button-text class="type-item" @click="registerByWeixinClick">
                   <i class="iconfont-weixin iconfont icon-weixin1"></i>
                </ws-base-button-text>
                <ws-base-button-text class="type-item" @click="registerByQqClick">
                    <i class="iconfont-qq iconfont icon-qq"></i>
                </ws-base-button-text>
            </el-row>
        </el-row>
    </el-row>
</template>
<script>

    import WsBaseButtonText from '$src/components/base/button/ws-base-button-text.vue'
    import {register} from "../../../api/page/session";

    export default {
        name: 'ws-session-register',
        components:{
            WsBaseButtonText
        },
        data() {
            let validatePassword2=(rule,value,callback)=>{
                if(value===''){
                    callback(new Error('请再次输入密码'))
                }else if(value!=this.form.password){
                    callback(new Error('两次输入的密码不一致！'))
                }else{
                    callback()
                }
            }

            return {
                form: {
                    username: '123456',
                    password: '123456',
                    password2:'123456'
                },
                rule:{
                    username:[
                        {required:true,message:'请输入用户名',trigger:'blur'},
                        {min:2,max:12,message:'长度在2-12个字符',trigger:'change'}
                    ],
                    password:[
                        {required:true,message:'请输入密码',trigger:'blur'},
                        {min:6,max:12,message:'密码长度在6-12个字符',trigger:'change'}
                    ],
                    password2:[
                        {required:true,message:'请确认密码',trigger:'blur'},
                        {validator:validatePassword2,trigger:'change'}
                    ]
                }
            }
        },
        methods: {
            onSubmitRegister(formName) {
                let that=this
                this.$refs[formName].validate((valid)=>{
                    if(valid){
                        that.registerRequest()
                    }else{
                        console.log('err submit')
                    }
                })
            },
            registerRequest(){
                var self = this;
                register(this.form,function(err,r){
                    if(err){
                        alert('注册失败')
                        return
                    }
                    if (r.code === 0) {
                        self.$message({
                            message: '注册成功',
                            type: 'success'
                        });
                        self.setLoginedData(r)
                        self.$router.replace({name: 'discover'})
                    } else if (r.code === 2) {
                        self.$message({
                            message: '账号已被注册',
                            type: 'warn'
                        });
                    } else {
                        alert('注册失败')
                    }
                })
            },
            setLoginedData(res){
                this.storage.setToken(res.token)
                this.$store.commit('setLoginStatus',true)
                this.$store.commit('setUserData',res.data)
            },
            registerByQqClick(){
                this.$message({
                    message: '待实现',
                    type: 'warning'
                });
            },
            registerByWeixinClick(){
                this.$message({
                    message: '待实现',
                    type: 'warning'
                });
            }
        }
    }
</script>

<style scoped>
    .container-ws-session-register {
        position: relative;
    }

    /*表单*/
    .el-form-item {
        margin-bottom: 10px;
    }

    .button {
        width: 100%;
    }

    /*描述*/
    .description {
        display: inline-block;
        margin-top: 10px;
    }

    /*底部：社交账号一下*/
    .footer {
        margin-top:20px;
    }

    /*社交账号直接注册*/

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

    .other-type .type-item{
        display: inline-block;
        margin-right:20px;
    }

    .other-type .type-item:last-of-type{
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