import SectionReveal from './SectionReveal'

const highlights = [
  {
    title: 'Automatic Language Detection',
    description:
      "The AI automatically identifies each customer's language and adapts instantly without requiring manual selection.",
    accent: 'border-zen-neonBlue/35',
  },
  {
    title: 'Localized Smart Responses',
    description:
      'Responses are generated from your services, pricing, and FAQs to stay accurate, relevant, and business-aware.',
    accent: 'border-zen-neonPurple/35',
  },
  {
    title: '24/7 Multilingual Customer Support',
    description:
      'Deliver always-on support across WhatsApp and website chat to increase trust, engagement, and conversion.',
    accent: 'border-zen-neonMint/35',
  },
]

function MultilingualSupportSection() {
  return (
    <section className='relative overflow-hidden bg-zen-bg py-16 text-zen-text sm:py-20'>
      <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,245,255,0.12),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(123,97,255,0.14),transparent_30%)]' />

      <div className='relative mx-auto w-full max-w-screen-2xl space-y-10 px-4 sm:px-6 md:px-10 lg:px-12'>
        <SectionReveal>
          <div className='space-y-4 text-center'>
            <p className='font-display text-xs uppercase tracking-[0.25em] text-zen-neonPurple'>
              Competitive Advantage
            </p>
            <h2 className='font-display text-2xl font-semibold text-zen-text sm:text-3xl md:text-4xl xl:text-5xl'>
              Multilingual AI Support Engine
            </h2>
            <p className='mx-auto max-w-4xl text-sm leading-relaxed text-zen-text/78 sm:text-base'>
              Our system detects customer language automatically and responds in the same language including English,
              Hindi, Marathi, Tamil, Gujarati, Bengali, and more. It is trained using your business context such as
              services, pricing, and FAQs to generate intelligent, context-aware responses across WhatsApp and website
              chat.
            </p>
            <p className='mx-auto max-w-3xl text-sm leading-relaxed text-zen-text/72 sm:text-base'>
              Result: higher trust, stronger engagement, better conversion, and effortless expansion into regional
              markets.
            </p>
          </div>
        </SectionReveal>

        <div className='grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3'>
          {highlights.map((item, index) => (
            <SectionReveal key={item.title} delay={index * 0.1}>
              <article
                className={`card-3d rounded-2xl border ${item.accent} bg-zen-panel/45 p-6 shadow-glass transition hover:card-3d-hover hover:shadow-neon`}
              >
                <h3 className='font-display text-xl font-semibold text-zen-neonBlue sm:text-2xl'>{item.title}</h3>
                <p className='mt-3 text-sm leading-relaxed text-zen-text/82 sm:text-base'>{item.description}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MultilingualSupportSection
