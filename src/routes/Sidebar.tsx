/** Icons are imported separatly to reduce build time */
import DocumentIcon from '@heroicons/react/24/outline/DocumentIcon'
import ExclamationTriangleIcon from '@heroicons/react/24/outline/ExclamationTriangleIcon'
import ArrowLeftOnRectangleIcon from '@heroicons/react/24/outline/ArrowLeftOnRectangleIcon'
import UserIcon from '@heroicons/react/24/outline/UserIcon'
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon'
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import KeyIcon from '@heroicons/react/24/outline/KeyIcon'
import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon'
import WrenchScrewdriverIcon from '@heroicons/react/24/outline/WrenchScrewdriverIcon'
import MapIcon from '@heroicons/react/24/outline/MapIcon'
import DocumentTextIcon from '@heroicons/react/24/outline/DocumentTextIcon'
import DocumentMagnifyingGlassIcon from '@heroicons/react/24/outline/DocumentMagnifyingGlassIcon'

const iconClasses = 'w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
const submenuIconClasses = 'h-5 w-5  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'

const routes = [
  {
    path: '', // no url needed as this has submenu
    icon: <DocumentMagnifyingGlassIcon className={iconClasses}/>, // icon component
    name: 'Style Showcase',
    submenu: [
      {
        path: '/app/styling',
        icon: <DocumentTextIcon className={submenuIconClasses}/>,
        name: 'UI Styling'
      },
      {
        path: '/app/styling/component',
        icon: <DocumentTextIcon className={submenuIconClasses}/>,
        name: 'Component'
      },
      {
        path: '/app/styling/reactquery',
        icon: <DocumentTextIcon className={submenuIconClasses}/>,
        name: 'React-Query'
      }
    ]
  },
  {
    path: '', // no url needed as this has submenu
    icon: <DocumentDuplicateIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Pages', // name that appear in Sidebar
    submenu: [
      {
        path: '/app/blank',
        icon: <DocumentIcon className={submenuIconClasses}/>,
        name: 'Blank Page'
      },
      {
        path: '/app/misc/form',
        icon: <DocumentTextIcon className={submenuIconClasses}/>,
        name: 'Form'
      },
      {
        path: '/app/misc/table',
        icon: <DocumentTextIcon className={submenuIconClasses}/>,
        name: 'Table'
      },
      {
        path: '/login',
        icon: <ArrowLeftOnRectangleIcon className={submenuIconClasses}/>,
        name: 'Login'
      },
      {
        path: '/register', // url
        icon: <UserIcon className={submenuIconClasses}/>, // icon component
        name: 'Register' // name that appear in Sidebar
      },
      {
        path: '/forgot-password',
        icon: <KeyIcon className={submenuIconClasses}/>,
        name: 'Forgot Password'
      },
      {
        path: '/app/404',
        icon: <ExclamationTriangleIcon className={submenuIconClasses}/>,
        name: '404'
      },
      {
        path: '/app/maintenance',
        icon: <WrenchScrewdriverIcon className={submenuIconClasses}/>,
        name: 'Maintenance'
      }
    ]
  },
  {
    path: '', // no url needed as this has submenu
    icon: <Cog6ToothIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Settings', // name that appear in Sidebar
    submenu: [
      {
        path: '/app/settings/profile', // url
        icon: <UserIcon className={submenuIconClasses}/>, // icon component
        name: 'Profile' // name that appear in Sidebar
      },
      {
        path: '/app/settings/users', // url
        icon: <UsersIcon className={submenuIconClasses}/>, // icon component
        name: 'Users' // name that appear in Sidebar
      },
      {
        path: '/app/settings/user', // url
        icon: <UserIcon className={submenuIconClasses}/>, // icon component
        name: 'User' // name that appear in Sidebar
      }
    ]
  },
  {
    path: '/app/sitemap', // no url needed as this has submenu
    icon: <MapIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Sitemap' // name that appear in Sidebar
  }
]

export default routes
