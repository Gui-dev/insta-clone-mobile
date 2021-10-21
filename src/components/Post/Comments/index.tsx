import React from 'react'

import { Container, Content, Nickname, Comment } from './style'

export const Comments = () => {
  return (
    <Container>
      <Content>
        <Nickname>gui.ts: </Nickname>
        <Comment>Meu comentario</Comment>
      </Content>
      <Content>
        <Nickname>gui.ts: </Nickname>
        <Comment>Outro super comentario</Comment>
      </Content>
      <Content>
        <Nickname>gui.ts: </Nickname>
        <Comment>Meu comentario</Comment>
      </Content>
      <Content>
        <Nickname>gui.ts: </Nickname>
        <Comment>Outro super comentario</Comment>
      </Content>
    </Container>
  )
}
