const API_BASE_URL = 'http://localhost:3000/api';

export const signup = async (userData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
            credentials: 'include' // Include cookies in the request
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message || 'Failed to register');
        }

        return data;
    } catch (error) {
        throw error;
    }
}; 