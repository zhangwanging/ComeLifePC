<template>
    <el-row :gutter="20">
        <el-col :span="8">
            <navbar fix-index="setting" :menu="menu" default-active="0"></navbar>
        </el-col>
        <el-col :span="16">
            <router-view name="setting-content"></router-view>
            <router-view></router-view>
        </el-col>
    </el-row>
</template>

<script>
    import Navbar from '$src/components/business-common/Navbar.vue'

    export default {
        name: "Setting",
        components: {Navbar},
        data(){
            return{
                menu: {
                    mode: 'vertical',
                    menuItems: [
                        {
                            routerObj: {
                                name: 'basic-setting'
                            },
                            label: '基础设置',
                            labelIconClass: 'icon-31shezhi'
                        },
                        {
                            routerObj: {
                                name: 'personal-data'
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
                                name: 'appreciation-setting'
                            },
                            label: '赞赏设置',
                            labelIconClass: 'icon-hongbao'
                        },
                        {
                            routerObj: {
                                name: 'account-management'
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