import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import * as ImagePicker from 'expo-image-picker'
import { Feather } from '@expo/vector-icons'

import { usePost } from '../../hooks/usePost'
import { useAuth } from '../../hooks/useAuth'
import { RootTabParamList } from '../../routes/app.routes'

import {
  Container, Content, Title, ImageContainer, Image, ButtonActions, ButtonImage, ButtonImageText, Input,
  ButtonSave, ButtonSaveText
} from './style'

type ImageProps = {
  uri: string
}

type NavigationProps = BottomTabNavigationProp<RootTabParamList, 'Home'>

export const AddPhoto = () => {
  const { navigate } = useNavigation<NavigationProps>()
  const [image, setImage] = useState<ImageProps>()
  const [comment, setComment] = useState('')
  const { user } = useAuth()
  const { addPost, loading } = usePost()

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
        uri: result.uri
      })
    }
  }

  const handleCameraImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      base64: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.cancelled) {
      setImage({
        uri: result.uri
      })
    }
  }

  const handleSendPost = async () => {
    const data = {
      nickname: user?.name,
      email: user?.email,
      image: {
        uri: image?.uri
      },
      comments: [
        {
          nickname: user?.name,
          comment
        }
      ]
    }

    await addPost(data)
    setImage({ uri: '' })
    setComment('')
    navigate('Home')
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

            <ButtonSave onPress={ handleSendPost }>
              <ButtonSaveText>
                { loading ? <ActivityIndicator size="large" color="#FFF"/> : 'Salvar' }
              </ButtonSaveText>
            </ButtonSave>
          </>
        ) }

      </Content>
    </Container>
  )
}
