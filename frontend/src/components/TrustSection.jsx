import SectionReveal from './SectionReveal'

const stats = [
  { value: '120+', label: 'Automation Flows Deployed' },
  { value: '42%', label: 'Avg. Lead Response Lift' },
  { value: '3.1x', label: 'Pipeline Velocity Increase' },
]

const testimonials = [
  {
    quote: 'Zentrix transformed our lead pipeline into a 24/7 conversion engine.',
    name: 'Growth Director, D2C Brand',
  },
  {
    quote: 'Their AI automation stack feels enterprise-grade and results came fast.',
    name: 'Founder, Service Agency',
  },
]

function TrustSection() {
  return (
    <section className='relative overflow-hidden bg-zen-bg py-12 text-zen-text sm:py-14'>
      <div className='mx-auto w-full max-w-screen-2xl space-y-6 px-4 sm:px-6 md:space-y-8 md:px-10 lg:px-12'>
        <SectionReveal>
          <div className='rounded-2xl border border-zen-neonBlue/25 bg-zen-panel/40 px-4 py-5 shadow-glass sm:px-6'>
            <p className='font-display text-xs uppercase tracking-[0.22em] text-zen-neonPurple'>Trusted by businesses scaling with AI</p>
            <div className='mt-4 grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-3'>
              {stats.map((item) => (
                <div key={item.label} className='rounded-xl border border-zen-neonBlue/25 bg-zen-panelSoft/45 p-4'>
                  <p className='font-display text-xl font-semibold text-zen-neonBlue sm:text-2xl'>{item.value}</p>
                  <p className='text-[11px] uppercase tracking-[0.12em] text-zen-text/75 sm:text-xs'>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        <div className='grid gap-4 lg:grid-cols-2'>
          {testimonials.map((item, index) => (
            <SectionReveal key={item.name} delay={index * 0.08}>
              <article className='rounded-2xl border border-zen-neonPurple/25 bg-zen-panel/35 p-5 shadow-glass'>
                <p className='text-sm leading-relaxed text-zen-text/85 sm:text-base'>"{item.quote}"</p>
                <p className='mt-3 text-xs uppercase tracking-[0.14em] text-zen-neonPurple'>{item.name}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustSection
