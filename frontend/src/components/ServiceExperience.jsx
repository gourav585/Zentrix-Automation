import { Link } from 'react-router-dom'
import SectionReveal from './SectionReveal'

const services = [
  {
    title: 'WhatsApp Automation',
    description:
      'Auto-reply funnels, multilingual follow-ups, and smart routing so every inbound message moves to action.',
    accent: 'border-zen-neonMint/45',
  },
  {
    title: 'AI Chatbots',
    description:
      'Conversation systems trained on your offers, services, and tone for instant customer support across regions.',
    accent: 'border-zen-neonPurple/45',
  },
  {
    title: 'Multilingual AI Support',
    description:
      'Language-aware AI that detects customer language and replies with localized context on WhatsApp and website chat.',
    accent: 'border-zen-neonBlue/45',
  },
]

const process = [
  { step: '01', title: 'Brand Intelligence', text: 'We map your customer journey and build the right automation architecture.' },
  {
    step: '02',
    title: 'System Build',
    text: 'Your website, multilingual chat flows, and data automations are built as one connected stack.',
  },
  { step: '03', title: 'Launch + Scale', text: 'We monitor outcomes, optimize conversion points, and keep improving performance.' },
]

function ServiceExperience() {
  return (
    <section className='relative overflow-hidden bg-zen-bg py-16 text-zen-text sm:py-20 lg:py-24'>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(123,97,255,0.15),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(0,245,255,0.12),transparent_35%)]' />
      <div className='relative mx-auto w-full max-w-screen-2xl space-y-12 px-4 sm:px-6 md:space-y-14 md:px-10 lg:px-12 xl:space-y-16'>
        <SectionReveal>
          <div className='space-y-4 text-center'>
            <p className='font-display text-xs uppercase tracking-[0.28em] text-zen-neonPurple'>Core Services</p>
            <h2 className='font-display text-2xl font-semibold text-zen-text sm:text-3xl md:text-4xl xl:text-5xl'>
              Scroll Into Your AI Growth Stack
            </h2>
            <p className='mx-auto max-w-2xl text-sm leading-relaxed text-zen-text/75 sm:text-base'>
              Every section is engineered to communicate trust, multilingual support capability, and conversion intent.
            </p>
          </div>
        </SectionReveal>

        <div className='grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3'>
          {services.map((service, index) => (
            <SectionReveal key={service.title} delay={index * 0.1}>
              <article
                className={`card-3d rounded-2xl border ${service.accent} bg-zen-panel/45 p-6 shadow-glass transition hover:card-3d-hover hover:shadow-neon`}
              >
                <h3 className='font-display text-xl font-semibold text-zen-neonBlue sm:text-2xl'>{service.title}</h3>
                <p className='mt-3 text-sm leading-relaxed text-zen-text/80 sm:text-base'>{service.description}</p>
              </article>
            </SectionReveal>
          ))}
        </div>

        <div className='grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3'>
          {process.map((item, index) => (
            <SectionReveal key={item.step} delay={index * 0.1}>
              <article className='rounded-2xl border border-zen-neonBlue/25 bg-zen-panelSoft/45 p-6 shadow-glass'>
                <p className='font-display text-sm tracking-[0.2em] text-zen-neonPurple'>{item.step}</p>
                <h3 className='mt-3 font-display text-lg font-semibold text-zen-neonBlue sm:text-xl'>{item.title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-zen-text/80 sm:text-base'>{item.text}</p>
              </article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal>
          <div className='flex flex-col items-center justify-between gap-4 rounded-2xl border border-zen-neonMint/30 bg-zen-panel/40 px-5 py-6 text-center shadow-neon sm:px-6 md:flex-row md:text-left'>
            <div>
              <p className='font-display text-xl font-semibold text-zen-neonMint sm:text-2xl'>Ready to look and perform like an AI company?</p>
              <p className='text-sm leading-relaxed text-zen-text/75 sm:text-base'>
                Move from static portfolio style to a high-trust automation brand experience.
              </p>
            </div>
            <Link
              to='/about'
              className='w-full rounded-xl border border-zen-neonBlue/55 bg-zen-neonBlue/15 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-zen-neonBlue transition hover:border-zen-neonMint/55 hover:text-zen-neonMint sm:w-auto'
            >
              Meet Zentrix
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

export default ServiceExperience
