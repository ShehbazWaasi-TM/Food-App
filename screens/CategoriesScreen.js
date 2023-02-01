import { View, Text, FlatList , StyleSheet} from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummydata'
import CategoryGridTile from '../component/CategoryGridTile';

const renderCategoryItem = (itemData) => {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} /> ;
}

const CategoriesScreen = () => {
  return (<View style={styles.container}><FlatList  data={CATEGORIES} keyExtractor={(item)=> item.id} renderItem={renderCategoryItem} numColumns={2} /></View>
    
  )
}

export default CategoriesScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    //   alignItems: 'center',
    //   justifyContent: 'center'
    },
  });
  