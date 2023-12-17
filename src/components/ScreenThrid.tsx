import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { MyColors, MyFont } from '../theme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../App';
import Arrow from '../../assets/icons/arrow.svg';

interface Props {
    text: string;
}

const ScreenThrid = ({text}: Props) => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();
    
  return (
    <TouchableOpacity
       onPress={() => navigation.navigate("Acceder")}
       style={styles.roundedBottom}
    >
        <View style={styles.contentNext}>
        <Text style={styles.textBottom}>
          {text}
        </Text>
        <Arrow width={20} height={20}  style={styles.icon}/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    roundedBottom: {
        width: "100%",
        height: 50,
        alignItems: "center",
        backgroundColor: MyColors.buttonColor,
        justifyContent: "center",
        borderRadius: 15,
    },
    textBottom: {
        color: "black",
        fontSize: 20,
        fontFamily: MyFont.regular,
        fontWeight: "bold",
    },
    contentNext: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: "center",
        justifyContent: 'center',
        gap: 2,
      },
      icon: {
        left: 10,
        top: 6,  
      },
})
export default ScreenThrid;