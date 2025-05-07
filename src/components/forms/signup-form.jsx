/* eslint-disable react/no-unknown-property */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../../services/worker';

export default function SignupForm() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        const formData = new FormData(e.target);
        const userData = {
            username: formData.get('username'),
            email: formData.get('email'),
            fullname: formData.get('fullname'),
            password: formData.get('password'),
            type: "user"
        };

        try {
            const response = await signupUser(userData);
            if (response.success && response.token && response.user) {
                // Store token and user data in localStorage or state management
                localStorage.setItem('token', response.token);
                localStorage.setItem('user', JSON.stringify(response.user));
                
                // Redirect to verify page
                navigate('/verify');
            } else {
                setError('Signup failed. Please try again.');
            }
        } catch (err) {
            setError(err.message || 'Failed to register. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        placeholder="Username"
                        required
                    />
                    <label htmlFor="username">Username</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="name@example.com"
                        required
                    />
                    <label htmlFor="email">Email address</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="fullname"
                        name="fullname"
                        placeholder="Full Name"
                        required
                    />
                    <label htmlFor="fullname">Full Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <label htmlFor="password">Password</label>
                </div>

                <button 
                    className="w-100 btn btn-primary" 
                    type="submit"
                    disabled={isLoading}
                    style={{
                        backgroundColor: '#2466FF',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '12px'
                    }}
                >
                    {isLoading ? (
                        <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Signing up...
                        </>
                    ) : (
                        'Sign up'
                    )}
                </button>
            </form>
        </>
    );
}