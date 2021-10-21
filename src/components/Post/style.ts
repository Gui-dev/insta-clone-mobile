import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

export const Container = styled.View`
  flex: 1;
`

export const Content = styled.View`
  margin-bottom: 20px;
`

export const Image = styled.Image`
  height: ${Dimensions.get('window').width * 3 / 4}px;
  width: ${Dimensions.get('window').width}px;
  resize-mode: cover;
`
