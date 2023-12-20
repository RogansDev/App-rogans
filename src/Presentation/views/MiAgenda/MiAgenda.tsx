import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../../../App';
import { MyColors, MyFont } from "../../../Presentation/theme/AppTheme";
import Icons from '../../../Presentation/theme/Icons';
import FloatingMenu from '../../../Presentation/components/FloatingMenu';
import { format, parseISO } from 'date-fns';
import es from 'date-fns/locale/es';

const obtenerCitas = async (cedula: any) => {
    try {
      const response = await fetch(`https://rogansya.com/rogans-app/index.php?accion=obtenerPorCedula&cedula=${cedula}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener citas:', error);
    }
  };

const capitalize = (str: any) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const formatearFecha = (fechaIsoString: any) => {
    const fecha = parseISO(fechaIsoString);
    return {
        diaSemana: capitalize(format(fecha, 'EEEE', { locale: es })),
        numeroDia: format(fecha, 'dd'),
        mes: capitalize(format(fecha, 'MMMM', { locale: es })),
        hora: format(fecha, 'HH:mm')
    };
};

const MiAgenda = () => {
    interface Cita {
        fecha: string;
        evento_agendado: string;
    }

    const [citas, setCitas] = useState<Cita[]>([]);
    const [cargando, setCargando] = useState(true); // Estado para controlar la carga

    useEffect(() => {
        obtenerCitas('123456780').then(data => {
        const citasOrdenadas = data.sort((a: any, b: any) => new Date(a.fecha_que_agendo).getTime() - new Date(b.fecha_que_agendo).getTime());
        setCitas(citasOrdenadas);
        setCargando(false); // Actualiza el estado a no cargando una vez que los datos están listos
        });
    }, []);

    const { DollarIcon, ClockIcon } = Icons;

    const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();

    return (
        <View style={styles.container}>
            <FloatingMenu />
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.content}>
                    <Text style={[styles.title, {marginTop: 30,}]}>Citas agendadas</Text>
                    {cargando ? (
                        // Muestra el mensaje de cargando
                        <Text style={{textAlign: 'center', padding: 15,}}>Cargando...</Text>
                    ) : (
                        // Muestra las citas si no está cargando
                        citas.map((cita, index) => {
                            const { diaSemana, numeroDia, mes, hora } = formatearFecha(cita.fecha);
                            
                            return (
                                <TouchableOpacity key={index} style={styles.cita} onPress={() => navigation.navigate("EditarCita")}>
                                    <View style={{alignItems: 'center', width: 80,}}>
                                        <View style={{flexDirection: 'column', alignItems: 'center',}}>
                                            <Text style={styles.text}>{diaSemana}</Text>
                                            <Text style={styles.numeroDia}>{numeroDia}</Text>
                                            <Text style={styles.text}>{mes}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection: 'column', alignItems: 'flex-start', flex: 1, marginLeft: 15, gap: 2,}}>
                                        <Text style={styles.titleCita}>{cita.evento_agendado}</Text>
                                        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5,}}>
                                            <ClockIcon width={14} height={14} />
                                            <Text style={styles.text}>{hora}</Text>
                                        </View>
                                        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5,}}>
                                            <DollarIcon width={14} height={14} />
                                            <Text style={styles.text}>$1´500.000</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={[styles.text, {color: '#00D0B1',}]}>Pendiente</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    )}
                    
                </View>
                <View style={[styles.content, {marginBottom: 80,}]}>
                    <Text style={styles.title}>Anteriores</Text>
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FCFCFC",
        position: "relative",
    },
    scrollContainer: {
        position: "relative",
    },
    content: {
        marginBottom: 50,
    },
    title: {
        fontFamily: MyFont.bold,
        fontSize: 24,
        marginHorizontal: 16,
        marginBottom: 30,
    },
    cita: {
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        marginBottom: 16,
        backgroundColor: 'white',
        borderRadius: 18,
        // Sombras para Android
        elevation: 10,
        // Sombras para iOS
        shadowColor: "#F0F0F0",
        shadowOffset: { width: 4, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 10,
    },
    text: {
        fontFamily: MyFont.regular,
        fontSize: 12,
    },
    numeroDia: {
        fontFamily: MyFont.bold,
        fontSize: 33,
    },
    titleCita: {
        fontFamily: MyFont.medium,
        fontSize: 18,
        marginBottom: 10,
    },
});

export default MiAgenda;