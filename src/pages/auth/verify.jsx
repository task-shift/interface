/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';
import { SiEbox } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import { auth, initializeWorker } from '../../services/api';

export default function Verify() {
    const navigate = useNavigate();
    const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '', '']);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        // Initialize the service worker
        initializeWorker().catch(console.error);
        
        // Get email from session storage
        const storedEmail = sessionStorage.getItem('verificationEmail');
        if (!storedEmail) {
            // If no email in session storage, redirect to signup
            navigate('/signup');
            return;
        }
        setEmail(storedEmail);
    }, [navigate]);

    // Handle input change for each digit
    const handleInputChange = (index, value) => {
        if (value.length > 1) return; // Prevent multiple digits
        if (!/^\d*$/.test(value)) return; // Only allow numbers

        const newCode = [...verificationCode];
        newCode[index] = value;
        setVerificationCode(newCode);

        // Auto-focus next input
        if (value && index < 6) {
            const nextInput = document.getElementById(`code-${index + 1}`);
            if (nextInput) nextInput.focus();
        }
    };

    // Handle backspace
    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
            const prevInput = document.getElementById(`code-${index - 1}`);
            if (prevInput) {
                prevInput.focus();
                const newCode = [...verificationCode];
                newCode[index - 1] = '';
                setVerificationCode(newCode);
            }
        }
    };

    // Handle paste
    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').trim();
        if (!/^\d{7}$/.test(pastedData)) return; // Must be exactly 7 digits

        const newCode = pastedData.split('');
        setVerificationCode(newCode);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const code = verificationCode.join('');
        if (code.length !== 7) {
            setError('Please enter all 7 digits');
            return;
        }

        setIsSubmitting(true);
        setError('');

        try {
            const response = await auth.verify(code);
            
            if (response.status === 200) {
                // Clear email from session storage
                sessionStorage.removeItem('verificationEmail');
                // Redirect to dashboard or success page
                navigate('/shift');
            } else {
                setError(response.data.message || 'Invalid verification code. Please try again.');
            }
        } catch (error) {
            setError(error.message || 'An error occurred during verification.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleResendCode = async () => {
        if (!email || isSubmitting) return;

        setIsSubmitting(true);
        setError('');

        try {
            const response = await auth.resendCode(email);
            
            if (response.status === 200) {
                // Clear the current verification code
                setVerificationCode(['', '', '', '', '', '', '']);
                // Focus the first input
                const firstInput = document.getElementById('code-0');
                if (firstInput) firstInput.focus();
            } else {
                setError(response.data.message || 'Failed to resend code. Please try again.');
            }
        } catch (error) {
            setError(error.message || 'An error occurred while resending the code.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Header />
            <body class="d-flex align-items-center justify-content-center vh-100 bg-body-tertiary">
                <main class="form-signin w-100 m-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="d-flex justify-content-center mb-4">
                            <Link to="/">
                                <SiEbox color="#2466FF" size={50} />
                            </Link>
                        </div>

                        <h1 class="h3 mb-3 fw-normal text-center">Verify your email</h1>
                        <p className="text-muted mb-4 text-center">
                            We&apos;ve sent a 7-digit verification code to your email address. 
                            Please enter it below to complete your registration.
                        </p>

                        <div className="verification-inputs d-flex justify-content-center gap-2 mb-4">
                            {verificationCode.map((digit, index) => (
                                <input
                                    key={index}
                                    id={`code-${index}`}
                                    type="text"
                                    className="form-control text-center"
                                    style={{
                                        width: '45px',
                                        height: '45px',
                                        fontSize: '1.2rem',
                                        padding: '0.375rem',
                                        borderRadius: '8px'
                                    }}
                                    value={digit}
                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    onPaste={handlePaste}
                                    maxLength={1}
                                    required
                                />
                            ))}
                        </div>

                        {error && (
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        )}

                        <button 
                            className="w-100 btn btn-primary" 
                            type="submit"
                            style={{
                                backgroundColor: '#2466FF',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '12px'
                            }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Verifying...
                                </>
                            ) : (
                                'Verify Email'
                            )}
                        </button>

                        <div className="text-center mt-3">
                            <button 
                                type="button" 
                                className="btn btn-link text-decoration-none"
                                onClick={handleResendCode}
                                disabled={isSubmitting}
                            >
                                Didn&apos;t receive the code? Resend
                            </button>
                        </div>

                        <p class="mt-5 mb-3 text-body-secondary text-center">&copy; gods 2025</p>
                    </form>
                </main>
            </body>
        </>
    );
} 