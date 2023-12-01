import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
import { MyColors } from "../../theme/AppTheme";
import FloatingMenu from '../../components/FloatingMenu';


const Cosultationlist = () => {
  const ConsultationItems = [
    { image: require('../../../assets/implante2.png'), title: 'Trasplante capilar' },
    { image: require('../../../assets/implante2.png'), title: 'Trasplante capilar' },
    { image: require('../../../assets/implante2.png'), title: 'Trasplante capilar' },
    { image: require('../../../assets/implante2.png'), title: 'Trasplante capilar' },
    { image: require('../../../assets/implante2.png'), title: 'Trasplante capilar' },
    { image: require('../../../assets/implante2.png'), title: 'Trasplante capilar' },
  ];
    return (
      <View style={styles.container}>
        <FloatingMenu />
        <ScrollView>
            <Text style={styles.title}>Consultas para ti</Text>
            <View style={styles.consultationsContainer}>
            {ConsultationItems.map((item, index) => (
              <View key={index} style={styles.consultation}>
                  <Image source={item.image} style={styles.consultationImage} />
                  <View style={styles.consultationInfo}>
                    <Text style={styles.consultationTitle}>{item.title}</Text>
                    <View style={styles.agendarBtn}>
                      <Image style={styles.iconAgendarBtn} source={require("../../../assets/icon-calendar.png")} />
                      <Text style={styles.textAgendarBtn}>
                        Agendar
                      </Text>
                    </View>
                  </View>
              </View>
            ))}
            </View>
        </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCFCFC',
      position: "relative",
    },
    title: {
      fontSize: 18,
      fontWeight: '500',
      color: MyColors.secondary,
      marginTop: 30,
      marginBottom: 15,
      paddingHorizontal: 16,
    },
    consultationsContainer: {
      marginBottom: 100,
      paddingHorizontal: 16,
    },
    consultation: {
      flexDirection: 'row',
      backgroundColor: 'white',
      borderRadius: 15,
      marginBottom: 12,
    },
    consultationInfo: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: 20,
      paddingRight: 25,
      paddingLeft: 15,
      paddingBottom: 15,
    },
    consultationImage: {
      width: 143,
      height: 111,
      borderRadius: 15,
    },

    consultationTitle: {
      fontSize: 18,
      fontWeight: '500',
      color: '#404040',
      marginBottom: 30,
    },
    // Estilos boton agendar:
    agendarBtn: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    iconAgendarBtn: {
      marginRight: 10,
    },
    textAgendarBtn: {
      fontSize: 13,
      fontWeight: '400',
    },
});

export default Cosultationlist;