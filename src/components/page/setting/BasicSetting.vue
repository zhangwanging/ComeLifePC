<template>
    <el-form label-position="left" ref="form" :model="form" label-width="120px">
        <el-form-item label="上传头像">
            <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :auto-upload="false"
                    :show-file-list="true"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
        <el-form-item label="昵称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="电子邮件">
            <el-button type="primary" size="small">点击绑定</el-button>
        </el-form-item>
        <el-form-item label="手机">
            <el-input v-model="form.telphone"></el-input>
        </el-form-item>

        <el-form-item label="常用编辑器">
            <el-radio-group v-model="form.resource">
                <el-radio label="富文本"></el-radio>
                <el-radio label="Markdown"></el-radio>
            </el-radio-group>
        </el-form-item>

        <el-form-item label="语言设置">
            <el-radio-group v-model="form.resource">
                <el-radio label="中文简体"></el-radio>
                <el-radio label="中文繁体"></el-radio>
            </el-radio-group>
        </el-form-item>

        <el-form-item label="接收谁的简信">
            <el-radio-group v-model="form.resource">
                <el-radio label="所有人"></el-radio>
                <el-radio label="我关注的人、我发过简信的人"></el-radio>
            </el-radio-group>
        </el-form-item>

        <el-form-item label="提醒邮件通知">
            <el-radio-group v-model="form.resource">
                <el-radio label="所有动态"></el-radio>
                <el-radio label="每天未读汇总"></el-radio>
                <el-radio label="不接收"></el-radio>
            </el-radio-group>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">保存</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "BasicSetting",
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