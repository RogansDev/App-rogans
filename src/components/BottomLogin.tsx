import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import { MyColors } from '../theme/AppTheme';

interface Props {
    text: string,
}

const BottomLogin = () => {


  return (
    <TouchableOpacity
      style={styles.roundedBottom}
    >
       <View style={styles.flexBttom}>
          <Text style={styles.textBottom}>Iniciar sesion </Text>
          <Image
             source={require("../../assets/send-2.svg")}
             style={styles.logoLogin}
          />
       </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    roundedBottom: {
        width: 360,
        height: 55,
        alignItems: 'center',
        backgroundColor: MyColors.black,
        justifyContent: 'center',
        borderRadius: 15,
    }, 
    flexBttom: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    textBottom: {
        color: 'white',
        fontSize: 20,
    },
    logoLogin: {
        width: 20,
        height: 20,
    }
})
export default BottomLogin;
