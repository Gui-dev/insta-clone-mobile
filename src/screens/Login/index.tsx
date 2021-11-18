import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { RootStackParamList } from './../../routes/stack.routes'
import { useAuth } from '../../hooks/useAuth'

import {
  Container, Form, Input, ButtonLogin, ButtonLoginText,
  ButtonRegister, ButtonRegisterText
} from './style'

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>

export const Login: React.FC = () => {
  const { navigate } = useNavigation<NavigationProps>()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()

  const handleLogin = () => {
    login({ email, password })
  }

  const handleNavigationToRegister = () => {
    navigate('Register')
  }

  return (
    <Container>
      <Form>
        <Input
          placeholder="E-mail"
          autoFocus
          autoCapitalize="none"
          keyboardType="email-address"
          value={ email }
          onChangeText={ setEmail }
        />
        <Input
          placeholder="Senha"
          secureTextEntry={ true }
          autoCapitalize="none"
          value={ password }
          onChangeText={ setPassword }
        />

        <ButtonLogin onPress={ handleLogin }>
          <ButtonLoginText>
            Login
          </ButtonLoginText>
        </ButtonLogin>

        <ButtonRegister onPress={ handleNavigationToRegister }>
          <ButtonRegisterText>
            Not have an account yet? Register
          </ButtonRegisterText>
        </ButtonRegister>
      </Form>
    </Container>
  )
}
