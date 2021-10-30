import React, { ReactNode } from 'react'

import { AuthProvider } from './AuthContext'
import { PostProvider } from './PostContext'

type ContextsProvidersProps = {
  children: ReactNode
}

export const ContextsProviders = ({ children }: ContextsProvidersProps) => {
  return (
    <AuthProvider>
      <PostProvider>
        { children }
      </PostProvider>
    </AuthProvider>
  )
}
