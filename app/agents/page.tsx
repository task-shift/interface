"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar } from "../components/Avatar"
import { useState } from "react"
import { Sidebar } from "../components/Sidebar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "../components/Header"

// Sample data for agents
const agents = [
  {
    id: 1,
    name: "Sales Assistant",
    platform: "WhatsApp",
    status: "Active",
    messages: 1234,
    lastActive: "2 mins ago",
    description: "Handles customer inquiries and sales support",
    messageHistory: [
      { id: 1, content: "Hello! How can I help you today?", type: "sent", timestamp: "10:30 AM" },
      { id: 2, content: "I'm interested in your product", type: "received", timestamp: "10:31 AM" },
      { id: 3, content: "Great! Let me tell you about our features", type: "sent", timestamp: "10:32 AM" }
    ],
    metrics: {
      responseTime: [
        { date: 'Mon', value: 2.5 },
        { date: 'Tue', value: 2.1 },
        { date: 'Wed', value: 3.2 },
        { date: 'Thu', value: 2.8 },
        { date: 'Fri', value: 2.3 },
        { date: 'Sat', value: 2.0 },
        { date: 'Sun', value: 2.4 }
      ],
      messagesPerDay: [
        { date: 'Mon', value: 145 },
        { date: 'Tue', value: 132 },
        { date: 'Wed', value: 164 },
        { date: 'Thu', value: 156 },
        { date: 'Fri', value: 139 },
        { date: 'Sat', value: 98 },
        { date: 'Sun', value: 89 }
      ],
      satisfactionRate: 92
    }
  },
  {
    id: 2,
    name: "Sales Assistant",
    platform: "WhatsApp",
    status: "Active",
    messages: 1234,
    lastActive: "2 mins ago",
    description: "Handles customer inquiries and sales support",
    messageHistory: [
      { id: 1, content: "Hello! How can I help you today?", type: "sent", timestamp: "10:30 AM" },
      { id: 2, content: "I'm interested in your product", type: "received", timestamp: "10:31 AM" },
      { id: 3, content: "Great! Let me tell you about our features", type: "sent", timestamp: "10:32 AM" }
    ],
    metrics: {
      responseTime: [
        { date: 'Mon', value: 2.5 },
        { date: 'Tue', value: 2.1 },
        { date: 'Wed', value: 3.2 },
        { date: 'Thu', value: 2.8 },
        { date: 'Fri', value: 2.3 },
        { date: 'Sat', value: 2.0 },
        { date: 'Sun', value: 2.4 }
      ],
      messagesPerDay: [
        { date: 'Mon', value: 145 },
        { date: 'Tue', value: 132 },
        { date: 'Wed', value: 164 },
        { date: 'Thu', value: 156 },
        { date: 'Fri', value: 139 },
        { date: 'Sat', value: 98 },
        { date: 'Sun', value: 89 }
      ],
      satisfactionRate: 92
    }
  },
]

export default function AgentsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedAgent, setSelectedAgent] = useState<typeof agents[0] | null>(null)

  // Filter to only show first 3 agents
  const displayedAgents = agents.slice(0, 3)

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
          title="Agents"
          subtitle="Manage and monitor your agents"
          rightContent={
            <button className="bg-[#0055FF] text-white px-4 py-2 rounded-lg hover:bg-[#0044CC] transition-colors duration-200">
              + New Agent
            </button>
          }
        />

        <div className="p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Agent List */}
            <div className="md:col-span-1">
              <div className={`${displayedAgents.length > 1 ? 'h-[400px]' : 'h-full'} overflow-y-auto pr-2 space-y-4 scrollbar-thin scrollbar-thumb-[#262626] scrollbar-track-[#1a1a1a]`}>
                {displayedAgents.map((agent) => (
                  <div
                    key={agent.id}
                    className={`bg-[#0F1117] rounded-xl p-6 cursor-pointer transition-colors ${
                      selectedAgent?.id === agent.id ? 'border border-[#0055FF]' : 'hover:bg-[#1a1a1a]'
                    } ${displayedAgents.length === 1 ? 'h-[400px] flex flex-col' : ''}`}
                    onClick={() => setSelectedAgent(agent)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                        {agent.platform === "WhatsApp" && (
                          <svg className="h-7 w-7 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a10.065 10.065 0 004.779 1.2h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.922-7.062A9.944 9.944 0 0012.012 2zm-3.97 14.487l-2.587.677 1.161-1.66a8.277 8.277 0 01-1.423-4.552c0-4.569 3.721-8.285 8.294-8.285 2.213 0 4.294.862 5.857 2.425a8.214 8.214 0 012.424 5.857c-.001 4.569-3.722 8.285-8.295 8.285h-.004c-1.43 0-2.828-.371-4.061-1.073l-.367-.221z"/>
                          </svg>
                        )}
                        {agent.platform === "Slack" && (
                          <svg className="h-7 w-7 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                          </svg>
                        )}
                        {agent.platform === "Telegram" && (
                          <svg className="h-7 w-7 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
                          </svg>
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">{agent.name}</h3>
                        <p className="text-sm text-[#4d4d4d]">{agent.platform}</p>
                        <div className={`inline-block px-2 py-1 rounded text-xs mt-2 ${
                          agent.status === "Active" ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                        }`}>
                          {agent.status}
                        </div>
                      </div>
                    </div>

                    {displayedAgents.length === 1 && (
                      <>
                        <p className="text-sm text-[#4d4d4d] mt-6">{agent.description}</p>
                        <div className="mt-6 space-y-4 relative">
                          <h3 className="font-medium">Recent Messages</h3>
                          <div className="space-y-3 relative">
                            {agent.messageHistory.slice(0, 2).map((message) => (
                              <div
                                key={message.id}
                                className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}
                              >
                                <div className={`max-w-[85%] rounded-lg p-2.5 backdrop-blur-[2px] bg-opacity-80 ${
                                  message.type === 'sent' 
                                    ? 'bg-[#0055FF]/80 text-white/90' 
                                    : 'bg-[#1a1a1a]/80 text-white/90'
                                }`}>
                                  <p className="text-sm">{message.content}</p>
                                  <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px] rounded-lg pointer-events-none" />
                        </div>
                      </>
                    )}

                    <div className={`flex items-center justify-between text-sm text-[#4d4d4d] ${displayedAgents.length === 1 ? 'mt-auto' : 'mt-6'}`}>
                      <div>
                        <div className="text-white">{agent.messages}</div>
                        <div className="text-[#4d4d4d]">Total messages</div>
                      </div>
                      <div className="text-right">
                        <div>Last active</div>
                        <div>{agent.lastActive}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Agent Details */}
            <div className="md:col-span-2">
              <div className="h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#262626] scrollbar-track-[#1a1a1a]">
                {selectedAgent ? (
                  <div className="bg-[#0F1117] rounded-xl p-4 md:p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                          {selectedAgent.platform === "WhatsApp" && (
                            <svg className="h-8 w-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a10.065 10.065 0 004.779 1.2h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.922-7.062A9.944 9.944 0 0012.012 2zm-3.97 14.487l-2.587.677 1.161-1.66a8.277 8.277 0 01-1.423-4.552c0-4.569 3.721-8.285 8.294-8.285 2.213 0 4.294.862 5.857 2.425a8.214 8.214 0 012.424 5.857c-.001 4.569-3.722 8.285-8.295 8.285h-.004c-1.43 0-2.828-.371-4.061-1.073l-.367-.221z"/>
                            </svg>
                          )}
                          {selectedAgent.platform === "Slack" && (
                            <svg className="h-8 w-8 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                            </svg>
                          )}
                          {selectedAgent.platform === "Telegram" && (
                            <svg className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
                            </svg>
                          )}
                        </div>
                        <div>
                          <h2 className="text-xl font-medium">{selectedAgent.name}</h2>
                          <p className="text-[#4d4d4d]">{selectedAgent.description}</p>
                        </div>
                      </div>
                      <Button variant="outline" className="border-[#1a1a1a] text-[#4d4d4d] hover:bg-[#1a1a1a] hover:text-white">
                        Edit Agent
                      </Button>
                    </div>

                    {/* Message History */}
                    <div className="space-y-4">
                      <h3 className="font-medium">Message History</h3>
                      <div className="space-y-4">
                        {selectedAgent.messageHistory.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}
                          >
                            <div className={`max-w-[70%] rounded-xl p-3 ${
                              message.type === 'sent' 
                                ? 'bg-[#0055FF] text-white' 
                                : 'bg-[#1a1a1a] text-white'
                            }`}>
                              <p>{message.content}</p>
                              <p className="text-xs mt-1 opacity-70">{message.timestamp}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#0F1117] rounded-xl p-6 flex flex-col items-center justify-center h-[400px] text-center">
                    <svg className="h-12 w-12 text-[#4d4d4d] mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <h3 className="text-lg font-medium mb-2">Select an Agent</h3>
                    <p className="text-[#4d4d4d]">Choose an agent from the list to view details and message history</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Quick Stats */}
              <div className="bg-[#0F1117] rounded-xl p-6 col-span-1 md:col-span-2">
                <h3 className="text-lg font-medium mb-4">Quick Stats</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-[#1a1a1a] rounded-lg">
                    <p className="text-sm text-[#4d4d4d]">Avg. Response Time</p>
                    {selectedAgent ? (
                      <p className="text-xl font-medium mt-1">2.4 mins</p>
                    ) : (
                      <div className="h-7 mt-1 bg-[#262626] rounded animate-pulse" />
                    )}
                  </div>
                  <div className="p-4 bg-[#1a1a1a] rounded-lg">
                    <p className="text-sm text-[#4d4d4d]">Messages Today</p>
                    {selectedAgent ? (
                      <p className="text-xl font-medium mt-1">89</p>
                    ) : (
                      <div className="h-7 mt-1 bg-[#262626] rounded animate-pulse" />
                    )}
                  </div>
                  <div className="p-4 bg-[#1a1a1a] rounded-lg">
                    <p className="text-sm text-[#4d4d4d]">Active Chats</p>
                    {selectedAgent ? (
                      <p className="text-xl font-medium mt-1">12</p>
                    ) : (
                      <div className="h-7 mt-1 bg-[#262626] rounded animate-pulse" />
                    )}
                  </div>
                  <div className="p-4 bg-[#1a1a1a] rounded-lg">
                    <p className="text-sm text-[#4d4d4d]">Resolution Rate</p>
                    {selectedAgent ? (
                      <p className="text-xl font-medium mt-1">95%</p>
                    ) : (
                      <div className="h-7 mt-1 bg-[#262626] rounded animate-pulse" />
                    )}
                  </div>
                </div>
              </div>

              {/* Response Time Chart */}
              <div className="bg-[#0F1117] rounded-xl p-6">
                <h3 className="text-lg font-medium mb-4">Average Response Time</h3>
                {selectedAgent ? (
                  <div className="h-[200px] flex items-end justify-between gap-2">
                    {selectedAgent.metrics.responseTime.map((data) => (
                      <div key={data.date} className="flex flex-col items-center gap-2">
                        <div 
                          className="w-8 bg-[#0055FF] rounded-t"
                          style={{ height: `${(data.value / 4) * 100}%` }}
                        />
                        <span className="text-xs text-[#4d4d4d]">{data.date}</span>
                        <span className="text-xs">{data.value}m</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="h-[200px] flex items-center justify-center text-[#4d4d4d]">
                    Select an agent to view response time metrics
                  </div>
                )}
              </div>

              {/* Messages per Day Chart */}
              <div className="bg-[#0F1117] rounded-xl p-6">
                <h3 className="text-lg font-medium mb-4">Messages per Day</h3>
                {selectedAgent ? (
                  <div className="h-[200px] flex items-end justify-between gap-2">
                    {selectedAgent.metrics.messagesPerDay.map((data) => (
                      <div key={data.date} className="flex flex-col items-center gap-2">
                        <div 
                          className="w-8 bg-[#0055FF] rounded-t"
                          style={{ height: `${(data.value / 200) * 100}%` }}
                        />
                        <span className="text-xs text-[#4d4d4d]">{data.date}</span>
                        <span className="text-xs">{data.value}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="h-[200px] flex items-center justify-center text-[#4d4d4d]">
                    Select an agent to view message metrics
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 