import React from 'react'
import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../screens/Home'
import { AddPhoto } from '../screens/AddPhoto'
import { Profile } from '../screens/Profile'

export type RootTabParamList = {
  Home: undefined
  AddPhoto: undefined
  Profile: undefined
}

export const AppRoutes = () => {
  const { Navigator, Screen } = createBottomTabNavigator<RootTabParamList>()

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
        name="AddPhoto"
        component={ AddPhoto }
        options={{
          tabBarIcon: ({ color }) => <Feather name="camera" size={30} color={ color }/>
        }}
      />
      <Screen
        name="Profile"
        component={ Profile }
        options={{
          tabBarIcon: ({ color }) => <Feather name="user" size={30} color={ color }/>
        }}
      />
    </Navigator>
  )
}
