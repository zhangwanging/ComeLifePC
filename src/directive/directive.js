import Vue from 'vue/dist/vue'

Vue.directive('focus',{
    bind: function (el) {},
    inserted: function (el,binding,vnode) {
        el.__vue__.focus()
    },
    update: function (el) {
    },
    componentUpdated: function (el) {},
    unbind: function () {}
})