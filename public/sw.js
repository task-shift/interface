const API_BASE_URL = 'http://localhost:3000/api'

self.addEventListener('install', (event) => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim())
})

self.addEventListener('message', async (event) => {
  if (event.data.type === 'API_REQUEST') {
    try {
      const response = await handleApiRequest(event.data.endpoint, event.data.options)
      event.ports[0].postMessage({ success: true, data: response })
    } catch (error) {
      event.ports[0].postMessage({ success: false, error: error.message })
    }
  }
})

async function handleApiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`
  const token = await self.registration.storage?.get('token')
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...options.headers
  }

  const response = await fetch(url, {
    ...options,
    headers
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'API request failed')
  }

  const data = await response.json()

  // If the response includes a token, store it
  if (data.token) {
    await self.registration.storage?.set('token', data.token)
  }

  return data
} 