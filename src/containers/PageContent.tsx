import { Route, Routes } from 'react-router-dom'
import routes from '@routes'
import { Suspense, lazy } from 'react'
import Navbar from '@containers/Navbar'
import SuspenseContent from '@containers/SuspenseContent'
import Bg from '@assets/bg.jpg'

const Page404 = lazy(async () => await import('../pages/misc/404Page'))

function PageContent () {
  return (
    <>
    <div className='flex flex-col min-h-screen w-full pl-12 bg-bgPrimary ease duration-500 dark:bg-gray-800'>
      <div className='navbar'>
            <Navbar></Navbar>
      </div>
      <div className='content-body'>
        <Suspense fallback={<SuspenseContent />}>
          <Routes>
            {Object.values(routes).map((route, key) => (
              <Route
                key={key}
                path={route.path}
                element={<route.component />}
              />
            ))}
            {/* Redirecting unknown url to 404 page */}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 bg-cover opacity-20 dark:hidden" style={{ backgroundImage: `url(${Bg})` }}></div>
      </div>
      <footer>
        <p className="text-sm text-center">&copy; 2023 <a href="https://www.aetina.com" target="_blank" rel="noreferrer">Aetina</a>. All Rights Reserved. <a href="https://www.aetina.com/privacy-policy.php" target="_blank" rel="noreferrer">Privacy Policy</a></p>
      </footer>

    </div>
    </>
  )
}

export default PageContent
