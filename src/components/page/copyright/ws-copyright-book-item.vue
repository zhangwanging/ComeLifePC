<template>
    <el-row type="flex" class="container-ws-copyright-book-item">
        <img class="book-img" :src="bookImgUrl" alt="">
        <el-col class="container-book-profile">
            <h3 class="title">{{title}}</h3>
            <el-row>
                <div class="author">{{author}}</div>
                <div class="profile">{{profile}}</div>
            </el-row>
            <div class="price">{{price}}</div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "ws-copyright-book-item",
        props:{
            bookImgUrl:{
                type:String
            },
            title:{
                type:String
            },
            author:{
                type:String
            },
            profile:{
                type:String
            },
            price:{
                type:Number
            }
        }
    }
</script>

<style scoped lang="scss">
    .container-ws-copyright-book-item{
        width:100%;
        padding:15px;
        @include border;
        @include corner(3px);
    }

    .container-ws-copyright-book-item:hover{
        box-shadow: 0 0 3px 3px #DCDFE6;
        cursor: pointer;
    }

    .book-img{
        width:80px;
        height:110px;
        margin-right:12px;
    }

    .container-book-profile{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .title{
        margin:0;
        font-weight: bold;
    }

    .profile{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
</style>