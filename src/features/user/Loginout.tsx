import { useEffect } from 'react'
import { useCookies } from 'react-cookie'

function Logout () {
  const [, , removeCookie] = useCookies(['token'])

  useEffect(() => {
    // remove token cookie
    removeCookie('token', { path: '/' })
    // Redirect to login page or any other page
    location.href = '/login'
  }, [removeCookie, history])

  return null
}

export default Logout
