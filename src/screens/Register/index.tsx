import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { RootStackParamList } from './../../routes/stack.routes'

import {
  Container, Form, Input, ButtonRegister, ButtonRegisterText,
  ButtonLogin, ButtonLoginText
} from './style'
import { addUserService } from '../../services/addUserService'

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Login'>

export const Register: React.FC = () => {
  const { navigate } = useNavigation<NavigationProps>()
  const [name, setName] = useState('')
  const [nickname, setNickname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async () => {
    const data = {
      name,
      nickname,
      email,
      password
    }
    await addUserService(data)
    navigate('Login')
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
          autoCapitalize="words"
          value={ name }
          onChangeText={ setName }
        />
        <Input
          placeholder="Nickname"
          autoFocus
          autoCapitalize="none"
          value={ nickname }
          onChangeText={ setNickname }
        />
        <Input
          placeholder="E-mail"
          autoFocus
          autoCapitalize="none"
          autoCorrect={ false }
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
