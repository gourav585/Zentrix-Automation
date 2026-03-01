import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import zentrixLogo from '../assets/zentrix-logo-cropped.png'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Our Server', to: '/server' },
  { label: 'About Us', to: '/about' },
  { label: 'Free Demo', to: '/contact' },
  { label: 'Admin', to: '/admin' },
]

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className='sticky top-0 z-50 border-b border-zen-neonBlue/20 bg-zen-bg/65 text-zen-text backdrop-blur-2xl'>
      <div className='mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-3 sm:px-6 md:px-10 lg:px-12'>
        <NavLink
          to='/'
          className='group inline-flex items-center rounded-lg border border-transparent px-1 py-1 transition hover:border-zen-neonBlue/35'
        >
          <img
            src={zentrixLogo}
            alt='Zentrix logo'
            className='h-9 w-auto object-contain brightness-110 saturate-125 [filter:drop-shadow(0_0_10px_rgba(0,245,255,0.55))_drop-shadow(0_0_22px_rgba(123,97,255,0.32))] transition group-hover:[filter:drop-shadow(0_0_14px_rgba(0,245,255,0.75))_drop-shadow(0_0_30px_rgba(123,97,255,0.45))] md:h-10'
          />
        </NavLink>

        <button
          type='button'
          className='inline-flex items-center justify-center rounded-lg border border-zen-neonBlue/40 px-3 py-2 text-zen-neonBlue transition hover:border-zen-neonPurple/50 hover:text-zen-neonPurple md:hidden'
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label='Toggle navigation menu'
          aria-expanded={menuOpen}
        >
          <span className='sr-only'>Menu</span>
          <svg viewBox='0 0 24 24' className='h-5 w-5' fill='none' stroke='currentColor' strokeWidth='2'>
            <path d={menuOpen ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'} />
          </svg>
        </button>

        <nav className='hidden items-center gap-1 lg:gap-2 md:flex'>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className='group relative px-3 py-2'>
              {({ isActive }) => {
                const isDemo = item.to === '/contact'
                if (isDemo) {
                  return (
                    <span
                      className={`rounded-lg border px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition lg:text-sm ${
                        isActive
                          ? 'border-zen-neonMint/70 bg-zen-neonMint/25 text-zen-neonMint shadow-neon-mint'
                          : 'border-zen-neonMint/55 bg-zen-neonMint/15 text-zen-neonMint hover:animate-glow-pulse'
                      }`}
                    >
                      {item.label}
                    </span>
                  )
                }

                return (
                  <>
                    <span
                      className={`text-xs uppercase tracking-[0.14em] transition lg:text-sm ${
                        isActive ? 'text-zen-neonBlue' : 'text-zen-text/80 group-hover:text-zen-neonPurple'
                      }`}
                    >
                      {item.label}
                    </span>
                    <span
                      className={`absolute bottom-1 left-3 right-3 h-px origin-left bg-gradient-to-r from-zen-neonBlue to-zen-neonPurple transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </>
                )
              }}
            </NavLink>
          ))}
        </nav>
      </div>

      <div
        className={`overflow-hidden border-t border-zen-neonBlue/15 bg-zen-bg/95 transition-all duration-300 md:hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className='mx-auto flex w-full max-w-screen-2xl flex-col gap-1 px-4 py-3 sm:px-6'>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-lg border px-3 py-2 text-sm uppercase tracking-[0.14em] transition ${
                  item.to === '/contact'
                    ? isActive
                      ? 'border-zen-neonMint/70 bg-zen-neonMint/25 text-zen-neonMint shadow-neon-mint'
                      : 'border-zen-neonMint/55 bg-zen-neonMint/15 text-zen-neonMint hover:animate-glow-pulse'
                    : isActive
                      ? 'border-zen-neonBlue/55 bg-zen-neonBlue/10 text-zen-neonBlue'
                      : 'border-transparent text-zen-text/85 hover:border-zen-neonPurple/40 hover:text-zen-neonPurple'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
