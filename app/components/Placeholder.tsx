import { cn } from "@/lib/utils"

interface PlaceholderProps {
  className?: string
  gradient?: "blue" | "purple" | "green"
}

export function Placeholder({ className, gradient = "blue" }: PlaceholderProps) {
  const gradients = {
    blue: "from-blue-500/20 to-blue-900/20",
    purple: "from-purple-500/20 to-purple-900/20",
    green: "from-emerald-500/20 to-emerald-900/20",
  }

  return (
    <div 
      className={cn(
        "w-full h-full bg-gradient-to-br",
        gradients[gradient],
        "flex items-center justify-center",
        className
      )}
    >
      <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center">
        {gradient === "blue" && (
          <svg className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.5L9 22H15L12 18.5ZM12 6V14M12 6L7 11M12 6L17 11" />
          </svg>
        )}
        {gradient === "purple" && (
          <svg className="h-8 w-8 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )}
        {gradient === "green" && (
          <svg className="h-8 w-8 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </div>
    </div>
  )
} 