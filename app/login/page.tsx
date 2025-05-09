import { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: "Login | TaskShift",
  description: "Login to your TaskShift account",
}

export default function LoginPage() {
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
            <CardTitle className="text-2xl text-white">Welcome back</CardTitle>
            <CardDescription className="text-zinc-400">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
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
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input 
                id="password" 
                type="password"
                className="bg-zinc-800 border-zinc-700 text-white"
              />
            </div>
            <div className="flex items-center justify-between">
              <Link href="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300">
                Forgot password?
              </Link>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white">
              Sign in
            </Button>
            <p className="text-sm text-center text-zinc-400">
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-400 hover:text-blue-300">
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
} 