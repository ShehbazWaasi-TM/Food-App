import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function IconButton({onPress}) {
  return (
    <TouchableOpacity android_ripple={{color:"#ffff"}} onPress={onPress}  >
       <EvilIcons name="star" size={24} color="white"  />
    </TouchableOpacity>
  )
}