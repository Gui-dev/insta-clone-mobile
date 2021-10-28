import React, { useEffect, useState } from 'react'
import { Alert, Platform } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { Feather } from '@expo/vector-icons'

import {
  Container, Content, Title, ImageContainer, Image, ButtonActions, ButtonImage, ButtonImageText, Input,
  ButtonSave, ButtonSaveText
} from './style'

type ImageProps = {
  uri: string,
  base64: string | undefined
}

export const AddPhoto = () => {
  const [image, setImage] = useState<ImageProps>()
  const [comment, setComment] = useState('')

  useEffect(() => {
    (
      async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
          const { status: result } = await ImagePicker.requestCameraPermissionsAsync()

          if (status !== 'granted' || result !== 'granted') {
            Alert.alert('Oooops', 'Você dá permissão')
          }
        }
      }
    )()
  }, [])

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.cancelled) {
      setImage({
        uri: result.uri,
        base64: result.base64
      })
    }
  }

  const handleCameraImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.cancelled) {
      setImage({
        uri: result.uri,
        base64: result.base64
      })
    }
  }

  const handleSavePhoto = async () => {
    Alert.alert('Imagem adicionada')
  }

  return (
    <Container>
      <Content>
        <Title>Compartilhe uma imagem</Title>

        { image && (
          <ImageContainer>
            <Image source={{ uri: image?.uri }}/>
          </ImageContainer>
        ) }

        <ButtonActions>
          <ButtonImage onPress={ handlePickImage }>
            <ButtonImageText>Escolha a foto</ButtonImageText>
          </ButtonImage>

          <ButtonImage onPress={ handleCameraImage }>
            <Feather name="camera" size={20} color="#e2e2e2"/>
          </ButtonImage>
        </ButtonActions>

        { image && (
          <>
            <Input
              placeholder="Digite um comentário"
              value={ comment }
              onChangeText={ setComment }
            />

            <ButtonSave onPress={ handleSavePhoto }>
              <ButtonSaveText>Salvar</ButtonSaveText>
            </ButtonSave>
          </>
        ) }

      </Content>
    </Container>
  )
}
