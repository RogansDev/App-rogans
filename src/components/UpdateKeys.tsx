import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MyColors, MyFont } from '../theme/AppTheme';
import Eye from '../../assets/eye.svg';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../App';


const UpdateKeys = () => {

  const navigate = useNavigation<StackNavigationProp<RootStackParamsList>>();
  return (
    <TouchableOpacity
      style={styles.bottomContainer}
    >
      <View style={styles.contentText} >
         <Text style={styles.textClick}
           onPress={() => navigate.navigate("ModalVerifitCode")}
         >
            Actualizar contraseña
         </Text>
         <Eye />
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    bottomContainer: {
        width: "100%",
        height: 45,
        display: "flex",
        alignSelf: "center",
        backgroundColor: MyColors.black,
        justifyContent: "center",
        borderRadius: 15,
    },
    contentText: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    textClick: {
        color: MyColors.base,
        fontSize: 15,
        fontFamily: MyFont.bold,
    }
})

export default UpdateKeys;
