"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Placeholder } from "../components/Placeholder"
import { Avatar } from "../components/Avatar"
import { useState } from "react"

const tasks = [
  {
    id: 1,
    title: "Design System Update",
    description: "Update the design system with new components and documentation",
    priority: "High",
    dueDate: "2024-03-20",
    assignee: "Sarah",
    status: "In Progress",
    progress: 65
  },
  {
    id: 2,
    title: "API Integration",
    description: "Integrate the new payment gateway API with the checkout system",
    priority: "Medium",
    dueDate: "2024-03-25",
    assignee: "Mike",
    status: "Not Started",
    progress: 0
  },
  {
    id: 3,
    title: "User Testing",
    description: "Conduct user testing sessions for the new features",
    priority: "Low",
    dueDate: "2024-03-22",
    assignee: "Lisa",
    status: "Completed",
    progress: 100
  },
  {
    id: 4,
    title: "Performance Optimization",
    description: "Optimize application performance and reduce loading times",
    priority: "High",
    dueDate: "2024-03-21",
    assignee: "John",
    status: "In Progress",
    progress: 45
  }
]

export default function TasksPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [message, setMessage] = useState("")
  const [isAiChatOpen, setIsAiChatOpen] = useState(true)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Left Sidebar */}
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

        {/* Logo */}
        <div className="flex items-center gap-2 mb-8 md:mb-10">
          <div className="w-8 h-8 bg-[#0055FF] rounded flex items-center justify-center">
            <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-lg md:text-xl font-semibold">TaskShift</span>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          <Link 
            href="/overview" 
            className="flex items-center gap-3 px-3 py-2 text-[#4d4d4d] hover:text-white rounded-lg group"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Overview
          </Link>
          <Link 
            href="/tasks" 
            className="flex items-center gap-3 px-3 py-2 bg-[#0055FF]/5 text-white rounded-lg"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Task
          </Link>
          <Link 
            href="/mentors" 
            className="flex items-center gap-3 px-3 py-2 text-[#4d4d4d] hover:text-white rounded-lg group"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Mentors
          </Link>
          <Link 
            href="/messages" 
            className="flex items-center gap-3 px-3 py-2 text-[#4d4d4d] hover:text-white rounded-lg group"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Message
          </Link>
          <Link 
            href="/settings" 
            className="flex items-center gap-3 px-3 py-2 text-[#4d4d4d] hover:text-white rounded-lg group"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
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
            <h1 className="text-xl md:text-2xl font-medium">Tasks</h1>
            <p className="text-sm md:text-base text-[#4d4d4d]">Manage and track your tasks</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#4d4d4d]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <Input 
                placeholder="Search tasks..." 
                className="pl-10 bg-[#0F1117] border-[#1a1a1a] text-white placeholder:text-[#4d4d4d]"
              />
            </div>
          </div>
        </header>

        <div className="p-4 md:p-6 flex flex-col gap-6">
          {/* AI Chat Section - Always shown first */}
          <div className="w-full">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">Task Agent</h2>
              <Button 
                variant="ghost" 
                className="text-[#4d4d4d] hover:text-white hover:bg-[#1a1a1a]"
                onClick={() => setIsAiChatOpen(!isAiChatOpen)}
              >
                {isAiChatOpen ? (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </Button>
            </div>

            {isAiChatOpen && (
              <div className="bg-[#0F1117] rounded-xl border border-[#1a1a1a] overflow-hidden">
                {/* Chat Messages Area */}
                <div className="h-[300px] md:h-[400px] p-4 overflow-y-auto">
                  <div className="h-full w-full flex items-center justify-center">
                    <div className="text-center max-w-sm mx-auto">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#0055FF] to-[#0044CC] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#0055FF]/20">
                        <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none">
                          <path d="M21 12c0 1.2-4 2.4-4 3.6s2.8-.6 2.8.6c0 .3-.2.6-.3.9-.3.7-.7 1.4-1.2 1.9-.2.3-.5.5-.8.5-.4.1-.9-.1-1.5-.4-.6-.3-1.2-.7-1.8-1.2-.5-.4-1-.8-1.5-1.1-.5-.4-1-.7-1.4-1-.6-.4-1.2-.8-1.8-1.1-.7-.4-1.3-.7-1.9-.8-.6-.2-1.1-.3-1.6-.2-.4 0-.7.2-1 .4-.5.4-.8 1-.9 1.7 0 .3 0 .5.1.8-1.1-1.3-1.8-3-1.8-4.8 0-4.4 3.6-8 8-8s8 3.6 8 8z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M19.5 17.1c-.3.7-.7 1.4-1.2 1.9M14.7 14.8c-.5-.4-1-.8-1.5-1.1-.5-.4-1-.7-1.4-1M7.5 11.4c-.7-.4-1.3-.7-1.9-.8M4 15.5c0 .3 0 .5.1.8-1.1-1.3-1.8-3-1.8-4.8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-medium text-white mb-2">Task Agent Assistant</h3>
                      <p className="text-[#4d4d4d] mb-8">Ready to help you manage tasks efficiently</p>
                      <div className="space-y-3">
                        <button 
                          className="w-full px-4 py-3 bg-[#1a1a1a] hover:bg-[#262626] text-left text-[#808080] hover:text-white rounded-xl transition-colors duration-200 group"
                          onClick={() => setMessage("Create a high priority task for updating the design system")}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#262626] group-hover:bg-[#333333] rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="h-4 w-4 text-[#0055FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            Create a high priority task
                          </div>
                        </button>
                        <button 
                          className="w-full px-4 py-3 bg-[#1a1a1a] hover:bg-[#262626] text-left text-[#808080] hover:text-white rounded-xl transition-colors duration-200 group"
                          onClick={() => setMessage("Add a new task for the API integration due next week")}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#262626] group-hover:bg-[#333333] rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="h-4 w-4 text-[#0055FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            Schedule API integration task
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Input Area */}
                <div className="p-4 border-t border-[#1a1a1a] bg-[#0F1117]">
                  <div className="flex flex-col gap-4">
                    <div className="relative">
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Describe your task..."
                        className="w-full pl-4 pr-12 py-3 bg-[#1a1a1a] border-2 border-[#262626] focus:border-[#0055FF] placeholder:text-[#4d4d4d] text-white rounded-xl resize-none transition-colors duration-200"
                        rows={3}
                      />
                      <div className="absolute right-3 bottom-3 flex gap-2">
                        <button className="text-[#0055FF] hover:text-[#0044CC] transition-colors p-2 hover:bg-[#262626] rounded-lg">
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                          </svg>
                        </button>
                        <button className="text-[#0055FF] hover:text-[#0044CC] transition-colors p-2 hover:bg-[#262626] rounded-lg">
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <button 
                      className="w-full bg-[#0055FF] hover:bg-[#0044CC] text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 group"
                      onClick={() => {
                        // Handle sending message to AI
                        console.log("Sending message:", message)
                      }}
                    >
                      <span>Send to AI</span>
                      <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 24 24" fill="none">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tasks Section */}
          <div className="w-full">
            {/* Task Filters */}
            <div className="mb-6 border-b border-[#1a1a1a]">
              <div className="flex gap-2 pb-4 overflow-x-auto no-scrollbar">
                {["all", "not started", "in progress", "completed"].map((filter) => (
                  <Button
                    key={filter}
                    variant={selectedFilter === filter ? "default" : "ghost"}
                    className={`${
                      selectedFilter === filter 
                        ? "bg-[#0055FF] hover:bg-[#0044CC] text-white" 
                        : "text-[#4d4d4d] hover:text-white hover:bg-[#1a1a1a]"
                    } whitespace-nowrap`}
                    onClick={() => setSelectedFilter(filter)}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </Button>
                ))}
              </div>
            </div>

            {/* Tasks Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tasks.map((task) => (
                <div key={task.id} className="bg-[#0F1117] rounded-xl p-4 md:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-medium mb-1">{task.title}</h3>
                      <p className="text-sm text-[#4d4d4d] line-clamp-2">{task.description}</p>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs ${
                      task.priority === "High" ? "bg-red-500/10 text-red-500" :
                      task.priority === "Medium" ? "bg-yellow-500/10 text-yellow-500" :
                      "bg-green-500/10 text-green-500"
                    }`}>
                      {task.priority}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-[#4d4d4d]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-[#4d4d4d]">Due: {task.dueDate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Avatar index={tasks.indexOf(task)} />
                        <span>{task.assignee}</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-[#4d4d4d]">{task.status}</span>
                        <span>{task.progress}%</span>
                      </div>
                      <div className="h-2 bg-[#1a1a1a] rounded-full">
                        <div 
                          className="h-full rounded-full bg-[#0055FF]"
                          style={{ width: `${task.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 