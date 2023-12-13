import React from "react";
import { ViewComponent, View, Text, Image, StyleSheet, TextInput } from "react-native";
import LogoBlack from '../../../assets/logo-black.svg'
import { MyColors, MyFont } from "../../theme/AppTheme";

const Register = () => {
  return (
    <View style={styles.conatiner}>
      {/* logo */}
      <View style={styles.logoContainer}>
        <LogoBlack  />
      </View>
      {/* contenedor de formulario */}
      <View style={styles.form}>
        {/* Nombres y apellidos */}
         <View>
            <View style={styles.labelContent}>
                <Text style={styles.labelNames}>Nombre usuario</Text>
                <Text style={styles.labelRequerid}>(Requerido)</Text>
            </View>
            <TextInput 
               placeholder="ingresa tus nombre y apellido"
               keyboardType="default"
               placeholderTextColor="gray"
               style={styles.input}
            />
         </View>
         {/* input de telefono */}
         <View>
            <View style={styles.labelContent}>
                <Text style={styles.labelNames}>Telefono</Text>
                <Text style={styles.labelRequerid}>(Requerido)</Text>
            </View>
            <TextInput
              placeholder="Ingresa tu celular"
              placeholderTextColor="gray"
              autoFocus={true}
              keyboardType="default"
              style={styles.input}
            />
         </View>
         <View>
            <View style={styles.labelContent}>
                <Text style={styles.labelNames}>Correo</Text>
                <Text style={styles.labelRequerid}>(Requerido)</Text>
            </View>
            <TextInput
              placeholder="ingresa tu correo"
              placeholderTextColor="gray"
              keyboardType="default"
              style={styles.input}
            />
         </View>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    bottom: "80%",
  },
  form: {
    width: "100%",
    height: "100%",
    position: "absolute",
    padding: 20,
    top: "20%"
  },
  labelContent: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    top: 2,
    left: 18,
    padding: 2,
    backgroundColor: MyColors.base,
    zIndex: 10,
  },
  labelNames: {
    fontSize: 11,
    fontFamily: MyFont.regular,
    color: "#404040",
  },
  labelRequerid: {
    fontSize: 10,
    fontFamily: MyFont.regular,
    color: "gray",
    marginLeft: 3
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 15,
  }
});
export default Register;
