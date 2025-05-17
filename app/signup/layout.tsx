import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign Up | TaskShift",
  description: "Create your TaskShift account",
}

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 