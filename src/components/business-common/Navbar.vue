<template>
    <el-menu
            active-text-color="#409EFF"
            default-active="0"
            :mode="menu.mode"
            :router="true"
            @select="handleSelect">
        <template v-for="(menuitem,menuIndex) in menu.menuItems">
            <el-submenu v-if="menuitem.menuItems&&menuitem.menuItems.length>0"
                        :index="menuitem.routerObj">
                <template slot="title">
                    <!--待解决：将router-link去掉或...-->
                    <router-link :to="menuitem.routerObj">
                        <template v-if="menuitem.isImg">
                            <img :src="menuitem.imgUrl" alt="" width="40" height="40">
                        </template>
                        <template v-else>
                            <i :class="[menuitem.labelIconClass]"></i>
                            <span>{{menuitem.label}}</span>
                        </template>
                    </router-link>
                </template>
                <el-menu-item v-for="(subitem,subIndex) in menuitem.menuItems"
                              :index="subitem.routerObj">
                    <i :class="[subitem.labelIconClass]"></i>
                    <span>{{subitem.label}}</span>
                </el-menu-item>
            </el-submenu>
            <el-menu-item v-else
                          :index="menuitem.routerObj">
                <i :class="[menuitem.labelIconClass]"></i>
                <span>{{menuitem.label}}</span>
            </el-menu-item>
        </template>
    </el-menu>
</template>

<script>

    //组件直接传对象并不灵活，只是暂时的现在需求稳定。
    export default {
        name: "Navbar",
        props: {
            menu: {
                type: Object
            }
        },
        data() {
            return {};
        },
        methods: {
            handleSelect(index, indexPath) {
                this.$emit('select', index, indexPath)
            }
        }
    }
</script>

<style scoped>

</style>