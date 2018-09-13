<template>
    <el-row class="container">
        <el-col class="container-col container-collection" :span="4">

            <el-row class="container-turnback">
                <el-button
                        @click="turnToHomeClick"
                        class="turn-back"
                        type="primary"
                        size="mini"
                        round
                        plain>
                    回首页
                </el-button>
            </el-row>

            <el-row class="new-collection">
                <el-collapse
                        @change="createNotePanelChange"
                        :value="createNotePanel.switch"
                        accordion>
                    <el-collapse-item name="create-note">
                        <template slot="title">
                            <i class="header-icon el-icon-plus"></i>
                            <span>新建文集</span>
                        </template>
                        <el-form
                                :ref="createNotePanel.ref"
                                :model="createNotePanel.form"
                                size="mini"
                                :rules="createNotePanel.rule">
                            <el-form-item prop="noteName">
                                <el-input
                                        v-model="createNotePanel.form.noteName"
                                        type="text"
                                        placeholder="请输入文集名"/>
                            </el-form-item>
                        </el-form>
                        <el-row type="flex" justify="">
                            <el-button
                                    @click="submitCreateNoteClick(createNotePanel.ref)"
                                    type="primary"
                                    size="mini"
                                    round
                                    plain>
                                提交
                            </el-button>
                            <el-button
                                    @click="cancelCreateNoteClick"
                                    type="primary"
                                    size="mini"
                                    round
                                    plain>
                                取消
                            </el-button>
                        </el-row>
                    </el-collapse-item>
                </el-collapse>
            </el-row>

            <el-row class="container-diary">
                <el-row
                        @click.native="getEssayByIdClick(item.id)"
                        v-for="(item,index) in notes"
                        :key="index"
                        class="diary"
                        type="flex"
                        justify="space-between">
                    <span>{{item.name}}</span>
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
            <el-row @click.native="createEssayClick" class="container-new-essay">
                <i class="el-icon-circle-plus"></i>
                <span>新建文章</span>
            </el-row>
            <!--文章列表-->
            <el-row
                    @click.native="getEssayContentClick"
                    :key="index"
                    v-for="(item,index) in essays"
                    class="container-essay-item"
                    type="flex"
                    align="middle">
                <i class="el-icon-document"></i>
                <el-col class="item-content">
                    <el-col class="item-title">{{item.title}}</el-col>
                    <el-col class="item-outline">{{item.content}}</el-col>
                </el-col>
                <i class="el-icon-setting item-setting-icon"></i>
                <el-row class="item-note">
                    <span>字数:</span>
                    <span>{{item.wordNum}}</span>
                </el-row>
            </el-row>
            <el-row class="container-new-essay-below">
                <i class="el-icon-plus"></i>
                <span>在下方新建文章</span>
            </el-row>
        </el-col>

        <el-col class="container-col container-edit" :span="14">
            <el-row class="container-edit-title" type="flex" align="center">
                <el-input
                        v-model="essay.title"
                        class="edit-title"
                        placeholder="请输入标题"
                        type="text"
                        style="border: none !important;"/>
            </el-row>
            <el-row class="container-editor">
                <mavon-editor class="editor" :box-shadow="false" v-model="essay.content"/>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "ws-writeessay",
        data() {
            return {
                //文章内容
                essay: {},
                //控制‘遇到问题’的弹窗
                dialogVisible: false,
                //新建文集
                createNotePanel: {
                    ref: 'createNote',
                    form: {
                        noteName: ''
                    },
                    rule: {
                        noteName: [
                            {required: true, message: '请输入文集名~', trigger: 'blur'}
                        ]
                    },
                    switch: '',//控制面板开闭
                },
                //文集列表
                notes: [],
                //文章列表
                essays:[]
            }
        },
        created() {
            this.init()
        },
        methods: {
            init() {
                /*
                后面改，实际是同步的
                 */
                this.getNoteRequest()
                this.getEssayByIdRequest()
                this.getEssayContentRequest()
            },
            //获取文章列表数据
            getEssayByIdRequest(noteId){
                let that=this
                this.request.getEssayById({},function (err,res) {
                    if(res.code===0){
                        that.essays=res.data
                    }
                })
            },
            //新建文章
            createEssayRequest(){
                let that=this
                this.request.createEssay({},function(err,res){
                    if(res.code===0){
                        that.essays.unshift(res.data)
                        alert('已新建文章')
                    }
                })
            },
            //新建文集
            createNoteRequest() {
                let that = this
                this.request.createNote(this.createNotePanel.form, function (err, res) {
                    if (res.code === 0) {
                        that.notes.unshift(res.data)
                        alert('新建成功')
                    }
                    that.switchCreateNotePanel()
                })
            },
            //获取文集列表数据
            getNoteRequest() {
                let that = this
                this.request.getNote({}, function (err, res) {
                    if (res.code === 0) {
                        that.notes = res.data
                    }
                })
            },
            //获取文章内容
            getEssayContentRequest(){
                let that=this
                this.request.getEssayContent({},function (err,res) {
                    if(res.code===0){
                        that.essay=res.data
                    }
                })
            },

            switchCreateNotePanel() {
                if (!this.createNotePanel.switch) {
                    this.createNotePanel.switch = 'create-note'
                } else {
                    this.createNotePanel.switch = ''
                }
            },

            getEssayContentClick(){
                this.getEssayContentRequest()
            },

            createEssayClick(){
                this.createEssayRequest()
            },

            getEssayByIdClick(noteId){
                this.getEssayByIdRequest()
            },

            turnToHomeClick() {
                this.$router.push({name: 'discover'})
            },

            cancelCreateNoteClick() {
                this.switchCreateNotePanel()
            },

            submitCreateNoteClick(formName) {
                let that = this
                this.$refs[formName].validate(function (valid) {
                    if (valid) {
                        that.createNoteRequest()
                    } else {
                    }
                })
            },

            createNotePanelChange(activeNames) {
                this.switchCreateNotePanel()
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
        padding: 6px 13px;
        border-left: 2px solid red;
    }

    .diary:hover{
        background-color: grey;
        color:white;
        cursor: pointer;
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

    .container-new-essay:hover{
        cursor: pointer;
    }

    .container-essay-item {
        width: 100%;
        position: relative;
        padding: 15px;
        padding-left: 12px;
        border-left: 3px solid red;
        border-bottom: 1px solid lightgray;
    }

    .container-essay-item:hover{
        background-color: grey;
        color:white;
        cursor: pointer;
    }

    .el-icon-document {
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

    .container-edit-title {
        height: 60px;
        padding: 8px 14px;
        overflow: hidden;
    }

    .edit-title {
        font-size: 25px;
    }

    .container-editor {
        height: calc(100% - 60px);
    }

    .editor {
        height: 100%;
    }

    /*end 第三栏目*/

</style>