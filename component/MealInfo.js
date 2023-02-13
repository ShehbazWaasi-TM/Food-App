import {React} from "react";
import { View, Text, StyleSheet } from "react-native";

const MealInfo = ({data}) => {
    return (
        <View style={styles.infoBox}>
            {
                data.map((info)=>{
                    return (
                    <View key={info} style={{flexDirection : "row"}}>
                        <Text style={{padding : 5}}>*</Text>
                        <Text style={styles.info}>{info}</Text>
                    </View>
                )})
            }
        </View>
    )
};

export default MealInfo;

const styles = StyleSheet.create({
    infoBox:{
        flexDirection : "column"
    },
    info : {
        fontSize : 15,
        fontWeight : "bold",
        marginHorizontal:5, 
        paddingRight : 15
    },
})