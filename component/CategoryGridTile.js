import { View, Text, Pressable, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'


export default function CategoryGridTile({title,image,  color, onPress}) {   
    console.log("image", image) 
  return (
    <ImageBackground source={{uri : image}} style={[styles.GridItem,{backgroundColor : color} ]} >
        <Pressable android_ripple={{color:"#ccc"}} style={styles.button} onPress={onPress}>
            <View style={styles.InnerContainer}>
               <Text style={{ fontSize:20, color : "white"}} >{title}</Text>
            </View>
        </Pressable>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    GridItem : {
        flex : 1,
        margin :16,
        marginTop:10,
        height : 159,
        borderRadius : 8,
        // elevation : 4,
        shadowColor : "black",
        shadowOpacity : 0.85,
        shadowOffset : {height : 2, width:0},
        shadowRadius : 8,
        overflow : "hidden"
    },
    button : {
        flex : 1
    },
    InnerContainer : {
        flex : 1,
        padding : 16,
        justifyContent : "center",
        textAlign : "center"
    }
})