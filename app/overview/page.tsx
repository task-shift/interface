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
          <div className="mb-4 md:mb-0">
            <h1 className="text-xl md:text-2xl font-medium">Hi, Skylar Dias</h1>
            <p className="text-sm md:text-base text-[#4d4d4d]">Let's finish your task today!</p>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            {/* Notifications & Profile */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <svg className="h-6 w-6 text-[#4d4d4d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#0055FF]"></span>
              </div>
              <div className="h-10 w-10 rounded-full bg-[#1a1a1a] overflow-hidden">
                <Avatar index={0} />
              </div>
            </div>
          </div>
        </header>

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

          {/* Running Task Stats and Activity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="bg-[#0F1117] rounded-xl p-4 md:p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <h2 className="text-lg md:text-xl font-medium mb-2 md:mb-0">Running Task</h2>
                <div className="text-4xl md:text-6xl font-semibold">65</div>
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between">
                <div>
                  <div className="text-[#4d4d4d] mb-2">Total Task</div>
                  <div className="text-3xl">100</div>
                </div>
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-lg font-medium">45%</div>
                  </div>
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#1a1a1a"
                      strokeWidth="10"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#0055FF"
                      strokeWidth="10"
                      strokeDasharray="282.7"
                      strokeDashoffset={282.7 * (1 - 0.45)}
                    />
                  </svg>
                </div>
              </div>
            </div>
            
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

          {/* Task Distribution and Team Performance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="bg-[#0F1117] rounded-xl p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-medium mb-4 md:mb-6">Task Distribution</h2>
              <div className="space-y-4">
                {Object.entries(taskDistribution).map(([category, percentage]) => (
                  <div key={category}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{category}</span>
                      <span className="text-[#4d4d4d]">{percentage}%</span>
                    </div>
                    <div className="h-2 bg-[#1a1a1a] rounded-full">
                      <div 
                        className="h-full rounded-full"
                        style={{ 
                          width: `${percentage}%`,
                          backgroundColor: category === "UI/UX Design" ? "#0055FF" :
                                         category === "Frontend Dev" ? "#8B5CF6" :
                                         category === "Backend Dev" ? "#10B981" :
                                         "#F59E0B"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
                <div className="flex items-center justify-center gap-6 pt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#0055FF]" />
                    <span className="text-[#4d4d4d]">Completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
                    <span className="text-[#4d4d4d]">Ongoing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
                    <span className="text-[#4d4d4d]">Delayed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Mentors */}
          <section className="mb-6 md:mb-8">
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <h2 className="text-lg md:text-xl font-medium">Monthly Mentors</h2>
              <div className="flex gap-2">
                <Button variant="ghost" className="text-[#4d4d4d] hover:text-white hover:bg-[#1a1a1a]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </Button>
                <Button variant="ghost" className="text-[#4d4d4d] hover:text-white hover:bg-[#1a1a1a]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  name: "Curious George",
                  role: "UI UX Design",
                  tasks: 40,
                  rating: 4.7,
                  reviews: 750,
                  status: "Follow"
                },
                {
                  name: "Abraham Lincoln",
                  role: "3D Design",
                  tasks: 32,
                  rating: 4.9,
                  reviews: 510,
                  status: "Followed"
                }
              ].map((mentor, index) => (
                <div key={index} className="bg-[#0F1117] rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-full bg-[#1a1a1a] overflow-hidden">
                      <Avatar index={index} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{mentor.name}</h3>
                      <p className="text-sm text-[#4d4d4d]">{mentor.role}</p>
                    </div>
                    <Button 
                      variant={mentor.status === "Followed" ? "outline" : "default"}
                      className={mentor.status === "Followed" ? "border-[#1a1a1a] text-[#4d4d4d]" : "bg-[#0055FF]"}
                    >
                      {mentor.status === "Follow" && "+ "}
                      {mentor.status}
                    </Button>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-[#4d4d4d]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span>{mentor.tasks} Task</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span>{mentor.rating} ({mentor.reviews} Reviews)</span>
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