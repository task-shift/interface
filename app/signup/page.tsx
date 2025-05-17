'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { api } from '@/services/api'
import { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export const metadata: Metadata = {
  title: "Sign Up | TaskShift",
  description: "Create your TaskShift account",
}

export default function SignUpPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    
    try {
      const response = await api.register({
        username: formData.get('username') as string,
        email: formData.get('email') as string,
        fullname: formData.get('fullname') as string,
        password: formData.get('password') as string,
        type: 'user'
      })

      if (response.success) {
        // Store user data in your app's state management
        // For example, using Zustand or Context
        
        // Redirect to dashboard
        router.push('/overview')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="max-w-3xl mx-auto flex items-center py-3 px-3">
        <Link href="/" className="flex items-center gap-1 group">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white transition-transform duration-300 group-hover:scale-110"
          >
            <path
              d="M13 3L4 14H13L11 21L20 10H11L13 3Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-base font-medium bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-400 group-hover:to-white">TaskShift</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="container flex items-center justify-center min-h-[calc(100vh-64px)]">
        <Card className="w-[400px] bg-zinc-900 border-zinc-800">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-white">Create an account</CardTitle>
            <CardDescription className="text-zinc-400">
              Enter your information to get started
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500">
                {error}
              </div>
            )}
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-white">Full Name</Label>
              <Input 
                id="name" 
                type="text"
                placeholder="John Doe"
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="m@example.com"
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-white">Username</Label>
              <Input 
                id="name" 
                type="text"
                placeholder="john2690"
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input 
                id="password" 
                type="password"
                className="bg-zinc-800 border-zinc-700 text-white"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" className="border-zinc-700 data-[state=checked]:bg-blue-600" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none text-zinc-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <Link href="/terms" className="text-blue-400 hover:text-blue-300">
                  terms and conditions
                </Link>
              </label>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white">
              Create account
            </Button>
            <p className="text-sm text-center text-zinc-400">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-400 hover:text-blue-300">
                Sign in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
} 