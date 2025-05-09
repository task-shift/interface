import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tasks | TaskShift",
  description: "Manage and track your tasks"
}

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 