<template>
    <el-row>
        <el-form label-position="left" :model="form" label-width="60px">
            <el-form-item label="用户名">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-row type="flex" justify="space-between">
                <el-col :span="10">
                    <el-form-item label="记住我">
                        <el-switch v-model="form.remember"></el-switch>
                    </el-form-item>
                </el-col>
                <el-col :span="14">
                    <el-row class="question" type="flex" justify="end" align="middle">
                        <a href="#">登录遇到问题？</a>
                    </el-row>
                </el-col>
            </el-row>
            <el-button type="primary" @click="onSubmit" class="button" size="small">登录</el-button>

            <el-row type="flex" justify="center">
                <span class="social-login">社交账号登录</span>
            </el-row>
            <el-row class="other-type" type="flex" justify="center">
                <a href="#">
                    <img src="../../../assets/logo.png" alt="" width="28" height="28">
                </a>
                <a href="#">
                    <img src="../../../assets/logo.png" alt="" width="28" height="28">
                </a>
                <a href="#">
                    <img src="../../../assets/logo.png" alt="" width="28" height="28">
                </a>
                <a href="#">
                    <span>其他</span>
                </a>
            </el-row>
        </el-form>
    </el-row>

</template>
<script>
    export default {
        name: 'ws-session-login',
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                    remember: false
                }
            }
        },
        methods: {
            onSubmit() {
                var self = this;
                this.request.post('/login', {
                    username: this.form.username,
                    password: this.form.password
                })
                    .then(function (res) {
                        var r = res.data;
                        if (r.code === 0) {
                            alert('登录成功')
                            var s = self.util.storage;
                            s.setObj(s.key.LOGIN, r.data._id);
                            self.global.isLogin = true;
                            self.userData = r.data;
                            self.$router.push({name: 'home'})
                        } else {
                            alert('登录失败')
                        }
                    })
                    .catch(function (err) {
                        alert('登录失败')
                    })
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

    /*登录遇到问题*/
    .question {
        height: 40px;
    }

    .question a {
        cursor: pointer;
    }

    /*社交账号登录*/
    .social-login {
        margin-top: 60px;
        color: gray;
    }

    .social-login:before {
        content: '-----------   '
    }

    .social-login:after {
        content: '  -----------'
    }

    .other-type {
        margin-top: 10px;
    }

    .other-type a {
        display: inline-block;
        margin-right: 20px;
    }

    .other-type a:last-of-type {
        margin-right: 0;
    }

</style>