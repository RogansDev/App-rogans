import React from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import { MyColors } from "../../theme/AppTheme";
import FloatingMenu from "../../components/FloatingMenu";
import ConsultCard from "../../components/ConsultCard";
import Arrow from '../../../assets/arrow.svg'

const Home = () => {
  const consultCards = [
    {
      category: "Capilar",
      image: require("../../../assets/implante.png"),
      title: "Implantes capilares",
    },
    {
      category: "Capilar",
      image: require("../../../assets/implante.png"),
      title: "Implantes capilares",
    },
    {
      category: "Capilar",
      image: require("../../../assets/implante.png"),
      title: "Implantes capilares",
    },
  ];

  return (
    <View style={styles.container}>
      <FloatingMenu />
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Hola Juanito</Text>
          </View>
          <View style={styles.iconContainer}>
            <Image
              source={require("../../../assets/user-icon.png")}
              style={styles.userIcon}
            />
          </View>
        </View>

        <View style={styles.containerRoundedBtn}>
          <View style={styles.roundedBtn}>
            <Image
              style={styles.iconRoundedBtn}
              source={require("../../../assets/procedimientos.png")}
            />
            <Text style={styles.textRoundedBtn}>Procedimientos</Text>
          </View>
          <View style={styles.roundedBtn}>
            <Image
              style={styles.iconRoundedBtn}
              source={require("../../../assets/consultas.png")}
            />
            <Text style={styles.textRoundedBtn}>Consultas</Text>
          </View>
          <View style={styles.roundedBtn}>
            <Image
              style={styles.iconRoundedBtn}
              source={require("../../../assets/agenda.png")}
            />
            <Text style={styles.textRoundedBtn}>Mi Agenda</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.titleSection}>Consultas{"\n"}para ti</Text>
          <View style={styles.verMas}>
           <Arrow width={20} height={20}  />
            <Text style={styles.textVerMas}>Encuentra más</Text>
          </View>
        </View>
        <View style={{ marginBottom: 100 }}>
          <ConsultCard cards={consultCards} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
    position: "relative",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    marginVertical: 30,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 33,
    fontWeight: "bold",
  },
  iconContainer: {
    marginLeft: 16,
  },
  userIcon: {
    width: 27,
    height: 27,
  },
  containerRoundedBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  roundedBtn: {
    width: 100,
    height: 100,
    marginRight: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    // Sombras para Android
    elevation: 10,
    // Sombras para iOS
    shadowColor: "#F0F0F0",
    shadowOffset: { width: 4, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  iconRoundedBtn: {
    width: 20,
    height: 20,
    marginBottom: 8,
  },
  textRoundedBtn: {
    fontSize: 9.7,
  },
  section: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginVertical: 20,
  },
  titleSection: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "500",
    color: MyColors.secondary,
  },
  // Estilos boton ver mas:
  verMas: {
    flexDirection: "row",
  },
  iconVerMas: {
    marginRight: 10,
  },
  textVerMas: {
    paddingRight: 12,
  },
});

export default Home;
