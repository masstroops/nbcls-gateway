import Request from './Request'
import { transform } from './interceptorHooks'

// 具体使用时先实例一个请求对象
const request = new Request({
  baseURL: '/prod-api',
  timeout: 5000,
  interceptorHooks: transform,
})

export default request

export const download = (url: string, params: any) => {
  return request.get(url, params, { responseType: 'blob' })
}

// interface ResModel {
//   str: string
//   num: number
// }
// // 发起请求
// request
//   .post<ResModel>(
//     '/abc',
//     {
//       a: 'aa',
//       b: 'bb',
//     },
//     {
//       requestOptions: {
//         globalErrorMessage: true,
//       },
//     }
//   )
//   .then((res) => {
//     console.log('res: ', res)
//     console.log(res.str)
//   })