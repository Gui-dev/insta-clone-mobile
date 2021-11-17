import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { colors, fonts } from '../../styles/global'

export const Container = styled.View`
  flex: 1;
`

export const InfoContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Info = styled.Text`
  font-size: ${fonts.heading};
  font-family: ${fonts.family.bold};
  font-weight: bold;
  color: ${colors['white-300']};
`

export const Content = styled.View`
  margin-bottom: 20px;
`

export const Image = styled.Image`
  height: ${Dimensions.get('window').width * 3 / 4}px;
  width: ${Dimensions.get('window').width}px;
  resize-mode: cover;
`
