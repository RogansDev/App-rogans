import React, { useEffect } from 'react';
import { Linking } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from './App';

const DeepLinkHandler = ({ children }: any) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();

  useEffect(() => {
    const handleDeepLink = (event: any) => {
      const url = event.url;
      let queryParams = url.split('?')[1];
      let data: any = {};
      queryParams.split('&').forEach((param: any) => {
        let [key, value] = param.split('=');
        data[key] = decodeURIComponent(value);
      });

      // Cerrar el navegador web
      WebBrowser.dismissBrowser();
      
      // Verificar el estado y ejecutar la función correspondiente
      if (data.estado === 'exitoso') {
        navigation.navigate("Confirmado");        
      } else if (data.estado === 'pendiente') {
        navigation.navigate("Pendiente");
      } else {
        navigation.navigate("Rechazado");
      }
    };

    const subscription = Linking.addEventListener('url', handleDeepLink);

    return () => {
      subscription.remove();
    };
  }, []);

  return children;
}

export default DeepLinkHandler;
