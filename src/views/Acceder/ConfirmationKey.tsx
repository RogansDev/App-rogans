import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MyColors, MyFont } from '../../theme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../../App';

const ConfirmationKey = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();


  return (
    <View style={styles.container}>
            <View style={styles.content}>
                <Image source={require('../../../assets/tick-circle.png')} />
                <Text style={styles.title}>
                     Tu datos han sido{"\n"}Verificados correctamente
                </Text>
                <TouchableOpacity 
                   style={styles.btn} 
                   onPress={() => navigation.navigate("Login")}
                >
                    <Text style={styles.textBtn}>
                        Continuar
                    </Text>
                    <Image 
                        source={require('../../../assets/tick-circle-white.png')} 
                        style={styles.iconBtn} 
                    /> 
                </TouchableOpacity>
            </View>
        </View>
  )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontFamily: MyFont.medium,
        textAlign: 'center',
        marginVertical: 30,
    },
    btn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'black',
        padding: 12,
        width: 320,
        marginTop: 20,
    },
    textBtn: {
        fontSize: 13,
        fontFamily: MyFont.regular,
        color: 'white',
    },
    iconBtn: {
        marginLeft: 8,
    },
})

export default ConfirmationKey;
