import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreens from './screens/MealsOverviewScreens';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
       <>
       <StatusBar style="dark" />
       <NavigationContainer>
           <Stack.Navigator>
               <Stack.Screen name="MealsCategories" component={CategoriesScreen}/>
               <Stack.Screen name="MealsOveriew" component={MealsOverviewScreens}/>
           </Stack.Navigator>
       </NavigationContainer>
       </>
  );
}

