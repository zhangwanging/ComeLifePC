<template>
    <el-row class="container-ws-care">

        <!--左栏-->
        <transition name="fade">
            <el-col class="container-left">
                <el-row>
                    <el-menu
                            @select="handleMenuSelect"
                            default-active="0">
                        <el-menu-item
                                v-for="(item,index) in menus"
                                :key="index"
                                :index="item.id.toString()"
                                class="container-menu-item">
                            <img :src="item.avatar" alt="" class="menu-img">
                            <span slot="title" class="menu-title">{{item.title}}</span>
                        </el-menu-item>
                    </el-menu>
                </el-row>
            </el-col>
        </transition>

        <!--右栏-->

        <el-col
                :offset="7"
                class="container-right"
                :span="17">
                <ws-care-user-detail :id="id"/>
        </el-col>

    </el-row>
</template>

<script>
    import WsCareUserDetail from '$src/components/page/care/ws-care-user-detail.vue'
    import {getUserCareList} from '$src/api/page/care.js'

    export default {
        name: "ws-care",
        components: {
            WsCareUserDetail
        },
        data() {
            return {
                //用户标志
                id: '',
                //左栏导航菜单列表
                menus: []
            }
        },
        created() {
            this.init()
        },
        methods: {
            init() {
                this.getUserCareListRequest()
            },

            //获取关注用户列表
            getUserCareListRequest() {
                let that = this
                getUserCareList({}, function (err, res) {
                    if (res.code === 0) {
                        that.menus = res.data
                    }
                })
            },

            //导航栏选中事件,index为用户标志
            handleMenuSelect(index, indexPath) {
                this.id = index
            }
        }
    }
</script>

<style scoped>

    .container-ws-care {
        height: 100%;
    }

    /*左栏*/

    .container-left {
        position: fixed;
        top: 80px;
        bottom: 0px;
        width: 200px;
        overflow: auto;
    }

    .container-menu-item {
        display: flex;
        align-items: center;
        height: 45px;
        padding-left: 10px !important;
    }

    .menu-img {
        width: 30px;
        height: 30px;
        margin-right: 5px;
        border-radius: 3px;
    }

    /*右栏*/

    .container-right {
        padding-left: 25px;
    }
</style>