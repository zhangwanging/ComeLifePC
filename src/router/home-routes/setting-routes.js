const WsSetting = () => import('$src/components/page/setting/ws-setting.vue');
const WsSettingAccountManage = () => import('$src/components/page/setting/ws-setting-account-manage.vue');
const WsSettingAppreciation = () => import('$src/components/page/setting/ws-setting-appreciation.vue');
const WsSettingBasic = () => import('$src/components/page/setting/ws-setting-basic.vue');
const WsSettingBlacklist = () => import('$src/components/page/setting/ws-setting-blacklist.vue');
const WsSettingPersonaldata = () => import('$src/components/page/setting/ws-setting-personaldata.vue');
const WsSettingWeiboCertify = () => import('$src/components/page/setting/ws-setting-weibo-certify.vue');

const settingRoutes=[

    //设置
    {
        meta: {requiresAuth: true},
        name: 'setting',
        path: 'setting',
        components: {
            default: WsSetting
        },
        children: [
            {
                name: 'basic',
                path: 'basic',
                components: {
                    'setting-content': WsSettingBasic
                }
            },
            {
                name: 'weibo-certify',
                path: 'weibo-certify',
                components: {
                    'setting-content': WsSettingWeiboCertify
                }
            },
            {
                name: 'blacklist',
                path: 'blacklist',
                components: {
                    'setting-content': WsSettingBlacklist
                }
            },
            {
                name: 'appreciation',
                path: 'appreciation',
                components: {
                    'setting-content': WsSettingAppreciation
                }
            },
            {
                name: 'account-manage',
                path: 'account-manage',
                components: {
                    'setting-content': WsSettingAccountManage
                }
            },
            {
                name: 'personaldata',
                path: 'personaldata',
                components: {
                    'setting-content': WsSettingPersonaldata
                }
            }
        ]
    },
];

export default settingRoutes;
