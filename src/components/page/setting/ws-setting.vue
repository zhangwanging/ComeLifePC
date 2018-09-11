<template>
    <el-row :gutter="20">
        <el-col :span="8">
            <ws-base-navbar fix-index="setting" :menu="menu" default-active="0"/>
        </el-col>
        <el-col :span="16">
            <router-view name="setting-content"></router-view>
        </el-col>
    </el-row>
</template>

<script>
    import WsBaseNavbar from '$src/components/base/ws-base-navbar.vue'

    export default {
        name: "ws-setting",
        components: {WsBaseNavbar},
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

</style>