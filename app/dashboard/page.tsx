import { Metadata } from "next"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Placeholder } from "../components/Placeholder"
import { Avatar } from "../components/Avatar"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts"

export const metadata: Metadata = {
  title: "TaskShift | Task Management",
  description: "Task Management Dashboard",
}

export default function DashboardPage() {
  const activityData = [
    { day: 'S', tasks: 1 },
    { day: 'M', tasks: 2 },
    { day: 'T', tasks: 1 },
    { day: 'W', tasks: 1.5 },
    { day: 'T', tasks: 2 },
    { day: 'F', tasks: 1.5 },
    { day: 'S', tasks: 1 },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Left Sidebar */}
      <aside className="fixed left-0 top-0 w-[240px] h-screen bg-black border-r border-[#1a1a1a] p-6">
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
        <div className="absolute bottom-8 left-6 right-6">
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

      {/* Main Content */}
      <main className="pl-[240px]">
        {/* Top Navigation */}
        <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-black border-b border-[#1a1a1a]">
          <h1 className="text-xl font-medium">Explore Task</h1>
          
          <div className="flex items-center gap-6">
            {/* Search */}
            <div className="relative">
              <Input
                type="text"
                placeholder="Search Task"
                className="w-[300px] pl-10 bg-black border-[#1a1a1a] placeholder:text-[#4d4d4d] text-white"
              />
              <svg className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-[#4d4d4d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category & Sort */}
            <Button variant="outline" className="border-[#1a1a1a] text-[#4d4d4d] hover:bg-[#1a1a1a] bg-transparent">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              Category
            </Button>

            <Button variant="outline" className="border-[#1a1a1a] text-[#4d4d4d] hover:bg-[#1a1a1a] bg-transparent">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
              </svg>
              Sort By: Deadline
            </Button>

            {/* User Profile */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <svg className="h-6 w-6 text-[#4d4d4d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#0055FF]"></span>
              </div>
              <div className="h-10 w-10 rounded-full bg-[#1a1a1a] overflow-hidden">
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
          {/* Welcome Section */}
          <section className="mb-8">
            <h1 className="text-2xl font-semibold mb-2">Hi, Skylar Dias</h1>
            <p className="text-[#4d4d4d]">Let's finish your task today!</p>
          </section>

          {/* Stats and Activity Section */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Running Task Stats */}
            <div className="bg-[#0F1117] rounded-xl p-6">
              <h2 className="text-lg font-medium mb-4">Running Task</h2>
              <div className="flex items-center gap-8">
                <div className="relative">
                  <div className="w-32 h-32">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#1a1a1a"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#0055FF"
                        strokeWidth="2"
                        strokeDasharray="45, 100"
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <div className="text-3xl font-semibold">65</div>
                      <div className="text-sm text-[#4d4d4d]">of 100</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-semibold mb-2">45%</div>
                  <div className="text-lg text-[#4d4d4d]">Task</div>
                </div>
              </div>
            </div>

            {/* Activity Graph */}
            <div className="bg-[#0F1117] rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium">Activity</h2>
                <select className="bg-transparent text-[#4d4d4d] border-none text-sm">
                  <option>This Week</option>
                </select>
              </div>
              <div className="relative h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={activityData}>
                    <XAxis 
                      dataKey="day" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#4d4d4d', fontSize: 12 }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#4d4d4d', fontSize: 12 }}
                      ticks={[1, 2, 3]}
                    />
                    <Line
                      type="monotone"
                      dataKey="tasks"
                      stroke="#0055FF"
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 8, fill: "#0055FF" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="absolute top-8 left-12 bg-[#0F1117] text-white px-3 py-1 rounded-lg shadow-lg">
                  2 Task
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Mentors Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-medium">Monthly Mentors</h2>
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

            <div className="grid grid-cols-2 gap-6">
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
                <div key={index} className="bg-[#0F1117] rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      <Avatar index={index} />
                    </div>
                    <div>
                      <h3 className="font-medium">{mentor.name}</h3>
                      <p className="text-sm text-[#4d4d4d]">{mentor.role}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-2">
                          <svg className="h-4 w-4 text-[#4d4d4d]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                          <span className="text-sm text-[#4d4d4d]">{mentor.tasks} Task</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-sm">{mentor.rating}</span>
                          <span className="text-sm text-[#4d4d4d]">({mentor.reviews} Reviews)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant={mentor.status === "Follow" ? "default" : "outline"}
                    className={mentor.status === "Follow" ? "bg-[#0055FF] hover:bg-[#0044CC]" : "border-[#1a1a1a] text-[#4d4d4d]"}
                  >
                    {mentor.status}
                  </Button>
                </div>
              ))}
            </div>
          </section>

          {/* Upcoming Task Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-medium">Upcoming Task</h2>
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

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "Creating Mobile App Design",
                  type: "UI UX Design",
                  progress: 75,
                  time: "3 Days Left",
                  gradient: "blue" as const
                },
                {
                  title: "Creating Perfect Website",
                  type: "Web Developer",
                  progress: 85,
                  time: "4 Days Left",
                  gradient: "purple" as const
                }
              ].map((task, index) => (
                <div key={index} className="bg-black rounded-xl overflow-hidden shadow-lg border border-[#1a1a1a]">
                  <div className="h-48 relative">
                    <Placeholder gradient={task.gradient} />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-1">{task.title}</h3>
                    <p className="text-sm text-[#4d4d4d] mb-4">{task.type}</p>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-[#4d4d4d]">Progress</span>
                        <span className="text-[#0055FF]">{task.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-[#1a1a1a] rounded-full">
                        <div 
                          className="h-full bg-[#0055FF] rounded-full"
                          style={{ width: `${task.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Time and Team */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-[#4d4d4d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm text-[#4d4d4d]">{task.time}</span>
                      </div>
                      <div className="flex -space-x-2">
                        {[1,2,3,4,5].map((i) => (
                          <div key={i} className="h-8 w-8 rounded-full border-2 border-black">
                            <Avatar index={i-1} />
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