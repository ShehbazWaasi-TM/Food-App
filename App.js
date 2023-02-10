import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreens from './screens/MealsOverviewScreens';
import MealDetailScreen from './screens/MealDetailScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
       <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
       <NavigationContainer>
           <Stack.Navigator screenOptions={{
            headerStyle : {backgroundColor : "#351401" ,  borderBottomWidth: 0},
            headerTintColor : "white",
            contentStyle  : {backgroundColor : "#3f2f25"}
           }} >
               <Stack.Screen name="FoodApp" component={WelcomeScreen} />
               <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{title : "All Categories"}}/>
               <Stack.Screen name="MealsOveriew" component={MealsOverviewScreens}/>
               <Stack.Screen name='MealsDetailScreen' component={MealDetailScreen} />
           </Stack.Navigator>
       </NavigationContainer>
       </>
  );
}

