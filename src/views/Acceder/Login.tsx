import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from '../../../App';
import SingLogin from "../../components/SingLogin";
import LogoBlack from "../../../assets/icons/logo-black.svg";
import Forget from "../../../assets/icons/password-check.svg";
import { MyColors, MyFont } from "../../theme/AppTheme";
import Checkbox from "expo-checkbox";
import UpdatePassword from '../../../assets/icons/password-check.svg';
import LineGray from '../../../assets/icons/Frame.svg';
import Google from '../../../assets/icons/google-colors.svg';
import Facebook from '../../../assets/icons/Facebook-colors.svg';
import Apple from '../../../assets/icons/apple-colors.svg';


const Login = () => {


  const [isChecked, setIsChecked] = useState(false);

  const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleAcceptTerms = () => {
    if (isChecked) {
      // logica para navegar a otra pantalla
      console.log("Le diste check");
    } else {
      // Informar al usuario de que debe marcar el CheckBox para aceptar las políticas
      console.log("Debes aceptar las políticas antes de proceder.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoBlack width={140} height={100} />
      </View>
      <View style={styles.form}>
        {/* imput de login */}
        <View>
          <View style={styles.titleModalButton}>
            <Text style={styles.text1TitleModalButton}>
              Nombre de usuario
            </Text>
            <Text style={styles.text2TitleModalButton}>(Requerido)</Text>
          </View>
          <TextInput
            placeholder="Correo electronico"
            keyboardType="default"
            style={styles.formTextInput}
          />
        </View>
        {/* Input de contraseña */}
        <View>
          <View style={styles.titleModalButton}>
            <Text style={styles.text1TitleModalButton}>Contraseña </Text>
            <Text style={styles.text2TitleModalButton}>(Requerido)</Text>
          </View>
          <TextInput
            placeholder="Ingresa tu contraseña"
            keyboardType="default"
            style={styles.formTextInput}
          />
        </View>
        {/* input acepto terminos */}
        <View style={styles.Accept}>
          <Checkbox 
             value={isChecked} 
             onValueChange={handleCheckBoxChange} 
             style={styles.checkbox}
            />
          <View style={styles.textAccept}>
            <Text>Acepto los</Text>
            <Text 
              style={{ textDecorationLine: 'underline', }}
              onPress={handleAcceptTerms} 
            >
              términos y condiciones
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 20,}}>
           <SingLogin />
        </View>
        <View style={styles.containerUpdate}>
            <UpdatePassword width={30} height={24}/>
            <Text 
               style={styles.textUpdate}
               onPress={() => navigation.navigate("UpdateKey")}
            >
               Olvide mi contraseña
            </Text>
        </View>
        <View style={styles.lineContent}>
           <View >
                <LineGray />
           </View>
        </View>
        <View style={styles.loginAuthe}>
           <Google width={30} height={30}/>
           <Facebook width={30} height={30}/>
           <Apple />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.base,
    fontFamily: MyFont.regular
  },
  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "10%",
  },
  form: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 160,
    padding: 20,
  },
  titleModalButton: {
    flexDirection: "row",
    position: "absolute",
    top: 2,
    left: 18,
    padding: 2,
    backgroundColor: "white",
    zIndex: 10,
    
  },
  text1TitleModalButton: {
    fontSize: 11,
    fontFamily: MyFont.regular,
    color: "#404040",
  },
  text2TitleModalButton: {
    fontSize: 10,
    fontFamily: MyFont.regular,
    color: "#C0C0C0",
  },
  formTextInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#404040",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  Accept: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  textAccept: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    fontSize: 20,
    fontFamily: MyFont.regular
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
  },
  containerUpdate: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 30,
  },
  textUpdate: {
    fontSize: 16,
    fontFamily: MyFont.regular
  },
  lineContent: {
    display: "flex",
    flexDirection: "row", 
    alignSelf: "center",
    gap: 10,
    marginTop: 30,
  },
  loginAuthe: {
    display: "flex",
    flexDirection: "row", 
    alignSelf: "center",
    gap: 50,
    marginTop: 30,
  }
});

export default Login;
