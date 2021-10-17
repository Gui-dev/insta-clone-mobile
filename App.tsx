import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AppLoading from 'expo-app-loading'
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'

import { Routes } from './src/routes'

export default function App () {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <AppLoading />
    </View>
  }

  return (
    <>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  )
}
