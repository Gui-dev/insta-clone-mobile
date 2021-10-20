import styled from 'styled-components/native'

import { colors, fonts } from '../../../styles/global'

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 20px 0;
`

export const Nickname = styled.Text`
  font-size: ${fonts.normal};
  color: ${colors['white-300']};
`
