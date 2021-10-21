import styled from 'styled-components/native'
import { colors, fonts } from '../../../styles/global'

export const Container = styled.View`
  flex: 1;
  margin: 0 10px;
`

export const Content = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
  padding: 10px;
  background-color: ${colors['gray-800']};
  border-radius: 4px;
`

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#FFF'
})`
  flex: 1;
  font-size: ${fonts.normal};
  font-family: ${fonts.family.regular};
  color: ${colors['white-300']};
`

export const ButtonSend = styled.TouchableWithoutFeedback``
