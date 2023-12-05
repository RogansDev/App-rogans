import React, { useState } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { MyColors, MyFont } from "../../theme/AppTheme";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../../App';
import FloatingMenu from '../../components/FloatingMenu';

const ConsultationDescription = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();
    
    const consultationContent = {
        image: require('../../../assets/implante2.png'),
        title: 'Trasplante capilar',
        oldPrice: '$50.000',
        price: 'Gratis',
        description: 'Descripción del procedimiento o consulta./nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        
    };

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    const options = [
        { label: 'Virtual', value: 'Virtual' },
        { label: 'Presencial', value: 'Presencial' },
      ];      

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <Image source={consultationContent.image} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{consultationContent.title}</Text>
                    <Text style={styles.oldPrice}>{consultationContent.oldPrice}</Text>
                    <Text style={styles.price}>{consultationContent.price}</Text>
                    <Text style={styles.description}>{consultationContent.description}</Text>
                    <Text style={styles.title2}>Agenda tu consulta</Text>
                    <View>
                        <View style={styles.titleModalButton}>
                            <Text style={styles.text1TitleModalButton}>Tipo de consulta </Text>
                            <Text style={styles.text2TitleModalButton}>(Requerido)</Text>
                        </View>                      
                        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.modalButton}>
                            <Text style={styles.textModalButton}>{selectedValue ? selectedValue : 'Virtual o presencial'}</Text>
                            <Image source={require('../../../assets/flecha-abajo.png')} style={styles.imageModalButton} />
                        </TouchableOpacity>

                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => setModalVisible(false)}
                        >
                            <View style={styles.modalContainer}>
                                <View style={styles.modalContent}>
                                    <Picker
                                        selectedValue={selectedValue}
                                        onValueChange={(itemValue, itemIndex) => {
                                            setSelectedValue(itemValue);
                                            setModalVisible(false);
                                        }}
                                    >
                                        {options.map((option, index) => (
                                            <Picker.Item key={index} label={option.label} value={option.value} />
                                        ))}
                                    </Picker>
                                </View>
                            </View>
                        </Modal>
                    </View>
                    <View>
                        <View style={styles.titleModalButton}>
                            <Text style={styles.text1TitleModalButton}>Fecha de consulta </Text>
                            <Text style={styles.text2TitleModalButton}>(Opcional)</Text>
                        </View>                      
                        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.modalButton}>
                            <Text style={styles.textModalButton}>{selectedValue ? selectedValue : 'dd/mm/aaaa'}</Text>
                            <Image source={require('../../../assets/icon-calendar-add.png')} style={styles.imageModalButton} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("ConfirmacionConsulta")} style={styles.button}>
                        <Text style={styles.textButtom}>Continuar</Text>
                        <Image source={require('../../../assets/flecha-blanca.png')} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCFCFC',
      position: "relative",
    },
    scrollContainer: {
        position: "relative",
    },
    image: {
        position: 'relative',
        zIndex: 1,
    },
    textContainer: {
        position: 'relative',
        backgroundColor: 'white',
        marginTop: -110,
        marginBottom: 30,
        width: '100%',
        height: 'auto',
        paddingHorizontal: 16,
        zIndex: 5,
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20, 
    },
    title: {
      fontSize: 33,
      fontFamily: MyFont.bold,
      color: 'black',
      marginTop: 50,
      marginBottom: 15,
    },
    oldPrice: {
        fontSize: 13,
        fontFamily: MyFont.regular,
        color: '#909090',
        textDecorationLine: 'line-through'
    },
    price: {
        fontSize: 18,
        fontFamily: MyFont.medium,
        color: '#404040',
    },
    description: {
        fontSize: 12,
        fontFamily: MyFont.medium,
        color: '#909090',
        marginTop: 30,
        marginBottom: 70,
    },
    title2: {
        fontSize: 18,
        fontFamily: MyFont.medium,
        color: 'black',
        marginBottom: 20,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: 10,
        padding: 12,
        backgroundColor: 'black',
        borderRadius: 10,
    },
    textButtom: {
        fontSize: 13,
        fontFamily: MyFont.regular,
        color: 'white',
        marginRight: 5,
    },
    titleModalButton: {
        flexDirection: 'row',
        position: 'absolute',
        top: 2,
        left: 18,
        padding: 2,
        backgroundColor: 'white',
        zIndex: 10,
    },
    text1TitleModalButton: {
        fontSize: 11,
        fontFamily: MyFont.regular,
        color: '#404040',
    },
    text2TitleModalButton: {
        fontSize: 10,
        fontFamily: MyFont.regular,
        color: '#C0C0C0',
    },
    modalButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#909090',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    textModalButton: {
        fontSize: 13,
        fontFamily: MyFont.regular,
    },
    imageModalButton: {

    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        width: '100%',
        padding: 16,
    },
});

export default ConsultationDescription;