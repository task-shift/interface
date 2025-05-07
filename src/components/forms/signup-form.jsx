/* eslint-disable react/no-unknown-property */
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { signup } from "../../services/api"

export default function SignupForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        fullname: '',
        email: '',
        password: '',
        type: 'user'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form from submitting normally
        if (isSubmitting) return;

        setError('');
        setIsSubmitting(true);

        try {
            const response = await signup(formData);
            console.log('Signup successful:', response);
            
            // Store auth data
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.user));
            
            // Navigate to verification page
            navigate('/verify');
        } catch (err) {
            console.error('Signup error:', err);
            setError(err.message || 'Failed to sign up');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} method="POST">
            <div className="form-floating">
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input 
                        type="text" 
                        name="username"
                        className="form-control" 
                        placeholder="Username" 
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="form-floating">
                <input 
                    type="text" 
                    name="fullname"
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="John doe" 
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="floatingInput">Full Name</label>
            </div>
            <div className="form-floating">
                <input 
                    type="email" 
                    name="email"
                    className="form-control" 
                    id="floatingEmail" 
                    placeholder="name@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="floatingEmail">Email address</label>
            </div>
            <div className="form-floating">
                <input 
                    type="password" 
                    name="password"
                    className="form-control" 
                    id="floatingPassword" 
                    placeholder="Password" 
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}

            <div className="form-check text-start my-3">
                <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="termsCheck" 
                    required 
                />
                <label className="form-check-label" htmlFor="termsCheck">
                    Agree to terms and conditions
                </label>
            </div>
            <button 
                className="btn w-100 py-2" 
                type="submit" 
                style={{ backgroundColor: "#2466FF", color: "white", borderRadius: "20px" }}
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Signing up...' : 'Sign up'}
            </button>
            <Link to="/signin"><small>Sign in here</small></Link>
        </form>
    )
}