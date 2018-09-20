<template>
    <el-row>
        <!--评论简述-->
        <el-row type="flex">
            <img class="avatar" :src="require(`$src/assets/star.jpg`)" alt="">
            <el-col>
                <div>
                    <span>一墨编程学习</span> 在文章
                    <span>《阿里员工揭秘：很多程序员离职，在小公司当领导，只动嘴不动手！》</span>
                    的评论中提到了你</div>
                <span class="font-color-minor">2018.09.15 13:49</span>
            </el-col>
        </el-row>

        <!--收到的评论-->
        <el-row
                class="container-comment"
                type="flex"
                align="middle">
            <a href="#">@携手前行</a>&nbsp&nbsp<span>你是有多皮呢</span>
        </el-row>

        <!--回复，查看按钮-->
        <el-row class="container-feedback font-color-minor"
                type="flex"
                align="middle">
            <span><i class="iconfont icon-31xiaoxi"></i>回复</span>
            <span><i class="iconfont icon-fenxiang1"></i>查看对话</span>
        </el-row>
    </el-row>
</template>

<script>
    export default {
        name: "ws-message-comment-list-item"
    }
</script>

<style scoped>

    /*评论简述*/
    .avatar{
        width:30px;
        height:30px;
        margin-right:10px;
        -webkit-border-radius: 15px;
        -moz-border-radius: 15px;
        border-radius: 15px;
    }

    /*收到的评论*/
    .container-comment{
        margin:10px 0;
    }

    /*回复*/
    .container-feedback span:first-child{
        margin-right:10px;
    }

</style>