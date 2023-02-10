import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';

export default function IconButton({onPress}) {
  return (
    <Pressable onPress={onPress} style={[({pressed}) => [{backgroundColor: pressed ? '#FF0000' : '#DDDDDD'}], {overflow: "hidden", marginRight:8}]} >
       <EvilIcons name="star" size={24} color="white" />
    </Pressable>
  )
}