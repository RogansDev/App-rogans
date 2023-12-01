import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { FIrstScreen } from "./src/views/ContainerHome/FIrstScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import SecondScreen from "./src/views/ContainerHome/SecondScreen";
import ThirdScreen from "./src/views/ContainerHome/ThirdScreen";
import Home from "./src/views/Home/Home";
import Register from "./src/views/Acceder/Register";
import Loading from "./src/views/loading/Loading";
import { MyColors } from "./src/theme/AppTheme";
import Acceder from "./src/views/Acceder/Acceder";
import Login from "./src/views/Acceder/Login";

export type RootStackParamsList = {
  FIrstScreen: undefined;
  Martin: undefined;
  Regresar: undefined;
  Acceder: undefined;
  Home: undefined;
  Login: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamsList>();

const App = () => {
  const [isAppReady, setAppReady] = useState(false);




  return (
    <NavigationContainer>
      <Stack.Navigator>
    
        <Stack.Screen 
           name="FIrstScreen" 
           component={FIrstScreen} 
           options={{
             headerShown: false,
           }}
        />
        <Stack.Screen
          name="Martin"
          component={SecondScreen}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Regresar',
            headerTitleStyle: {
              color: 'white',
            },
            headerTintColor: MyColors.primary,
            
          }}
        />
        <Stack.Screen
          name="Regresar"
          component={ThirdScreen}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Regresar',
            headerTitleStyle: {
              color: 'white',
            },
            headerTintColor: MyColors.primary,
          }}
        />
        <Stack.Screen 
           name="Acceder" 
           component={Acceder} 
           options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Regresar',
            headerTitleStyle: {
              color: 'white',
            },
            headerTintColor: MyColors.primary,
          }}
        />
        <Stack.Screen 
           name="Login" 
           component={Login} 
           options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Inicia sesion',
            headerTitleStyle: {
              color: 'black',
            },
            headerTintColor: MyColors.primary,
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ /*  */
            headerShown: true,
            headerTitle: 'En Rogans',
            headerTitleStyle: {
              color: 'black',
            },
            headerTintColor: MyColors.primary,
            
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
