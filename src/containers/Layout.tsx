import React, { createContext, useState, useEffect } from 'react'
import LeftSideBar from './LeftSideBar'
import PageContent from './PageContent'
import Login from '@features/user/Login'
import { Cookies } from 'react-cookie'

interface ThemeContextType {
  isDarkMode: boolean
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

// 創建一個新的 React Context
export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  setIsDarkMode: () => {}
})

function Layout () {
  const cookies = new Cookies()
  const token: string | null = cookies.get('token')
  const [isDarkMode, setIsDarkMode] = useState(cookies.get('isDarkMode') === 'true')

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDarkMode])

  if (token == null) {
    window.location.href = '/login'
    return <Login/>
  }
  return (
    <>
      <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
          <div className={`flex flex-col lg:flex-row ${isDarkMode ? 'dark' : ''}`}>
              <LeftSideBar />
              <PageContent />
          </div>
      </ThemeContext.Provider>
    </>
  )
}

export default Layout
