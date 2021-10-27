import React from 'react'
// @ts-ignore
import { Gravatar } from 'react-native-gravatar'

import { Container, Nickname, Email, ButtonLogout, ButtonLogoutText } from './style'

export const Profile: React.FC = () => {
  const handleLogout = () => {
    console.log('Logout')
  }

  return (
    <Container>
      <Gravatar
        options={{
          email: 'gui@email.com',
          secure: true
        }}
        style={{
          height: 150,
          width: 150,
          borderRadius: 75
        }}
      />
      <Nickname>Gui Silva</Nickname>
      <Email>gui@email.com</Email>

      <ButtonLogout onPress={ handleLogout }>
        <ButtonLogoutText>Sair</ButtonLogoutText>
      </ButtonLogout>
    </Container>
  )
}
