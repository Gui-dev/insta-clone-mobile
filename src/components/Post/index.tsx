import React from 'react'
import { AddComment } from './AddComment'

import { Author } from './Author'
import { Comments } from './Comments'
import { Container, Content, Image } from './style'

type PostProps = {
  email?: string
  name?: string
}

export const Post = ({ email = 'fulano@email.com', name = 'gui.ts' }: PostProps) => {
  return (
    <Container>
      <Content>
        <Image source={
          { uri: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/10/the-batman-1.webp' }
        }/>
        <Author />
        <Comments />
        <AddComment />
      </Content>

      <Content>
        <Image source={
          { uri: 'https://passageirodeprimeira.com/wp-content/uploads/2019/12/Conrad-Maldivas.png' }
        }/>
        <Author />
        <Comments />
        <AddComment />
      </Content>
    </Container>
  )
}
