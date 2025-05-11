"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar } from "../components/Avatar"
import { useState } from "react"
import { Sidebar } from "../components/Sidebar"

const taskDistribution = {
  "UI/UX Design": 35,
  "Frontend Dev": 28,
  "Backend Dev": 22,
  "Testing": 15
}

const teamPerformance = [
  { name: "Sarah", completed: 45, ongoing: 12, delayed: 3 },
  { name: "Mike", completed: 38, ongoing: 8, delayed: 1 },
  { name: "Lisa", completed: 42, ongoing: 15, delayed: 2 },
  { name: "John", completed: 35, ongoing: 10, delayed: 4 }
]

const monthlyTaskData = [
  { month: 'Jan', tasks: 45 },
  { month: 'Feb', tasks: 52 },
  { month: 'Mar', tasks: 48 },
  { month: 'Apr', tasks: 65 },
  { month: 'May', tasks: 58 },
  { month: 'Jun', tasks: 72 }
]

const taskPriorityData = {
  High: 35,
  Medium: 45,
  Low: 20
}

export default function OverviewPage() {
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
          <div>
            <h1 className="text-xl md:text-2xl font-medium">Overview</h1>
            <p className="text-sm md:text-base text-[#4d4d4d]">Monitor your team's performance</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#4d4d4d]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <Input 
                placeholder="Search..." 
                className="pl-10 bg-[#0F1117] border-[#1a1a1a] text-white placeholder:text-[#4d4d4d]"
              />
            </div>
          </div>
        </header>

        <div className="p-4 md:p-6">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Task Distribution */}
            <div className="bg-[#0F1117] rounded-xl p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-medium mb-4 md:mb-6">Task Distribution</h2>
              <div className="space-y-4">
                {Object.entries(taskDistribution).map(([category, percentage]) => (
                  <div key={category}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{category}</span>
                      <span>{percentage}%</span>
                    </div>
                    <div className="h-2 bg-[#1a1a1a] rounded-full">
                      <div 
                        className="h-full rounded-full bg-[#0055FF]"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Task Completion */}
            <div className="bg-[#0F1117] rounded-xl p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-medium mb-4 md:mb-6">Monthly Task Completion</h2>
              <div className="h-[200px] flex items-end justify-between gap-2">
                {monthlyTaskData.map((data) => (
                  <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                    <div 
                      className="w-full bg-[#0055FF] rounded-t-lg transition-all duration-500"
                      style={{ height: `${(data.tasks / Math.max(...monthlyTaskData.map(d => d.tasks))) * 150}px` }}
                    />
                    <span className="text-sm text-[#4d4d4d]">{data.month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Task Priority Distribution */}
            <div className="bg-[#0F1117] rounded-xl p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-medium mb-4 md:mb-6">Task Priority Distribution</h2>
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 md:gap-0">
                <div className="relative w-[160px] md:w-[180px] h-[160px] md:h-[180px]">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    {Object.entries(taskPriorityData).map(([priority, value], index) => {
                      const previousValues = Object.values(taskPriorityData)
                        .slice(0, index)
                        .reduce((sum, v) => sum + v, 0)
                      const offset = (previousValues / 100) * 314.16
                      const length = (value / 100) * 314.16
                      return (
                        <circle
                          key={priority}
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke={
                            priority === 'High' ? '#EF4444' :
                            priority === 'Medium' ? '#F59E0B' :
                            '#10B981'
                          }
                          strokeWidth="20"
                          strokeDasharray={`${length} ${314.16}`}
                          strokeDashoffset={-offset}
                        />
                      )
                    })}
                  </svg>
                </div>
                
                <div className="space-y-4">
                  {Object.entries(taskPriorityData).map(([priority, value]) => (
                    <div key={priority} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        priority === 'High' ? 'bg-[#EF4444]' :
                        priority === 'Medium' ? 'bg-[#F59E0B]' :
                        'bg-[#10B981]'
                      }`} />
                      <div>
                        <div className="text-sm">{priority}</div>
                        <div className="text-[#4d4d4d] text-sm">{value}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Team Performance */}
            <div className="bg-[#0F1117] rounded-xl p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-medium mb-4 md:mb-6">Team Performance</h2>
              <div className="space-y-4 md:space-y-6">
                {teamPerformance.map((member) => (
                  <div key={member.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar index={teamPerformance.indexOf(member)} />
                        <span>{member.name}</span>
                      </div>
                      <div className="text-sm text-[#4d4d4d]">
                        {member.completed + member.ongoing} Tasks
                      </div>
                    </div>
                    <div className="flex h-2 rounded-full overflow-hidden">
                      <div 
                        className="bg-[#0055FF]" 
                        style={{ width: `${(member.completed / (member.completed + member.ongoing + member.delayed)) * 100}%` }}
                      />
                      <div 
                        className="bg-[#F59E0B]" 
                        style={{ width: `${(member.ongoing / (member.completed + member.ongoing + member.delayed)) * 100}%` }}
                      />
                      <div 
                        className="bg-[#EF4444]" 
                        style={{ width: `${(member.delayed / (member.completed + member.ongoing + member.delayed)) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 