import Mock from 'mockjs'

export default {
  login: config => {
    const { account, password } = JSON.parse(config.body)
    if (account === 'test' && password === '123456') {
      return Mock.mock({
        status: 200,
        msg: '登录成功',
        data: {
          token: '4378488sdsd29399281xjdjfkdf',
          avatar:
            'https://s5.mogucdn.com/mlcdn/c45406/200902_7ekllijh17kb8hccca8aa8774hfjl_400x400.jpg_160x160.v1cAC.70.webp',
          account: '小小小'
        }
      })
    } else {
      return Mock.mock({
        status: 400,
        msg: '账号或密码错误',
        data: {}
      })
    }
  },
  getUsers: () => {
    return Mock.mock({
      status: 200,
      msg: '请求成功',
      'data|3': [
        {
          name: '@cname',
          'phone|11': '@integer(0,9)',
          city: '@city'
        }
      ]
    })
  },
  getMe: config => {
    let token = JSON.parse(config.body)['token'] == '4378488sdsd29399281xjdjfkdf'
    if (token) {
      return Mock.mock({
        status: 200,
        msg: '请求成功',
        data: {
          token: '4378488sdsd29399281xjdjfkdf',
          avatar:
            'https://s5.mogucdn.com/mlcdn/c45406/200902_7ekllijh17kb8hccca8aa8774hfjl_400x400.jpg_160x160.v1cAC.70.webp',
          account: '小小小'
        }
      })
    } else {
      return Mock.mock({
        status: 403,
        msg: '未登录',
        data: {}
      })
    }
  }
}
