"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar } from "../components/Avatar"
import { useState } from "react"
import { Sidebar } from "../components/Sidebar"

interface Organization {
  id: number
  name: string
  logo: string
}

// Organization data
const organizations: Organization[] = [
  { id: 1, name: "TaskShift", logo: "T" },
  { id: 2, name: "Design Team", logo: "D" },
  { id: 3, name: "Development Team", logo: "D" },
  { id: 4, name: "Marketing Team", logo: "M" }
]

export default function ProfilePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-black border-b border-[#1a1a1a] flex items-center justify-between px-4 md:hidden z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#0055FF] rounded flex items-center justify-center">
            <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-lg font-semibold">TaskShift</span>
        </div>
        <button 
          className="text-white"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <main className="pt-16 md:pt-0 md:pl-[240px]">
        {/* Top Navigation */}
        <header className="sticky top-0 z-30 flex flex-col md:flex-row md:items-center justify-between px-4 md:px-6 py-4 bg-black border-b border-[#1a1a1a]">
          <div className="mb-4 md:mb-0">
            <h1 className="text-xl md:text-2xl font-medium">Profile</h1>
            <p className="text-sm md:text-base text-[#4d4d4d]">Manage your account settings</p>
          </div>
          
          <Button className="bg-[#0055FF] hover:bg-[#0044CC]">
            Save Changes
          </Button>
        </header>

        <div className="p-4 md:p-6">
          {/* Profile Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="md:col-span-1">
              <div className="bg-[#0F1117] rounded-xl p-6">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-[#1a1a1a] overflow-hidden mb-4">
                    <Avatar index={0} />
                  </div>
                  <h2 className="text-lg font-medium">Skylar Dias</h2>
                  <p className="text-[#4d4d4d] mb-4">Product Designer</p>
                  <Button variant="outline" className="w-full border-[#1a1a1a] text-[#4d4d4d] hover:bg-[#1a1a1a] hover:text-white">
                    Change Photo
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-[#1a1a1a]">
                  <h3 className="text-sm font-medium mb-4">Account Info</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#4d4d4d]">Member since</span>
                      <span>Mar 15, 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#4d4d4d]">Role</span>
                      <span>Admin</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#4d4d4d]">Status</span>
                      <span className="text-green-500">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-[#0F1117] rounded-xl p-6">
                <h2 className="text-lg font-medium mb-6">Personal Information</h2>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-[#4d4d4d] mb-1.5 block">First Name</label>
                      <Input 
                        defaultValue="Skylar"
                        className="bg-[#1a1a1a] border-[#262626] focus:border-[#0055FF]"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-[#4d4d4d] mb-1.5 block">Last Name</label>
                      <Input 
                        defaultValue="Dias"
                        className="bg-[#1a1a1a] border-[#262626] focus:border-[#0055FF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm text-[#4d4d4d] mb-1.5 block">Email</label>
                    <Input 
                      type="email"
                      defaultValue="skylar@taskshift.com"
                      className="bg-[#1a1a1a] border-[#262626] focus:border-[#0055FF]"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-[#4d4d4d] mb-1.5 block">Job Title</label>
                    <Input 
                      defaultValue="Product Designer"
                      className="bg-[#1a1a1a] border-[#262626] focus:border-[#0055FF]"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-[#4d4d4d] mb-1.5 block">Bio</label>
                    <textarea 
                      defaultValue="Product designer with 5+ years of experience in creating user-centered digital products."
                      className="w-full h-24 px-3 py-2 bg-[#1a1a1a] border border-[#262626] rounded-md focus:border-[#0055FF] focus:outline-none text-white placeholder:text-[#4d4d4d]"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-[#0F1117] rounded-xl p-6 mt-4">
                <h2 className="text-lg font-medium mb-6">Organizations</h2>
                <div className="space-y-3">
                  {organizations.map((org) => (
                    <div
                      key={org.id}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#1a1a1a] border border-[#262626] group"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-[#0055FF] to-[#0044CC] rounded-lg flex items-center justify-center text-white font-medium shadow-lg shadow-[#0055FF]/10">
                        {org.logo}
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium">{org.name}</p>
                        <p className="text-sm text-[#4d4d4d]">
                          {org.id === 1 ? 'Owner' : 'Member'}
                        </p>
                      </div>
                      <Button variant="ghost" size="icon" className="text-[#4d4d4d] hover:text-white hover:bg-[#262626]">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </Button>
                    </div>
                  ))}

                  <Button 
                    variant="outline" 
                    className="w-full border-[#262626] text-[#4d4d4d] hover:bg-[#1a1a1a] hover:text-white flex items-center gap-2 justify-center"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Create Organization
                  </Button>
                </div>
              </div>

              <div className="bg-[#0F1117] rounded-xl p-6 mt-4">
                <h2 className="text-lg font-medium mb-6">Password</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-[#4d4d4d] mb-1.5 block">Current Password</label>
                    <Input 
                      type="password"
                      className="bg-[#1a1a1a] border-[#262626] focus:border-[#0055FF]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-[#4d4d4d] mb-1.5 block">New Password</label>
                      <Input 
                        type="password"
                        className="bg-[#1a1a1a] border-[#262626] focus:border-[#0055FF]"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-[#4d4d4d] mb-1.5 block">Confirm New Password</label>
                      <Input 
                        type="password"
                        className="bg-[#1a1a1a] border-[#262626] focus:border-[#0055FF]"
                      />
                    </div>
                  </div>

                  <Button variant="outline" className="border-[#1a1a1a] text-[#4d4d4d] hover:bg-[#1a1a1a] hover:text-white">
                    Change Password
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 