const API_BASE_URL = 'http://localhost:3000/api';

// Handle API requests
self.addEventListener('message', async (event) => {
    if (event.data.type === 'API_REQUEST') {
        try {
            const { endpoint, method, data } = event.data;
            const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const responseData = await response.json();
            
            // Send the response back to the main thread
            self.postMessage({
                type: 'API_RESPONSE',
                requestId: event.data.requestId,
                data: responseData,
                status: response.status,
            });
        } catch (error) {
            // Send error back to main thread
            self.postMessage({
                type: 'API_ERROR',
                requestId: event.data.requestId,
                error: error.message,
            });
        }
    }
}); 