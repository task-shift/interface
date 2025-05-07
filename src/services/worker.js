// Service worker registration and management
let swRegistration = null;

export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      swRegistration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered successfully:', swRegistration);
      await navigator.serviceWorker.ready;
      return true;
    } catch (error) {
      console.error('Service Worker registration failed:', error);
      return false;
    }
  }
  return false;
};

export const signupUser = async (userData) => {
  if (!('serviceWorker' in navigator)) {
    // Fallback to direct API call if service worker is not supported
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });

      const data = await response.json();
      if (data.success) {
        // Store token securely
        localStorage.setItem('token', data.token);
        // Store user data
        localStorage.setItem('user', JSON.stringify(data.user));
        // Navigate to verify page
        window.location.href = '/verify';
        return data;
      } else {
        throw new Error(data.error || 'Failed to register user');
      }
    } catch (error) {
      throw new Error(error.message || 'Failed to register user');
    }
  }

  return new Promise((resolve, reject) => {
    if (!navigator.serviceWorker.controller) {
      // If service worker is not controlling the page, use direct API call
      signupUser(userData).then(resolve).catch(reject);
      return;
    }

    // Create message channel for secure communication
    const messageChannel = new MessageChannel();
    
    // Handle response from service worker
    messageChannel.port1.onmessage = (event) => {
      if (event.data.type === 'SIGNUP_RESPONSE') {
        if (event.data.success) {
          // Store token securely
          localStorage.setItem('token', event.data.data.token);
          // Store user data
          localStorage.setItem('user', JSON.stringify(event.data.data.user));
          // Navigate to verify page
          window.location.href = '/verify';
          resolve(event.data.data);
        } else {
          reject(new Error(event.data.error));
        }
      }
    };

    // Send request to service worker
    navigator.serviceWorker.controller.postMessage(
      {
        type: 'SIGNUP_REQUEST',
        payload: userData
      },
      [messageChannel.port2]
    );
  });
}; 