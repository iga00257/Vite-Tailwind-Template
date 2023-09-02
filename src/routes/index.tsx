// All components mapping with path for internal routes

import { lazy } from 'react'

const StylingPage = lazy(async () => await import('../pages/Internal/Styling/StylingGeneralPage'))
const StylingComponentPage = lazy(async () => await import('../pages/Internal/Styling/StylingComponentPage'))
const ReactQueryPage = lazy(async () => await import('../pages/Internal/Styling/ReactQueryPage'))
const _404Page = lazy(async () => await import('../pages/misc/404Page'))
const MaintenancePage = lazy(async () => await import('../pages/misc/MaintenancePage'))
const SitemapPage = lazy(async () => await import('../pages/misc/SitemapPage'))
const BlankPage = lazy(async () => await import('../pages/misc/BlankPage'))
const ProfilePage = lazy(async () => await import('../pages/Internal/Settngs/ProfilePage'))
const UsersPage = lazy(async () => await import('../pages/Internal/Settngs/UsersPage'))
const UserPage = lazy(async () => await import('../pages/Internal/Settngs/UserPage'))
const Loginout = lazy(async () => await import('../features/user/Loginout'))
const FormPage = lazy(async () => await import('../pages/misc/FormPage'))
const TablePage = lazy(async () => await import('../pages/misc/TablePage'))

const routesParentPath = '/app'
const routes = {
  logout: {
    path: '/logout',
    component: Loginout
  },
  notFound: {
    path: '/404',
    component: _404Page
  },
  maintenance: {
    path: '/maintenance',
    component: MaintenancePage
  },
  sitemap: {
    path: '/sitemap',
    component: SitemapPage
  },
  blank: {
    path: '/blank',
    component: BlankPage
  },
  form: {
    path: '/misc/form',
    component: FormPage
  },
  table: {
    path: '/misc/table',
    component: TablePage
  },
  styling: {
    path: '/styling',
    component: StylingPage
  },
  stylingComponent: {
    path: '/styling/component',
    component: StylingComponentPage
  },
  stylingReactQuery: {
    path: '/styling/reactquery',
    component: ReactQueryPage
  },
  profile: {
    path: '/settings/profile',
    component: ProfilePage
  },
  users: {
    path: '/settings/users',
    component: UsersPage
  },
  usersCreate: {
    path: '/settings/users/create',
    component: UserPage
  },
  usersEdit: {
    path: '/settings/users/:user_id',
    component: UserPage
  },
  user: {
    path: '/settings/user',
    component: UserPage
  }
}

export default routes
export { routesParentPath }
