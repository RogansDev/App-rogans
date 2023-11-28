import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { FIrstScreen } from './src/views/ContainerHome/FIrstScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecondScreen from './src/views/ContainerHome/SecondScreen';
import ThirdScreen from './src/views/ContainerHome/ThirdScreen';
import Home from './src/views/Home/Home';
import Register from './src/views/Acceder/Register';
import Loading from './src/views/loading/Loading'


export type RootStackParamsList = {
  Loading: undefined,
  FIrstScreen: undefined,
  SecondScreen: undefined,
  Regresar: undefined,
  Acceder: undefined,
  Home: undefined,
}
const Stack = createNativeStackNavigator<RootStackParamsList>();


const App = () => {


  return (
    <NavigationContainer>
      {/* <Stack.Navigator 
        name="Loading"
        component={Loading}
      /> */}
      <Stack.Navigator
         screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen 
            name="FIrstScreen" 
            component={FIrstScreen}
        />
        <Stack.Screen 
            name='SecondScreen'
            component={SecondScreen}
            options={{
              headerShown: true, 
            }}
        />
        <Stack.Screen 
            name='Regresar'
            component={ThirdScreen}
            options={{
              headerShown: true,          
            }}
        />
        <Stack.Screen 
           name='Acceder'
           component={Register}  
        />
        <Stack.Screen 
            name='Home'
            component={Home}
            options={{
              headerShown: true,
              
            }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  back: {
    backfaceVisibility: 'hidden',
  }
})

export default App;