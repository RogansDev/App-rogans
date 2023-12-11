import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
  Modal,
} from "react-native";
import { MyColors } from "../theme/AppTheme";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../App";

const ModalVerifitCode = () => {


  const [modalVisible, setModalVisible] = useState(false);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    // Configurar un temporizador para mostrar el modal después de 3 segundos
    const autoShowTimer = setTimeout(() => {
      setModalVisible(true);
    }, 2000);

    // Limpiar el temporizador automático al desmontar el componente
    return () => clearTimeout(autoShowTimer);
  }, []);

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;

    if (modalVisible) {
      intervalId = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          clearInterval(intervalId);
          navigation.navigate("UpdateKey")
        } else {
          if (seconds === 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          } else {
            setSeconds((prevSeconds) => prevSeconds - 1);
          }
        }
      }, 1000);
    } else {
      // Limpia el intervalo cuando el modal se cierra
      clearInterval(intervalId);
      // Restaura los valores iniciales cuando el modal se cierra
      setMinutes(1);
      setSeconds(0);
    }
    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, [modalVisible, minutes, seconds, navigation]);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalItems}>
            <View style={styles.textContent}>
              <Text>Ingresa el código de 6 dígitos que enviamos </Text>
              <Text>a tu número de celular</Text>
            </View>
            <View style={styles.timerCode}>
              <Text>Reenviar código en</Text>
              <Text>{`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}</Text>
            </View>
            <View style={styles.writeCodeContent}>
                <TextInput
                  keyboardType="number-pad"
                  style={styles.writeCode}
                />
                <TextInput
                  keyboardType="number-pad"
                  style={styles.writeCode}
                />
                <TextInput
                  keyboardType="number-pad"
                  style={styles.writeCode}
                />
                <TextInput
                  keyboardType="number-pad"
                  style={styles.writeCode}
                />
                <TextInput
                  keyboardType="number-pad"
                  style={styles.writeCode}
                />
                <TextInput
                  keyboardType="number-pad"
                  style={styles.writeCode}
                />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalItems: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    gap: 10,
    backgroundColor: MyColors.base,
    width: "90%",
    height: "80%",
    padding: 20,
    borderRadius: 10,
  },
  textContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    top: 40,
  },
  textInfo: {
    fontSize: 14,
  },
  timerCode: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    gap: 5,
    top: 70,
  },
  writeCodeContent: {
     display: "flex",
     flexDirection: "row",
     justifyContent: "center",
     alignSelf: "center",
     gap: 10,
  },
  writeCode: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    top: 80,
    padding: 10,
  }
});

export default ModalVerifitCode;

// cierre
{
  /* <TouchableOpacity onPress={toggleModal}>
                      <Text>Close modal</Text>
                   </TouchableOpacity> */
}
