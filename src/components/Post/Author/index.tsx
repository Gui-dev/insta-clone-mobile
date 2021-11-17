import React from 'react'
// @ts-ignore
import { Gravatar } from 'react-native-gravatar'

import { Container, Nickname } from './style'

type User = {
  email: string | undefined
  name: string | undefined
}

type AuthorProps = {
  user: User
}

export const Author = ({ user }: AuthorProps) => {
  return (
    <Container>
      <Gravatar options={{
        email: user.email,
        secure: true
      }}
        style={{
          marginHorizontal: 10,
          height: 30,
          width: 30,
          borderRadius: 15
        }}
      />
      <Nickname>{ user.name }</Nickname>
    </Container>
  )
}
