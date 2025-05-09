import { Metadata } from "next"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export const metadata: Metadata = {
  title: "TaskShift | Task Management",
  description: "Task Management Dashboard",
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Left Sidebar */}
      <aside className="fixed left-0 top-0 w-[240px] h-screen bg-[#111111] border-r border-[#222222] p-6">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-10">
          <div className="w-8 h-8 bg-[#0055FF] rounded flex items-center justify-center">
            <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xl font-semibold">TaskShift</span>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          <Link 
            href="/overview" 
            className="flex items-center gap-3 px-3 py-2 text-[#666666] hover:text-white rounded-lg group"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Overview
          </Link>
          <Link 
            href="/tasks" 
            className="flex items-center gap-3 px-3 py-2 bg-[#0055FF]/10 text-white rounded-lg"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Task
          </Link>
          <Link 
            href="/mentors" 
            className="flex items-center gap-3 px-3 py-2 text-[#666666] hover:text-white rounded-lg group"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Mentors
          </Link>
          <Link 
            href="/messages" 
            className="flex items-center gap-3 px-3 py-2 text-[#666666] hover:text-white rounded-lg group"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Message
          </Link>
          <Link 
            href="/settings" 
            className="flex items-center gap-3 px-3 py-2 text-[#666666] hover:text-white rounded-lg group"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </Link>
        </nav>

        {/* Help Center */}
        <div className="absolute bottom-8 left-6 right-6">
          <div className="bg-[#111111] rounded-xl p-4 text-center border border-[#222222]">
            <div className="w-8 h-8 bg-[#222222] rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white font-medium mb-1">Help Center</h3>
            <p className="text-sm text-[#666666] mb-3">Having Trouble in Learning. Please contact us for more questions.</p>
            <Button className="w-full bg-[#222222] hover:bg-[#333333] text-white border-0">
              Go To Help Center
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="pl-[240px]">
        {/* Top Navigation */}
        <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#111111] border-b border-[#222222]">
          <h1 className="text-xl font-medium">Explore Task</h1>
          
          <div className="flex items-center gap-6">
            {/* Search */}
            <div className="relative">
              <Input
                type="text"
                placeholder="Search Task"
                className="w-[300px] pl-10 bg-[#0A0A0A] border-[#222222] placeholder:text-[#666666] text-white"
              />
              <svg className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-[#666666]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category & Sort */}
            <Button variant="outline" className="border-[#222222] text-[#666666] hover:bg-[#222222] bg-transparent">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              Category
            </Button>

            <Button variant="outline" className="border-[#222222] text-[#666666] hover:bg-[#222222] bg-transparent">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
              Sort By: Deadline
            </Button>

            {/* User Profile */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <svg className="h-6 w-6 text-[#666666]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#0055FF]"></span>
              </div>
              <div className="h-10 w-10 rounded-full bg-[#222222] overflow-hidden">
                <Image
                  src="/placeholder-avatar.jpg"
                  alt="User avatar"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* AI Assistant Chat Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-medium">AI Task Assistant</h2>
              <Button variant="outline" className="border-[#222222] text-[#666666] hover:bg-[#222222] bg-transparent">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
                Clear Chat
              </Button>
            </div>

            <div className="bg-[#111111] rounded-xl border border-[#222222] overflow-hidden h-[600px] flex flex-col">
              {/* Chat Messages Area */}
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="h-full w-full flex items-center justify-center text-[#666666]">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#222222] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="h-8 w-8 text-[#0055FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-lg mb-2">No messages yet</p>
                    <p className="text-sm">Start a conversation with your AI assistant</p>
                  </div>
                </div>
              </div>

              {/* Chat Input Area */}
              <div className="p-4 border-t border-[#222222] bg-[#111111]">
                <div className="flex items-center gap-4">
                  <div className="flex-1 relative">
                    <textarea
                      placeholder="Type your message..."
                      className="w-full pl-4 pr-12 py-3 bg-[#0A0A0A] border border-[#222222] placeholder:text-[#666666] text-white rounded-xl resize-none min-h-[100px]"
                      style={{ height: '100px' }}
                    />
                    <div className="absolute right-3 bottom-3 flex gap-2">
                      <button className="text-[#0055FF] hover:text-[#0044CC] transition-colors p-2 hover:bg-[#222222] rounded-lg">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                      </button>
                      <button className="text-[#0055FF] hover:text-[#0044CC] transition-colors p-2 hover:bg-[#222222] rounded-lg">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <Button className="bg-[#0055FF] hover:bg-[#0044CC] text-white px-6 h-[100px]">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* New Task Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-medium">New Task</h2>
              <div className="flex gap-2">
                <Button variant="ghost" className="text-[#666666] hover:text-white hover:bg-[#222222]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </Button>
                <Button variant="ghost" className="text-[#666666] hover:text-white hover:bg-[#222222]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                {
                  title: "Creating Mobile App Design",
                  type: "UI UX Design",
                  progress: 75,
                  time: "3 Days Left",
                  image: "/mobile-design.jpg"
                },
                {
                  title: "Creating Perfect Website",
                  type: "Web Developer",
                  progress: 85,
                  time: "4 Days Left",
                  image: "/perfect-website.jpg"
                },
                {
                  title: "Mobile App Design",
                  type: "UI UX Design",
                  progress: 65,
                  time: "3 Days Left",
                  image: "/app-design.jpg"
                }
              ].map((task, index) => (
                <div key={index} className="bg-[#111111] rounded-xl overflow-hidden shadow-lg border border-[#222222]">
                  <div className="h-40 relative">
                    <Image
                      src={task.image}
                      alt={task.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-1">{task.title}</h3>
                    <p className="text-sm text-[#666666] mb-4">{task.type}</p>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-[#666666]">Progress</span>
                        <span className="text-[#0055FF]">{task.progress}%</span>
                      </div>
                      <div className="h-1 bg-[#222222] rounded-full">
                        <div 
                          className="h-full bg-[#0055FF] rounded-full"
                          style={{ width: `${task.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Time and Team */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-[#666666]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm text-[#666666]">{task.time}</span>
                      </div>
                      <div className="flex -space-x-2">
                        {[1,2,3,4,5].map((i) => (
                          <div key={i} className="h-8 w-8 rounded-full border-2 border-[#111111]">
                            <Image
                              src={`/team-member-${i}.jpg`}
                              alt={`Team member ${i}`}
                              width={32}
                              height={32}
                              className="rounded-full"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
} 