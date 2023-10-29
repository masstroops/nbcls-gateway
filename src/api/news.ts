import request from "@/request"

export const getNewsList = (data?: any) => {
  return request.get('/openness/announcement/getList', data)
}

export const getQuestionListAll = (data?: any) => {
  return request.get('/openness/getQuestionListAll', data)
}
