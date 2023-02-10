import React from 'react'
import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const MealItem = ({title, imageUrl, affordability , complexity, duration,ingredients, steps, route}) => {

  const navigation =  useNavigation()
  const {params} = route
  console.log("params", params.user)

  const seeMoreDetails = () => {
    navigation.navigate("MealsDetailScreen",{
      ingredients : ingredients,
      steps : steps,
      imageUrl : imageUrl,
      title : title,
      user       : params.user,
    })
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={seeMoreDetails} >
        <View style={styles.innerContainer}>
        <View>
           <Image style={styles.image} source={{uri : imageUrl}}/>
           <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}</Text>
            <Text style={styles.detailItem}>{complexity}</Text>
            <Text style={styles.detailItem}>{affordability}</Text>
        </View>
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem;

const styles = StyleSheet.create({
    container : {
        margin:10,
        borderRadius:15,
        backgroundColor : "white",
        overflow : "hidden",
        elevation  : 15,
        shadowColor : "black",
        shadowOpacity : 0.85,
        shadowOffset : {height : 2, width:0},
        shadowRadius : 8,
    },
    innerContainer : {
        borderRadius:15,
        overflow : "hidden"
    },
    image : {
        width : "100%",
        height: 200
    },
    title: {
        textAlign : "center",
        fontSize  : 18,
        fontWeight: "bold",
        margin:8
    },
    details : {
        padding : 8,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "center"
    },
    detailItem : {
        marginHorizontal : 4,
        fontSize : 12
    }
})
