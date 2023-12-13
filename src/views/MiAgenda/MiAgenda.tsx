import React, { useState } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../../App';
import { MyColors, MyFont } from "../../theme/AppTheme";
import Icons from '../../theme/Icons';
import FloatingMenu from '../../components/FloatingMenu';


const MiAgenda = () => {
    const { DollarIcon, ClockIcon } = Icons;

    const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();

    return (
        <View style={styles.container}>
            <FloatingMenu />
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.content}>
                    <Text style={[styles.title, {marginTop: 30,}]}>Citas agendadas</Text>
                    <TouchableOpacity style={styles.cita} onPress={() => navigation.navigate("EditarCita")}>
                        <View style={{alignItems: 'flex-start', width: 80,}}>
                            <View style={{flexDirection: 'column', alignItems: 'center',}}>
                                <Text style={styles.text}>Lunes</Text>
                                <Text style={styles.numeroDia}>15</Text>
                                <Text style={styles.text}>Noviembre</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'column', alignItems: 'flex-start', flex: 1, marginLeft: 15, gap: 2,}}>
                            <Text style={styles.titleCita}>Botox</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5,}}>
                                <ClockIcon width={14} height={14} />
                                <Text style={styles.text}>11:00 AM</Text>
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
                </View>
                <View style={[styles.content, {marginBottom: 80,}]}>
                    <Text style={styles.title}>Anteriores</Text>
                    <View style={styles.cita}>
                        <View style={{alignItems: 'flex-start', width: 80,}}>
                            <View style={{flexDirection: 'column', alignItems: 'center',}}>
                                <Text style={styles.text}>Lunes</Text>
                                <Text style={styles.numeroDia}>15</Text>
                                <Text style={styles.text}>Noviembre</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'column', alignItems: 'flex-start', flex: 1, marginLeft: 15, gap: 2,}}>
                            <Text style={styles.titleCita}>Botox</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5,}}>
                                <ClockIcon width={14} height={14} />
                                <Text style={styles.text}>11:00 AM</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5,}}>
                                <DollarIcon width={14} height={14} />
                                <Text style={styles.text}>$1´500.000</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={[styles.text, {color: '#909090',}]}>Finalizada</Text>
                        </View>
                    </View>
                    <View style={styles.cita}>
                        <View style={{alignItems: 'flex-start', width: 80,}}>
                            <View style={{flexDirection: 'column', alignItems: 'center',}}>
                                <Text style={styles.text}>Lunes</Text>
                                <Text style={styles.numeroDia}>15</Text>
                                <Text style={styles.text}>Noviembre</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'column', alignItems: 'flex-start', flex: 1, marginLeft: 15, gap: 2,}}>
                            <Text style={styles.titleCita}>Botox</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5,}}>
                                <ClockIcon width={14} height={14} />
                                <Text style={styles.text}>11:00 AM</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5,}}>
                                <DollarIcon width={14} height={14} />
                                <Text style={styles.text}>$1´500.000</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={[styles.text, {color: '#909090',}]}>Finalizada</Text>
                        </View>
                    </View>
                    <View style={styles.cita}>
                        <View style={{alignItems: 'flex-start', width: 80,}}>
                            <View style={{flexDirection: 'column', alignItems: 'center',}}>
                                <Text style={styles.text}>Lunes</Text>
                                <Text style={styles.numeroDia}>15</Text>
                                <Text style={styles.text}>Noviembre</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'column', alignItems: 'flex-start', flex: 1, marginLeft: 15, gap: 2,}}>
                            <Text style={styles.titleCita}>Botox</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5,}}>
                                <ClockIcon width={14} height={14} />
                                <Text style={styles.text}>11:00 AM</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5,}}>
                                <DollarIcon width={14} height={14} />
                                <Text style={styles.text}>$1´500.000</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={[styles.text, {color: '#909090',}]}>Finalizada</Text>
                        </View>
                    </View>
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