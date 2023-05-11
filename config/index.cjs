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
      name: '阿鱼',
      id: 'oZ4U665a4pTz7iZmdRPFnQh98dQc',
      useTemplateId:'FWMrfgcvyBXYjyI4l3zq6YtZMsbEM3zFFyGrnul0EPg',
      province: '浙江',
      city: '杭州',
      festivals: [
        {
          type: '*生日', name: '阿鱼生日', year: '1998', date: '09-15',
        },
        {
          type: '*生日', name: '阿鱼的狗腿子', year: '1994', date: '08-26',
        },
      ],
      customizedDateList: [
        { keyword: 'love_day', date: '2021-01-26' },
        { keyword: 'marry_day', date: '2023-01-28' },
      ],
    },
    {
      name: '豪总',
      id: 'oZ4U66-DPNwHl5mEJ_1sUCAQhPB8',
      useTemplateId:'HsVGWSH6z-693uKdX5668vWQpjk_P8vdzlAk3LCyIFA',
      province: '浙江',
      city: '杭州',
    },
    {
      name: '杨胖纸',
      id: 'oZ4U66yloi138FIJGy_na6bWtlgA',
      useTemplateId:'PwBAgUP2PMUiUuQ1lII0FNCIa3n94UqFbGEBovE-G8Q',
      province: '浙江',
      city: '杭州',
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

