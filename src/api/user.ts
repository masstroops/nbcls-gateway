import request from "@/request"

export const login = (data: any) => {
  return request.post('/login', data)
}

export const getUser = () => {
  return request.get('/getInfo', '', {
    headers: {
      Authorization: localStorage.NBCLSAUTH
    }
  })
}
