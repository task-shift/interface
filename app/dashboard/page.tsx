import { Metadata } from "next"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Explore Task | TaskShift",
  description: "Task Management Dashboard",
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Top Navigation */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-semibold">TaskShift</span>
          </div>

          {/* Explore Task Title */}
          <h1 className="text-xl">Explore Task</h1>
        </div>

        {/* Search, Category, Sort */}
        <div className="flex items-center gap-6">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search Task"
              className="w-[300px] bg-zinc-800 border-zinc-700 pl-10"
            />
            <svg className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <Button variant="outline" className="flex items-center gap-2 bg-zinc-800 border-zinc-700 text-zinc-300">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            Category
          </Button>

          <Button variant="outline" className="flex items-center gap-2 bg-zinc-800 border-zinc-700 text-zinc-300">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
            Sort By: Deadline
          </Button>

          {/* User Profile */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <svg className="h-6 w-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-blue-500"></span>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600"></div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className="flex">
        <aside className="w-64 h-[calc(100vh-73px)] border-r border-zinc-800 p-4">
          <nav>
            <ul className="space-y-2">
              <li>
                <Link href="/overview" className="flex items-center gap-3 px-4 py-2 text-zinc-400 hover:text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/tasks" className="flex items-center gap-3 px-4 py-2 bg-blue-600/20 text-white rounded-lg">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Task
                </Link>
              </li>
              <li>
                <Link href="/mentors" className="flex items-center gap-3 px-4 py-2 text-zinc-400 hover:text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  Mentors
                </Link>
              </li>
              <li>
                <Link href="/messages" className="flex items-center gap-3 px-4 py-2 text-zinc-400 hover:text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Message
                </Link>
              </li>
              <li>
                <Link href="/settings" className="flex items-center gap-3 px-4 py-2 text-zinc-400 hover:text-white">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Settings
                </Link>
              </li>
            </ul>
          </nav>

          {/* Help Center */}
          <div className="absolute bottom-8 left-4 right-4">
            <div className="bg-zinc-800 rounded-xl p-4 text-center">
              <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-medium mb-1">Help Center</h3>
              <p className="text-sm text-zinc-400 mb-3">Having Trouble in Learning. Please contact us for more questions.</p>
              <Button variant="outline" className="w-full bg-zinc-700 border-zinc-600 text-white hover:bg-zinc-600">
                Go To Help Center
              </Button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Time Limit Section */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Time Limit</h2>
              <div className="flex gap-2">
                <Button variant="ghost" className="text-zinc-400 hover:text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </Button>
                <Button variant="ghost" className="text-zinc-400 hover:text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* Task Cards */}
              {[
                {
                  title: "Creating Awesome Mobile Apps",
                  type: "UI UX Design",
                  progress: 90,
                  time: "1 Hour",
                  image: "/path/to/image1.jpg"
                },
                {
                  title: "Creating Fresh Website",
                  type: "Web Developer",
                  progress: 85,
                  time: "2 Hour",
                  image: "/path/to/image2.jpg"
                },
                {
                  title: "Creating Color Palletes",
                  type: "UI UX Design",
                  progress: 100,
                  time: "1 Hour",
                  image: "/path/to/image3.jpg"
                }
              ].map((task, index) => (
                <div key={index} className="bg-zinc-800 rounded-xl overflow-hidden">
                  <div className="h-40 bg-zinc-700">
                    {/* Task Image would go here */}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-1">{task.title}</h3>
                    <p className="text-sm text-zinc-400 mb-4">{task.type}</p>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{task.progress}%</span>
                      </div>
                      <div className="h-2 bg-zinc-700 rounded-full">
                        <div 
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${task.progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm text-zinc-400">{task.time}</span>
                      </div>
                      <div className="flex -space-x-2">
                        {[1,2,3,4,5].map((i) => (
                          <div key={i} className="h-8 w-8 rounded-full border-2 border-zinc-800 bg-gradient-to-r from-blue-400 to-blue-600" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* New Task Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">New Task</h2>
              <div className="flex gap-2">
                <Button variant="ghost" className="text-zinc-400 hover:text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </Button>
                <Button variant="ghost" className="text-zinc-400 hover:text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* New Task Cards - Similar structure to Time Limit cards */}
              {[
                {
                  title: "Creating Mobile App Design",
                  type: "UI UX Design",
                  progress: 75,
                  time: "3 Days Left",
                  image: "/path/to/image4.jpg"
                },
                {
                  title: "Creating Perfect Website",
                  type: "Web Developer",
                  progress: 85,
                  time: "4 Days Left",
                  image: "/path/to/image5.jpg"
                },
                {
                  title: "Mobile App Design",
                  type: "UI UX Design",
                  progress: 65,
                  time: "3 Days Left",
                  image: "/path/to/image6.jpg"
                }
              ].map((task, index) => (
                <div key={index} className="bg-zinc-800 rounded-xl overflow-hidden">
                  <div className="h-40 bg-zinc-700">
                    {/* Task Image would go here */}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-1">{task.title}</h3>
                    <p className="text-sm text-zinc-400 mb-4">{task.type}</p>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{task.progress}%</span>
                      </div>
                      <div className="h-2 bg-zinc-700 rounded-full">
                        <div 
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${task.progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm text-zinc-400">{task.time}</span>
                      </div>
                      <div className="flex -space-x-2">
                        {[1,2,3,4,5].map((i) => (
                          <div key={i} className="h-8 w-8 rounded-full border-2 border-zinc-800 bg-gradient-to-r from-blue-400 to-blue-600" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
} 