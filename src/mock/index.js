import Mock from 'mockjs'

Mock.setup({
  timeout: '300-600'
})

Mock.Mock('/api/user', 'get', getUser)

const getUser = () => {
  return Mock.Mock({
    data: {
      name: '@cname',
      'phone|11': '@integer(0,9)',
      city: '@city'
    },
    status: '200',
    msg: '请求成功'
  })
}

export default Mock
