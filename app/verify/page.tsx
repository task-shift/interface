"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function VerifyPage() {
  const router = useRouter()
  const [code, setCode] = useState(['', '', '', '', '', ''])
  const [error, setError] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ]

  const handleInput = (index: number, value: string) => {
    // Clear error when user starts typing
    if (error) setError('')

    // Only allow numbers
    if (value && !/^\d+$/.test(value)) return

    const newCode = [...code]
    newCode[index] = value

    setCode(newCode)

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs[index + 1].current?.focus()
    }

    // If all digits are filled, verify automatically
    if (value && index === 5) {
      handleVerify(newCode)
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const newCode = [...code]
      newCode[index - 1] = ''
      setCode(newCode)
      inputRefs[index - 1].current?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').trim()
    
    // Check if pasted content is 6 digits
    if (/^\d{6}$/.test(pastedData)) {
      const newCode = pastedData.split('')
      setCode(newCode)
      inputRefs[5].current?.focus()
    }
  }

  const handleVerify = async (codeToVerify = code) => {
    // Check if code is complete
    if (codeToVerify.some(digit => !digit)) {
      setError('Please enter all digits')
      return
    }

    setIsVerifying(true)
    setError('')

    try {
      // Here you would typically make an API call to verify the code
      // For now, we'll simulate a verification
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Simulate successful verification
      router.push('/overview')
    } catch (err) {
      setError('Invalid verification code')
    } finally {
      setIsVerifying(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-[#0055FF] rounded-xl flex items-center justify-center mx-auto mb-6">
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-2xl font-medium mb-2">Verify your email</h1>
          <p className="text-[#4d4d4d]">We've sent a 6-digit code to your email</p>
        </div>

        <div className="bg-[#0F1117] rounded-xl p-6 mb-4">
          <div className="flex gap-2 mb-6">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={inputRefs[index]}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInput(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-full h-14 bg-[#1a1a1a] border-2 border-[#262626] rounded-lg text-center text-2xl focus:border-[#0055FF] focus:outline-none transition-colors"
              />
            ))}
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center mb-4">
              {error}
            </div>
          )}

          <Button 
            className="w-full bg-[#0055FF] hover:bg-[#0044CC] text-white h-12"
            onClick={() => handleVerify()}
            disabled={isVerifying}
          >
            {isVerifying ? (
              <div className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Verifying...
              </div>
            ) : 'Verify Code'}
          </Button>
        </div>

        <div className="text-center">
          <p className="text-[#4d4d4d] text-sm">
            Didn't receive the code?{' '}
            <button 
              className="text-[#0055FF] hover:text-[#0044CC] transition-colors"
              onClick={() => {
                // Handle resend code logic here
                console.log('Resend code')
              }}
            >
              Resend
            </button>
          </p>
        </div>
      </div>
    </div>
  )
} 