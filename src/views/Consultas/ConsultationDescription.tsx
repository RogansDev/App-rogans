import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { MyColors, MyFont } from "../../theme/AppTheme";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../../App';
import Icons from '../../theme/Icons';
import MiCalendario from '../../components/MiCalendario';
import PopUpError from '../../components/PopUpError';
import { useAppContext } from '../../../AppContext';

interface MiCalendarioHandles {
    toggleModal: () => void;
}

interface PopUpErrorHandles {
    togglePopUpError: (mesaje: string) => void;
}

const ConsultationDescription = () => {
    const { CalendarAddIcon, ArrowDownIcon, ArrowWhiteIcon,  CloseIcon } = Icons;

    const { fecha, setFecha, horaAgendada, setHoraAgendada, virtualPresecial, setVirtualPresecial }: any = useAppContext();

    const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();

    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    useEffect(() => {
        setFecha('');
        setHoraAgendada('');
        setVirtualPresecial('');
    }, []); 

    useEffect(() => {
        if (selectedValue === 'Virtual') {
            setVirtualPresecial('Virtual');
        } else if (selectedValue === 'Presencial') {
            setVirtualPresecial('Presencial');
        }
    }, [selectedValue]); 
    
    const consultationContent = {
        image: require('../../../assets/implante2.png'),
        title: 'Trasplante capilar',
        oldPrice: '$50.000',
        price: 'Gratis',
        description: 'Descripción del procedimiento o consulta.\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        
    };

    const calendarioRef = useRef<MiCalendarioHandles>(null);

    const abrirCalendario = () => {
        if (calendarioRef.current) {
          calendarioRef.current.toggleModal();
        }
      };

    const PopUpErrorRef = useRef<PopUpErrorHandles>(null);

    const abrirPopUpError = (mensaje: string) => {        
        if (PopUpErrorRef.current) {
            PopUpErrorRef.current.togglePopUpError(mensaje);
          }
    };

    const verificarDatos = () => {
        const Continuar = () => {
            navigation.navigate("ConfirmacionConsulta");
        }

        if ((selectedValue == 'Virtual' || selectedValue == 'Presencial') && (fecha == '')) {
            abrirPopUpError('Elige una hora y fecha');
        } else if ((selectedValue == null) && (fecha != '')) {
            abrirPopUpError('Elige si quieres tu cita presencial o virtual');
        } else if ((selectedValue == null) && (fecha == '')) {
            abrirPopUpError('Rellena los campos');
        } else {
            Continuar();
        }
    }

    return (
        <>
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
                            <ArrowDownIcon style={styles.imageModalButton} width={16} height={16} />
                        </TouchableOpacity>

                        <Modal
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => setModalVisible(false)}
                        >
                            <View style={styles.modalContainer}>
                                <View style={styles.modalContent}>
                                    <TouchableOpacity onPress={() => setModalVisible(false)} style={{position: 'absolute', top: 20, left: 20,}}>
                                        <CloseIcon width={16} height={16} />
                                    </TouchableOpacity>

                                    <View>
                                        <TouchableOpacity onPress={() => {setSelectedValue("Presencial"), setModalVisible(false)}} style={{paddingVertical: 2, marginVertical: 8,}}>
                                            <Text style={{fontFamily: MyFont.regular, fontSize: 14}}>Presencial</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => {setSelectedValue("Virtual"), setModalVisible(false)}} style={{paddingVertical: 2, marginVertical: 8,}}>
                                            <Text style={{fontFamily: MyFont.regular, fontSize: 14}}>Virtual</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>
                    <View>
                        <View style={styles.titleModalButton}>
                            <Text style={styles.text1TitleModalButton}>Fecha de consulta </Text>
                            <Text style={styles.text2TitleModalButton}>(Requerido)</Text>
                        </View>                      
                        <TouchableOpacity onPress={abrirCalendario} style={styles.modalButton}>
                            <Text style={styles.textModalButton}>{fecha ? fecha + ' a las ' + horaAgendada : 'dd/mm/aaaa'}</Text>
                            <CalendarAddIcon style={styles.imageModalButton} width={16} height={16}/>
                        </TouchableOpacity>
                    </View>
                    <MiCalendario ref={calendarioRef} onAbrirPopUpError={abrirPopUpError} />
                    <TouchableOpacity onPress={verificarDatos} style={styles.button}>
                        <Text style={styles.textButtom}>Continuar</Text>
                        <ArrowWhiteIcon width={16} height={16} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View> 
        <PopUpError ref={PopUpErrorRef} />
        </>
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
        alignItems: 'center',
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modalContent: {
        position: 'relative',
        width: '70%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        padding: 50,
        borderRadius: 20,
    },
});

export default ConsultationDescription;