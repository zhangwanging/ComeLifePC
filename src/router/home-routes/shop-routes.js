const WsShop = () => import('$src/components/page/shop/ws-shop.vue');

const shopRoutes=[
    //已购内容
    {
        meta: {requiresAuth: true},
        name: 'shop',
        path: 'shop',
        components: {
            default: WsShop
        }
    },
];

export default shopRoutes;
