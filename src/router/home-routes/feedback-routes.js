const WsFeedback = () => import('$src/components/page/feedback/ws-feedback.vue');

const feedbackRoutes=[
    //帮助与反馈
    {
        meta: {requiresAuth: true},
        name: 'feedback',
        path: 'feedback',
        components: {
            default: WsFeedback
        }
    },
];

export default feedbackRoutes;
