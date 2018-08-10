<template>
    <div class="container-x container-essay">
        <div class="container-y container-left">
            <el-button type="primary" @click="createEssay">新建</el-button>
            <div class="item" v-for="item in items">
                <p></p>
            </div>
        </div>
        <div class="container-y container-right">
            <el-button type="primary" @click="saveEssay">保存</el-button>
            <el-input type="textarea" v-model="essayContent" rows="10"></el-input>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WriteEssay",
        data() {
            return{
                items:[],
                essayContent:''
            }
        },
        methods: {
            createEssay() {
                this.essayContent=""
            },
            fetchMyEssays(){

            },
            saveEssay(){
                this.items.push(this.essayContent);
                this.essayContent=""
            }
        }
    }
</script>

<style scoped>
    .item {
        min-height: 30px;
        background-color: white;
    }

    .container-essay{
        width:100%;
    }

    .container-left{
        width:350px;
    }
</style>