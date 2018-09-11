<template>
    <el-menu
            id="container"
            active-text-color="#409EFF"
            :default-active="fixIndex+defaultActive"
            :mode="menu.mode"
            :router="true"
            @select="handleSelect">
        <template v-for="(menuitem,menuIndex) in menu.menuItems">
            <el-submenu id="container-submenu"
                        :key="menuIndex"
                        :index="fixIndex+menuIndex"
                        v-if="menuitem.menuItems&&menuitem.menuItems.length>0">
                <template slot="title">
                    <!--    待解决：将router-link去掉或...-->
                    <router-link :to="menuitem.routerObj" >
                        <template v-if="menuitem.isImg">
                            <img :src="menuitem.imgUrl" alt="" width="40" height="40">
                        </template>
                        <template v-else>
                            <i :class="[[menuitem.labelIconClass],iconfontClass]"></i>
                            <span>{{menuitem.label}}</span>
                        </template>
                    </router-link>
                </template>
                <el-menu-item v-for="(subitem,subIndex) in menuitem.menuItems"
                              :key="menuIndex+'-'+subIndex"
                              :index="fixIndex+menuIndex+'-'+subIndex"
                              :route="subitem.routerObj">
                    <i :class="[[subitem.labelIconClass],iconfontClass]"></i>
                    <span>{{subitem.label}}</span>
                </el-menu-item>
            </el-submenu>
            <el-menu-item v-else
                          :key="menuIndex"
                          :route="menuitem.routerObj"
                          :index="fixIndex+menuIndex">
                <i :class="[[menuitem.labelIconClass],iconfontClass]"></i>
                <span>{{menuitem.label}}</span>
            </el-menu-item>
        </template>
    </el-menu>
</template>

<script>

    //TODO:bug,导航栏激活菜单，两个合并为一个来使用时，激活菜单样式改变。思路：定义样式开启/关闭事件
    export default {
        name: "ws-base-navbar",
        props: {
            fixIndex:{
                type:String
            },
            menu: {
                type: Object
            },
            defaultActive:{
                type:String
            }
        },
        data() {
            return {
                iconfontClass:'iconfont'
            };
        },
        created(){

        },
        methods: {
            handleSelect(index, indexPath) {
                console.log('route.path:'+this.$route.name)
                console.log('index:'+index+'  indexPath:'+indexPath)
                this.$emit('select', index, indexPath)
            }
        }
    }
</script>

<style scoped>

</style>