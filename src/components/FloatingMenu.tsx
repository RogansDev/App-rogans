import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Platform } from 'react-native';
import { Linking } from 'react-native';
import { MyColors, MyFont } from '../theme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import useCurrentRoute from '../hooks/useCurrentRoute';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../App';
import Icons from '../theme/Icons';


const FloatingMenu = () => {
  const { InicioIcon, ServiciosIcon, MiAgendaIcon, ComoLlegarIcon, InicioBlack, ServiciosBlack, MiAgendaBlack } = Icons;

  const currentRoute = useCurrentRoute();
  const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();

  const isActive = (routeName: string) => {
    return currentRoute === routeName;
  };

  const openMap = () => {
    const lat = 4.6948222;
    const lng = -74.0565547;
    const label = 'Rogans';
    const url = Platform.OS === 'ios' 
      ? `maps:0,0?q=${label}@${lat},${lng}` 
      : `geo:0,0?q=${lat},${lng}(${label})`;
    Linking.openURL(url);
  };  

  return (
    <View style={styles.menuContainer}>
        <View style={styles.menu}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={isActive('Home') ? styles.activeMenuItem : styles.menuItem}>
              {isActive('Home') ? <InicioBlack style={styles.menuIcon} width={20} height={20}/> : <InicioIcon style={styles.menuIcon} width={20} height={20}/>}
              <Text style={styles.menuText}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Servicios")}
              style={isActive('Servicios') ? styles.activeMenuItem : styles.menuItem}>
              {isActive('Servicios') ? <ServiciosBlack style={styles.menuIcon} width={20} height={20}/> : <ServiciosIcon style={styles.menuIcon} width={20} height={20}/>}
              <Text style={styles.menuText}>Servicios</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("MiAgenda")}
              style={isActive('MiAgenda') ? styles.activeMenuItem : styles.menuItem}>
              {isActive('MiAgenda') ? <MiAgendaBlack style={styles.menuIcon} width={20} height={20}/> : <MiAgendaIcon style={styles.menuIcon} width={20} height={20}/>}
              <Text style={styles.menuText}>Mi agenda</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openMap} style={styles.menuItem}>
              <ComoLlegarIcon style={styles.menuIcon} width={20} height={20}/>
              <Text style={styles.menuText}>Como llegar</Text>
            </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 20,
  },
  menu: {
    backgroundColor: 'white',
    width: '100%',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    // Sombras para Android
    elevation: 5,
    // Sombras para iOS
    shadowColor: '#000',
    shadowOffset: { width: 2, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuIcon: {
    marginBottom: 8,
  },
  menuText: {
    fontSize: 13,
    fontFamily: MyFont.regular,
  },
  activeMenuItem: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#00D0B1',
  },
});

export default FloatingMenu;
