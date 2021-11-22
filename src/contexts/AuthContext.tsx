import React, { createContext, ReactNode, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Toast from 'react-native-toast-message'

import { loginService, logoutService } from '../services/loginService'

type LoginProps = {
  email: string
  password: string
}

type UserProps = {
  name: string
  nickname: string
  email: string
}

type AuthContextProps = {
  user: UserProps | null
  loading: boolean
  login: (data: LoginProps) => Promise<void>
  logout: () => Promise<void>
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadUser = async () => {
      const user = await AsyncStorage.getItem('@myinsta:user')
      if (user) {
        setUser(JSON.parse(user))
      }
    }

    loadUser()
  }, [])

  const login = async ({ email, password }: LoginProps) => {
    try {
      if (email === '' || password === '') {
        Toast.show({
          type: 'info',
          text1: 'Oooops',
          text2: 'Todos os campos devem ser preenchidos'
        })
        return
      }
      setLoading(true)
      const user = await loginService({ email, password })
      await AsyncStorage.setItem('@myinsta:user', JSON.stringify(user))
      setUser(user)
    } catch (error) {
      const err = error as Error
      Toast.show({
        type: 'error',
        text1: err.message
      })
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    await AsyncStorage.removeItem('@myinsta:user')
    await logoutService()
    setUser(null)
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}
