"use client"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar } from "../components/Avatar"
import { useState, useEffect, useRef } from "react"
import { Sidebar } from "../components/Sidebar"
import { useRouter } from "next/navigation"
import { Header } from "../components/Header"

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
          title="Hi, Skylar Dias"
          subtitle="Let's finish your task today!"
        />

        {/* Dashboard Content */}
        <div className="p-4 md:p-6">
          {/* Top Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 md:mb-8">
            <div className="bg-[#0F1117] rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <svg className="h-5 w-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[#4d4d4d]">Total Tasks</div>
                  <div className="text-xl font-semibold">100</div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-green-500">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span>+12.5% from last month</span>
              </div>
            </div>

            <div className="bg-[#0F1117] rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <svg className="h-5 w-5 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[#4d4d4d]">In Progress</div>
                  <div className="text-xl font-semibold">65</div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-yellow-500">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H4" />
                </svg>
                <span>Same as last month</span>
              </div>
            </div>

            <div className="bg-[#0F1117] rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <svg className="h-5 w-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[#4d4d4d]">Completed</div>
                  <div className="text-xl font-semibold">28</div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-green-500">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span>+8.2% from last month</span>
              </div>
            </div>

            <div className="bg-[#0F1117] rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-[#4d4d4d]">Delayed</div>
                  <div className="text-xl font-semibold">7</div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-red-500">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
                <span>+2.3% from last month</span>
              </div>
            </div>
          </div>

          {/* Activity */}
          <div className="mb-6 md:mb-8">
            <div className="bg-[#0F1117] rounded-xl p-4 md:p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg md:text-xl font-medium">Activity</h2>
                <select className="bg-transparent text-[#4d4d4d] border-none outline-none">
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>This Year</option>
                </select>
              </div>
              <div className="h-[120px] flex items-end justify-between">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                  <div key={day} className="flex flex-col items-center gap-2">
                    <div className="w-12 bg-[#1a1a1a] rounded-full" style={{ 
                      height: `${[30, 80, 40, 60, 90, 50, 70][i]}px`,
                      backgroundColor: i === 1 ? '#0055FF' : '#1a1a1a'
                    }}></div>
                    <div className="text-[#4d4d4d]">{day}</div>
                    <div className="text-xs">{i === 1 ? '2 Task' : ''}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Monthly Task Trend */}
            <div className="bg-[#0F1117] rounded-xl p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-medium mb-4 md:mb-6">Monthly Task Trend</h2>
              <div className="h-[200px] md:h-[250px] relative">
                <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  {[0, 1, 2, 3, 4].map((line) => (
                    <line
                      key={line}
                      x1="0"
                      y1={line * 50}
                      x2="400"
                      y2={line * 50}
                      stroke="#1a1a1a"
                      strokeWidth="1"
                    />
                  ))}
                  
                  {/* Line Chart */}
                  <polyline
                    points={monthlyTaskData.map((data, i) => 
                      `${(i * 80)},${200 - (data.tasks / 80 * 200)}`
                    ).join(' ')}
                    fill="none"
                    stroke="#0055FF"
                    strokeWidth="3"
                  />
                  
                  {/* Data Points */}
                  {monthlyTaskData.map((data, i) => (
                    <circle
                      key={i}
                      cx={i * 80}
                      cy={200 - (data.tasks / 80 * 200)}
                      r="4"
                      fill="#0055FF"
                    />
                  ))}
                </svg>
                
                {/* X-axis Labels */}
                <div className="flex justify-between mt-2">
                  {monthlyTaskData.map((data) => (
                    <div key={data.month} className="text-[#4d4d4d] text-sm">
                      {data.month}
                    </div>
                  ))}
                </div>
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
          </div>

          {/* Team Performance */}
          <div className="mb-6 md:mb-8">
            <div className="bg-[#0F1117] rounded-xl p-4 md:p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg md:text-xl font-medium">Team Performance</h2>
                <Button variant="ghost" size="icon" className="text-[#4d4d4d] hover:text-white hover:bg-[#1a1a1a]">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </Button>
              </div>
              <div className="space-y-4">
                {teamPerformance.map((member) => (
                  <div key={member.name} className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#1a1a1a] overflow-hidden">
                        <Avatar index={teamPerformance.indexOf(member)} />
                      </div>
                      <span className="flex-1">{member.name}</span>
                      <span className="text-[#4d4d4d]">{member.completed + member.ongoing} tasks</span>
                    </div>
                    <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#0055FF] rounded-full"
                        style={{ width: `${(member.completed / (member.completed + member.ongoing + member.delayed)) * 100}%` }}
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