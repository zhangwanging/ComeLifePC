<template>
    <el-row type="flex" justify="center">
        <el-col :span="10">
            <el-form label-position="left" :model="form" label-width="60px">
                <el-form-item label="用户名">
                    <el-input v-model="form.username"></el-input>

                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>

                <el-button type="primary" @click="onSubmit" class="button">登录</el-button>

            </el-form>
        </el-col>
    </el-row>

</template>
<script>
    export default {
        name: 'login',
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

<style>
    .button{
        width:100%;
    }
</style>