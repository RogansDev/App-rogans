import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamsList } from "../../App";
import { MyFont } from '../theme/AppTheme';
import Arrow from '../../assets/arrow-left.svg'

interface CustomHeaderProps {
  route: RouteProp<RootStackParamsList, keyof RootStackParamsList>;
  navigation: StackNavigationProp<RootStackParamsList, keyof RootStackParamsList>;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ navigation }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => navigation.goBack()}>
        <Arrow width={15} height={15}/>
        <Text style={{marginLeft: 10, fontFamily: MyFont.regular,}}>Regresar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;