import React from "react";
import { View, ScrollView, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { MyColors, MyFont } from "../../theme/AppTheme";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../../App';
import FloatingMenu from '../../components/FloatingMenu';
import ConsultCard from '../../components/ConsultCard';
import ProcedureCard from '../../components/ProcedureCard';
import ButtonConsultationList from '../../components/BottomMasConsultas';
import ButtonProcedureList from '../../components/BottomMasProcedimientos';
import Arrow from '../../../assets/arrow.svg'


const Home = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();

  const consultCards = [
    { category: 'Capilar', image: require('../../../assets/implante.png'), title: 'Implantes\ncapilares' },
    { category: 'Capilar', image: require('../../../assets/implante.png'), title: 'Implantes\ncapilares' },
    { category: 'Capilar', image: require('../../../assets/implante.png'), title: 'Implantes\ncapilares' },
  ];

  const procedureCards = [
    { image: require('../../../assets/botox.png'), title: 'Botox full face', price: '20.000' },
    { image: require('../../../assets/botox.png'), title: 'Botox full face', price: '20.000' },
    { image: require('../../../assets/botox.png'), title: 'Botox full face', price: '20.000' },
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
            {/* ICONOS DE HEADER */}
            <View style={styles.containerRoundedBtn}>
              <TouchableOpacity onPress={() => navigation.navigate("ListaDeProcedimientos")} style={styles.roundedBtn}>
                  <Image style={styles.iconRoundedBtn} source={require("../../../assets/procedimientos.png")} />
                  <Text style={styles.textRoundedBtn}>
                    Procedimientos
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("ListaDeConsultas")} style={styles.roundedBtn}>
                  <Image style={styles.iconRoundedBtn} source={require("../../../assets/consultas.png")} />
                  <Text style={styles.textRoundedBtn}>
                    Consultas
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.roundedBtn}>
                  <Image style={styles.iconRoundedBtn} source={require("../../../assets/agenda.png")} />
                  <Text style={styles.textRoundedBtn}>
                    Mi Agenda
                  </Text>
              </TouchableOpacity>
            </View>
            {/* texto de consultas y botton de mas consultas */}
            <View style={styles.section}>
                <Text style={styles.titleSection}>Consultas{"\n"}para ti</Text>
                <ButtonConsultationList />
            </View>
            {/* cards de consultas capilares */}
            <View style={{marginBottom: 50}}>
              <ConsultCard cards={consultCards} />
            </View>
            <View style={styles.section}>
                <Text style={styles.titleSection}>Procedimientos{"\n"}para ti</Text>
                <ButtonProcedureList />
            </View>
            <View style={{marginBottom: 100}}>
              <ProcedureCard cards={procedureCards} />
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
    paddingTop: 30,
    marginVertical: 30,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 33,
    fontFamily: MyFont.bold,
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
    marginBottom: 30,
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
    fontFamily: MyFont.regular,
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
    fontFamily: MyFont.medium,
    color: MyColors.secondary,
  },
});

export default Home;
