<template>
    <el-form label-position="left" ref="form" :model="form" label-width="120px">
        <el-form-item label="性别">
            <el-radio-group v-model="form.resource">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
                <el-radio label="保密"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="个人简介">
            <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="微信二维码">
            <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>


        <el-form-item label="社交账号">
            <p>你可以通过绑定的社交帐号登录简书。出于安全因素, 你最初用来创建账户的社交帐号不能移除。
                如果帐号被占用，你可以在<a href="#">简书帐号绑定解绑相关问题汇总</a>中获得相关帮助。</p>
            <el-row>
                <a href="#">绑定微博</a>
            </el-row>
            <el-row>
                <a href="#">绑定微信</a>
            </el-row>
            <el-row>
                <a href="#">绑定 QQ</a>
            </el-row>
            <el-row>
                <a href="#">绑定豆瓣</a>
            </el-row>
            <el-row>
                <a href="#">绑定 Google+</a>
            </el-row>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "PersonalData",
        data() {
            return {
                form: {
                    name: '',
                    telphone:'',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',

                },
                imageUrl: ''
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },

            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        }
    }
</script>

<style scoped>

</style>