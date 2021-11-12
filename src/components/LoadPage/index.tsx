import React from 'react'
import { ActivityIndicator } from 'react-native'

import { Container } from './style'

export const LoadPage = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color="#FFF"/>
    </Container>
  )
}
