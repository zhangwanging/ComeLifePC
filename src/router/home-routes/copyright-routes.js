const WsCopyright = () => import('$src/components/page/copyright/ws-copyright.vue');

const copyrightRoutes=[
    {
        meta: {requiresAuth: true},
        name: 'copyright',
        path: 'copyright',
        components: {
            default: WsCopyright
        }
    },
];

export default copyrightRoutes;
