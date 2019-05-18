const WsWriteEssay = () => import('$src/components/page/writeessay/ws-writeessay.vue');

const writeessayRoutes=[
    {
        meta: {requiresAuth: true},
        name: 'writeessay',
        path: '/writeessay',
        components: {
            'writeessay': WsWriteEssay
        }
    },
];

export default writeessayRoutes;
