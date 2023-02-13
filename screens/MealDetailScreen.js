import { View, Text, FlatList, StyleSheet, Image, Button, Dimensions } from 'react-native'
import React, { useLayoutEffect } from 'react';
import IconButton from '../component/IconButton';
import { ScrollView } from 'react-native';
import MealInfo from "../component/MealInfo";

const MealDetailScreen = ({route, navigation}) => {
    const MealDetails = {
        ingredients : route.params.ingredients,
        steps       : route.params.steps,
        title       : route.params.title,
        ImageSource : route.params.imageUrl
    }
    
    const {params} = route

    const HeaderButtonPressHandler = () => {
        navigation.navigate("MealsCategories",{
            user       : params.user,
        })
    }

    useLayoutEffect(()=> {
        navigation.setOptions({
            title :  MealDetails.title,
            headerRight : () => {
                return <IconButton style={styles.IconButton} onPress={HeaderButtonPressHandler} />
              },
        })
    },[ MealDetails.title,navigation])
    
    
  return (
    <View style={{flex : 1}}>
    <View style = {{flex : 1}}>
      <Image style={styles.imageStyle} source={{uri : MealDetails.ImageSource}} />
      <Text style={styles.title} >{ MealDetails.title}</Text>
    </View>
    
    <ScrollView style={styles.outerContainer}>
    <View style={styles.container}>
      <Text style={{fontWeight:"bold" , padding : 8,   fontSize : 20, color : "red"}}>ingredients</Text>
      <MealInfo data={MealDetails.ingredients} />
    </View>

    <View style={styles.container}>
      <Text style={{fontWeight:"bold" , padding : 8,   fontSize : 20, color:"red"}}>Steps</Text>
      <MealInfo data={ MealDetails.steps}  />
    </View>
    </ScrollView>
    </View>
  )
}

export default MealDetailScreen

const DimensionHeight = Dimensions.get("window").height

const styles = StyleSheet.create({
    imageStyle : {
        flex :1,
        width : "100%",
        height : 200
    },
    outerContainer : {
        flex : 1
    },
    container : {
        // flex :1,
        backgroundColor : "white",
        margin  : 15,
        // height : 200,
        borderWidth : 1,
        borderRadius : 8
    },
    title : {
        textAlign : "center",
        color : "white",
        fontSize : 15,
        margin : 8
    },
    IconButton:{
      marginRight : 15
    }
})