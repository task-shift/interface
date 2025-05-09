import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="max-w-3xl mx-auto flex items-center py-3 px-3">
        <Link href="/" className="flex items-center gap-1 group">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white transition-transform duration-300 group-hover:scale-110"
          >
            <path
              d="M13 3L4 14H13L11 21L20 10H11L13 3Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-base font-medium bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-400 group-hover:to-white">TaskShift</span>
        </Link>

        <div className="flex items-center ml-auto">
          <Link
            href="/login"
            className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-3 py-1 font-medium text-white hover:from-blue-500 hover:to-blue-400 transition-all duration-300 text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
          >
            Log In
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h2 className="text-sm uppercase tracking-wider text-gray-400">You're here because you're choosen</h2>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-16">
            Project management
            <br />
            actually sucks asf
          </h1>

          <div className="space-y-8 text-lg">
            <p>Yep, you heard that right.</p>

            <p>
              Missed deadlines. Scattered updates. Endless follow-ups.
              <br />
              If there's a faster way to win — we'll take it.
            </p>

            <p>
              We built <span className="bg-blue-600 px-2 py-0.5 rounded">TaskShift</span> so you never have to think
              alone again.
              <br />
              It sees your screen. Hears your audio.
              <br />
              Feeds you answers in real time.
              <br />
              While others guess — you're already right.
            </p>

            <p>
              And yes, the world will call it <span className="bg-blue-600 px-2 py-0.5 rounded">cheating</span>.
            </p>

            <p>
              But so was the calculator.
              <br />
              So was spellcheck.
              <br />
              So was Google.
            </p>

            <p>
              Every time technology makes us smarter, the world panics.
              <br />
              Then it adapts. Then it forgets.
              <br />
              And suddenly, it's normal.
            </p>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <p className="text-2xl font-bold">But this is different.</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">AI</div>
              <p>Isn't just another tool —</p>
            </div>

            <p>
              It's an extension of your intelligence.
              <br />A second brain that works alongside your own.
              <br />A partner that makes you better at what you do.
            </p>

            <p>
              TaskShift doesn't replace your thinking.
              <br />
              It amplifies it.
            </p>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <p className="text-2xl font-bold">The future belongs to those who adapt.</p>
            </div>

            <p>
              Some will resist. They always do.
              <br />
              They'll say it's unfair. That it's cheating.
              <br />
              But they'll be left behind.
            </p>

            <p>
              Because in a world where everyone has access to the same information,
              <br />
              the advantage goes to those who can access it faster.
            </p>

            <p>
              So yes, we want to cheat on everything.
              <br />
              And we want you to join us.
            </p>

            <div className="pt-8">
              <Link
                href="/login"
                className="rounded-full bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
