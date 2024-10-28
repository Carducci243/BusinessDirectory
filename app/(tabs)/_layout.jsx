import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'
import Ioncons from '@expo/vector-icons/Ionicons'

const Tablayout = () => {
  return (
  <Tabs screenOptions={{headerShown:false,
    tabBarActiveTintColor:'#a31818',
    tabBarInactiveTintColor:'grey'
  }}>
    <Tabs.Screen name="home" options={{tabBarLabel:'Home',
      tabBarIcon:({color})=><Ioncons name='home' size={26} color={color}/>

    }}/>
    <Tabs.Screen name="explore" options={{tabBarLabel:'Explore',
      tabBarIcon:({color})=><Ioncons name='search' size={26}  color={color}/>
    }}/>
    <Tabs.Screen name="profile" options={{tabBarLabel:'Profile',
      tabBarIcon:({color})=><Ioncons name='people' size={26} color={color}/>
    }}/>

  </Tabs>
  )
}

export default Tablayout

const styles = StyleSheet.create({})