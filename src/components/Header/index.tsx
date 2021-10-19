import React from 'react'
import { Feather } from '@expo/vector-icons'

import { Container, Content, Title } from './style'

export const Header = () => {
  return (
    <Container>
      <Content>
        <Feather name="instagram" size={32} color="#e2e2e2"/>
        <Title>MyInsta</Title>
      </Content>
    </Container>
  )
}
