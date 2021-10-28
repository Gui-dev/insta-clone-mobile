import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { RootStackParamList } from './../../routes/stack.routes'

import {
  Container, Form, Input, ButtonRegister, ButtonRegisterText,
  ButtonLogin, ButtonLoginText
} from './style'

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>

export const Register: React.FC = () => {
  const { navigate } = useNavigation<NavigationProps>()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = () => {
    console.log('Logado')
  }

  const handleNavigationToLogin = () => {
    navigate('Login')
  }

  return (
    <Container>
      <Form>
        <Input
          placeholder="Nome"
          autoFocus
          value={ name }
          onChangeText={ setName }
        />
        <Input
          placeholder="E-mail"
          autoFocus
          keyboardType="email-address"
          value={ email }
          onChangeText={ setEmail }
        />
        <Input
          placeholder="Senha"
          secureTextEntry={ true }
          value={ password }
          onChangeText={ setPassword }
        />

        <ButtonRegister onPress={ handleRegister }>
          <ButtonRegisterText>
            Register
          </ButtonRegisterText>
        </ButtonRegister>

        <ButtonLogin onPress={ handleNavigationToLogin }>
          <ButtonLoginText>
            Already have an account? Login
          </ButtonLoginText>
        </ButtonLogin>
      </Form>
    </Container>
  )
}
