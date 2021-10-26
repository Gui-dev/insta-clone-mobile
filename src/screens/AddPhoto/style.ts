import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import { colors, fonts } from './../../styles/global'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors['gray-900']};
`

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    marginTop: 15,
    paddingVertical: 30
  }
})`
`

export const Title = styled.Text`
  font-size: ${fonts.normal};
  font-family: ${fonts.family.regular};
  color: ${colors['white-300']};
`

export const ImageContainer = styled.View`
  height: ${Dimensions.get('window').width * 3 / 4}px;
  width: 90%;
  margin-top: 10px;
  background-color: ${colors['gray-800']};
`

export const Image = styled.Image`
  height: ${Dimensions.get('window').width * 3 / 4}px;
  width: 100%;
  resize-mode: center;
`

export const ButtonActions = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

export const ButtonImage = styled(RectButton)`
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40%;
  margin: 10px;
  background-color: ${colors['purple-600']};
  border-radius: 5px;
`

export const ButtonImageText = styled.Text`
  font-size: ${fonts.normal};
  font-family: ${fonts.family.bold};
  color: ${colors['white-300']};
`

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#FFF'
})`
  flex: 1;
  align-self: stretch;
  font-size: ${fonts.normal};
  font-family: ${fonts.family.regular};
  color: ${colors['white-300']};
  margin: 10px 20px;
  padding: 10px;
  background-color: ${colors['gray-800']};
  border-radius: 4px;
`

export const ButtonSave = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 60%;
  margin-top: 10px;
  background-color: ${colors['purple-600']};
  border-radius: 5px;
`

export const ButtonSaveText = styled.Text`
  font-size: ${fonts.normal};
  font-family: ${fonts.family.bold};
  color: ${colors['white-300']};
`
