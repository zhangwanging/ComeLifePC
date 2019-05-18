const WsCare = () => import('$src/components/page/care/ws-care.vue');

const careRoutes=[
    //关注
    {
        meta: {requiresAuth: true},
        name: 'care',
        path: 'care',
        components: {
            default: WsCare
        }
    },
];

export default careRoutes;
