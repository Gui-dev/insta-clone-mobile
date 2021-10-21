import React from 'react'
import { Feather } from '@expo/vector-icons'

import { Container, Content, Input, ButtonSend } from './style'

export const AddComment = () => {
  return (
    <Container>
      <Content>
        <Input
          placeholder="Pode comentar..."
        />
        <ButtonSend>
          <Feather name="send" size={24} color="#FFF"/>
        </ButtonSend>
      </Content>
    </Container>
  )
}
