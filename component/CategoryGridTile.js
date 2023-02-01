import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function CategoryGridTile({title, color}) {
  return (
    <View style={[styles.GridItem, {backgroundColor : color}]} >
        <Pressable android_ripple={{color:"#ccc"}} style={styles.button}>
            <View style={styles.InnerContainer}>
               <Text style={{fontWeight:"bold", fontSize:14}} >{title}</Text>
            </View>
        </Pressable>
    </View>
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