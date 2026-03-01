import { Link } from 'react-router-dom'
import zentrixLogo from '../assets/zentrix-logo-cropped.png'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Our Server', to: '/server' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const serviceLinks = [
  'WhatsApp Automation',
  'AI Chatbots',
  'Lead Intelligence',
  'CRM Automation',
]

function SocialIcon({ href, label, path }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      aria-label={label}
      className='group inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zen-neonBlue/30 bg-zen-panel/45 text-zen-neonBlue transition hover:border-zen-neonPurple/55 hover:text-zen-neonPurple hover:shadow-neon'
    >
      <svg viewBox='0 0 24 24' className='h-4 w-4 fill-current' aria-hidden='true'>
        <path d={path} />
      </svg>
    </a>
  )
}

function FooterHeading({ children }) {
  return <h3 className='font-display text-sm uppercase tracking-[0.18em] text-zen-neonPurple'>{children}</h3>
}

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className='inline-flex text-sm text-zen-text/78 transition hover:text-zen-neonBlue hover:drop-shadow-[0_0_8px_rgba(0,245,255,0.65)]'
    >
      {children}
    </Link>
  )
}

function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className='relative overflow-hidden border-t border-zen-neonBlue/20 bg-zen-bg text-zen-text'>
      <div className='pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-zen-neonBlue/10 blur-3xl' />
      <div className='pointer-events-none absolute -right-20 top-16 h-56 w-56 rounded-full bg-zen-neonPurple/10 blur-3xl' />

      <div className='relative mx-auto w-full max-w-screen-2xl px-4 py-12 sm:px-6 md:px-10 lg:px-12'>
        <div className='grid gap-8 border-b border-zen-neonBlue/20 pb-10 sm:grid-cols-2 xl:grid-cols-4'>
          <div className='space-y-4'>
            <img
              src={zentrixLogo}
              alt='Zentrix logo'
              className='h-10 w-auto object-contain [filter:drop-shadow(0_0_10px_rgba(0,245,255,0.55))]'
            />
            <p className='max-w-sm text-sm leading-relaxed text-zen-text/78'>
              Zentrix builds AI-powered automation systems that improve response speed, capture more leads, and scale
              support operations for modern businesses.
            </p>
            <p className='font-display text-xs uppercase tracking-[0.16em] text-zen-neonMint'>
              Future-Ready AI Automation Systems
            </p>
            <div className='flex items-center gap-2 pt-1'>
              <SocialIcon
                href='https://www.linkedin.com'
                label='LinkedIn'
                path='M20.45 20.45h-3.55V14.9c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93v5.64H9.39V9h3.41v1.56h.05c.48-.9 1.64-1.84 3.37-1.84 3.6 0 4.26 2.37 4.26 5.46v6.27zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77A1.77 1.77 0 000 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0z'
              />
              <SocialIcon
                href='https://www.instagram.com'
                label='Instagram'
                path='M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.49 1.38.9.41.42.68.82.9 1.38.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.49.96-.9 1.38-.42.41-.82.68-1.38.9-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41a3.8 3.8 0 01-1.38-.9 3.8 3.8 0 01-.9-1.38c-.16-.42-.36-1.05-.41-2.22C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.49-.96.9-1.38.42-.41.82-.68 1.38-.9.42-.16 1.05-.36 2.22-.41 1.27-.06 1.65-.07 4.85-.07zm0 1.95a7.89 7.89 0 100 15.78 7.89 7.89 0 000-15.78zm0 2.93A4.96 4.96 0 1112 17a4.96 4.96 0 010-9.92zm6.32-.15a1.16 1.16 0 100 2.32 1.16 1.16 0 000-2.32z'
              />
              <SocialIcon
                href='https://twitter.com'
                label='Twitter'
                path='M23.95 4.57a10.01 10.01 0 01-2.83.77 4.93 4.93 0 002.16-2.72 9.85 9.85 0 01-3.13 1.2 4.92 4.92 0 00-8.39 4.49A13.98 13.98 0 011.64 3.16a4.92 4.92 0 001.52 6.57 4.86 4.86 0 01-2.23-.62v.06a4.92 4.92 0 003.95 4.82 4.9 4.9 0 01-2.22.08 4.93 4.93 0 004.6 3.42A9.86 9.86 0 010 19.54 13.94 13.94 0 007.55 21.8c9.06 0 14.01-7.5 14.01-14v-.64a9.94 9.94 0 002.39-2.59z'
              />
            </div>
          </div>

          <div className='space-y-4'>
            <FooterHeading>Quick Links</FooterHeading>
            <div className='flex flex-col gap-2'>
              {quickLinks.map((link) => (
                <FooterLink key={link.to} to={link.to}>
                  {link.label}
                </FooterLink>
              ))}
            </div>
          </div>

          <div className='space-y-4'>
            <FooterHeading>Services</FooterHeading>
            <ul className='space-y-2'>
              {serviceLinks.map((service) => (
                <li key={service} className='text-sm text-zen-text/78'>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className='space-y-4'>
            <FooterHeading>Contact Information</FooterHeading>
            <div className='space-y-3 text-sm text-zen-text/78'>
              <p>
                Email:{' '}
                <a
                  href='mailto:gouravrajak585@gmail.com'
                  className='text-zen-neonBlue transition hover:text-zen-neonMint hover:drop-shadow-[0_0_8px_rgba(0,255,178,0.65)]'
                >
                  gouravrajak585@gmail.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a
                  href='tel:+916267548626'
                  className='text-zen-neonBlue transition hover:text-zen-neonMint hover:drop-shadow-[0_0_8px_rgba(0,255,178,0.65)]'
                >
                  +91 6267548626
                </a>
              </p>
              <p>Business Hours: Mon - Sat, 9:00 AM - 7:00 PM IST</p>
            </div>
          </div>
        </div>

        <div className='pt-5 text-center'>
          <p className='text-xs text-zen-text/70 sm:text-sm'>© {year} Zentrix Automation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
