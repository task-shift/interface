/* eslint-disable react/no-unknown-property */
import { useState } from "react"
// import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

export default function SignupForm() {
    const [formData, setFormData] = useState({
        username: '',
        fullname: '',
        email: '',
        password: '',
        type: 'user'
    });
    const [error, setError] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleTermsChange = (e) => {
        setTermsAccepted(e.target.checked);
    };

    const testAlert = () => {
        alert('Button clicked!');
    };

    return (
        <>
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
                    checked={termsAccepted}
                    onChange={handleTermsChange}
                />
                <label className="form-check-label" htmlFor="termsCheck">
                    Agree to terms and conditions
                </label>
            </div>
            
            <button 
                className="btn w-100 py-2" 
                type="button"
                onClick={testAlert}
                style={{ backgroundColor: "#2466FF", color: "white", borderRadius: "20px" }}
            >
                Test Button
            </button>
            
            {/* <div className="mt-3">
                <Link to="/signin"><small>Sign in here</small></Link>
            </div> */}
        </>
    )
}

SignupForm.propTypes = {
    onSubmit: PropTypes.func
}