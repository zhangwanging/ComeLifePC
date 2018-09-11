<template>
    <el-row :gutter="20">
        <el-col :span="8">
            <navbar :menu="menu" default-active="0" fix-index="message"></navbar>
        </el-col>
        <el-col :span="16">
            <router-view name="message"></router-view>
        </el-col>
    </el-row>
</template>

<script>
    import navbar from '$src/components/business-common/Navbar.vue'
    export default {
        name: "Message",
        components:{
          navbar
        },
        data() {
            return {
                menu: {
                    menuItems: [
                        {
                            routerObj: {
                                name: 'comment'
                            },
                            label: '评论',
                            labelIconClass: 'icon-31xiaoxi'
                        },
                        {
                            routerObj: {
                                name: 'information'
                            },
                            label: '简信',
                            labelIconClass: 'icon-chanpincanshu'
                        },
                        {
                            routerObj: {
                                name: 'contribution'
                            },
                            label: '投稿请求',
                            labelIconClass: 'icon-31dingdan'
                        },
                        {
                            routerObj: {
                                name: 'love-and-favour'
                            },
                            label: '喜欢和赞',
                            labelIconClass: 'icon-31dianzan'
                        },
                        {
                            routerObj: {
                                name: 'attention'
                            },
                            label: '关注',
                            labelIconClass: 'icon-guanzhu2'
                        },
                        {
                            routerObj: {
                                name: 'admire'
                            },
                            label: '赞赏和付费',
                            labelIconClass: 'icon-31hongbao'
                        },
                        {
                            routerObj: {
                                name: 'warn'
                            },
                            label: '其他提醒',
                            labelIconClass: 'icon-xinxi'
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>