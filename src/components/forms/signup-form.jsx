/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { auth, initializeWorker } from '../../services/api';

export default function SignupForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        fullname: '',
        password: '',
        type: 'user'
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // Initialize the service worker when component mounts
        initializeWorker().catch(console.error);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await auth.signup(formData);
            
            if (response.status === 201 || response.status === 200) {
                // Store email in session storage for verification
                sessionStorage.setItem('verificationEmail', formData.email);
                // Redirect to verification page
                navigate('/verify');
            } else {
                setError(response.data.message || 'Registration failed. Please try again.');
            }
        } catch (error) {
            setError(error.message || 'An error occurred during registration.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}

            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                    value={formData.fullname}
                    onChange={handleChange}
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
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="password">Password</label>
            </div>

            <div className="form-check text-start my-3">
                <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                    Agree to terms and conditions
                </label>
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
            <Link to="/signin"><small>Sign in here</small></Link>
        </form>
    );
}