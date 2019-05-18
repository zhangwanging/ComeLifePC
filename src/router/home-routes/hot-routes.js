const WsHotDay7 = () => import('$src/components/page/hot/ws-hot-day7.vue');
const WsHotDay30 = () => import('$src/components/page/hot/ws-hot-day30.vue');

const hotRoutes=[
    //热门
    {
        meta: {requiresAuth: true},
        name: 'hotday7',
        path: 'hotday7',
        components: {
            default: WsHotDay7
        }
    },
    {
        meta: {requiresAuth: true},
        name: 'hotday30',
        path: 'hotday30',
        components: {
            default: WsHotDay30
        }
    },
];
export default hotRoutes;
