const WsHomepage = () => import('$src/components/page/homepage/ws-homepage.vue');
const WsHomepageTabsEssay = () => import('$src/components/page/homepage/ws-homepage-tabs-essay.vue');
const WsHomepageTabsFans = () => import('$src/components/page/homepage/ws-homepage-tabs-fans.vue');
const WsHomepageTabsLike = () => import('$src/components/page/homepage/ws-homepage-tabs-like.vue');

const homepageRoutes=[
    //我的主页
    {
        meta: {requiresAuth: true},
        name: 'homepage',
        path: 'homepage',
        components: {
            default: WsHomepage
        },
        children: [
            {
                name: 'tabsessay',
                path: 'tabsessay',
                components: {
                    'usertabs': WsHomepageTabsEssay
                }
            },
            {
                name: 'tabsfans',
                path: 'tabsfans',
                components: {
                    'usertabs': WsHomepageTabsFans
                }
            },
            {
                name: 'tabslike',
                path: 'tabslike',
                components: {
                    'usertabs': WsHomepageTabsLike
                }
            }
        ]
    },
];

export default homepageRoutes;
