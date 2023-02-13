import {React, useLayoutEffect} from 'react'
import { MEALS } from '../data/dummydata'
import { CATEGORIES } from '../data/dummydata'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import MealItem from '../component/MealItem'

console.log(CATEGORIES)
console.log(MEALS)

const MealsOverviewScreens = ({route, navigation}) => {
  const catId = route.params.categoryId
  const cat = route.params
  console.log("cat", cat)
  console.log("catId", catId)

  useLayoutEffect(()=> {
    const categoryTitle = CATEGORIES.find((category)=> category.id === catId).title
    navigation.setOptions({
      title : categoryTitle
    })  
  },[catId,navigation])

  const MealData = MEALS.filter((Item)=> Item.categoryIds.find((ids) => ids===catId ? Item : null ))
  console.log("MealData",MealData)
 

  const handleMealScreen = (itemData) => {
    console.log("itemdata", itemData)
    const item = itemData.item
    return (
      <MealItem route={route} navigation={navigation} title={item.title} imageUrl={item.imageUrl} affordability={item.affordability} complexity={item.complexity} duration={item.duration} ingredients={item.ingredients} steps={item.steps}  />
    )
  }

  return (
    <View style={styles.container} >
        <FlatList  data={MealData} keyExtractor={(Item)=>Item.id} renderItem={handleMealScreen}/>
    </View>
  )
}

export default MealsOverviewScreens;

const styles = StyleSheet.create({
    container : {
        flex :1,
        padding : 16,
    }
})

