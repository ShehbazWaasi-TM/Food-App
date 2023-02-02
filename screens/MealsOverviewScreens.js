import React from 'react'
import { MEALS } from '../data/dummydata'
import { View, Text, StyleSheet } from 'react-native'

const MealsOverviewScreens = () => {
  return (
    <View style= {styles.container} >
        <Text>Meals Overview Screen</Text>
    </View>
  )
}

export default MealsOverviewScreens;

const styles = StyleSheet.create({
    container : {
        flex :1,
        padding :16
    }
})

