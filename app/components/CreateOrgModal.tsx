import { useState } from 'react'

interface CreateOrgModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (orgData: { name: string; description: string }) => void
}

export function CreateOrgModal({ isOpen, onClose, onSubmit }: CreateOrgModalProps) {
  const [orgName, setOrgName] = useState('')
  const [description, setDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await onSubmit({ name: orgName, description })
      setOrgName('')
      setDescription('')
      onClose()
    } catch (error) {
      console.error('Failed to create organization:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-[#0F1117] rounded-xl w-full max-w-md mx-4 overflow-hidden">
        <div className="p-6 border-b border-[#1a1a1a]">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium">Create Organization</h2>
            <button 
              onClick={onClose}
              className="text-[#4d4d4d] hover:text-white transition-colors"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-2">
            <label htmlFor="orgName" className="block text-sm text-[#808080]">
              Organization Name
            </label>
            <input
              id="orgName"
              type="text"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              placeholder="Enter organization name"
              className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#262626] focus:border-[#0055FF] rounded-lg placeholder:text-[#4d4d4d] text-white"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm text-[#808080]">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter organization description"
              className="w-full px-4 py-2 bg-[#1a1a1a] border border-[#262626] focus:border-[#0055FF] rounded-lg placeholder:text-[#4d4d4d] text-white resize-none"
              rows={3}
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading || !orgName.trim()}
              className="w-full bg-[#0055FF] hover:bg-[#0044CC] disabled:bg-[#0055FF]/50 disabled:cursor-not-allowed text-white py-2 px-4 rounded-lg transition-colors duration-200"
            >
              {isLoading ? 'Creating...' : 'Create Organization'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 