import { useEffect, useMemo, useState } from 'react'
import SectionReveal from '../components/SectionReveal'
import { getApiBaseUrl } from '../config/api'

function formatDate(value) {
  if (!value) return '-'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return '-'
  return date.toLocaleString()
}

function AdminPage() {
  const [adminKey, setAdminKey] = useState(localStorage.getItem('zentrix_admin_key') || '')
  const [requests, setRequests] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [deletingId, setDeletingId] = useState('')

  const apiBase = useMemo(() => getApiBaseUrl(), [])

  const fetchRequests = async () => {
    try {
      setIsLoading(true)
      setError('')
      const response = await fetch(`${apiBase}/api/admin/requests`, {
        headers: {
          ...(adminKey ? { 'x-admin-key': adminKey } : {}),
        },
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || 'Unable to load admin requests.')
      }

      const data = await response.json()
      setRequests(data.requests || [])
    } catch (err) {
      if (err instanceof TypeError) {
        setError('Backend API is unreachable. Start backend on port 5000 and verify .env values.')
      } else {
        setError(err.message || 'Unable to load admin requests.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchRequests()
  }, [])

  const handleSaveKey = (event) => {
    event.preventDefault()
    localStorage.setItem('zentrix_admin_key', adminKey)
    fetchRequests()
  }

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Delete this demo request permanently?')
    if (!confirmDelete) return

    try {
      setDeletingId(id)
      setError('')

      const response = await fetch(`${apiBase}/api/admin/requests/${id}`, {
        method: 'DELETE',
        headers: {
          ...(adminKey ? { 'x-admin-key': adminKey } : {}),
        },
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || 'Unable to delete request.')
      }

      setRequests((prev) => prev.filter((item) => item._id !== id))
    } catch (err) {
      if (err instanceof TypeError) {
        setError('Backend API is unreachable. Start backend on port 5000 and verify .env values.')
      } else {
        setError(err.message || 'Unable to delete request.')
      }
    } finally {
      setDeletingId('')
    }
  }

  return (
    <main className='relative overflow-hidden bg-zen-bg bg-futuristic-grid bg-grid py-12 text-zen-text sm:py-14 md:py-16'>
      <div className='pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-zen-neonBlue/15 blur-3xl' />
      <div className='pointer-events-none absolute -right-24 top-44 h-80 w-80 rounded-full bg-zen-neonPurple/15 blur-3xl' />

      <section className='relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 md:px-10 lg:px-12'>
        <SectionReveal>
          <p className='font-display text-xs uppercase tracking-[0.24em] text-zen-neonPurple'>Admin Panel</p>
          <h1 className='font-display mt-2 max-w-[16ch] text-3xl font-semibold text-zen-text sm:text-4xl md:text-5xl'>
            Free Demo Requests
          </h1>
          <p className='mt-3 max-w-2xl text-sm leading-relaxed text-zen-text/80 sm:text-base'>
            Monitor all inbound demo requests from your website contact flows.
          </p>
        </SectionReveal>

        <SectionReveal className='mt-8'>
          <form
            onSubmit={handleSaveKey}
            className='rounded-2xl border border-zen-neonBlue/25 bg-zen-panel/45 p-4 shadow-glass sm:p-5'
          >
            <div className='flex flex-col gap-3 md:flex-row md:items-end'>
              <label className='block flex-1'>
                <span className='mb-2 block text-xs uppercase tracking-[0.16em] text-zen-text/70'>Admin Access Key (Optional)</span>
                <input
                  type='password'
                  value={adminKey}
                  onChange={(event) => setAdminKey(event.target.value)}
                  className='w-full rounded-xl border border-zen-neonBlue/30 bg-zen-panel/55 px-4 py-3 text-sm text-zen-text outline-none transition placeholder:text-zen-text/40 focus:border-zen-neonBlue/70 focus:shadow-neon'
                  placeholder='Enter ADMIN_KEY from backend .env'
                />
              </label>

              <div className='flex gap-2'>
                <button
                  type='submit'
                  className='rounded-xl border border-zen-neonMint/60 bg-zen-neonMint/20 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-zen-neonMint transition hover:animate-glow-pulse'
                >
                  Save Key
                </button>
                <button
                  type='button'
                  onClick={fetchRequests}
                  className='rounded-xl border border-zen-neonBlue/55 bg-transparent px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-zen-neonBlue transition hover:border-zen-neonPurple/55 hover:text-zen-neonPurple'
                >
                  Refresh
                </button>
              </div>
            </div>
          </form>
        </SectionReveal>

        <SectionReveal className='mt-6'>
          <div className='rounded-2xl border border-zen-neonPurple/25 bg-zen-panel/40 p-4 shadow-glass sm:p-5'>
            <div className='mb-4 flex items-center justify-between'>
              <p className='text-sm text-zen-text/75'>Total Requests: {requests.length}</p>
              {isLoading ? <p className='text-xs text-zen-neonBlue'>Loading...</p> : null}
            </div>

            {error ? <p className='mb-4 text-sm text-red-300'>{error}</p> : null}

            {requests.length === 0 && !isLoading ? (
              <p className='text-sm text-zen-text/70'>No demo requests found yet.</p>
            ) : (
              <div className='grid gap-3'>
                {requests.map((request) => (
                  <article
                    key={request._id}
                    className='rounded-xl border border-zen-neonBlue/25 bg-zen-panelSoft/45 p-4'
                  >
                    <div className='mb-3 flex justify-end'>
                      <button
                        type='button'
                        onClick={() => handleDelete(request._id)}
                        disabled={deletingId === request._id}
                        className='rounded-lg border border-red-400/55 bg-red-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-red-300 transition hover:border-red-300 hover:bg-red-400/20 disabled:cursor-not-allowed disabled:opacity-60'
                      >
                        {deletingId === request._id ? 'Deleting...' : 'Delete'}
                      </button>
                    </div>
                    <div className='grid gap-2 text-sm md:grid-cols-2 xl:grid-cols-3'>
                      <p>
                        <span className='text-zen-neonPurple'>Name:</span> {request.name || '-'}
                      </p>
                      <p>
                        <span className='text-zen-neonPurple'>Business:</span> {request.businessName || '-'}
                      </p>
                      <p>
                        <span className='text-zen-neonPurple'>Email:</span> {request.email || '-'}
                      </p>
                      <p>
                        <span className='text-zen-neonPurple'>Phone:</span> {request.phone || '-'}
                      </p>
                      <p>
                        <span className='text-zen-neonPurple'>Business Type:</span> {request.businessType || '-'}
                      </p>
                      <p>
                        <span className='text-zen-neonPurple'>Created:</span> {formatDate(request.createdAt)}
                      </p>
                    </div>
                    <p className='mt-3 text-sm leading-relaxed text-zen-text/85'>
                      <span className='text-zen-neonBlue'>Automation Goal:</span> {request.message || '-'}
                    </p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </SectionReveal>
      </section>
    </main>
  )
}

export default AdminPage
