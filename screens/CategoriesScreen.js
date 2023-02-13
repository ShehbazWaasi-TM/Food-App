import { View, Text, FlatList , StyleSheet} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { CATEGORIES } from '../data/dummydata'
import CategoryGridTile from '../component/CategoryGridTile';


const CategoriesScreen = ({navigation, route}) => {

  const {params} = route

  useLayoutEffect(()=> {
    navigation.setOptions({
      headerRight : () => {
        return <Text style={styles.user} >{`Hi! ${params.user}`}</Text>
      }
    })
  }, [navigation,route])

  const renderCategoryItem = (itemData) => {
    const PressHandler = () => {
       navigation.navigate("MealsOveriew", {
        categoryId : itemData.item.id,
        user       : params.user,
       })
    }
      return <CategoryGridTile image={itemData.item.image} title={itemData.item.title} color={itemData.item.color} onPress={PressHandler} /> ;
  }
  
  return (
    <FlatList  data={CATEGORIES} keyExtractor={(item)=> item.id} renderItem={renderCategoryItem} 
         numColumns={2} />
    
  )
}

export default CategoriesScreen;


const styles = StyleSheet.create({
  user : {
    color : "white",
    marginRight : 10,
    fontSize : 20,
  }
})