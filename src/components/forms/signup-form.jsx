/* eslint-disable react/no-unknown-property */
import { useState } from "react"
import { Link } from "react-router-dom"
import { signupUser } from "../../services/worker"

export default function SignupForm() {
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
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form submission
        if (isSubmitting) return; // Prevent double submission

        setError('');
        setIsSubmitting(true);

        try {
            const response = await signupUser(formData);
            console.log('Signup successful:', response);
            // Service worker will handle redirect
        } catch (err) {
            console.error('Signup error:', err);
            setError(err.message || 'Failed to sign up');
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div class="form-floating">
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input 
                        type="text" 
                        name="username"
                        class="form-control" 
                        placeholder="Username" 
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div class="form-floating">
                <input 
                    type="text" 
                    name="fullname"
                    class="form-control" 
                    id="floatingInput" 
                    placeholder="John doe" 
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                />
                <label for="floatingInput">Full Name</label>
            </div>
            <div class="form-floating">
                <input 
                    type="email" 
                    name="email"
                    class="form-control" 
                    id="floatingEmail" 
                    placeholder="name@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <label for="floatingEmail">Email address</label>
            </div>
            <div class="form-floating">
                <input 
                    type="password" 
                    name="password"
                    class="form-control" 
                    id="floatingPassword" 
                    placeholder="Password" 
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <label for="floatingPassword">Password</label>
            </div>

            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}

            <div class="form-check text-start my-3">
                <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" required />
                <label class="form-check-label" for="flexCheckDefault">
                    Agree to terms and conditions
                </label>
            </div>
            <button 
                class="btn w-100 py-2" 
                type="submit" 
                style={{ "backgroundColor": "#2466FF", "color": "white", "borderRadius": "20px" }}
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Signing up...' : 'Sign up'}
            </button>
            <Link to="/signin"><small>Sign in here</small></Link>
        </form>
    )
}