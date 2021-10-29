import React from 'react'

import { useAuth } from '../hooks/useAuth'
import { AppRoutes } from './app.routes'
import { StackRoutes } from './stack.routes'

export const Routes = () => {
  const { user } = useAuth()
  const login = !!user

  return login
    ? (<AppRoutes />)
    : (<StackRoutes />)
}
