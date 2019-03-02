import Vue from 'vue/dist/vue';

Vue.directive('focus',{
    bind: function () {},
    inserted: function (el) {
        el.__vue__.focus();
    },
    update: function () {
    },
    componentUpdated: function () {},
    unbind: function () {}
});