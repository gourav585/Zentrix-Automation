import SectionReveal from '../components/SectionReveal'
import founderPhoto from '../assets/gourav rajak-img.jpg'
import coFounderPhoto from '../assets/satyam patle-img.png'

const leadership = [
  {
    name: 'Gourav Rajak',
    role: 'Founder',
    image: founderPhoto,
    bio: 'AI automation architect focused on building resilient support systems that improve response speed and lead conversion across channels.',
    linkedin: 'https://www.linkedin.com/in/gourav-rajak-43478822a/',
    email: 'gouravrajak585@gmail.com',
  },
  {
    name: 'Satyam Patle',
    role: 'Co-Founder',
    image: coFounderPhoto,
    bio: 'Product and growth operator driving scalable automation workflows, CRM intelligence, and long-term business outcomes for modern teams.',
    linkedin: 'https://www.linkedin.com/in/satyam-patle-161aa5251/',
    email: 'satyampatle1008@gmail.com',
  },
]

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      aria-label={label}
      className='inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zen-neonBlue/35 bg-zen-panel/50 text-zen-neonBlue transition hover:border-zen-neonPurple/60 hover:text-zen-neonPurple hover:shadow-neon'
    >
      {children}
    </a>
  )
}

function AboutPage() {
  return (
    <main className='relative overflow-hidden bg-zen-bg bg-futuristic-grid bg-grid py-12 text-zen-text sm:py-14 md:py-16'>
      <div className='pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-zen-neonBlue/15 blur-3xl' />
      <div className='pointer-events-none absolute -right-24 top-44 h-80 w-80 rounded-full bg-zen-neonPurple/15 blur-3xl' />

      <section className='relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-10 lg:px-12'>
        <SectionReveal>
          <p className='font-display text-xs uppercase tracking-[0.25em] text-zen-neonPurple'>About Us</p>
          <h1 className='font-display mt-2 max-w-[18ch] text-3xl font-semibold leading-tight text-zen-text sm:text-4xl md:text-5xl'>
            Building Intelligent Automation Systems for Modern Businesses
          </h1>
          <p className='mt-4 max-w-3xl text-sm leading-relaxed text-zen-text/80 sm:text-base'>
            We develop WhatsApp automation, AI chatbots, and smart response systems for businesses of all sizes.
            Our focus is practical: reduce response delays, capture more qualified leads, and build scalable automation
            infrastructure that supports long-term growth.
          </p>
        </SectionReveal>

        <SectionReveal className='mt-8'>
          <div className='grid gap-4 rounded-2xl border border-zen-neonBlue/20 bg-zen-panel/35 p-5 shadow-glass md:grid-cols-2 xl:grid-cols-3'>
            {[
              { value: '< 60s', label: 'Typical first-response automation' },
              { value: '24/7', label: 'Support and lead qualification coverage' },
              { value: 'Scalable', label: 'Infrastructure built for growth' },
            ].map((item) => (
              <div key={item.label} className='rounded-xl border border-zen-neonBlue/25 bg-zen-panelSoft/45 p-4'>
                <p className='font-display text-xl font-semibold text-zen-neonBlue sm:text-2xl'>{item.value}</p>
                <p className='text-[11px] uppercase tracking-[0.12em] text-zen-text/72 sm:text-xs'>{item.label}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        <div className='mt-10 grid gap-4 sm:gap-5 lg:grid-cols-2'>
          <SectionReveal>
            <article className='rounded-2xl border border-zen-neonBlue/30 bg-zen-panel/40 p-7 shadow-glass'>
              <h2 className='font-display text-xl font-semibold text-zen-neonBlue sm:text-2xl'>Mission</h2>
              <p className='mt-3 text-sm leading-relaxed text-zen-text/82'>
                Deliver dependable AI automation that improves customer response time, increases lead conversion, and
                removes operational bottlenecks for modern teams.
              </p>
              <ul className='mt-4 space-y-2 text-sm text-zen-text/82'>
                <li className='flex items-start gap-2'>
                  <span className='mt-1.5 h-2 w-2 rounded-full bg-zen-neonMint shadow-neon-mint' />
                  <span>Faster replies that protect inbound demand</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='mt-1.5 h-2 w-2 rounded-full bg-zen-neonMint shadow-neon-mint' />
                  <span>Automated capture and qualification of every lead</span>
                </li>
              </ul>
            </article>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <article className='rounded-2xl border border-zen-neonPurple/30 bg-zen-panel/40 p-7 shadow-glass'>
              <h2 className='font-display text-xl font-semibold text-zen-neonPurple sm:text-2xl'>Approach</h2>
              <p className='mt-3 text-sm leading-relaxed text-zen-text/82'>
                We combine product thinking, AI engineering, and robust integration architecture to ship systems that
                are measurable, reliable, and easy to scale over time.
              </p>
              <ul className='mt-4 space-y-2 text-sm text-zen-text/82'>
                <li className='flex items-start gap-2'>
                  <span className='mt-1.5 h-2 w-2 rounded-full bg-zen-neonBlue shadow-neon' />
                  <span>Connected pipelines across WhatsApp, web chat, and CRM</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='mt-1.5 h-2 w-2 rounded-full bg-zen-neonBlue shadow-neon' />
                  <span>Continuous optimization based on response and conversion data</span>
                </li>
              </ul>
            </article>
          </SectionReveal>
        </div>

        <SectionReveal className='mt-12'>
          <div className='space-y-4'>
            <p className='font-display text-xs uppercase tracking-[0.24em] text-zen-neonPurple'>Leadership Team</p>
            <h2 className='font-display text-3xl font-semibold text-zen-neonBlue sm:text-4xl'>
              Engineering-Led Leadership
            </h2>
            <p className='max-w-3xl text-sm leading-relaxed text-zen-text/80 sm:text-base'>
              Our leadership team combines deep AI automation expertise with product thinking and business execution.
              We build systems designed for reliability, measurable growth, and long-term scalability.
            </p>
          </div>
        </SectionReveal>

        <div className='mt-6 grid gap-4 sm:gap-5 lg:grid-cols-2'>
          {leadership.map((member, index) => (
            <SectionReveal key={member.name} delay={index * 0.08}>
              <article className='card-3d rounded-2xl border border-zen-neonBlue/30 bg-zen-panel/45 p-6 shadow-glass transition hover:card-3d-hover hover:shadow-neon'>
                <div className='flex items-start gap-4'>
                  <img
                    src={member.image}
                    alt={`${member.name} profile`}
                    className='h-20 w-20 rounded-full border border-zen-neonBlue/35 object-cover shadow-neon sm:h-24 sm:w-24'
                  />

                  <div className='min-w-0'>
                    <h3 className='font-display text-xl font-semibold text-zen-neonBlue sm:text-2xl'>{member.name}</h3>
                    <p className='mt-1 text-xs uppercase tracking-[0.16em] text-zen-neonPurple'>{member.role}</p>
                    <p className='mt-3 text-sm leading-relaxed text-zen-text/82'>{member.bio}</p>

                    <div className='mt-4 flex items-center gap-2'>
                      <IconLink href={member.linkedin} label={`${member.name} LinkedIn`}>
                        <svg viewBox='0 0 24 24' className='h-4 w-4 fill-current' aria-hidden='true'>
                          <path d='M20.45 20.45h-3.55V14.9c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93v5.64H9.39V9h3.41v1.56h.05c.48-.9 1.64-1.84 3.37-1.84 3.6 0 4.26 2.37 4.26 5.46v6.27zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77A1.77 1.77 0 000 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0z' />
                        </svg>
                      </IconLink>
                      <IconLink href={`mailto:${member.email}`} label={`${member.name} Email`}>
                        <svg viewBox='0 0 24 24' className='h-4 w-4 fill-current' aria-hidden='true'>
                          <path d='M2 5a2 2 0 012-2h16a2 2 0 012 2v.5l-10 6L2 5.5V5zm0 3.2l9.48 5.69a1 1 0 001.04 0L22 8.2V19a2 2 0 01-2 2H4a2 2 0 01-2-2V8.2z' />
                        </svg>
                      </IconLink>
                    </div>
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className='mt-10'>
          <div className='rounded-2xl border border-zen-neonMint/30 bg-zen-panel/40 px-6 py-6 shadow-neon'>
            <p className='font-display text-lg font-semibold text-zen-neonMint sm:text-xl'>Long-term Vision</p>
            <p className='mt-2 max-w-4xl text-sm leading-relaxed text-zen-text/80'>
              Build enterprise-ready AI support infrastructure that helps businesses respond faster, convert more
              opportunities, and scale service quality without scaling complexity.
            </p>
          </div>
        </SectionReveal>
      </section>
    </main>
  )
}

export default AboutPage
