/*
 * @Author: xiaojun.xiong 
 * @Date: 2019-05-03 17:19:49 
 * @Last Modified by:   xiaojun.xiong 
 * @Last Modified time: 2019-05-03 17:19:49 
 */
import { stringify } from 'qs'
import request from '@/utils/request'

/**
 * @description 用户登录
 * @param {*} params
 */
export async function userLogin (params) {
  console.log(params, 'params')
  return request('/login', {
    method: 'POST',
    data: params
  })
}

export async function queryRule (params) {
  return request(`/api/rule?${stringify(params)}`)
}
