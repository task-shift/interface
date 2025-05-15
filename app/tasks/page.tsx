"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Placeholder } from "../components/Placeholder"
import { Avatar } from "../components/Avatar"
import { useState } from "react"
import { Sidebar } from "../components/Sidebar"
import { Header } from "../components/Header"

interface User {
  id: number
  name: string
  role: string
}

// Add users data
const users: User[] = [
  { id: 1, name: "Sarah Johnson", role: "Designer" },
  { id: 2, name: "Mike Chen", role: "Developer" },
  { id: 3, name: "Lisa Brown", role: "Product Manager" },
  { id: 4, name: "John Smith", role: "Engineer" },
  { id: 5, name: "Emma Davis", role: "UX Researcher" }
]

const tasks = [
  {
    id: 1,
    title: "Design System Update",
    description: "Update the design system with new components and documentation",
    priority: "High",
    dueDate: "2024-03-20",
    assignee: "Sarah",
    status: "In Progress"
  },
  {
    id: 2,
    title: "API Integration",
    description: "Integrate the new payment gateway API with the checkout system",
    priority: "Medium",
    dueDate: "2024-03-25",
    assignee: "Mike",
    status: "Not Started"
  },
  {
    id: 3,
    title: "User Testing",
    description: "Conduct user testing sessions for the new features",
    priority: "Low",
    dueDate: "2024-03-22",
    assignee: "Lisa",
    status: "Completed"
  },
  {
    id: 4,
    title: "Performance Optimization",
    description: "Optimize application performance and reduce loading times",
    priority: "High",
    dueDate: "2024-03-21",
    assignee: "John",
    status: "In Progress"
  }
]

// Add organizations data
const organizations = [
  { id: 1, name: "TaskShift", logo: "T" },
  { id: 2, name: "Design Team", logo: "D" },
  { id: 3, name: "Development Team", logo: "D" },
  { id: 4, name: "Marketing Team", logo: "M" }
]

export default function TasksPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [message, setMessage] = useState("")
  const [isAiChatOpen, setIsAiChatOpen] = useState(true)
  const [isOrgDropdownOpen, setIsOrgDropdownOpen] = useState(false)
  const [currentOrg, setCurrentOrg] = useState(organizations[0])
  const [showMentionPopup, setShowMentionPopup] = useState(false)
  const [mentionFilter, setMentionFilter] = useState("")
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 })

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setMessage(value)

    // Get cursor position for popup placement
    const textarea = e.target
    const cursorIndex = textarea.selectionStart
    const textBeforeCursor = value.substring(0, cursorIndex)
    
    // Get cursor coordinates
    const textareaRect = textarea.getBoundingClientRect()
    const cursorCoords = getCursorCoordinates(textarea, cursorIndex)
    
    // Calculate position relative to textarea
    const top = cursorCoords.top - textareaRect.top
    const left = cursorCoords.left - textareaRect.left

    // Check if we should show the mention popup
    const lastChar = value[cursorIndex - 1]
    const isTypingMention = lastChar === '@'
    
    if (isTypingMention) {
      setShowMentionPopup(true)
      setMentionFilter("")
      setCursorPosition({ top, left })
    } else if (showMentionPopup) {
      // Find the last @ symbol before cursor
      const lastAtIndex = value.substring(0, cursorIndex).lastIndexOf('@')
      
      // If we can't find @ symbol or there's a space after @, close the popup
      if (lastAtIndex === -1 || value.substring(lastAtIndex, cursorIndex).includes(' ')) {
        setShowMentionPopup(false)
      } else {
        // Update the filter with text after @
        const mentionText = value.substring(lastAtIndex + 1, cursorIndex)
        setMentionFilter(mentionText.toLowerCase())
      }
    }
  }

  // Helper function to get cursor coordinates
  const getCursorCoordinates = (textarea: HTMLTextAreaElement, cursorIndex: number) => {
    // Create a hidden div with the same styling as textarea
    const div = document.createElement('div')
    div.style.position = 'absolute'
    div.style.top = '0'
    div.style.left = '0'
    div.style.visibility = 'hidden'
    div.style.whiteSpace = 'pre-wrap'
    div.style.wordWrap = 'break-word'
    div.style.padding = window.getComputedStyle(textarea).padding
    div.style.width = window.getComputedStyle(textarea).width
    div.style.font = window.getComputedStyle(textarea).font
    div.style.lineHeight = window.getComputedStyle(textarea).lineHeight

    // Add text content up to cursor
    const textBeforeCursor = textarea.value.substring(0, cursorIndex)
    div.textContent = textBeforeCursor

    // Create a span for cursor position
    const span = document.createElement('span')
    span.textContent = '|'
    div.appendChild(span)

    // Add to document, measure, then remove
    document.body.appendChild(div)
    const rect = span.getBoundingClientRect()
    document.body.removeChild(div)

    return {
      top: rect.top,
      left: rect.left
    }
  }

  const handleMentionSelect = (user: User) => {
    const lastAtIndex = message.lastIndexOf('@')
    const newMessage = message.substring(0, lastAtIndex) + `@${user.name} ` + message.substring(lastAtIndex + mentionFilter.length + 1)
    setMessage(newMessage)
    setShowMentionPopup(false)
  }

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(mentionFilter) || 
    user.role.toLowerCase().includes(mentionFilter)
  )

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
        <Header 
          title="Tasks"
          subtitle="Manage and track your tasks"
          rightContent={
            <button className="bg-[#0055FF] text-white px-4 py-2 rounded-lg hover:bg-[#0044CC] transition-colors duration-200">
              + New Task
            </button>
          }
        />

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
                        onChange={handleMessageChange}
                        placeholder="Describe your task..."
                        className="w-full pl-4 pr-12 py-3 bg-[#1a1a1a] border-2 border-[#262626] focus:border-[#0055FF] placeholder:text-[#4d4d4d] text-white rounded-xl resize-none transition-colors duration-200"
                        rows={3}
                      />
                      {showMentionPopup && (
                        <div 
                          className="absolute z-50 bg-[#1a1a1a] border border-[#262626] rounded-lg shadow-lg max-h-48 overflow-y-auto w-64"
                          style={{ 
                            top: `${cursorPosition.top + 24}px`,
                            left: `${cursorPosition.left}px`
                          }}
                        >
                          {filteredUsers.map(user => (
                            <button
                              key={user.id}
                              className="w-full px-4 py-2 text-left hover:bg-[#262626] flex items-center gap-3"
                              onClick={() => handleMentionSelect(user)}
                            >
                              <Avatar index={user.id - 1} />
                              <div>
                                <div className="text-white">{user.name}</div>
                                <div className="text-[#4d4d4d] text-sm">{user.role}</div>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
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
                      task.status === "Not Started" ? "bg-yellow-500/10 text-yellow-500" :
                      task.status === "In Progress" ? "bg-blue-500/10 text-blue-500" :
                      "bg-green-500/10 text-green-500"
                    }`}>
                      {task.status}
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
                      <div className="flex justify-between text-sm">
                        <span className="text-[#4d4d4d]">Priority: {task.priority}</span>
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