<template>
    <el-row class='container'>
        <el-form label-position="left" :model="form" label-width="60px">
            <el-form-item label="用户名">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-button size="small" type="primary" @click="onSubmit" class="button">注册</el-button>
        </el-form>
        <el-row>
                <span class="description">
                    点击 “注册” 即表示您同意并愿意遵守简书
                    <a href="#">用户协议</a> 和 <a href="#">隐私政策</a>
                </span>
        </el-row>
        <el-row class="footer">
            <el-row type="flex" justify="center">
                <h6 class="direct-register">社交账号直接注册</h6>
            </el-row>
            <el-row class="other-type" type="flex" justify="center">
                <a href="#">
                    <img src="../../../assets/logo.png" alt="" width="28" height="28">
                </a>
                <a href="#">
                    <img src="../../../assets/logo.png" alt="" width="28" height="28">
                </a>
            </el-row>
        </el-row>
    </el-row>
</template>
<script>
    export default {
        name: 'register',
        data() {
            return {
                form: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            onSubmit() {
                var self = this;
                this.request.post('/register', {
                    username: this.form.username,
                    password: this.form.password
                })
                    .then(function (res) {
                        var r = res.data;
                        if (r.code === 0) {
                            alert('注册成功')
                            var s = self.util.storage;
                            s.setObj(s.key.LOGIN, r.data._id);
                            self.global.isLogin = true;
                            self.global.userData = r.data;
                            self.$router.push({name: 'home'})
                        } else if (r.code === 2) {
                            alert('账号已被注册')
                        } else {
                            alert('注册失败')
                        }
                    })
                    .catch(function (err) {
                        console.log(err);
                        alert('注册失败')
                    })
            }
        }
    }
</script>

<style scoped>
    .container {
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
        color: gray;
        margin-top: 10px;
    }

    /*底部：社交账号一下*/
    .footer {
        margin-top:30px;
    }

    /*社交账号直接注册*/

    .direct-register {
        font-weight: normal;
        margin: 0;
    }

    .direct-register:before {
        content: '---------'
    }

    .direct-register:after {
        content: '---------'
    }

    /*其他登录/注册方式*/
    .other-type{
        margin-top:10px;
    }

    .other-type a{
        display: inline-block;
        margin-right:20px;
    }

    .other-type a:last-of-type{
        margin-right: 0;
    }

</style>