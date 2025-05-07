// Service Worker for secure API calls
const API_BASE_URL = 'http://localhost:3000';

self.addEventListener('message', async (event) => {
  if (event.data.type === 'SIGNUP_REQUEST') {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event.data.payload)
      });

      const data = await response.json();
      
      // Send the complete response back to the client
      event.source.postMessage({
        type: 'SIGNUP_RESPONSE',
        success: data.success,
        data: {
          token: data.token,
          user: data.user
        }
      });
    } catch (error) {
      event.source.postMessage({
        type: 'SIGNUP_RESPONSE',
        success: false,
        error: 'Failed to register user'
      });
    }
  }
}); 