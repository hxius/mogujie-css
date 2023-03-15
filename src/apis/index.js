import request from '@/utils/request'
// 前端请求接口
export const getUsers = () =>
  request({
    url: '/api/users',
    method: 'get'
  })

export const login = params =>
  request({
    url: '/api/login',
    method: 'post',
    params
  })
