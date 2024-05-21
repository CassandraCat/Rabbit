import { http } from '@/utils/http'
import type { AddressParams } from 'address'
import type { AddressItem } from 'goods'

export const postMemberAddressData = (data: AddressParams) => {
  return http({
    method: 'POST',
    url: '/member/address',
    data,
  })
}

export const putMemberAddressByIdData = (id: string, data: AddressParams) => {
  return http({
    method: 'PUT',
    url: `/member/address/${id}`,
    data,
  })
}

export const getMemberAddressData = () => {
  return http<AddressItem[]>({
    method: 'GET',
    url: '/member/address',
  })
}

export const getMemberAddressByIdData = (id: string) => {
  return http<AddressItem>({
    method: 'GET',
    url: `/member/address/${id}`,
  })
}

export const deleteMemberAddressByIdData = (id: string) => {
  return http({
    method: 'DELETE',
    url: `/member/address/${id}`,
  })
}
