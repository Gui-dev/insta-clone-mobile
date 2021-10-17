import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'

export const Routes = () => {
  const { Navigator, Screen } = createNativeStackNavigator()

  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Home" component={ Home }/>
    </Navigator>
  )
}
