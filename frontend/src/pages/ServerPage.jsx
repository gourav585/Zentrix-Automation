import SectionReveal from '../components/SectionReveal'

const industries = [
  {
    name: 'Coaching Institutes',
    outcomes: ['Instant course replies', 'Demo booking automation', 'Admission follow-ups on autopilot'],
  },
  {
    name: 'Clinics & Hospitals',
    outcomes: ['Appointment scheduling support', 'Patient reminder automation', 'FAQ handling 24/7'],
  },
  {
    name: 'Real Estate',
    outcomes: ['Property auto-replies', 'Site visit scheduling', 'Lead qualification before agent handoff'],
  },
  {
    name: 'E-commerce',
    outcomes: ['Order status automation', 'Product inquiry responses', 'Upsell messaging flows'],
  },
  {
    name: 'Gyms & Fitness Studios',
    outcomes: ['Membership inquiry automation', 'Trial booking workflows', 'Consistent follow-up sequences'],
  },
]

function ServerPage() {
  return (
    <main className='relative overflow-hidden bg-zen-bg py-12 text-zen-text sm:py-14 md:py-16'>
      <div className='pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-zen-neonBlue/12 blur-3xl' />
      <div className='pointer-events-none absolute -right-24 top-44 h-80 w-80 rounded-full bg-zen-neonPurple/14 blur-3xl' />

      <section className='relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-10 lg:px-12'>
        <SectionReveal>
          <p className='font-display text-xs uppercase tracking-[0.25em] text-zen-neonPurple'>Our Server</p>
          <h1 className='font-display mt-2 max-w-[18ch] text-3xl font-semibold leading-tight text-zen-text sm:text-4xl md:text-5xl'>
            AI Automation Infrastructure
          </h1>
          <p className='mt-4 max-w-3xl text-sm leading-relaxed text-zen-text/80 sm:text-base'>
            Our infrastructure powers real-time WhatsApp replies, chatbot intelligence, secure data processing, and
            scalable automation workflows. It is built to deliver faster response time, automated lead capture, and
            always-on customer support for growing businesses.
          </p>
        </SectionReveal>

        <SectionReveal className='mt-8'>
          <div className='grid gap-4 rounded-2xl border border-zen-neonBlue/20 bg-zen-panel/35 p-5 shadow-glass md:grid-cols-2 xl:grid-cols-3'>
            {[
              { value: '< 60s', label: 'Automated first response' },
              { value: '24/7', label: 'AI support availability' },
              { value: 'Scalable', label: 'Workflow infrastructure' },
            ].map((item) => (
              <div key={item.label} className='rounded-xl border border-zen-neonBlue/25 bg-zen-panelSoft/45 p-4'>
                <p className='font-display text-xl font-semibold text-zen-neonBlue sm:text-2xl'>{item.value}</p>
                <p className='text-xs uppercase tracking-[0.12em] text-zen-text/72'>{item.label}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className='mt-12'>
          <div>
            <p className='font-display text-xs uppercase tracking-[0.24em] text-zen-neonPurple'>Industries We Power With AI</p>
            <h2 className='font-display mt-2 text-3xl font-semibold text-zen-neonBlue md:text-4xl'>
              Built For Real Business Operations
            </h2>
          </div>
        </SectionReveal>

        <div className='mt-6 grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3'>
          {industries.map((industry, index) => (
            <SectionReveal key={industry.name} delay={index * 0.07}>
              <article className='card-3d rounded-2xl border border-zen-neonBlue/30 bg-zen-panel/45 p-6 shadow-glass transition hover:card-3d-hover hover:shadow-neon'>
                <h3 className='font-display text-lg font-semibold text-zen-neonBlue sm:text-xl'>{industry.name}</h3>
                <ul className='mt-4 space-y-2'>
                  {industry.outcomes.map((outcome) => (
                    <li key={outcome} className='flex items-start gap-2 text-sm text-zen-text/82'>
                      <span className='mt-1.5 h-2 w-2 rounded-full bg-zen-neonMint shadow-neon-mint' />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </SectionReveal>
          ))}
        </div>

      </section>
    </main>
  )
}

export default ServerPage
