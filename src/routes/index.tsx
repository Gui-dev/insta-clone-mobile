import React from 'react'

import { AppRoutes } from './app.routes'
import { StackRoutes } from './stack.routes'

export const Routes = () => {
  const user = false

  return user
    ? (<AppRoutes />)
    : (<StackRoutes />)
}
