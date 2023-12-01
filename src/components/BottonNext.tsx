import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, View } from 'react-native' 
import { MyColors } from '../theme/AppTheme';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../App';

interface Props {
  text: string,
}

const BottonNext = ({text}: Props) => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Martin')}
      style={styles.roundedBottom}
    >
      <View style={styles.contentNext}>
        <Text style={styles.textBottom}>
          {text}
        </Text>
        <Image 
          source={require('../../assets/flecha.png')}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  roundedBottom: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    backgroundColor: MyColors.buttonColor,
    justifyContent: 'center',
    borderRadius: 15,
  },
  contentNext: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: "center",
    justifyContent: 'center',
    gap: 2,
  },
  icon: {
    left: 10,
    top: 8,
    
  },
  textBottom: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  }
})

export default BottonNext;
