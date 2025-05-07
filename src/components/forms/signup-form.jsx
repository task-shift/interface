/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import { signupUser } from '../../services/worker';

export default function SignupForm() {
    const [form, setForm] = useState({
        username: '',
        email: '',
        fullname: '',
        password: '',
        type: 'user',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await signupUser(form);
            if (response && response.success) {
                navigate('/verify');
            } else {
                setError(response?.message || 'Signup failed.');
            }
        } catch (err) {
            setError('Signup failed.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div class="form-floating">
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon1">@</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name="username" value={form.username} onChange={handleChange} required />
                </div>
            </div>
            <div class="form-floating">
                <input type="text" class="form-control" id="floatingInput" placeholder="John doe" name="fullname" value={form.fullname} onChange={handleChange} required />
                <label for="floatingInput">Full Name</label>
            </div>
            <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" value={form.email} onChange={handleChange} required />
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password" value={form.password} onChange={handleChange} required />
                <label for="floatingPassword">Password</label>
            </div>

            <div class="form-check text-start my-3">
                <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                    Agree to terms and conditions
                </label>
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                {loading ? 'Signing up...' : 'Sign Up'}
            </button>
            {error && <div className="alert alert-danger mt-2">{error}</div>}
            <Link to="/signin"><small>Sign in here</small></Link>
        </form>
    )
}