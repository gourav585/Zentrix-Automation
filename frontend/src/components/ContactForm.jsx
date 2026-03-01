import { useState } from 'react'

const initialValues = {
  name: '',
  email: '',
  message: '',
}

function validateForm(values) {
  const errors = {}

  if (!values.name.trim()) errors.name = 'Name is required.'
  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.message.trim()) errors.message = 'Message is required.'

  return errors
}

function FormField({ id, label, value, onChange, error, multiline = false }) {
  const sharedClass =
    'peer w-full rounded-xl border bg-zen-panel/45 px-4 pb-3 pt-6 text-sm text-zen-text placeholder-transparent outline-none backdrop-blur-md transition focus:border-zen-neonBlue/80 focus:shadow-neon'
  const baseBorder = error ? 'border-red-400/60' : 'border-zen-neonBlue/30'

  return (
    <label className='relative block'>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          value={value}
          onChange={onChange}
          placeholder={label}
          className={`${sharedClass} ${baseBorder} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={id === 'email' ? 'email' : 'text'}
          value={value}
          onChange={onChange}
          placeholder={label}
          className={`${sharedClass} ${baseBorder}`}
        />
      )}

      <span className='pointer-events-none absolute left-4 top-4 origin-left text-sm text-zen-text/65 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-zen-text/45 peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-zen-neonBlue'>
        {label}
      </span>

      {error ? <span className='mt-2 block text-xs text-red-300'>{error}</span> : null}
    </label>
  )
}

function ContactForm() {
  const [formValues, setFormValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateForm(formValues)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
      setFormValues(initialValues)
    }
  }

  return (
    <section id='contact' className='relative w-full overflow-hidden bg-zen-bg py-14 text-zen-text sm:py-16 md:py-20'>
      <div className='pointer-events-none absolute -left-24 top-8 h-56 w-56 rounded-full bg-zen-neonBlue/20 blur-3xl' />
      <div className='pointer-events-none absolute -right-24 bottom-8 h-72 w-72 rounded-full bg-zen-neonPurple/20 blur-3xl' />

      <div className='mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-10 lg:px-12'>
        <div className='relative mx-auto max-w-3xl animate-fade-up rounded-3xl border border-zen-neonBlue/30 bg-zen-panel/35 p-5 shadow-neon backdrop-blur-xl sm:p-7 md:p-9'>
          <div className='mb-6'>
            <p className='font-display text-xs uppercase tracking-[0.25em] text-zen-neonPurple'>Contact</p>
            <h2 className='font-display mt-2 text-2xl font-semibold text-zen-neonBlue sm:text-3xl'>Launch Your Automation Stack</h2>
            <p className='mt-2 text-sm leading-relaxed text-zen-text/75 sm:text-base'>
              Tell us your goal and we will propose the exact AI + automation architecture.
            </p>
          </div>

          <form className='space-y-4' noValidate onSubmit={handleSubmit}>
            <FormField
              id='name'
              label='Your Name'
              value={formValues.name}
              onChange={handleChange}
              error={errors.name}
            />

            <FormField
              id='email'
              label='Work Email'
              value={formValues.email}
              onChange={handleChange}
              error={errors.email}
            />

            <FormField
              id='message'
              label='Your Message'
              value={formValues.message}
              onChange={handleChange}
              error={errors.message}
              multiline
            />

            <button
              type='submit'
              className='w-full rounded-xl border border-zen-neonMint/60 bg-gradient-to-r from-zen-neonBlue/35 via-zen-neonPurple/30 to-zen-neonMint/35 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-zen-text shadow-neon transition duration-300 hover:animate-glow-pulse hover:shadow-neon-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zen-neonBlue/80 sm:text-sm'
            >
              Send Message
            </button>

            {submitted ? (
              <p className='text-sm text-zen-neonMint animate-fade-in'>Message sent. We will contact you soon.</p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
