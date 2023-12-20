import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import Icons from "../../../Presentation/theme/Icons";
import { Picker } from "@react-native-picker/picker";
import { MyColors, MyFont } from "../../../Presentation/theme/AppTheme";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import Checkbox from "expo-checkbox";
import UseViewModel from "./ViewModel/RegisterViewModel";
import CustomTextInput from "../../components/CustomTextInput";

const Register = () => {
  const {
    names,
    email,
    document,
    birthdate,
    phone,
    password,
    ConfirmPassword,
    selectValue,
    selectedDate,
    onChange,
  } = UseViewModel();

  const { LogoBlack, Eye, SendIcon } = Icons;

  return (
    <ScrollView style={styles.container}>
      {/* contenedor de formulario */}
      <View style={styles.contentForm}>
        <View style={styles.logoContainer}>
          <LogoBlack />
        </View>
        <View style={styles.form}>
          {/* Nombres y apellidos */}
          <CustomTextInput
            title="Nombre Usuario"
            placeholder="Ingrese tu nombre y apelido"
            keyboardType="default"
            value={names}
            onChangeText={onChange}
            property="names"
          />
          {/* input de telefono */}
          <CustomTextInput
            title="Telefono"
            placeholder="Ingrese tu celular"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={onChange}
            property="phone"
          />
          {/* correo electronico */}
          <CustomTextInput
            title="Correo"
            placeholder="Ingrese tu correo"
            keyboardType="email-address"
            value={email}
            onChangeText={onChange}
            property="email"
          />
          {/* documentoo  */}
          <View style={styles.contentSelect}>
            <View>
              <View style={styles.labelContent}>
                <Text style={styles.labelnombres}>Tipo de doc</Text>
              </View>
              <View style={styles.select}>
                <Picker>
                  <Picker.Item label="C.c" value="cedula" />
                  <Picker.Item label="C.E" value="cedula de extranjeria" />
                  <Picker.Item label="Visa" value="visa" />
                </Picker>
              </View>
            </View>
            <View>
              <View style={styles.labelContent}>
                <Text style={styles.labelnombres}>documento</Text>
              </View>
              <TextInput
                placeholder="tu documentoo"
                placeholderTextColor="gray"
                keyboardType="number-pad"
                style={styles.typeDoc}
                value={birthdate}
              />
            </View>
          </View>
          {/* fecha de nacimiento */}  
          <View>
            <View style={styles.labelContent}>
              <Text style={styles.labelnombres}>Fecha de nacimiento</Text>
            </View>
            <View style={styles.input}>
              {/* <Text  onPress={showDatepicker}> */}
              {/* {selectedDate
                  ? selectedDate.toDateString()
                  : "Selecciona una fecha"} */}
              {/* </Text> */}
              {/* logica de calendario pendiente */}
            </View>
          </View>
          {/* contraseñas */}
          <CustomTextInput
            title="Contraseña"
            placeholder="Ingrese tu contraseña"
            keyboardType="default"
            value={password}
            onChangeText={onChange}
            property="password"
          />
          {/* confirmar contraseña */}
          <CustomTextInput
            title="Confirmar contraseña"
            placeholder="Confirmar la contraseña"
            keyboardType="default"
            value={ConfirmPassword}
            onChangeText={onChange}
            property="ConfirmPassword"
          />
          {/* acepto terminos */}
          <View style={styles.Accept}>
            <Checkbox
              // value={isChecked}
              // onValueChange={handleCheckBoxChange}
              style={styles.checkbox}
            />
            <View style={styles.textAccept}>
              <Text>Acepto los</Text>
              <Text
                style={{ textDecorationLine: "underline" }}
                // onPress={handleAcceptTerms}
              >
                términos y condiciones
              </Text>
            </View>
          </View>
          {/* boton de registro */}
          <TouchableOpacity
            style={styles.roundedBottom}
            // onPress={() => {
            //   handleContinue();
            // }}
          >
            <View style={styles.contentNext}>
              <Text style={styles.textBottom}>Registrarme</Text>
              <SendIcon width={20} height={20} style={styles.icon} />
            </View>
          </TouchableOpacity>
          {/* mensaje de validacion si las contraseñas coiciden */}
          <View>
            {/* <Text
                // style={[
                //   styles.message,
                //   passwordsMatch ? styles.successText : styles.errorText,
                // ]}
              >
                {menssage}
              </Text>
              {/* mensaje de error si es menor de edad */}
            {/* {registrationMessage && (
                <Text style={styles.registrationMessage}>
                  {registrationMessage}
                </Text>
              )} */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  logoContainer: {
    alignSelf: "center",
  },
  contentForm: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
    position: "relative",
    marginTop: 90,
    padding: 20,
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    gap: 10,
  },
  labelContent: {
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    top: -9,
    left: 18,
    padding: 2,
    backgroundColor: MyColors.base,
    zIndex: 10,
  },
  labelnombres: {
    fontSize: 10,
    fontFamily: MyFont.regular,
    color: "#404040",
  },
  labelRequerid: {
    fontSize: 10,
    fontFamily: MyFont.regular,
    color: "gray",
    marginLeft: 3,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 3,
  },
  contentNext: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    gap: 2,
  },
  icon: {
    top: 6,
    left: 4,
  },
  contentSelect: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  select: {
    borderRadius: 10,
    width: 115,
    height: 50,
    marginVertical: 1,
    textAlign: "center",
    borderWidth: 1,
    borderColor: MyColors.black,
  },
  typeDoc: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 220,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingLeft: 10,
  },
  roundedBottom: {
    width: "100%",
    height: 50,
    alignItems: "center",
    backgroundColor: MyColors.black,
    color: MyColors.base,
    justifyContent: "center",
    borderRadius: 15,
  },
  textBottom: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: MyFont.regular,
  },
  message: {
    textAlign: "center",
    marginVertical: 10,
  },
  successText: {
    color: "green",
  },
  errorText: {
    color: "red",
  },
  dateText: {
    fontSize: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    textAlign: "center",
    width: 200,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  registrationMessage: {
    marginTop: 8,
    fontSize: 16,
    color: "red",
  },
  Accept: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textAccept: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    fontSize: 20,
    fontFamily: MyFont.regular,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
  },
});

export default Register;
