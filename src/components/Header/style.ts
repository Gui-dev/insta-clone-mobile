import styled from 'styled-components/native'
import { Platform } from 'react-native'

import { colors, fonts } from './../../styles/global'

export const Container = styled.View`
  margin-top: ${Platform.OS === 'ios' ? '20px' : '0'};
  padding: 20px;
  background-color: ${colors['gray-900']};
  border-bottom-width: 1px;
  border-color: ${colors['gray-800']};
`

export const Content = styled.View`
  align-items: center;
  flex-direction: row;
`

export const Title = styled.Text`
  font-size: ${fonts.heading};
  font-family: ${fonts.family.bold};
  color: ${colors['white-300']};
  margin-left: 10px;
`
