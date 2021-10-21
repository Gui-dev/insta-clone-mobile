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
  margin-bottom: 5px;
`

export const Nickname = styled.Text`
  font-size: ${fonts.normal};
  font-family: ${fonts.family.bold};
  color: ${colors['white-300']};
`

export const Comment = styled.Text`
  font-size: ${fonts.normal};
  color: ${colors['white-300']};
`
