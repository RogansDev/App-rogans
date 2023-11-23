import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
        <view style={styles.form}>
            <View>
                <Text>Hola juanito</Text>

            </View>
            <View>
                <Text>Logo</Text>
            </View>
        </view>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    form: {
        width: "100%",
        height: "30%",
        display: "flex",
        
        alignItems: "center",
        position: "absolute",
        bottom: 40,
        padding: 20,
      },
})

export default Home;
