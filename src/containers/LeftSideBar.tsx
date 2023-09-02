import { useLocation, NavLink } from 'react-router-dom'
import routes from '../routes/Sidebar'
import SidebarSubmenu from './SidebarSubmenu'
import { useState } from 'react'
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon'
import Aetina_logo from '../assets/aetina-logo.svg'

function LeftSideBar () {
  const location = useLocation()

  // const isOpen = true;
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu () {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`menu fixed flex flex-col flex-none border-r border-gray-300 dark:border-gray-600 h-full pt-2 bg-white dark:bg-gray-800 max-w-80 ${isOpen ? 'w-80' : 'w-12'}`} aria-label="Sidebar">
      <div className={`h-12 flex justify-center items-center ${isOpen ? 'p-2 pt-1' : 'p-3'}`}>
          <img className="logo" src={isOpen ? Aetina_logo : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAK6wAACusBgosNWgAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDEvMzEvMTa3zmUVAAAD+ElEQVRYhcWYXWhcRRTHf3ubOBVRq8YmbQiCDy1KY3SoCFK01I+qpbZUBqkgFCwlzwpSIa1BEFQQfRBUSgtCHpShVNSCNWDEF0Vw0FKprR+tSLAB06DSj2maxodzN97czZ25u9ld/7AP986Zmd+emTtzzqnMzs7SqKxTK4ANwDqgH+gGrgB/AEeBL4Exo/1ko3NU6gW0TnUBj6U/DawArgaW5ExngHPAOPAt8DHwqdH+75YAWqf6gGeBHcCyeibJaALYB7xZ1qulAK1Tu4EXgOsaBMtrAhg22r8TMwwCWqd6gRFgfZPA8voQ2GG0/6vIoBDQOnUXsm96W8M2p+PAJqP9qYUaFwRM4b6geUsa0ziwzmh/Ot9QA2idWgk45Mhop04Ca432/2RfdmQfrFMV4CDl4SaBI8DnyFKdBSpAF7AGeAB4iHIrsQrZ71uyL+d50Dq1B3ipxGBTwMvAAaP9VMjQOtUDDALPI+dlTDuN9vtrANNz7idARQYYBZ4x2v9eYrIs6G3Ae8DdEdOzwK3VLzvJNAyXgBsx2j9cLxyA0f44ciUeiZjeiFwIQOpB61Q38FsE8DOj/cZ6wfKyTnUCXyPXZJEmgVuM9ueqHnwiAjcJPLVYOACj/TTwJHAxYHYTsBH+W+LNkXGHFhOR5GW0/xl4PWK2BSCxTq1CQqUinQEONIktqzeQaKdIa61T1yaI97oChoeM9peaigakKzIaMOkF7k+Qw/SqgGFokMUqNPY1wH0JMICc/kX6salI8/VDoG0J0J8APQGji8it0SqFPrwK0JMQ9t5s+muVZmIGCfKVFmkpcEPTcGoVcg4ggEcp9lIFiTL+NyVIqDQdsNnQJpYFlSBhfWizbrNO5VPKtilJo4xjAZs+4Ok28dSoehd/ErF7xTrVrvxknqqABwnvw24k2Gy7EgCj/TjwQcR2q3Xq7dYjzVc2on6R+ME5aJ06lNZn6pJ1ao11anu9/eYAjfa/Aq+V6LMV+N46tcs6FU2CrFPXW6eeA76hgSOrI/e8F3gUuDPSbyXwLjBknToMjAEnkHu7guQVtwMPIlWw5Wm/whJHKUCj/WXr1DakXFbmiutDUsrB9Hk6Bcz/8aqiV1teSf5FWiPZBJyvdzCgk2K4RtRZAwhgtP8KWZ6m5SENamJBQJiDvAfZ3O3WFLALeLwQEMBo/wtwL1Lm8E2YuMwefB8YMNrvy+bFhTLazxjth4A7gP3AhUUA5sO67PMJYLPRfnu2clF6QxvtTwI7rVPDSM76CAJ9MxLY5r1zBUkZJoDvgMPARzmbDuBP4C3gVaN9TTJfd5U/K+vUaqS8tj6FXY545UwKNQaMFlVPrVMDQL/RfqRojn8BppkwqYxxeP8AAAAASUVORK5CYII='}/>
      </div>
      <div className="h-full w-full pb-4 overflow-x-hidden overflow-y-auto bg-white dark:bg-gray-800 ease duration-500">
        <ul className="m-0 flex flex-col flex-wrap w-full list-none">
          <li className="relative w-full flex-shrink-0 flex-col flex-wrap items-stretch p-0">
            <a className="flex items-center py-3 px-3 cursor-pointer text-base font-normal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 semibold" onClick={toggleMenu}>
              <Bars3Icon className={'w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white inline'} />
              </a>
          </li>

          {routes.map((route, k) => {
            return (
              <li key={k} className={`relative flex-shrink-0 flex-col flex-wrap items-stretch p-0 ${(location.pathname === route.path) ? 'active' : ''}`}>
                {
                  (route.submenu != null)
                    ? <SidebarSubmenu {...route} />
                    : (route.path && (
                      <NavLink end to={route.path} className={({ isActive }) => `flex items-start py-3 px-3 m-w-9 text-base font-normal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 
                        semibold`}
                      >
                        {route.icon}
                        <span className={`ml-3 w-36 title ${isOpen ? '' : 'hidden'}`} title={route.name}>{route.name}</span>
                      </NavLink>
                      ))
                }
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
export default LeftSideBar
