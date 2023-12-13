import React, { useState } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { MyColors, MyFont } from "../../theme/AppTheme";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../../App';
import Rating from '../../components/Rating';
import Icons from '../../theme/Icons';

const ProcedureDescription = () => {
    const { CalendarAddIcon, ArrowWhiteIcon } = Icons;

    const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();

    const procedureContent = {
        image: require('../../../assets/botox2.png'),
        title: 'Botox Full face',
        oldPrice: '$50.000',
        price: '$20.000',
        description: 'Descripción del procedimiento o consulta./nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        
    };

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    const handleRatingPress = (selectedRating: any) => {
        console.log('Selected Rating:', selectedRating);
    };   

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <Image source={procedureContent.image} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{procedureContent.title}</Text>
                    <View style={{marginBottom: 10}}>
                        <Rating initialRating={3} onRatingPress={handleRatingPress} />
                    </View>
                    <Text style={styles.oldPrice}>{procedureContent.oldPrice}</Text>
                    <Text style={styles.price}>{procedureContent.price}</Text>
                    <Text style={styles.description}>{procedureContent.description}</Text>
                    <Text style={styles.title2}>Agenda tu consulta</Text>
                    <View style={{marginBottom: 50}}>
                        <View style={styles.titleModalButton}>
                            <Text style={styles.text1TitleModalButton}>Fecha de consulta </Text>
                            <Text style={styles.text2TitleModalButton}>(Opcional)</Text>
                        </View>                      
                        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.modalButton}>
                            <Text style={styles.textModalButton}>{selectedValue ? selectedValue : 'dd/mm/aaaa'}</Text>
                            <CalendarAddIcon style={styles.imageModalButton} width={16} height={16}/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("ConfirmacionProcedimiento")} style={styles.button}>
                        <Text style={styles.textButtom}>Continuar</Text>
                        <ArrowWhiteIcon width={16} height={16} />
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
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
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
      marginBottom: 3,
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
        fontFamily: MyFont.regular,
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
        color: '#404040',
    },
    text2TitleModalButton: {
        fontSize: 10,
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

export default ProcedureDescription;