<template>
    <el-row :gutter="20">
        <el-col :span="8">
            <el-menu
                    :mode="menu.mode"
                    :router="true"
                    :default-active="menu.menuItems[0].routerObj.name"
                    class="el-menu-vertical-demo">
                <el-menu-item
                        :key="index"
                        v-for="(item,index) in menu.menuItems"
                        :route="item.routerObj"
                        :index="index.toString()">
                    <i :class="['iconfont',item.labelIconClass]"></i>
                    <span slot="title">{{item.label}}</span>
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="16">
            <router-view name="setting-content"></router-view>
        </el-col>
    </el-row>
</template>

<script>

    export default {
        name: "ws-setting",
        components: {},
        data(){
            return{
                menu: {
                    mode: 'vertical',
                    menuItems: [
                        {
                            routerObj: {
                                name: 'basic'
                            },
                            label: '基础设置',
                            labelIconClass: 'icon-31shezhi'
                        },
                        {
                            routerObj: {
                                name: 'personaldata'
                            },
                            label: '个人资料',
                            labelIconClass: 'icon-31wode'
                        },
                        {
                            routerObj: {
                                name: 'weibo-certify'
                            },
                            label: '微博认证',
                            labelIconClass: 'icon-kefuyouxian1'
                        },
                        {
                            routerObj: {
                                name: 'blacklist'
                            },
                            label: '黑名单',
                            labelIconClass: 'icon-chanpincanshu'
                        },
                        {
                            routerObj: {
                                name: 'appreciation'
                            },
                            label: '赞赏设置',
                            labelIconClass: 'icon-hongbao'
                        },
                        {
                            routerObj: {
                                name: 'account-manage'
                            },
                            label: '账户管理',
                            labelIconClass: 'icon-liebiaomoshi'
                        }

                    ]
                }
            }
        }
    }
</script>

<style scoped>
    .el-menu-item{
        height:40px;
        line-height: 40px;
    }
</style>