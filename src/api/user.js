import request from './request'

export const sendcode = params => {
  return request({
    url: '/A01SendCode', 
    method: 'POST',
    params
  })
}


export const checkloginname = params => {
  return request({
    url: '/A02CheckLoginName', 
    method: 'POST',
    params
  })
}
