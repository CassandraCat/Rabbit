import { http } from '@/utils/http'
import type { ProfileDetail, ProfileParams } from 'member'

export const getMemberProfileData = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}

export const putMemberProfileData = (data: ProfileParams) => {
  return http<ProfileDetail>({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}
