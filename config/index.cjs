/* eslint-disable */
const USER_CONFIG = {
USE_PASSAGE: 'wechat-test',
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx3b68feab4143d7cd',
  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '957a0db13256173297d466ac04882469',

  PROVINCE: '浙江',
  CITY: '杭州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oZ4U66_o4IzfKsRzARPkX8Lv2sBo',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId:'6OEiZNy4SzDiPyLGDkcgbsr3re298PNT6IP3lU8fGSg',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1998', date: '09-15',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝贝', year: '1998', date: '11-03',
        },
        {
          type: '节日', name: '相识纪念日', year: '2021', date: '01-26',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-01-26' },
        // 订婚纪念日
        { keyword: 'marry_day', date: '2023-01-28' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID:'eDN4m2cjoTrsXZWXVh8zLy39pN5xjcroVvqbYN4zF2Y',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oZ4U66_o4IzfKsRzARPkX8Lv2sBo',
    }
  ],

}

module.exports = USER_CONFIG

