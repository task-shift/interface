"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { usePathname } from "next/navigation"

// Organization data
const organizations = [
  { id: 1, name: "TaskShift", logo: "T" },
  { id: 2, name: "Design Team", logo: "D" },
  { id: 3, name: "Development Team", logo: "D" },
  { id: 4, name: "Marketing Team", logo: "M" }
]

interface SidebarProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
}

export function Sidebar({ isMobileMenuOpen, setIsMobileMenuOpen }: SidebarProps) {
  const [isOrgDropdownOpen, setIsOrgDropdownOpen] = useState(false)
  const [currentOrg, setCurrentOrg] = useState(organizations[0])
  const pathname = usePathname()

  return (
    <>
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 w-full md:w-[240px] h-screen bg-black border-r border-[#1a1a1a] p-4 md:p-6 z-[70] transform ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 transition-transform duration-200 ease-in-out`}>
        {/* Close button for mobile */}
        <button 
          className="absolute top-4 right-4 text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Logo and Organization Switcher */}
        <div className="mb-8 md:mb-10 space-y-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0055FF] rounded flex items-center justify-center">
              <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-lg md:text-xl font-semibold">TaskShift</span>
          </div>

          {/* Organization Switcher */}
          <div>
            <button
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-[#0F1117] hover:bg-[#1a1a1a] transition-colors duration-200 group border border-[#1a1a1a]"
              onClick={() => setIsOrgDropdownOpen(!isOrgDropdownOpen)}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-[#0055FF] to-[#0044CC] rounded-lg flex items-center justify-center text-white font-medium shadow-lg shadow-[#0055FF]/10">
                {currentOrg.logo}
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm text-[#808080]">Organization</p>
                <p className="text-white font-medium truncate">{currentOrg.name}</p>
              </div>
              <svg 
                className={`h-5 w-5 text-[#4d4d4d] transition-transform duration-200 ${isOrgDropdownOpen ? 'rotate-180' : ''}`} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Organization Dropdown */}
            {isOrgDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-30" 
                  onClick={() => setIsOrgDropdownOpen(false)}
                />
                <div className="absolute left-4 right-4 mt-2 bg-[#0F1117] border border-[#1a1a1a] rounded-xl shadow-lg overflow-hidden z-40">
                  <div className="p-2 space-y-1">
                    {organizations.map((org) => (
                      <button
                        key={org.id}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors duration-200 ${
                          currentOrg.id === org.id 
                            ? 'bg-[#0055FF] text-white' 
                            : 'text-[#808080] hover:bg-[#1a1a1a] hover:text-white'
                        }`}
                        onClick={() => {
                          setCurrentOrg(org)
                          setIsOrgDropdownOpen(false)
                        }}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium shadow-lg ${
                          currentOrg.id === org.id 
                            ? 'bg-[#0044CC] shadow-[#0055FF]/20' 
                            : 'bg-[#1a1a1a]'
                        }`}>
                          {org.logo}
                        </div>
                        <span className="flex-1 text-left truncate">{org.name}</span>
                      </button>
                    ))}
                  </div>
                  <div className="p-2 border-t border-[#1a1a1a]">
                    <button
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#808080] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-200 group"
                      onClick={() => {
                        console.log("Create new organization")
                        setIsOrgDropdownOpen(false)
                      }}
                    >
                      <div className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center group-hover:bg-[#262626] transition-colors duration-200">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <span>Create Organization</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          <Link 
            href="/overview" 
            className={`flex items-center gap-3 px-3 py-2 rounded-lg group ${
              pathname === '/overview'
                ? 'bg-[#0055FF]/5 text-white'
                : 'text-[#4d4d4d] hover:text-white'
            }`}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Overview
          </Link>
          <Link 
            href="/tasks" 
            className={`flex items-center gap-3 px-3 py-2 rounded-lg group ${
              pathname === '/tasks'
                ? 'bg-[#0055FF]/5 text-white'
                : 'text-[#4d4d4d] hover:text-white'
            }`}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Task
          </Link>
          <Link 
            href="/agents" 
            className={`flex items-center gap-3 px-3 py-2 rounded-lg group ${
              pathname === '/agents'
                ? 'bg-[#0055FF]/5 text-white'
                : 'text-[#4d4d4d] hover:text-white'
            }`}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.7274 20.4471C19.2716 19.1713 18.2672 18.0439 16.8701 17.2399C15.4729 16.4358 13.7611 16 12 16C10.2389 16 8.52706 16.4358 7.12991 17.2399C5.73276 18.0439 4.72839 19.1713 4.27259 20.4471M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" />
            </svg>
            Agents
          </Link>
          <Link 
            href="/profile" 
            className={`flex items-center gap-3 px-3 py-2 rounded-lg group ${
              pathname === '/profile'
                ? 'bg-[#0055FF]/5 text-white'
                : 'text-[#4d4d4d] hover:text-white'
            }`}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Profile
          </Link>
         
        </nav>

        {/* Help Center */}
        <div className="hidden md:block absolute bottom-8 left-6 right-6">
          <div className="bg-black rounded-xl p-4 text-center border border-[#1a1a1a]">
            <div className="w-8 h-8 bg-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white font-medium mb-1">Help Center</h3>
            <p className="text-sm text-[#4d4d4d] mb-3">Having Trouble in Learning. Please contact us for more questions.</p>
            <Button className="w-full bg-[#1a1a1a] hover:bg-[#262626] text-white border-0">
              Go To Help Center
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
} 