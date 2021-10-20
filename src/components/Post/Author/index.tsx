import React from 'react'
// @ts-ignore
import { Gravatar } from 'react-native-gravatar'

import { Container, Nickname } from './style'

type AuthorProps = {
  email?: string
  name?: string
}

export const Author = ({ email = 'fulano@email.com', name = 'gui.ts' }: AuthorProps) => {
  return (
    <Container>
      <Gravatar options={{
        email,
        secure: true
      }}
        style={{
          marginHorizontal: 10,
          height: 30,
          width: 30,
          borderRadius: 15
        }}
      />
      <Nickname>{ name }</Nickname>
    </Container>
  )
}
