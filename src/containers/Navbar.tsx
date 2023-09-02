
import { useState, useContext } from 'react'
import ArrowRightOnRectangleIcon from '@heroicons/react/24/solid/ArrowRightOnRectangleIcon'
import MoonIcon from '@heroicons/react/24/solid/MoonIcon'
import { ThemeContext } from './Layout'
import { Cookies } from 'react-cookie'
import { Link } from 'react-router-dom'
import user from '../assets/user.png'
import routes, { routesParentPath } from '@routes'

function DarkModeControl () {
  const cookies = new Cookies()
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext)

  const handleDarkModeToggle = () => {
    const newDarkModeValue = !isDarkMode
    setIsDarkMode(newDarkModeValue)
    cookies.set('isDarkMode', newDarkModeValue, { path: '/', domain: document.location.hostname, maxAge: 7 * 24 * 60 * 60 })
  }

  return (
    <MoonIcon
      className={`w-6 h-6 cursor-pointer ${
        isDarkMode ? ' text-gray-200' : ' text-bgPrimary'
      }`}
      onClick={() => {
        handleDarkModeToggle()
      }}
    />
  )
}

function Navbar () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <nav className=" ease duration-500 container mx-auto">
        <div className="flex px-6 items-center justify-between h-14">
          <div className="flex-shrink-0 w-auto pt-1">
            <div className='text-2xl text-primaryColor dark:text-primaryColor font-bold font-sans no-select pointer-events-none'>Project Name</div>
          </div>
          <div className="flex items-center">
            <div className="ml-3 relative">
              <DarkModeControl />
            </div>
            <div className="ml-3 relative">
              <div>
                <div className="no-select cursor-pointer" onClick={() => { setIsMenuOpen(!isMenuOpen) }}>
                  <div className='w-10 h-10 border-2 border-gray-200 dark:border-gray-600 bg-gray-200 dark:bg-gray-600 rounded-full bg-cover bg-center' style={{ backgroundImage: `url(${user})` }}></div>
                </div>
              </div>
              <div className={`bg-white dark:bg-gray-800 origin-top-right absolute right-0 mt-2 w-52 rounded-md shadow-md dark:border dark:border-gray-600 ring-1 ring-black ring-opacity-5 ${isMenuOpen ? 'block' : 'hidden'}`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                <div className="py-1" role="none">
                  <div className='block px-4 p-2 text-textPrimary truncate'>
                      <b>John Doe</b><br/>
                      sales@aetina.com
                  </div>
                  <div className='block px-4 pb-3 text-textPrimary'>
                    <Link to={routesParentPath + routes.profile.path} className="block text-center w-full text-textPrimary dark:text-white border border-textPrimary dark:border-white px-2 rounded-full hover:text-textPrimary hover:bg-gray-100 dark:hover:bg-opacity-20 cursor-pointer">My Profile</Link>
                  </div>
                  {/* The following element is designed to reserve space for future settings expansion */}
                  {/* <hr className='m-0'/>
                  <a href="#" className="flex items-center px-4 py-2 text-textPrimary hover:bg-gray-100 hover:text-textPrimary" role="menuitem">
                    My Tasks
                  </a> */}
                  <hr className='m-0'/>
                  <Link to={routesParentPath + routes.logout.path} className="flex items-center px-4 py-2 text-red-500 dark:text-red-500 hover:bg-gray-100 dark:hover:bg-opacity-20 hover:text-red-700">
                    <ArrowRightOnRectangleIcon className="w-4 h-4 inline mr-1"></ArrowRightOnRectangleIcon>
                    Logout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
