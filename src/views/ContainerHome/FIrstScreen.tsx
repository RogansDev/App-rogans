import React from "react";
import { Image, StyleSheet, Text, ToastAndroid, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ScreenFirst from "../../components/ScreenFirst";
import { MyColors, MyFont } from "../../theme/AppTheme";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../../App";


export const FIrstScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();


  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/Open1.png")} style={styles.background} />
      <View style={styles.form}>
        <Text style={styles.titleform}>Bienvenidos a rogans </Text>
        <Text style={styles.parraForm}>
          Con Rogans, puedes acceder a <Text style={styles.textColor}>servicios médicos en línea</Text> y obtener
          <Text style={styles.textColor}> tratamientos personalizados </Text> para tus necesidades.
        </Text>
        <View style={{ marginTop: 20 }}>
              <ScreenFirst
                text="Siguiente" 
              />
        </View>
        <View style={styles.contentItems}>
          <Text style={styles.selectFirst}></Text>
          <Text 
             style={styles.selectSecond}
             onPress={() => navigation.navigate("Martin")}
          ></Text>
          <Text 
             style={styles.selectThird}
          ></Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    width: "100%",
    height: "100%",
    opacity: 0.7,
    zIndex: 1,
  },
  form: {
    position: "relative",
    padding: 20,
    zIndex: 10,
  },
  titleform: {
    fontSize: 30,
    fontFamily: MyFont.bold,
    textAlign: "center",
    marginTop: 20,
    color: "white",
  },
  parraForm: {
    fontSize: 14,
    fontFamily: MyFont.regular,
    textAlign: "center",
    marginTop: 20,
    color: "white",
    width: 350,
    position: "relative",
    right: 3,
    lineHeight: 18,
  },
  textColor: {
    color: MyColors.primary,
  },
  contentItems: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    gap: 20,
    marginTop: 28,
  },
  selectFirst: {
    width: 50,
    height: 10,
    backgroundColor: MyColors.base,
    borderRadius: 10,
  },
  selectSecond: {
    width: 30,
    height: 10,
    backgroundColor: MyColors.gray,
    borderRadius: 10,
  },
  selectThird: {
    width: 30,
    height: 10,
    backgroundColor: MyColors.gray,
    borderRadius: 10,
  }
});
