<template>
    <div class="container-y">
        <div class="item" v-for="item in items">
            <!--<p class="title">又来，没心情写了，求设计图</p>-->
            <p class="content">{{item.content}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return {
                items:[]
            }
        },
        created(){
            var _this=this;
            this.request.post('/getSentences')
                .then(function (res) {
                    console.log(res.data);
                    _this.items=res.data.data;
                })
                .catch(function (err) {

                })
        }
    }
</script>

<style scoped>

    .item{
        background-color: white;
        margin-bottom: 20px;
    }

    .title{
        font-weight:bold;
    }

    .content{

    }
</style>