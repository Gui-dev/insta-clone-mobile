import React from 'react'
import { Feather } from '@expo/vector-icons'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../screens/Home'

export const Routes = () => {
  // const { Navigator, Screen } = createNativeStackNavigator()
  const { Navigator, Screen } = createBottomTabNavigator()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#222',
          borderTopColor: '#222',
          paddingTop: 10,
          paddingBottom: 15
        },
        tabBarInactiveTintColor: '#707C8C',
        tabBarActiveTintColor: '#e2e2e2',
        tabBarShowLabel: false
      }}
    >
      <Screen
        name="Home"
        component={ Home }
        options={{
          tabBarIcon: ({ color }) => <Feather name="home" size={30} color={ color }/>
        }}
      />
      <Screen
        name="Photo"
        component={ Home }
        options={{
          tabBarIcon: ({ color }) => <Feather name="camera" size={30} color={ color }/>
        }}
      />
      <Screen
        name="User"
        component={ Home }
        options={{
          tabBarIcon: ({ color }) => <Feather name="user" size={30} color={ color }/>
        }}
      />
    </Navigator>
  )
}
