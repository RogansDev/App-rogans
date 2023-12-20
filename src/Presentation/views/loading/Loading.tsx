import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View, Image, Text } from "react-native";
import { FIrstScreen } from "../ContainerHome/FIrstScreen";

const Loading = () => {

    const [ loadingScreen, setLoadingScreen] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 3000));
            setLoadingScreen(false);
        };
        loadData();
    }, [])

    if (loadingScreen) {
        return (
            <View style={styles.container}>
              <ActivityIndicator size="large" color="#fff"/>
              <Text style={styles.text}>Cargando...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FIrstScreen />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "#000",
        justifyContent: "center",
        alignItems: "center"
    }
})
export default Loading;