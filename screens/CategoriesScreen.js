import { View, Text, FlatList , StyleSheet} from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummydata'
import CategoryGridTile from '../component/CategoryGridTile';


const CategoriesScreen = ({navigation}) => {

  const renderCategoryItem = (itemData) => {
    const PressHandler = () => {
       navigation.navigate("MealsOveriew", {
        categoryId : itemData.item.id
       })
    }
      return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={PressHandler} /> ;
  }
  
  return (
    <FlatList  data={CATEGORIES} keyExtractor={(item)=> item.id} renderItem={renderCategoryItem} 
         numColumns={2} />
    
  )
}

export default CategoriesScreen;


  