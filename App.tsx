import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { fetchFonts, MyColors } from "./src/theme/AppTheme";
import { FIrstScreen } from "./src/views/ContainerHome/FIrstScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import SecondScreen from "./src/views/ContainerHome/SecondScreen";
import ThirdScreen from "./src/views/ContainerHome/ThirdScreen";
import Home from "./src/views/Home/Home";
import Register from "./src/views/Acceder/Register";
import Loading from "./src/views/loading/Loading";
import Acceder from "./src/views/Acceder/Acceder";
import Login from "./src/views/Acceder/Login";
import ConsultationList from "./src/views/Consultas/ConsultationList";
import ProcedureList from "./src/views/Procedimientos/ProceduresList";
import ConsultationDescription from "./src/views/Consultas/ConsultationDescription";
import ProcedureDescription from "./src/views/Procedimientos/ProcedureDescription";
import ConsultationConfirmation from "./src/views/Consultas/ConsultationConfirmation";
import ConfirmationPage from "./src/views/Consultas/ConfirmationPage";
import CustomHeader from "./src/components/CustomHeader"

export type RootStackParamsList = {
  FIrstScreen: undefined;
  Martin: undefined;
  Regresar: undefined;
  Acceder: undefined;
  Home: undefined;
  Login: undefined;
  ListaDeConsultas: undefined;
  ListaDeProcedimientos: undefined;
  DescripcionConsultas: undefined;
  DescripcionProcedimientos: undefined;
  ConfirmacionConsulta: undefined;
  Confirmado: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

const App = () => {
  const [isAppReady, setAppReady] = useState(false);

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    fetchFonts().then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) {
    return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Cargando...</Text>
    </View>;
  }

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
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ListaDeConsultas"
          component={ConsultationList}
          options={({ route, navigation }) => ({
            headerShown: true,
            headerTransparent: false,
            headerTitle: '',
            headerLeft: () => (<CustomHeader navigation={navigation} route={route} />),
            headerTintColor: '#00D0B1',
            headerTitleAlign: 'left',
            headerShadowVisible: false,
          })}
        />
        <Stack.Screen
          name="ListaDeProcedimientos"
          component={ProcedureList}
          options={({ route, navigation }) => ({
            headerShown: true,
            headerTransparent: false,
            headerTitle: '',
            headerLeft: () => (<CustomHeader navigation={navigation} route={route} />),
            headerTintColor: '#00D0B1',
            headerTitleAlign: 'left',
            headerShadowVisible: false,
          })}
        />
        <Stack.Screen
          name="DescripcionConsultas"
          component={ConsultationDescription}
          options={({ route, navigation }) => ({
            headerShown: true,
            headerTransparent: false,
            headerTitle: '',
            headerLeft: () => (<CustomHeader navigation={navigation} route={route} />),
            headerTintColor: '#00D0B1',
            headerTitleAlign: 'left',
            headerShadowVisible: false,
          })}
        />
        <Stack.Screen
          name="DescripcionProcedimientos"
          component={ProcedureDescription}
          options={({ route, navigation }) => ({
            headerShown: true,
            headerTransparent: false,
            headerTitle: '',
            headerLeft: () => (<CustomHeader navigation={navigation} route={route} />),
            headerTintColor: '#00D0B1',
            headerTitleAlign: 'left',
            headerShadowVisible: false,
          })}
        />
        <Stack.Screen
          name="ConfirmacionConsulta"
          component={ConsultationConfirmation}
          options={({ route, navigation }) => ({
            headerShown: true,
            headerTransparent: false,
            headerTitle: '',
            headerLeft: () => (<CustomHeader navigation={navigation} route={route} />),
            headerTintColor: '#00D0B1',
            headerTitleAlign: 'left',
            headerShadowVisible: false,
          })}
        />
        <Stack.Screen
          name="Confirmado"
          component={ConfirmationPage}
          options={({ route, navigation }) => ({
            headerShown: true,
            headerTransparent: false,
            headerTitle: '',
            headerLeft: () => (<CustomHeader navigation={navigation} route={route} />),
            headerTintColor: '#00D0B1',
            headerTitleAlign: 'left',
          })}
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
