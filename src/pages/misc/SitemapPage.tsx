import React from 'react'
import { Link } from 'react-router-dom'
import routes from 'src/routes/Sidebar'
import Title from '@components/utils/Title'
import { Grid, GridItem } from '@components/Grid'

const Sitemap = () => {
  const renderSubmenu = (submenu: any[]) => {
    return submenu.map((item: any) => (
        <div key={item.path}><Link className='text-textPrimary dark:text-white' to={item.path}>{item.name}</Link></div>
    ))
  }

  const renderRoutes = (routes: any[]) => {
    return routes.map((route: any) => (
      <GridItem key={route.path} cols={3} className='mb-6'>
        <h3><Link className='text-textPrimary dark:text-white' to={route.path}>{route.name}</Link></h3>
        {route.submenu && (
            <>{renderSubmenu(route.submenu)}</>
        )}
      </GridItem>
    ))
  }

  return (
    <>
      <Title title="Sitemap"/>
      <h1>Sitemap</h1>
      <Grid>
        {renderRoutes(routes)}
      </Grid>
    </>
  )
}

export default Sitemap
