import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

import { colors, fonts } from '../../styles/global'

export const Container = styled.ScrollView`
  background-color: ${colors['gray-900']};
`

export const Form = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
`

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#FFF'
})`
  font-size: ${fonts.normal};
  font-family: ${fonts.family.regular};
  color: ${colors['white-300']};
  margin-top: 20px;
  padding: 10px;
  height: 60px;
  width: 100%;
  background-color: ${colors['gray-800']};
  border-radius: 4px;
`

export const ButtonLogin = styled(RectButton)`
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  margin-top: 20px;
  background-color: ${colors['purple-600']};
  border-radius: 5px;
`

export const ButtonLoginText = styled.Text`
  font-size: ${fonts.heading};
  font-family: ${fonts.family.bold};
  color: ${colors['white-300']};
`

export const ButtonRegister = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  margin-top: 40px;
`

export const ButtonRegisterText = styled.Text`
  font-size: ${fonts.normal};
  font-family: ${fonts.family.bold};
  color: ${colors['gray-400']};
`
