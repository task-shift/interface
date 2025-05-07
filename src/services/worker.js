// Service worker registration and management
let swRegistration = null;

export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      swRegistration = await navigator.serviceWorker.register('/sw.js');
      await navigator.serviceWorker.ready;
      return true;
    } catch (error) {
      console.error('Service Worker registration failed:', error);
      return false;
    }
  }
  return false;
};

export const signupUser = (userData) => {
  return new Promise((resolve, reject) => {
    if (!navigator.serviceWorker.controller) {
      reject(new Error('Service Worker not ready'));
      return;
    }

    // Create message channel for secure communication
    const messageChannel = new MessageChannel();
    
    // Handle response from service worker
    messageChannel.port1.onmessage = (event) => {
      if (event.data.type === 'SIGNUP_RESPONSE') {
        if (event.data.success) {
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