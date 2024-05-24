import { http } from '@/utils/http'
import type { GoodsResult } from 'goods'

export const getGoodsByIdAPI = (id: string) => {
  return http<GoodsResult>({
    method: 'GET',
    url: '/goods',
    data: { id },
  })
}
