import React, { createContext, ReactNode, useState } from 'react'
import { Alert } from 'react-native'

type LoginProps = {
  email: string
  password: string
}

type UserProps = {
  name: string
  email: string
}

type AuthContextProps = {
  user: UserProps | null
  login: (data: LoginProps) => Promise<void>
  logout: () => Promise<void>
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps | null>(null)

  const login = async ({ email, password }: LoginProps) => {
    if (email === '' || password === '') {
      Alert.alert('Oooops', 'Todos os campos devem ser preenchidos')
      return
    }
    setUser({
      name: 'Gui Silva',
      email: 'gui@email.com'
    })
  }

  console.log(user)

  const logout = async () => {
    console.log('Logoutt')
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}
