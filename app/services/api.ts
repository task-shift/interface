interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

interface RegisterResponse {
  success: boolean
  token: string
  user: {
    id: number
    fullname: string
    username: string
    email: string
    avatar: string | null
    user_id: string
    role: string
    organization_id: string | null
    status: string
  }
}

class ApiService {
  private static instance: ApiService
  private serviceWorker: ServiceWorker | null = null

  private constructor() {
    this.registerServiceWorker()
  }

  static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService()
    }
    return ApiService.instance
  }

  private async registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js')
        this.serviceWorker = registration.active
      } catch (error) {
        console.error('ServiceWorker registration failed:', error)
      }
    }
  }

  async sendRequest<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    if (!this.serviceWorker) {
      throw new Error('Service worker not initialized')
    }

    return new Promise((resolve, reject) => {
      const messageChannel = new MessageChannel()

      messageChannel.port1.onmessage = (event) => {
        if (event.data.success) {
          resolve(event.data)
        } else {
          reject(new Error(event.data.error))
        }
      }

      this.serviceWorker?.postMessage(
        {
          type: 'API_REQUEST',
          endpoint,
          options
        },
        [messageChannel.port2]
      )
    })
  }

  async register(userData: {
    username: string
    email: string
    fullname: string
    password: string
    type: string
  }): Promise<RegisterResponse> {
    const response = await this.sendRequest<RegisterResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData)
    })
    return response.data as RegisterResponse
  }
}

export const api = ApiService.getInstance() 