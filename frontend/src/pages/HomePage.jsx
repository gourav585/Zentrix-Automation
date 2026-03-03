import { Suspense, lazy } from 'react'
import MultilingualSupportSection from '../components/MultilingualSupportSection'
import ServiceExperience from '../components/ServiceExperience'
import TrustSection from '../components/TrustSection'

const HeroSphere = lazy(() => import('../components/HeroSphere'))

function HomePage() {
  return (
    <>
      <Suspense
        fallback={
          <section className='mx-auto min-h-[72vh] w-full max-w-screen-2xl px-4 py-12 text-sm text-zen-text/70 sm:px-6 md:px-10 lg:px-12'>
            Loading interactive hero...
          </section>
        }
      >
        <HeroSphere />
      </Suspense>
      <TrustSection />
      <MultilingualSupportSection />
      <ServiceExperience />
    </>
  )
}

export default HomePage
