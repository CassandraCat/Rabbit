import { http } from '@/utils/http'
import type { CartItem } from 'cart'

export const postMemberCartData = (data: { skuId: string; count: number }) => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}

export const getMemberCartData = () => {
  return http<CartItem[]>({
    method: 'GET',
    url: '/member/cart',
  })
}

export const deleteMemberCartData = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: '/member/cart',
    data,
  })
}

export const putMemberCartBySkuIdData = (
  skuId: string,
  data: { selected?: boolean; count?: number },
) => {
  return http({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data,
  })
}

export const putMemberCartSelectedData = (data: { selected: boolean }) => {
  return http({
    method: 'PUT',
    url: '/member/cart/selected',
    data,
  })
}
