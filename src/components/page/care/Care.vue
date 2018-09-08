<template>
    <el-row :gutter="20">
        <el-col :span="8">
            <el-row type="flex" justify="space-between">
                <el-col :span="12">
                    <span>全部关注</span>
                </el-col>
                <el-col :span="12">
                    <span>添加关注</span>
                </el-col>
            </el-row>
            <el-row>
                <el-menu
                        default-active="1"
                        class="el-menu-vertical-demo"
                        router="true">
                    <el-menu-item v-for="n in 4" index="">
                        <i class="el-icon-location"></i>
                        <span slot="title">user{{n}}</span>
                    </el-menu-item>

                </el-menu>
            </el-row>
        </el-col>
        <el-col :span="16">
            <el-row>
                <CareUserHeader></CareUserHeader>
            </el-row>
            <el-row>
                <el-tabs class="user-tabs" v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="文章" name="essaylist">
                        <router-view name="essaylist"></router-view>
                    </el-tab-pane>
                    <el-tab-pane label="动态" name="dynamic">
                        <router-view name="dynamic"></router-view>
                    </el-tab-pane>
                    <el-tab-pane label="最新评论" name="new-comment">
                        <router-view name="new-comment"></router-view>
                    </el-tab-pane>
                    <el-tab-pane label="热门" name="hot">
                        <router-view name="hot"></router-view>
                    </el-tab-pane>
                </el-tabs>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
    import CareUserHeader from '$src/components/page/care/CareUserHeader.vue'

    export default {
        name: "Care",
        components:{
            CareUserHeader
        },
        methods:{
            handleClick(tab, event) {
                console.log(tab, event);
                this.$router.push({name: tab.$options.propsData.name})
            }
        }
    }
</script>

<style scoped>

</style>