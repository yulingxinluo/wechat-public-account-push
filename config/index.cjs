/* eslint-disable */
const USER_CONFIG = {
  /**
   * 基本配置
   */
  USE_PASSAGE: 'wechat-test',
  APP_ID: 'wx3b68feab4143d7cd',
  APP_SECRET: '957a0db13256173297d466ac04882469',
    MAX_PUSH_ONE_MINUTE: 5,
    SLEEP_TIME: 65000,
  SWITCH: {
        weather: true,
        birthdayMessage: true,
  },

  USERS: [
    {
      name: '宝贝',
      id: 'oZ4U66_o4IzfKsRzARPkX8Lv2sBo',
      useTemplateId:'Rbyd1UBtua2sVUT-uHRMuyjgyj6nFQxj_9_sGvf81M0',
      province: '浙江',
      city: '杭州',
      festivals: [
        {
          type: '*生日', name: '宝贝', year: '1998', date: '09-15',
        },
        {
          type: '生日', name: '宝贝', year: '1998', date: '11-03',
        },
        {
          type: '节日', name: '相识纪念日', year: '2021', date: '01-26',
        },
      ],
      customizedDateList: [
        { keyword: 'love_day', date: '2021-01-26' },
        // 订婚纪念日
        { keyword: 'marry_day', date: '2023-01-28' },
      ],
    },
  ],
  CALLBACK_TEMPLATE_ID:'eDN4m2cjoTrsXZWXVh8zLy39pN5xjcroVvqbYN4zF2Y',

  CALLBACK_USERS: [
    {
      name: '自己',
      id: 'oZ4U66_o4IzfKsRzARPkX8Lv2sBo',
    }
  ],

}

module.exports = USER_CONFIG

