import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MyColors } from "../../theme/AppTheme";
import LoginClick from "../../components/LoginClick";
import RegisterClick from "../../components/RegisterClick";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../App";

const Acceder = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/acceder.jpg")}
        style={styles.background}
      />
      <View style={styles.contend}>
        <Image
          source={require("../../../assets/logo-white.png")}
          style={styles.logo}
        />
        <View style={styles.bottomGap}>
          <LoginClick />
          <RegisterClick />
        </View>
        <View style={styles.contentColum}>
          <View>
            <Image source={require("../../../assets/linea.png")} />
          </View>
          <View style={styles.redesSociales}>
            <Image source={require("../../../assets/Facebook.png")} />
            <Image source={require("../../../assets/Google.png")} />
            <Image source={require("../../../assets/Apple.png")} />
          </View>
        </View>
        <View style={styles.invitadoPerfil}>
          <View style={styles.contendInvitado}>
            <Image source={require("../../../assets/invitadp.png")} />
            <Text
              style={styles.textInvitado}
              onPress={() => navigation.navigate("Home")}
            >
              Ingresa como invitado
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  background: {
    width: "100%",
    height: "100%",
    opacity: 0.7,
  },
  contend: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 50,
    position: "absolute",
    bottom: 220,
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    zIndex: 20,
  },
  bottomGap: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  contentColum: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    marginBottom: 20,
  },
  redesSociales: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
  },
  invitadoPerfil: {
    display: "flex",
    position: "absolute",
    top: 580,
  },
  contendInvitado: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    bottom: 50,
    gap: 20,
  },
  textInvitado: {
    color: "white",
    fontSize: 20,
  },
});
export default Acceder;
