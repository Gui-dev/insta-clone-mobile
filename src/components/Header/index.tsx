import React from 'react'
// @ts-ignore
import { Gravatar } from 'react-native-gravatar'
import { Feather } from '@expo/vector-icons'

import { useAuth } from './../../hooks/useAuth'

import { Container, Content, Brand, Title, InfoUser, UserName } from './style'

export const Header = () => {
  const { user } = useAuth()

  return (
    <Container>
      <Content>
        <Brand>
          <Feather name="instagram" size={32} color="#e2e2e2"/>
          <Title>MyInsta</Title>
        </Brand>
        { !!user && (
          <InfoUser>
            <UserName>{ user.name }</UserName>
            <Gravatar options={{
              email: user.email,
              secure: true
            }}
              style={{
                height: 30,
                width: 30,
                borderRadius: 15
              }}
            />
          </InfoUser>
        ) }
      </Content>
    </Container>
  )
}
