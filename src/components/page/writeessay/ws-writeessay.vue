<template>
    <el-row class="container">
        <el-col class="container-col container-collection" :span="4">

            <el-row class="container-turnback">
                <el-button class="turn-back" type="primary" size="small" round plain>回首页</el-button>
            </el-row>

            <el-row class="new-collection">
                <el-collapse accordion>
                    <el-collapse-item>
                        <template slot="title">
                            <i class="header-icon el-icon-plus"></i>
                            <span>新建文集</span>
                        </template>
                        <el-form>
                            <el-form-item>
                                <el-input type="text" placeholder="请输入文集名"></el-input>
                            </el-form-item>
                        </el-form>
                        <el-row type="flex" justify="">
                            <el-button type="primary" size="small" round plain>提交</el-button>
                            <el-button type="primary" size="small" round plain>取消</el-button>
                        </el-row>
                    </el-collapse-item>
                </el-collapse>
            </el-row>

            <el-row class="container-diary">
                <el-row class="diary" type="flex" justify="space-between">
                    <span>日记本</span>
                    <el-popover
                            placement="bottom"
                            width="100"
                            trigger="click">
                        <el-row>
                            <i class="el-icon-edit-outline"></i>
                            <span>修改文集</span>
                        </el-row>
                        <el-row>
                            <i class="el-icon-delete"></i>
                            <span>删除文集</span>
                        </el-row>
                        <i slot="reference" class="el-icon-setting"></i>
                    </el-popover>

                </el-row>
            </el-row>

            <el-row class="container-setting" type="flex" justify="space-between">
                <el-row>
                    <i class="el-icon-menu"></i>
                    <span>设置</span>
                </el-row>
                <el-row>
                    <div @click="dialogVisible = true">
                        <span>遇到问题</span>
                        <i class="el-icon-question"></i>
                    </div>
                    <el-dialog
                            :visible.sync="dialogVisible"
                            width="30%">
                        <span>如果你在使用编辑器的过程中遇到问题，可以尝试以下方案解决：
1. Windows用户尽量将浏览器设置为极速模式，不要使用兼容模式写作\n
2.推荐使用chrome浏览器，创作体验更加流畅
3.浏览器插件可能与编辑器功能冲突，可以在使用编辑器时禁用插件</span>
                        <div slot="footer" class="dialog-footer">
                            <el-button type="primary" @click="dialogVisible = false">知道了</el-button>
                        </div>
                    </el-dialog>
                </el-row>
            </el-row>
        </el-col>
        <el-col class="container-col container-essay-list" :span="6">
            <el-row class="container-new-essay">
                <i class="el-icon-circle-plus"></i>
                <span>新建文章</span>
            </el-row>
            <el-row class="container-essay-item" type="flex" align="middle" >
                <i class="el-icon-document item-document-img"></i>
                <el-col class="item-content">
                    <el-col class="item-title">title</el-col>
                    <el-col class="item-outline">哈哈哈hhhhhhhhhhhhhhhhh哈哈哈哈ffffffffff哈哈哈或</el-col>
                </el-col>
                <i class="el-icon-setting item-setting-icon"></i>
                <el-row class="item-note">
                    <span>字数:</span>
                    <span>31</span>
                </el-row>
            </el-row>
            <el-row class="container-new-essay-below">
                <i class="el-icon-plus"></i>
                <span>在下方新建文章</span>
            </el-row>
        </el-col>
        <el-col class="container-col container-edit" :span="14">
            <el-row class="container-edit-title" type="flex" align="center">
                <el-input class="edit-title" placeholder="请输入标题" type="text" style="border: none !important;"></el-input>
            </el-row>
            <el-row class="container-editor">
                <mavon-editor class="editor" :box-shadow="false" v-model="value"/>
            </el-row>
        </el-col>

    </el-row>
</template>

<script>
    let isEdit = false
    export default {
        name: "ws-writeessay",
        data() {
            return {
                dialogVisible: false,
                items: [],
                currentItem: {},
                content: ''
            }
        },
        created() {
            this.fetchMyEssays()
        },
        methods: {
            handleChange(value) {
                console.log(value);
            },
            createEssay() {
                isEdit = false
                this.content = ""
            },
            fetchMyEssays() {
                var that = this
                this.request.getColdJoke({}, function (err, res) {
                    if (err) {
                        return;
                    }
                    if (res.code === 0) {
                        that.items = res.data
                    }
                })
            },
            saveEssay() {
                if (this.content == '') {
                    alert('内容不能空~')
                    return;
                }
                if (isEdit) {
                    this.editEssay()
                } else {
                    this.addEssay()
                    isEdit = true
                }
            },
            addEssay() {
                var that = this;
                this.request.addColdJoke({
                    content: this.content,
                    time: new Date()
                }, function (err, res) {
                    if (err) {
                        return;
                    }
                    if (res.code !== 0) {
                        alert('失败')
                        return;
                    }
                    that.fetchMyEssays()
                })

                this.items.push({
                    content: this.currentItem.content,
                    time: new Date()
                });
            },
            editEssay(item) {
                let that = this;
                this.request.editColdJoke({
                    coldjoke_id: this.currentItem._id,
                    content: this.content,
                    time: new Date()
                }, function (err, res) {
                    if (err) return;
                    if (res.code === 0) {
                        that.fetchMyEssays()
                    } else {
                        alert('失败')
                    }
                })
            },
            //  监听事件
            contentItemClick(item) {
                isEdit = true
                this.currentItem = item
                this.content = item.content
            }
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        height: 100%;
    }

    .container-col {
        height: 100%;
    }

    /*第一栏目*/
    .container-collection {
        position: relative;
        border-right: 1px solid lightgray;
    }

    .container-turnback {
        width: 100%;
        padding: 25px 15px;
    }

    .turn-back {
        width: 100%;
    }

    .new-collection {
        padding: 0 13px 10px;
    }

    .container-diary {
        width: 100%;
    }

    .diary {
        width: 100%;
        padding: 5px 13px;
        border-left: 2px solid red;
    }

    .container-setting {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        padding: 13px;
    }
    /*end 第一栏目*/

    /*第二栏*/
    .container-essay-list {
        overflow: scroll;
    }

    .container-new-essay {
        padding: 13px 15px;
        border-bottom: 1px solid lightgray;
    }

    .container-essay-item {
        width: 100%;
        position: relative;
        padding: 15px;
        padding-left: 12px;
        border-left: 3px solid red;
        border-bottom: 1px solid lightgray;
    }

    .item-document-img {
        font-size: 18px;
        padding-right: 13px;
    }

    .item-content {
        width: calc(100% - 54px);
    }

    .item-title {
        margin-bottom: 5px;
    }

    .item-outline {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .item-setting-icon {
        display: inline-block;
        font-size: 12px;
        padding-left: 13px;
    }

    .item-note {
        position: absolute;
        left: 0;
        bottom: 0;
        padding-left: 4px;
        padding-bottom: 2px;
        font-size: 8px;
        color: gray;
    }

    .container-new-essay-below {
        padding: 13px 15px;
        color: lightgray;
    }

    /*end 第二栏目*/

    /*第三栏*/
    .container-edit {
        height: 100%;
    }

    .container-edit-title{
        height:60px;
        padding: 8px 14px;
        overflow: hidden;
    }

    .edit-title {
        font-size: 25px;
    }

    .container-editor{
        height:calc(100% - 60px);
    }

    .editor{
        height:100%;
    }

    /*end 第三栏目*/

</style>