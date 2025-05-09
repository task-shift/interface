import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Overview | TaskShift",
  description: "Task Management Overview",
}

export default function OverviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 