import { api } from './api'

export interface User {
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

export interface AuthResponse {
  success: boolean
  token: string
  user: User
}

export interface SignupData {
  username: string
  email: string
  fullname: string
  password: string
  type: string
}

class AuthService {
  private static instance: AuthService
  
  private constructor() {}

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService()
    }
    return AuthService.instance
  }

  async signup(userData: SignupData): Promise<AuthResponse> {
    const response = await api.sendRequest<AuthResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData)
    })
    return response.data as AuthResponse
  }

  async login(email: string, password: string): Promise<AuthResponse> {
    const response = await api.sendRequest<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    })
    return response.data as AuthResponse
  }

  async logout(): Promise<void> {
    await api.sendRequest('/auth/logout', {
      method: 'POST'
    })
    // Clear local storage, cookies, etc.
    localStorage.removeItem('token')
  }

  async verifyEmail(token: string): Promise<{ success: boolean }> {
    const response = await api.sendRequest<{ success: boolean }>('/auth/verify-email', {
      method: 'POST',
      body: JSON.stringify({ token })
    })
    return response.data as { success: boolean }
  }

  async resetPassword(email: string): Promise<{ success: boolean }> {
    const response = await api.sendRequest<{ success: boolean }>('/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ email })
    })
    return response.data as { success: boolean }
  }

  async updatePassword(token: string, newPassword: string): Promise<{ success: boolean }> {
    const response = await api.sendRequest<{ success: boolean }>('/auth/update-password', {
      method: 'POST',
      body: JSON.stringify({ token, newPassword })
    })
    return response.data as { success: boolean }
  }
}

export const authService = AuthService.getInstance() 