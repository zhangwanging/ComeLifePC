<template>
    <ws-base-layout-main-center class="container">
        <p>共为您找到{{serials.length}}部该标签下的连载作品</p>
        <el-row
                type="flex"
                class="container-serial">
            <el-col
                    v-for="(item,index) in serials"
                    :key="index"
                    :span="4"
                    class="container-serial-item">
                <ws-serial-item
                        :coverImgUrl="item.coverImgUrl"
                        :title="item.title"
                        :avatar="item.avatar"
                        :author="item.author"
                        :viewNum="item.viewNum"/>
            </el-col>
        </el-row>
    </ws-base-layout-main-center>
</template>

<script>
    import WsBaseLayoutMainCenter from '$src/components/base/layout/ws-base-layout-main-center.vue'
    import WsSerialItem from '$src/components/page/serial/ws-serial-item.vue'

    export default {
        name: "ws-serial",
        components: {
            WsBaseLayoutMainCenter,
            WsSerialItem
        },
        data(){
            return {
                serials:[]
            }
        },
        created(){
            this.init()
        },
        methods:{
            init(){
                this.getSerialRequest()
            },
            getSerialRequest(){
                let that=this
                this.request.getSerial({},function (err,res){
                    if(res.code===0){
                        that.serials=res.data
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .container {

    }

    .container-serial {
        flex-wrap: wrap;
    }

    .container-serial-item{
        padding-right:15px;
        margin-bottom:15px;
    }

</style>