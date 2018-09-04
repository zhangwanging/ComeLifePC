<template>
    <el-container>
        <el-aside width="200px">
            <el-container>
                <el-header class="left-header">
                    <el-button type="primary" @click="createEssay">新建</el-button>
                </el-header>
                <el-main class="left-main">
                    <div class="item" v-for="item in items" @click="contentItemClick(item)">
                        <p>{{item.content}}</p>
                    </div>
                </el-main>
            </el-container>
        </el-aside>
        <el-main>
            <el-container>
                <el-header class="right-header">
                    <el-button type="primary" @click="saveEssay">保存</el-button>
                </el-header>
                <el-main  style="margin-top:0;">
                    <el-input type="textarea" v-model="content" rows="10"></el-input>
                </el-main>
            </el-container>
        </el-main>
    </el-container>


</template>

<script>
    let isEdit = false
    export default {
        name: "WriteEssay",
        data() {
            return {
                items: [],
                currentItem: {},
                content: ''
            }
        },
        created() {
            this.fetchMyEssays()
        },
        methods: {
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
                if(this.content==''){
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
                isEdit=true
                this.currentItem = item
                this.content = item.content
            }
        }
    }
</script>

<style scoped>
    .el-aside {
        width:200px;
        border-right: 1px solid gray;
    }

    .el-container{
        width:100%;
    }

    .el-header{
        height:40px;
    }

    .left-header{
        width:200px;
        position: fixed;
        top:0;
        left:0;
    }

    .left-main{
        box-sizing:border-box;
        height:calc(  100% - 160px);
        overflow:scroll;
    }

    /*右边*/
    .right-header{
        position:fixed;
        top:0;
        left:200px;
        width:calc(100% - 200px)
    }

    .el-main {
        margin-top:60px;
    }

    .el-button {
        width:100%;
    }

    .item {
        min-height: 30px;
        background-color: white;
        border-bottom: 1px solid gray;
        cursor: pointer;
    }

</style>