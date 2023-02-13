import { View, Text , TextInput, StyleSheet, Button, TouchableOpacity, ImageBackground, Alert} from 'react-native'
import React, { useState } from 'react'

const bgImage = require('../assets/Food_bg.jpg')

export default function WelcomeScreen({navigation}) { 
    const [user, setUser] = useState("")
    const [isHovered, setIsHovered] = useState(false);
    const [error, setError]  = useState("")

    const handleInput = (text) => {
        setUser(text)
    }

    const handleSubmit = () => {
        if (user === ""){
            setError("Please enter your Name!")
        }else{
            navigation.navigate("MealsCategories", {
                user : user
            })
            setError("")
        }
    }
  return (
    <ImageBackground source={bgImage} style={styles.container}>
      <View style={styles.innerContainer}>
      {/* <Text style={styles.Name}>Name</Text> */}
      <TouchableOpacity style={[styles.button ]}
       onPress={() => console.log('Button pressed')}
       onPressIn={() => setIsHovered(true)}
       onPressOut={() => setIsHovered(false)}
       >
         <TextInput  style={[styles.input, isHovered && styles.buttonHover]} value={user} onChangeText={handleInput} placeholder="Enter your Name" />
      </TouchableOpacity>
      {error ? <Text style={styles.error} >{error}</Text> : ""}
      <Button  title='Proceed' onPress={handleSubmit} />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        // backgroundImage: `url(${bgImage})`,
        // backgroundSize: 'cover',
    },
    innerContainer : {
        marginHorizontal : 10,
        padding : 10,
        alignItems : "center"
    },
    button : {
        borderBottomWidth : 2,
        borderBottomColor : "white", 
        width : "70%",
        marginHorizontal : 8,
        height : 50,
        marginBottom : 15,
    },
    input : {
        color : "white",
        fontfamily: "cursive",
        fontSize : 18,
        borderWidth : 0,
    },
    buttonHover : {
        borderWidth : 0,
        backgroundColor: 'red',
    },
    error:{
        color : "white",
        marginBottom : 8,
        fontSize : 15
    }
})