import request from "@/request"

export const login = (data?: any) => {
  return request.post('/login', data)
}

export const getUser = () => {
  return request.get('/getInfo', '', {
    headers: {
      Authorization: localStorage.NBCLSAUTH
    }
  })
}

export const getWebDeptList = (data?: any) => {
  return request.get('/openness/dept/getWebDeptList', data)
}

export const getContact = (data?: any) => {
  return request.get('/openness/contact-us/getContact', data)
}

