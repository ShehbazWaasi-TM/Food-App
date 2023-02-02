import React, { useEffect, useState } from 'react'
import { MEALS } from '../data/dummydata'
import { CATEGORIES } from '../data/dummydata'
import { View, Text, StyleSheet, FlatList } from 'react-native'

console.log(CATEGORIES)
console.log(MEALS)

const MealsOverviewScreens = ({route}) => {
  const [Menu, setMenu] = useState([])
  const catId = route.params.categoryId
  console.log("catId", catId)


  useEffect(()=> {
    console.log("useEffect render")
    const MealData = MEALS.filter((Item)=> Item.categoryIds.find((ids) => ids===catId ? Item : null ))
    console.log(MealData)
    setMenu(MealData)
  },[])
 
  console.log("menu", Menu)

  return (
    <View style= {styles.container} >
        <FlatList />
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

