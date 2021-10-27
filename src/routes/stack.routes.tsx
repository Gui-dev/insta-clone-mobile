import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Login } from './../screens/Login'
import { Register } from './../screens/Register'

export type RootStackParamList = {
  Login: undefined
  Register: undefined
}

export const StackRoutes = () => {
  const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="Login"
        component={ Login }
      />

      <Screen
        name="Register"
        component={ Register }
      />
    </Navigator>
  )
}
