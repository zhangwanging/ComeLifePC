<template>
    <el-row class="container" :gutter="40">
        <el-col class="container-left" :span="8">
            <el-row class="container-left-header border-color-first"
                    type="flex" justify="space-between">
                <el-row type="flex">
                    <span>全部关注</span>
                </el-row>
                <el-row type='flex'>
                    <span class="add-care">添加关注</span>
                </el-row>
            </el-row>
            <el-row>
                <el-menu
                        default-active="0"
                        router>
                    <el-menu-item
                            v-for="(item,index) in menu.menuItems"
                            :key="index"
                            :index="index.toString()"
                            :route="menu.route"
                            class="container-menu-item">
                        <img :src="item.avatar" alt="" class="menu-img">
                        <span slot="title" class="menu-title">{{item.title}}</span>
                    </el-menu-item>
                </el-menu>
            </el-row>
        </el-col>
        <el-col :span="16">
            <ws-care-user-detail/>
        </el-col>
    </el-row>
</template>

<script>
    import WsCareUserDetail from '$src/components/page/care/ws-care-user-detail.vue'

    export default {
        name: "ws-care",
        components: {
            WsCareUserDetail
        },
        data() {
            return {
                tabActiveName: '',
                menu: {
                    route:{
                        name:'#'
                    },
                    menuItems: [
                        {
                            id: '1',
                            avatar: require(`./logo.png`),
                            title: 'title1'
                        },
                        {
                            id: '2',
                            avatar: require(`./logo.png`),
                            title: 'title2'
                        }
                    ]
                }
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
                this.$router.push({name: tab.$options.propsData.name})
            }
        }
    }
</script>

<style scoped>

    .container {
        height: 100%;
    }

    /*左栏*/

    .container-left {
        height: 100%;
        overflow-y: scroll;
    }

    .container-left-header {
        padding: 0 20px 5px;
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }

    .container-left-header .add-care {
        text-align: right;
    }

    /*end 左栏*/

    /*菜单栏*/

    .container-menu-item {
        display: flex;
        align-items: center;
        height: 45px;
    }

    .menu-img {
        width: 30px;
        height: 30px;
        margin-right: 5px;
        border-radius: 3px;
    }

    /*end 菜单栏*/
</style>