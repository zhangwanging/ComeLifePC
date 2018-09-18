<template>
    <el-row class="container">
        <!--封面-->
        <el-row class="container-cover-img">
            <img class="cover-img" :src="coverImgUrl" alt="">
        </el-row>
        <!--标题-->
        <h3 class="title font-size-smalltitle">{{title}}</h3>
        <!--作者头像和昵称-->
        <el-row type="flex" align="middle">
            <img class="avatar" :src="avatar" alt="">
            <span class="author font-size-note font-color-minor">{{author}}</span>
        </el-row>
        <!--阅读数-->
        <span class="viewNum font-size-note font-color-minor">{{viewNum}} 阅读</span>
    </el-row>
</template>

<script>
    export default {
        name: "ws-serial-item",
        props:{
          coverImgUrl:{
              type:String
          },
          title:{
              type:String
          },
          avatar:{
              type:String
          },
          author:{
              type:String
          },
          viewNum:{
              type:Number
          }
        },
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped>

    .container {
        width: 100%;
    }

    /*封面*/
    .container-cover-img {
        width: 100%;
    }

    .cover-img {
        width: 100%;
        height: 150px;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
    }

    /*标题*/

    .title {
        margin: 5px 0 2px;
        font-weight: normal;
        font-size:14px;
    }

    /*作者头像*/
    .avatar {
        width: 16px;
        height: 16px;
        margin-right:5px;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        border-radius: 8px;
    }

    .author {

    }

    /*阅读数*/
    .viewNum {
        display: inline-block;
        margin-top: 8px;
    }

</style>