import request from "@/request"

export const getRanking = (data?: any) => {
  return request.get('/openness/reservation/rankingList', data)
}

export const getInstrumentList = (data?: any) => {
  return request.get('/openness/reservation/openTheInstrument', data)
}
