import { useState, useEffect, useRef } from "react"
import { Avatar } from "./Avatar"
import { useRouter } from "next/navigation"

interface HeaderProps {
  title: string
  subtitle: string
  rightContent?: React.ReactNode
}

export function Header({ title, subtitle, rightContent }: HeaderProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const router = useRouter()
  const profileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLogout = () => {
    // Add any logout logic here (clear tokens, cookies, etc)
    router.push('/login')
  }

  return (
    <header className="sticky top-0 z-30 flex flex-col md:flex-row md:items-center justify-between px-4 md:px-6 py-4 bg-black border-b border-[#1a1a1a]">
      <div className="mb-4 md:mb-0">
        <h1 className="text-xl md:text-2xl font-medium">{title}</h1>
        <p className="text-sm md:text-base text-[#4d4d4d]">{subtitle}</p>
      </div>
      
      <div className="flex items-center gap-4 md:gap-6">
        {rightContent}
        
        {/* Notifications & Profile */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <svg className="h-6 w-6 text-[#4d4d4d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#0055FF]"></span>
          </div>
          <div className="relative">
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="h-10 w-10 rounded-full bg-[#1a1a1a] overflow-hidden hover:ring-2 hover:ring-[#0055FF] transition-all duration-200"
            >
              <Avatar index={0} />
            </button>
            
            {isProfileOpen && (
              <div ref={profileRef} className="absolute right-0 mt-2 w-48 bg-[#0F1117] rounded-xl shadow-lg py-1 border border-[#1a1a1a] z-50">
                <div className="px-4 py-2 border-b border-[#1a1a1a]">
                  <div className="font-medium">Skylar Dias</div>
                  <div className="text-sm text-[#4d4d4d]">Admin</div>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-[#1a1a1a] transition-colors duration-200"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
} 