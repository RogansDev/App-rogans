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
import Icons from "../../theme/Icons";
import { Picker } from "@react-native-picker/picker";
import { MyColors, MyFont } from "../../theme/AppTheme";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import Checkbox from "expo-checkbox";

const Register = () => {
  // estados de input
  const [nombres, setNombres] = useState("");
  const [telefono, setTelefono] = useState("");
  const [documento, setDocumento] = useState("");
  const [correo, setCorreo] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [selectValue, setSelectValue] = useState("opcion1");
  const [fechaDeNacimiento, setFechaDeNacimiento] = useState(new Date()); // fexha de nacimient
  // estados de valdaciones
  const [showPassword, setShowPassword] = useState(false);
  const [passwordsMatch, setPasswordMatch] = useState(true);
  const [menssage, setMenssage] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [registrationMessage, setRegistrationMessage] = useState<string | null>(
    null
  );
  const [isChecked, setIsChecked] = useState(false);

  const handleAcceptTerms = () => {
    if (isChecked) {
      // logica para navegar a otra pantalla
      console.log("Le diste check");
    } else {
      // Informar al usuario de que debe marcar el CheckBox para aceptar las políticas
      console.log("Debes aceptar las políticas antes de proceder.");
    }
  };

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDateChange = (event: DateTimePickerEvent, date?: Date) => {
    setShowDatePicker(Platform.OS === "ios");
    if (date) {
      setSelectedDate(date);
      setRegistrationMessage(null);
    }
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const checkPasswordsMatch = () => {};

  //funcion para ocultar o ver las contraseñas
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //password 1
  const handlePasswordChange = (text: string) => {
    setPassword1(text);
  };
  //  password 2
  const handlePassword2Change = (text: string) => {
    setPassword2(text);
  };
  //  aca se validan las contraseñas si son iguales
  const handleContinue = () => {
    setPasswordMatch(password1 === password2);
    setMenssage(
      password1 === password2
        ? "Las contraseñas coicides"
        : "Las contraseñas no coiciden"
    );
    if (selectedDate) {
      const currentDate = new Date();
      const age = currentDate.getFullYear() - selectedDate.getFullYear();

      if (age < 18) {
        setRegistrationMessage("Debes ser mayor de edad para registrarte.");
      } else {
        // Realizar el proceso de registro aquí
        setRegistrationMessage("¡Registrado con éxito!");
      }
    } else {
      setRegistrationMessage(
        "Selecciona tu fecha de nacimiento antes de registrar."
      );
    }
  };

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
          <View>
            <View style={styles.labelContent}>
              <Text style={styles.labelnombres}>Nombre usuario</Text>
            </View>
            <TextInput
              placeholder="ingresa tus nombre y apellido"
              keyboardType="default"
              placeholderTextColor="gray"
              style={styles.input}
              value={nombres}
              onChangeText={setNombres}
            />
          </View>
           {/* input de telefono */}
          <View>
            <View style={styles.labelContent}>
              <Text style={styles.labelnombres}>Telefono</Text>
              <Text style={styles.labelRequerid}>(Requerido)</Text>
            </View>
            <TextInput
              placeholder="Ingresa tu celular"
              placeholderTextColor="gray"
              value={telefono}
              onChangeText={setTelefono}
              keyboardType="default"
              style={styles.input}
            />
          </View>
            {/* correo electronico */}
          <View>
            <View style={styles.labelContent}>
              <Text style={styles.labelnombres}>Correo</Text>
              <Text style={styles.labelRequerid}>(Requerido)</Text>
            </View>
            <View>
              <TextInput
                placeholder="ingresa tu correo"
                placeholderTextColor="gray"
                keyboardType="default"
                style={styles.input}
                value={correo}
                onChangeText={setCorreo}
              />
            </View>
          </View>
           {/* documentoo  */}
          <View style={styles.contentSelect}>
            <View>
              <View style={styles.labelContent}>
                <Text style={styles.labelnombres}>Tipo de doc</Text>
              </View>
              <View style={styles.select}>
                <Picker
                  selectedValue={selectValue}
                  onValueChange={(itemValue, itemIndex) => 
                    setSelectValue(itemValue)
                  }
                >
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
                value={documento}
                onChangeText={setDocumento}
              />
            </View>
          </View>
          {/* fecha de nacimiento */}
          <View>
             <View style={styles.labelContent}>
             <Text style={styles.labelnombres}>Fecha de nacimiento</Text>
             </View>
             <View style={styles.input}>
             <Text  onPress={showDatepicker}>
                {selectedDate
                  ? selectedDate.toDateString()
                  : "Selecciona una fecha"}
              </Text>
              {/* logica de calendario pendiente */}
             </View>
          </View>
           {/* contraseñas */}
           <View>
            <View style={styles.labelContent}>
              <Text style={styles.labelnombres}>Contraseña</Text>
              <Text style={styles.labelRequerid}>(Requerido)</Text>
            </View>
            <View>
              <TextInput
                placeholder="Ingresa tu contraseña"
                placeholderTextColor="gray"
                keyboardType="default"
                secureTextEntry={!showPassword} // Oculta la contraseña si showPassword es falso
                value={password1}
                onChangeText={handlePasswordChange}
                style={styles.input}
              />
              <TouchableOpacity
                style={{ position: "absolute", right: 10, top: 30 }}
                onPress={togglePasswordVisibility}
              >
                <Eye width={30} height={20} />
              </TouchableOpacity>
            </View>
          </View>
          {/* confirmar contraseña */}
          <View>
            <View style={styles.labelContent}>
              <Text style={styles.labelnombres}>Confirmar contraseña</Text>
              <Text style={styles.labelRequerid}>(Requerido)</Text>
            </View>
            <View>
              <TextInput
                placeholder="Ingresa tu contraseña"
                placeholderTextColor="gray"
                keyboardType="default"
                secureTextEntry={!showPassword} // Oculta la contraseña si showPassword es falso
                value={password2}
                onChangeText={handlePassword2Change}
                style={styles.input}
              />
              <TouchableOpacity
                style={{ position: "absolute", right: 10, top: 30 }}
                onPress={togglePasswordVisibility}
              >
                <Eye width={30} height={20} />
              </TouchableOpacity>
            </View>
          </View>
         {/* acepto terminos */}
         <View style={styles.Accept}>
            <Checkbox
              value={isChecked}
              onValueChange={handleCheckBoxChange}
              style={styles.checkbox}
            />
            <View style={styles.textAccept}>
              <Text>Acepto los</Text>
              <Text
                style={{ textDecorationLine: "underline" }}
                onPress={handleAcceptTerms}
              >
                términos y condiciones
              </Text>
            </View>
          </View>
          {/* boton de registro */}
          <TouchableOpacity
            style={styles.roundedBottom}
            onPress={() => {
              handleContinue();
            }}
          >
            <View style={styles.contentNext}>
              <Text style={styles.textBottom}>Registrarme</Text>
              <SendIcon width={20} height={20}  style={styles.icon}/>
            </View>
          </TouchableOpacity>
          {/* mensaje de validacion si las contraseñas coiciden */}
          <View>
              <Text
                style={[
                  styles.message,
                  passwordsMatch ? styles.successText : styles.errorText,
                ]}
              >
                {menssage}
              </Text>
              {/* mensaje de error si es menor de edad */}
              {registrationMessage && (
                <Text style={styles.registrationMessage}>
                  {registrationMessage}
                </Text>
              )}

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
