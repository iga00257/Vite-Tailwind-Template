import { useQuery } from 'react-query'
import { ENDPOINTS } from '@constants/endpoints'
import { type IUser } from '@interface/IUser'

export function useUser (userId: string) {
  const fetchUser = async () => {
    const response = await fetch(ENDPOINTS.GET_USER)
    const data = await response.json()
    return data
  }

  const { data, isLoading, isError, error, refetch } = useQuery<IUser>(['user', userId], fetchUser)

  return { data, isLoading, isError, error, refetch }
}
