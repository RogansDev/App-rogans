import React, {useState, useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../../../App';
import { MyFont } from "../../../Presentation/theme/AppTheme";
import Icons from '../../../Presentation/theme/Icons';
import { agendarCita } from '../../../../agendarCitaService';
import { useAppContext } from '../../../../AppContext';

const ConfirmationPage = () => {
    const [botonActivo, setBotonActivo] = useState(false);

    const { horaAgendada, fecha, virtualPresecial }: any = useAppContext();

    const { TickCircleIcon, TickCircleWhiteicon } = Icons;
    
    const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();

    const agendarBtnHandler = async () => {
        const fechaActual = new Date();
        const fechaFormateada = fechaActual.toISOString().split('.')[0] + "Z";;
    
        const datosCita = {
            "fecha_que_agendo": fechaFormateada,
            "nombre": "Martin Montes/&123456780",
            "telefono": "Número de teléfono",
            "correo": "Correo electrónico",
            "evento_agendado": "Botox",
            "fecha": fechaAgendadaFormateada,
            "especialidad": "Especialidad seleccionada",
            "notas": virtualPresecial,
            "status": "Confirmado"
        };
    
        try {
            const respuesta = await agendarCita(datosCita);
            if (respuesta.mensaje === "Cita agendada") {
                navigation.navigate("Confirmado");
            } else {
                console.log("Error al agendar cita:", respuesta);
                // Manejar la respuesta no exitosa aquí
            }
        } catch (error) {
            console.error("Error al llamar a agendarCita", error);
            // Manejar el error de red aquí
        }
        setBotonActivo(true);
    };
    

    function convertirFechaYHora(fecha: any, horaAgendada: any) {
        // Convertir a formato de 24 horas
        const [hora, minutos, ampm] = horaAgendada.match(/(\d+):(\d+) (\w+)/).slice(1);
        let hora24 = ampm === 'PM' ? parseInt(hora, 10) + 12 : parseInt(hora, 10);
        if (hora24 === 24) hora24 = 12;
        if (hora24 === 12 && ampm === 'AM') hora24 = 0;
      
        const fechaHora = new Date(`${fecha} ${hora24}:${minutos}:00`);
      
        fechaHora.setHours(fechaHora.getHours());
      
        return fechaHora.toISOString().replace('.000', '');
      }

      const fechaAgendadaFormateada = convertirFechaYHora(fecha, horaAgendada);

      useEffect(() => {
        agendarBtnHandler();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <TickCircleIcon width={80} height={80} />
                <Text style={styles.title}>Tu cita se ha{"\n"}agendado con éxito</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Home")} style={[styles.btn, !botonActivo && styles.btnDisabled]} disabled={!botonActivo}>
                    <Text style={styles.textBtn}>Continuar</Text>
                    <TickCircleWhiteicon style={styles.iconBtn} width={16} height={16} />
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
    btnDisabled: {
        opacity: 0.6,
    },
});

export default ConfirmationPage;