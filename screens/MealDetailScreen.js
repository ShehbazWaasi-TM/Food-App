import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

const MealDetailScreen = ({route}) => {
    const ingredients = route.params.ingredients
    console.log("ingredients", ingredients)
    const steps = route.params.steps

    const MealIngredients = (itemData) => {
        console.log("ingredientsData", itemData.item)
        return(
                 <View style={styles.ingredientsBox}>
                     <Text style={{padding : 5}}>*</Text>
                     <Text style={styles.ingredients}>{itemData.item}</Text>
                 </View>
        )
    }

    
    const MealSteps = (itemData) => {
        console.log("Steps", itemData.item)
        return(
                 <View style={styles.ingredientsBox}>
                     <Text style={{padding : 5}}>*</Text>
                     <Text style={styles.ingredients}>{itemData.item}</Text>
                 </View>
        )
    }
  return (
    <>
    <View style={styles.container}>
    <Text style={{fontWeight:"bold" , padding : 8,   fontSize : 20, color : "red"}}>ingredients</Text>
      <FlatList data={ingredients} keyExtractor={(item)=>item} renderItem={MealIngredients} />
    </View>
    <View style={styles.container}>
    <Text style={{fontWeight:"bold" , padding : 8,   fontSize : 20, color:"red"}}>Steps</Text>
      <FlatList data={steps} keyExtractor={(item)=>item} renderItem={MealSteps} />
    </View>
    </>
  )
}

export default MealDetailScreen


const styles = StyleSheet.create({
    container : {
        // flex :1,
        backgroundColor : "white",
        margin  : 15,
        height : 200,
        borderWidth : 1,
        borderRadius : 8
    },
    ingredientsBox:{
        flexDirection : "row",
    },
    ingredients : {
        fontSize : 15,
        fontWeight : "bold",
        marginHorizontal:5
    }

})