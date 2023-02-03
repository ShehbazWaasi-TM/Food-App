import React from 'react'
import { MEALS } from '../data/dummydata'
import { CATEGORIES } from '../data/dummydata'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import MealItem from '../component/MealItem'

console.log(CATEGORIES)
console.log(MEALS)

const MealsOverviewScreens = ({route}) => {
  const catId = route.params.categoryId
  console.log("catId", catId)


  // useEffect(()=> {
  //   console.log("useEffect render")
  //   const MealData = MEALS.filter((Item)=> Item.categoryIds.find((ids) => ids===catId ? Item : null ))
  //   console.log(MealData)
  //   setMenu(MealData)
  // },[])

  const MealData = MEALS.filter((Item)=> Item.categoryIds.find((ids) => ids===catId ? Item : null ))
  console.log("MealData",MealData)

  const handleMealScreen = (itemData) => {
    console.log("itemdata", itemData)
    const item = itemData.item
    return (
      <MealItem title={item.title} imageUrl={item.imageUrl} affordability={item.affordability} complexity={item.complexity} duration={item.duration} />
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

