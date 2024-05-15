import { http } from '@/utils/http'
import type { BannerItem } from 'home'

export const getHomeBannerData = (distributionSite = 1) => {
  return http<BannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: {
      distributionSite,
    },
  })
}
