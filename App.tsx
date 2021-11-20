import React from 'react'
import { ActivityIndicator, StatusBar, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'
import Toast from 'react-native-toast-message'

import { ContextsProviders } from './src/contexts'

import { Header } from './src/components/Header'
import { Routes } from './src/routes'

export default function App () {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#222" />
      </View>
    )
  }

  return (
    <ContextsProviders>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#0A0A0D"/>
        <Header />
        <Routes />
        <Toast />
      </NavigationContainer>
    </ContextsProviders>
  )
}
