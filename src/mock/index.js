import Mock from 'mockjs'
import user from './user'

Mock.setup({
  timeout: '300-600'
})
// 模拟后端数据
Mock.mock('/api/users', 'get', user.getUsers)
Mock.mock('/api/login', 'post', user.login)

// 使用箭头函数会报异常
// Uncaught ReferenceError: Cannot access 'getUsers' before initialization

export default Mock
