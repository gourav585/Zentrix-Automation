import { Outlet } from 'react-router-dom'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

function SiteLayout() {
  return (
    <div className='min-h-screen overflow-x-hidden bg-zen-bg text-zen-text'>
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  )
}

export default SiteLayout
