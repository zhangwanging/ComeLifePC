<template>
    <el-row>
        <el-row :gutter="20">
            <el-col :span="16">
                <el-row :gutter="20" type="flex" align="middle">
                    <el-col :span="4">
                        <img src="//upload.jianshu.io/users/upload_avatars/4900320/faed9c6f-ec35-48d7-9867-84a50a00310f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240"
                             alt="" width="80" height="80">
                    </el-col>
                    <el-col :span="20">
                        <el-row>
                            <h3 class="username">携手前行</h3>
                        </el-row>
                        <el-row :gutter="8">
                            <el-col class="user-outline" :span="3">
                                <el-row>10</el-row>
                                <el-row>关注</el-row>
                            </el-col>
                            <el-col class="user-outline" :span="3">
                                <el-row>0</el-row>
                                <el-row>粉丝</el-row>
                            </el-col>
                            <el-col class="user-outline" :span="3">
                                <el-row>2</el-row>
                                <el-row>文章</el-row>
                            </el-col>
                            <el-col class="user-outline" :span="3">
                                <el-row>496</el-row>
                                <el-row>字数</el-row>
                            </el-col>
                            <el-col class="user-outline" :span="4">
                                <el-row>0</el-row>
                                <el-row>收获喜欢</el-row>
                            </el-col>
                        </el-row>
                    </el-col>
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
            <el-col :span="8">
                <el-row class="outline-item">
                    <el-row class="outline-item-line" type="flex" justify="space-between">
                        <span class="font-color-note">个人介绍</span>
                        <a href="#" class="font-color-note">编辑</a>
                    </el-row>
                    <el-row class="outline-item-line">
                        <p>努力让生活过成诗的样子？不要诧异，其实我不是乖孩子</p>
                    </el-row>
                </el-row>
                <el-row class="outline-item">
                    <el-row class="outline-item-line">
                        <i></i>
                        <span>我关注的专题/文集/连载</span>
                    </el-row>
                    <el-row class="outline-item-line">
                        <i></i>
                        <span>我喜欢的文章</span>
                    </el-row>
                </el-row>
                <el-row  class="outline-item">
                    <el-row class="outline-item-line" type="flex" justify="space-between">
                        <span>我创建的专题</span>
                        <a href="#">新建专题</a>
                    </el-row>
                    <el-row class="outline-item-line">
                        <i></i>
                        <span>专题描述</span>
                    </el-row>
                </el-row>
                <el-row  class="outline-item">
                    <el-row class="outline-item-line">
                        <span>我的文集</span>
                    </el-row>
                    <el-row class="outline-item-line">
                        <i></i>
                        <span>日记本</span>
                    </el-row>
                    <el-row class="outline-item-line">
                        <i></i>
                        <span>随笔</span>
                    </el-row>
                </el-row>
            </el-col>
        </el-row>
    </el-row>
</template>

<script>
    export default {
        name: "HomePage",
        data() {
            return {
                activeName: 'second'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
                this.$router.push({name: tab.$options.propsData.name})
            }
        }
    }
</script>

<style scoped>
    .username {
        font-weight: bold;
        font-size: 17px;
        margin: 0;
        margin-bottom: 10px;
    }

    .user-outline {
        border-right: 1px solid lightgrey;
    }

    .user-outline:last-child {
        border-right: 0;
    }

    /*tabs*/
    /*无效*/
    .el-tabs__header {
        padding: 0;
        position: relative;
        margin: 0;
        margin-bottom: 0;
    }

    /*右边*/
    .outline-item {
        padding:10px 0;
        border-bottom: 1px solid lightgrey;
    }

    .outline-item-line{
        padding:5px 0;
    }
</style>