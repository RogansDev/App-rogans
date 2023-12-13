import React from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { MyFont } from "../../theme/AppTheme";

const ConfirmationPage = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={require('../../../assets/tick-circle.png')} />
                <Text style={styles.title}>Tu compra se ha{"\n"}realizado con éxito</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.textBtn}>Continuar</Text>
                    <Image source={require('../../../assets/tick-circle-white.png')} style={styles.iconBtn} /> 
                </TouchableOpacity>
            </View>
        </View>
    );
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
});

export default ConfirmationPage;