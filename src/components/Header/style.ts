import styled from 'styled-components/native'
import { Platform } from 'react-native'

import { colors, fonts } from './../../styles/global'

export const Container = styled.View`
  margin-top: ${Platform.OS === 'ios' ? '20px' : '0'};
  padding: 20px 0;
  background-color: ${colors['gray-900']};
  border-bottom-width: 1px;
  border-color: ${colors['gray-800']};
`

export const Content = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 0 20px;
`

export const Brand = styled.View`
  align-items: center;
  flex-direction: row;
`

export const Title = styled.Text`
  font-size: ${fonts.heading};
  font-family: ${fonts.family.bold};
  color: ${colors['white-300']};
  margin-left: 10px;
`

export const InfoUser = styled.View`
  align-items: center;
  flex-direction: row;
`

export const UserName = styled.Text`
  font-size: ${fonts.normal};
  font-family: ${fonts.family.bold};
  color: ${colors['white-300']};
  margin-right: 5px;
`
