import { useState } from 'react'
import SectionReveal from '../components/SectionReveal'

const initialValues = {
  fullName: '',
  businessName: '',
  email: '',
  phone: '',
  businessType: '',
  automationGoal: '',
}

const businessTypes = [
  'Coaching Institute',
  'Clinic',
  'Real Estate',
  'E-commerce',
  'Gym',
  'Other',
]

function validate(values) {
  const errors = {}
  if (!values.fullName.trim()) errors.fullName = 'Full Name is required.'
  if (!values.businessName.trim()) errors.businessName = 'Business Name is required.'
  if (!values.email.trim()) {
    errors.email = 'Email Address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.phone.trim()) errors.phone = 'Phone Number is required.'
  if (!values.businessType) errors.businessType = 'Please select a Business Type.'
  if (!values.automationGoal.trim()) errors.automationGoal = 'Please describe what you want to automate.'
  return errors
}

function Field({ id, label, error, children }) {
  return (
    <label htmlFor={id} className='block'>
      <span className='mb-2 block text-xs uppercase tracking-[0.16em] text-zen-text/70'>{label}</span>
      {children}
      {error ? <span className='mt-2 block text-xs text-red-300'>{error}</span> : null}
    </label>
  )
}

function ContactPage() {
  const [formValues, setFormValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitError, setSubmitError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitMessage('')
    setSubmitError('')

    const nextErrors = validate(formValues)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const apiBase = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'

    try {
      setIsSubmitting(true)
      const response = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || 'Unable to submit your request.')
      }

      setSubmitMessage('Demo request submitted. Our team will contact you shortly.')
      setFormValues(initialValues)
    } catch (error) {
      if (error instanceof TypeError) {
        setSubmitError('Backend API is unreachable. Start backend on port 5000 and check backend/.env configuration.')
      } else {
        setSubmitError(error.message || 'Submission failed. Please try again.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    'w-full rounded-xl border border-zen-neonBlue/30 bg-zen-panel/55 px-4 py-3 text-sm text-zen-text outline-none transition placeholder:text-zen-text/40 focus:border-zen-neonBlue/70 focus:shadow-neon'

  return (
    <main className='relative overflow-hidden bg-zen-bg bg-futuristic-grid bg-grid py-12 text-zen-text sm:py-14 md:py-16'>
      <div className='pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-zen-neonBlue/15 blur-3xl' />
      <div className='pointer-events-none absolute -right-24 top-44 h-80 w-80 rounded-full bg-zen-neonPurple/15 blur-3xl' />

      <section className='relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-10 lg:px-12'>
        <SectionReveal>
          <p className='font-display text-xs uppercase tracking-[0.24em] text-zen-neonPurple'>Contact</p>
          <h1 className='font-display mt-2 max-w-[16ch] text-3xl font-semibold leading-tight text-zen-text sm:text-4xl md:text-5xl'>
            Book Your Free AI Demo
          </h1>
        </SectionReveal>

        <div className='mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.25fr] xl:gap-8'>
          <SectionReveal>
            <aside className='rounded-2xl border border-zen-neonBlue/25 bg-zen-panel/45 p-5 shadow-glass sm:p-6'>
              <h2 className='font-display text-2xl font-semibold text-zen-neonBlue'>Zentrix Automation</h2>
              <p className='mt-3 text-sm leading-relaxed text-zen-text/78 sm:text-base'>
                Tell us your business goals. We will show exactly how AI automation can improve response speed,
                capture more leads, and scale your support operations.
              </p>

              <div className='mt-6 space-y-4 text-sm sm:text-base'>
                <div>
                  <p className='text-xs uppercase tracking-[0.14em] text-zen-neonPurple'>Support Email</p>
                  <a href='mailto:support@zentrixautomation.com' className='text-zen-neonBlue hover:text-zen-neonMint'>
                    gouravrajak585@gmail.com
                  </a>
                </div>
                <div>
                  <p className='text-xs uppercase tracking-[0.14em] text-zen-neonPurple'>Phone Number</p>
                  <a href='tel:+916267548626' className='text-zen-neonBlue hover:text-zen-neonMint'>
                    +91 6267548626
                  </a>
                </div>
                <div>
                  <p className='text-xs uppercase tracking-[0.14em] text-zen-neonPurple'>Business Hours</p>
                  <p className='text-zen-text/85'>Mon - Sat, 9:00 AM - 7:00 PM IST</p>
                </div>
              </div>
            </aside>
          </SectionReveal>

          <SectionReveal delay={0.08}>
            <div className='rounded-2xl border border-zen-neonPurple/30 bg-zen-panel/40 p-5 shadow-neon backdrop-blur-xl sm:p-6 md:p-7'>
              <form className='space-y-4' noValidate onSubmit={handleSubmit}>
                <div className='grid gap-4 md:grid-cols-2'>
                  <Field id='fullName' label='Full Name' error={errors.fullName}>
                    <input
                      id='fullName'
                      name='fullName'
                      type='text'
                      value={formValues.fullName}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder='John Doe'
                    />
                  </Field>

                  <Field id='businessName' label='Business Name' error={errors.businessName}>
                    <input
                      id='businessName'
                      name='businessName'
                      type='text'
                      value={formValues.businessName}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder='Acme Growth Ltd'
                    />
                  </Field>
                </div>

                <div className='grid gap-4 md:grid-cols-2'>
                  <Field id='email' label='Email Address' error={errors.email}>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      value={formValues.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder='you@company.com'
                    />
                  </Field>

                  <Field id='phone' label='Phone Number' error={errors.phone}>
                    <input
                      id='phone'
                      name='phone'
                      type='tel'
                      value={formValues.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder='+91 XXXXX XXXXX'
                    />
                  </Field>
                </div>

                <Field id='businessType' label='Business Type' error={errors.businessType}>
                  <select
                    id='businessType'
                    name='businessType'
                    value={formValues.businessType}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value=''>Select Business Type</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  id='automationGoal'
                  label='What Do You Want To Automate?'
                  error={errors.automationGoal}
                >
                  <textarea
                    id='automationGoal'
                    name='automationGoal'
                    rows={5}
                    value={formValues.automationGoal}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder='Describe your current workflow and automation goals...'
                  />
                </Field>

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full rounded-xl border border-zen-neonMint/65 bg-gradient-to-r from-zen-neonBlue/35 via-zen-neonPurple/35 to-zen-neonMint/35 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-zen-neonMint shadow-neon-mint transition duration-300 hover:animate-glow-pulse hover:shadow-neon-mint disabled:cursor-not-allowed disabled:opacity-70 sm:text-sm'
                >
                  {isSubmitting ? 'Submitting...' : 'Book Free AI Demo'}
                </button>

                {submitMessage ? <p className='text-sm text-zen-neonMint'>{submitMessage}</p> : null}
                {submitError ? <p className='text-sm text-red-300'>{submitError}</p> : null}
              </form>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
