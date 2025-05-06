let worker = null;
let requestId = 0;
const pendingRequests = new Map();

// Initialize the service worker
export const initializeWorker = async () => {
    if ('serviceWorker' in navigator) {
        try {
            const registration = await navigator.serviceWorker.register('/services/worker.js');
            worker = registration.active || registration.waiting || registration.installing;
            
            // Listen for messages from the service worker
            navigator.serviceWorker.addEventListener('message', (event) => {
                const { type, requestId, data, error, status } = event.data;
                
                if (type === 'API_RESPONSE' || type === 'API_ERROR') {
                    const resolver = pendingRequests.get(requestId);
                    if (resolver) {
                        if (type === 'API_RESPONSE') {
                            resolver.resolve({ data, status });
                        } else {
                            resolver.reject(new Error(error));
                        }
                        pendingRequests.delete(requestId);
                    }
                }
            });

            return true;
        } catch (error) {
            console.error('Service Worker registration failed:', error);
            return false;
        }
    }
    return false;
};

// Make an API request through the service worker
export const makeRequest = async (endpoint, method, data = null) => {
    if (!worker) {
        throw new Error('Service Worker not initialized');
    }

    const currentRequestId = ++requestId;

    return new Promise((resolve, reject) => {
        pendingRequests.set(currentRequestId, { resolve, reject });

        worker.postMessage({
            type: 'API_REQUEST',
            requestId: currentRequestId,
            endpoint,
            method,
            data,
        });
    });
};

// API endpoints
export const auth = {
    signup: async (userData) => {
        return makeRequest('/auth/register', 'POST', userData);
    },
    verify: async (code) => {
        return makeRequest('/auth/verify', 'POST', { code });
    },
    resendCode: async (email) => {
        return makeRequest('/auth/resend-code', 'POST', { email });
    }
}; 