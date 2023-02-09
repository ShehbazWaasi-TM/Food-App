import { View, Text, FlatList, StyleSheet, Image, Button } from 'react-native'
import React, { useLayoutEffect } from 'react';
import IconButton from '../component/IconButton';

const MealDetailScreen = ({route, navigation}) => {
    const MealDetails = {
        ingredients : route.params.ingredients,
        steps       : route.params.steps,
        title       : route.params.title,
        ImageSource : route.params.imageUrl
    }
    
    const HeaderButtonPressHandler = () => {
        navigation.navigate("MealsCategories")
    }

    useLayoutEffect(()=> {
        navigation.setOptions({
            title :  MealDetails.title,
            headerRight : () => {
                return <IconButton />
              }
        })
    },[ MealDetails.title,navigation])

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
    <View style = {{flex : 1}}>
      <Image style={styles.imageStyle} source={{uri : MealDetails.ImageSource}} />
      <Text style={styles.title} >{ MealDetails.title}</Text>
    </View>
    
    <View style={styles.container}>
      <Text style={{fontWeight:"bold" , padding : 8,   fontSize : 20, color : "red"}}>ingredients</Text>
      <FlatList data={MealDetails.ingredients} keyExtractor={(item)=>item} renderItem={MealIngredients} />
    </View>

    <View style={styles.container}>
    <Text style={{fontWeight:"bold" , padding : 8,   fontSize : 20, color:"red"}}>Steps</Text>
      <FlatList data={ MealDetails.steps} keyExtractor={(item)=>item} renderItem={MealSteps} />
    </View>
    </>
  )
}

export default MealDetailScreen


const styles = StyleSheet.create({
    imageStyle : {
        width : "100%",
        height : 200
    },
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
    },
    title : {
        textAlign : "center",
        color : "white",
        fontSize : 15,
        margin : 8
    }
})