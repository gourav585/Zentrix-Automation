import SectionReveal from '../components/SectionReveal'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'WhatsApp AI Automation',
    description:
      'Deploy always-on WhatsApp workflows that respond instantly, qualify inbound conversations, and move prospects to action.',
    outcomes: [
      'Reply in seconds, 24/7',
      'Automated lead capture from chats',
      'Higher conversion from inbound messages',
    ],
  },
  {
    title: 'AI Chatbot Systems',
    description:
      'Launch brand-trained AI assistants across your website and channels to answer questions, handle objections, and book next steps.',
    outcomes: [
      'Consistent support without extra headcount',
      'Faster customer resolution and trust',
      'Automatic handoff to team when needed',
    ],
  },
  {
    title: 'Multilingual Support Intelligence',
    description:
      'Enable automatic language detection and localized smart responses across English, Hindi, Marathi, Tamil, Gujarati, Bengali, and more.',
    outcomes: [
      'Higher trust with region-specific communication',
      'Improved engagement from localized responses',
      'Effortless expansion into regional markets',
    ],
  },
]

function ServicesPage() {
  return (
    <main className='relative overflow-hidden bg-zen-bg bg-futuristic-grid bg-grid py-12 text-zen-text sm:py-14 md:py-16'>
      <div className='pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-zen-neonBlue/15 blur-3xl' />
      <div className='pointer-events-none absolute -right-24 top-48 h-80 w-80 rounded-full bg-zen-neonPurple/15 blur-3xl' />

      <section className='relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-10 lg:px-12'>
        <SectionReveal>
          <p className='font-display text-xs uppercase tracking-[0.25em] text-zen-neonPurple'>Services</p>
          <h1 className='font-display mt-2 max-w-[18ch] text-3xl font-semibold leading-tight text-zen-text sm:text-4xl md:text-5xl'>
            AI Support Systems That Reply, Capture & Convert Automatically
          </h1>
          <p className='mt-4 max-w-3xl text-sm leading-relaxed text-zen-text/80 sm:text-base'>
            We build WhatsApp automation, AI chatbots, and multilingual smart response engines for service businesses,
            ecommerce, agencies, clinics, and growing teams that need faster replies, regional engagement, and higher
            conversion without manual follow-up.
          </p>
        </SectionReveal>

        <div className='mt-8 grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3'>
          {services.map((service, index) => (
            <SectionReveal key={service.title} delay={index * 0.12}>
              <article className='card-3d rounded-2xl border border-zen-neonBlue/30 bg-zen-panel/45 p-6 shadow-glass transition hover:card-3d-hover hover:shadow-neon'>
                <h2 className='font-display text-lg font-semibold text-zen-neonBlue sm:text-xl'>{service.title}</h2>
                <p className='mt-3 text-sm leading-relaxed text-zen-text/80 sm:text-base'>{service.description}</p>
                <ul className='mt-4 space-y-2'>
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className='flex items-start gap-2 text-sm text-zen-text/85'>
                      <span className='mt-1 h-2 w-2 rounded-full bg-zen-neonMint shadow-neon-mint' />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className='mt-12 md:mt-16'>
          <div className='rounded-2xl border border-zen-neonPurple/30 bg-zen-panel/40 p-6 shadow-glass md:p-8'>
            <p className='font-display text-xs uppercase tracking-[0.22em] text-zen-neonPurple'>
              How Our AI Growth Engine Works
            </p>
            <div className='mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
              {[
                {
                  step: 'Connect',
                  detail: 'We connect your channels, CRM, and inquiry sources into one automated support layer.',
                },
                {
                  step: 'Train',
                  detail:
                    'We train AI on your offers, FAQs, objections, and regional language context for accurate responses.',
                },
                {
                  step: 'Automate',
                  detail: 'We deploy smart replies, lead capture flows, and follow-up logic that scales conversion.',
                },
              ].map((item, idx) => (
                <div key={item.step} className='rounded-xl border border-zen-neonBlue/25 bg-zen-panelSoft/45 p-4'>
                  <p className='font-display text-xs uppercase tracking-[0.2em] text-zen-neonMint'>
                    {String(idx + 1).padStart(2, '0')}
                  </p>
                  <h3 className='mt-2 font-display text-xl font-semibold text-zen-neonBlue sm:text-2xl'>{item.step}</h3>
                  <p className='mt-2 text-sm leading-relaxed text-zen-text/80 sm:text-base'>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className='mt-10'>
          <div className='flex flex-col items-center justify-between gap-4 rounded-2xl border border-zen-neonMint/30 bg-zen-panel/45 px-5 py-6 text-center shadow-neon sm:px-6 md:flex-row md:text-left'>
            <div>
              <p className='font-display text-xl font-semibold text-zen-neonMint sm:text-2xl'>Ready to automate your support and sales pipeline?</p>
              <p className='mt-1 text-sm text-zen-text/75'>Get a live walkthrough of your AI automation roadmap.</p>
            </div>
            <div className='flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap'>
              <a
                href='/contact'
                className='rounded-xl border border-zen-neonMint/65 bg-gradient-to-r from-zen-neonBlue/35 via-zen-neonPurple/35 to-zen-neonMint/35 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-zen-neonMint shadow-neon-mint transition hover:animate-glow-pulse'
              >
                Book Free AI Demo
              </a>
              <Link
                to='/about'
                className='rounded-xl border border-zen-neonBlue/55 bg-transparent px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-zen-neonBlue transition hover:border-zen-neonPurple/55 hover:text-zen-neonPurple'
              >
                Talk to an Automation Expert
              </Link>
            </div>
          </div>
        </SectionReveal>
      </section>
    </main>
  )
}

export default ServicesPage
