import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import { MyColors, MyFont } from '../theme/AppTheme';
import SendIcon from '../../assets/send-2.svg';

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
          <SendIcon width={20} height={20}  />
       </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    roundedBottom: {
        width: 320,
        height: 45,
        display: 'flex',
        alignSelf: 'center',
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
        fontFamily: MyFont.regular,
    },
    logoLogin: {
        width: 20,
        height: 20,
    }
})
export default BottomLogin;
