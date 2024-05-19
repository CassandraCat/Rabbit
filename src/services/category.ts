import { http } from '@/utils/http'
import type { CategoryTopItem } from 'category'

export const getCategoryTopData = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top',
  })
}
