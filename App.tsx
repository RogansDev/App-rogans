import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { FIrstScreen } from './src/views/ContainerHome/FIrstScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SecondScreen from './src/views/ContainerHome/SecondScreen';
import ThirdScreen from './src/views/ContainerHome/ThirdScreen';
import Home from './src/views/Home/Home';
import ConsultationList from './src/views/Consultas/ConsultationList';
import Register from './src/views/Acceder/Register';
import Loading from './src/views/loading/Loading'
import ConsultationDescription from './src/views/Consultas/ConsultationDescription';
import ConsultationConfirmation from './src/views/Consultas/ConsultationConfirmation';
import ConfirmationPage from './src/views/Consultas/ConfirmationPage';
import ProceduresList from './src/views/Procedimientos/ProceduresList';
import ProcedureDescription from './src/views/Procedimientos/ProcedureDescription';


export type RootStackParamsList = {
  Loading: undefined,
  FIrstScreen: undefined,
  Martin: undefined,
  Regresar: undefined,
  Acceder: undefined,
  Home: undefined,
  Consultas: undefined,
  DescConsultas: undefined,
  ConfirmConsultas: undefined,
  Confirmation: undefined,
  Procedimientos: undefined,
  DescProcedimientos: undefined,
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
            name='Martin'
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
        <Stack.Screen 
            name='Consultas'
            component={ConsultationList}
            options={{
              headerShown: true,
              
            }}
        />
        <Stack.Screen 
            name='DescConsultas'
            component={ConsultationDescription}
            options={{
              headerShown: true,
              
            }}
        />
        <Stack.Screen 
            name='ConfirmConsultas'
            component={ConsultationConfirmation}
            options={{
              headerShown: true,
              
            }}
        />
        <Stack.Screen 
            name='Confirmation'
            component={ConfirmationPage}
            options={{
              headerShown: true,
              
            }}
        />
        <Stack.Screen 
            name='Procedimientos'
            component={ProceduresList}
            options={{
              headerShown: true,
              
            }}
        />
        <Stack.Screen 
            name='DescProcedimientos'
            component={ProcedureDescription}
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