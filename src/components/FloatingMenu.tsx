import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const FloatingMenu = () => {
  const menuItems = [
    { label: 'Inicio', icon: require('../../assets/inicio.png') },
    { label: 'Servicios', icon: require('../../assets/servicios.png') },
    { label: 'Historial', icon: require('../../assets/mi-agenda.png') },
    { label: 'Tienda', icon: require('../../assets/como-llegar.png') },
  ];

  return (
    <View style={styles.menuContainer}>
        <View style={styles.menu}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <Image source={item.icon} style={styles.menuIcon} />
              <Text style={styles.menuText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
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
    justifyContent: 'space-around',
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
    width: 20,
    height: 20,
    marginBottom: 8,
  },
  menuText: {
    fontSize: 14,
  },
});

export default FloatingMenu;
