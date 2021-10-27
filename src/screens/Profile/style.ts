import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

import { colors, fonts } from '../../styles/global'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors['gray-900']};
`

export const Nickname = styled.Text`
  font-size: ${fonts.heading};
  font-family: ${fonts.family.bold};
  color: ${colors['white-300']};
  margin-top: 20px;
`

export const Email = styled.Text`
  font-size: ${fonts.normal};
  font-family: ${fonts.family.bold};
  color: ${colors['white-300']};
`

export const ButtonLogout = styled(RectButton)`
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 90%;
  margin-top: 20px;
  background-color: ${colors['purple-600']};
  border-radius: 5px;
`

export const ButtonLogoutText = styled.Text`
  font-size: ${fonts.heading};
  font-family: ${fonts.family.bold};
  color: ${colors['white-300']};
`
