import { ReactNode } from 'react'

export type AlertType = 'error' | 'success' | 'info'

export interface AlertProps {
  type: AlertType
  title?: string
  children: ReactNode
}

export function Alert({ type, title, children }: AlertProps) {
  const styles = {
    error: {
      container: 'border-[#FF3B3B]/10 bg-[#FF3B3B]/5',
      icon: 'text-[#FF3B3B]',
      title: 'text-[#FF3B3B]',
      content: 'text-[#FF3B3B]'
    },
    success: {
      container: 'border-[#00BA34]/10 bg-[#00BA34]/5',
      icon: 'text-[#00BA34]',
      title: 'text-[#00BA34]',
      content: 'text-[#00BA34]'
    },
    info: {
      container: 'border-[#0055FF]/10 bg-[#0055FF]/5',
      icon: 'text-[#0055FF]',
      title: 'text-[#0055FF]',
      content: 'text-[#0055FF]'
    }
  }

  const icons = {
    error: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    success: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    info: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }

  return (
    <div className={`flex gap-3 rounded-lg border p-4 ${styles[type].container}`}>
      <div className={styles[type].icon}>
        {icons[type]}
      </div>
      <div className="flex-1">
        {title && (
          <h5 className={`mb-1 font-medium ${styles[type].title}`}>
            {title}
          </h5>
        )}
        <div className={styles[type].content}>
          {children}
        </div>
      </div>
    </div>
  )
} 