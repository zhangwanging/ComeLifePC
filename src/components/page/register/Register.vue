<template>
    <div class="container-y container-register">
        <el-form class="app-form" ref="form" :model="form" label-width="80px">
            <el-form-item class="app-label" label="用户名">
                <el-input v-model="form.username"></el-input>

            </el-form-item>
            <el-form-item class="app-label" label="密码">
                <el-input v-model="form.password"></el-input>

            </el-form-item>

            <el-button type="primary" @click="onSubmit" class="button">注册</el-button>

        </el-form>
    </div>
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
                var self=this;
                this.request.post('/register',{
                    username:this.form.username,
                    password:this.form.password
                })
                    .then(function (res) {
                        var r=res.data;
                        if(r.code===0){
                            alert('注册成功')
                            var s=self.util.storage;
                            s.setObj(s.key.LOGIN,r.data._id);
                            self.global.isLogin=true;
                            self.global.userData=r.data;
                            self.$router.push({name:'home'})
                        }else if(r.code===2){
                           alert('账号已被注册')
                        }else{
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

<style>

    .app-form{
        padding: 15px;
        background-color: white;
    }

    .app-label{
        text-align: left;
    }

    .container-register {
        align-items: center;
        justify-content: center;
    }

    .button {
        width: 100%;
    }
</style>