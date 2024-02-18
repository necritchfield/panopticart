import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GlobalStyles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import ShoppingListsScreen from './screens/ShoppingListsScreen';
import ManageShoppingList from './screens/ManageShoppingList';
import UpdateItemPriceScreen from './screens/UpdateItemPriceScreen';
import AddStoreScreen from './screens/AddStoreScreen';
import ProductDetails from './components/ProductDetails';

import ShoppingListContextProvider from './store/list-context';
import ShoppingListItemsContextProvider from './store/list-items-context';

const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ShoppingListStack() {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.secondary },
        tabBarActiveTintColor: 'white'
      }}
      >
      <Stack.Screen name="ShoppingLists" component={ShoppingListsScreen} />
      <Stack.Screen name="ManageShoppingList" component={ManageShoppingList} options={{presentation: 'modal'}} />
    </Stack.Navigator>
  )
}

function LogPriceStack() {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.secondary },
        tabBarActiveTintColor: 'white'
      }}
      >
      <Stack.Screen name="Log a Price" component={UpdateItemPriceScreen} />
      <Stack.Screen name="Product Details" component={ProductDetails} options={{presentation: 'modal'}} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ShoppingListContextProvider>
        <ShoppingListItemsContextProvider>
          <NavigationContainer>
            <BottomTabs.Navigator 
              screenOptions={{
                headerStyle: { backgroundColor: GlobalStyles.colors.primary },
                headerTintColor: 'white',
                tabBarStyle: { backgroundColor: GlobalStyles.colors.secondary },
                tabBarActiveTintColor: 'white'
              }}
            >
              <BottomTabs.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                  tabBarIcon: ({color, size}) => <Ionicons name="home-outline" color={color} size={size} />
                }} 
              />
              <BottomTabs.Screen 
                name="Shopping Lists" 
                component={ShoppingListStack}
                options={{
                  headerShown: false,
                  tabBarIcon: ({color, size}) => <Ionicons name="list-outline" color={color} size={size} />
                }}
              />
              <BottomTabs.Screen 
                name="Log Price" 
                component={LogPriceStack} 
                options={{
                  headerShown: false,
                  tabBarIcon: ({color, size}) => <Ionicons name="pricetag-outline" color={color} size={size} />
                }} 
              />
              <BottomTabs.Screen
                name="Add a Store"
                component={AddStoreScreen}
                options={{
                  tabBarIcon: ({color, size}) => <Ionicons name="paper-plane-outline" color={color} size={size} />
                }}
              />
            </BottomTabs.Navigator>
          </NavigationContainer>
        </ShoppingListItemsContextProvider>
      </ShoppingListContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
