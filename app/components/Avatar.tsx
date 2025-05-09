interface AvatarProps {
  index: number
}

const colors = [
  "from-blue-500/20 to-blue-900/20",
  "from-purple-500/20 to-purple-900/20",
  "from-emerald-500/20 to-emerald-900/20",
  "from-orange-500/20 to-orange-900/20",
  "from-pink-500/20 to-pink-900/20",
]

export function Avatar({ index }: AvatarProps) {
  const colorIndex = index % colors.length
  
  return (
    <div 
      className={`w-full h-full rounded-full bg-gradient-to-br ${colors[colorIndex]} flex items-center justify-center`}
    >
      <span className="text-white/70 text-xs font-medium">
        {String.fromCharCode(65 + index)}
      </span>
    </div>
  )
} 