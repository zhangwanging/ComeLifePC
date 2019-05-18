const WsMessage = () => import('$src/components/page/message/ws-message.vue');
const WsMessageAdmire = () => import('$src/components/page/message/ws-message-admire.vue');
const WsMessageAttention = () => import('$src/components/page/message/ws-message-attention.vue');
const WsMessageComment = () => import('$src/components/page/message/ws-message-comment.vue');
const WsMessageContribution = () => import('$src/components/page/message/ws-message-contribution.vue');
const WsMessageFavour = () => import('$src/components/page/message/ws-message-favour.vue');
const WsMessageInformation = () => import('$src/components/page/message/ws-message-information.vue');
const WsMessageWarn = () => import('$src/components/page/message/ws-message-warn.vue');

const messageRoutes=[
    //消息
    {
        meta: {requiresAuth: true},
        name: 'message',
        path: 'message',
        components: {
            default: WsMessage
        },
        props: {
            default: true
        },
        children: [
            {
                name: 'admire',
                path: 'admire',
                components: {
                    'message': WsMessageAdmire
                }
            },
            {
                name: 'attention',
                path: 'attention',
                components: {
                    'message': WsMessageAttention
                }
            },
            {
                name: 'comment',
                path: 'comment',
                components: {
                    'message': WsMessageComment
                }
            },
            {
                name: 'contribution',
                path: 'contribution',
                components: {
                    'message': WsMessageContribution
                }
            },
            {
                name: 'information',
                path: 'information',
                components: {
                    'message': WsMessageInformation
                },
                props: {
                    'message': true
                }
            },
            {
                name: 'favour',
                path: 'favour',
                components: {
                    'message': WsMessageFavour
                }
            },
            {
                name: 'warn',
                path: 'warn',
                components: {
                    'message': WsMessageWarn
                }
            }
        ]
    },
];

export default messageRoutes;
