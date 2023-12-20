import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../../App';
import { MyFont } from "../theme/AppTheme";

const ConsultCard = ({ cards }: any) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamsList>>();

  return (
    <ScrollView horizontal style={styles.cardContainer} showsHorizontalScrollIndicator={false}>
      {cards.map((card: { image: ImageSourcePropType; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
        <View key={index} style={styles.card}>
          <Image source={card.image} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{card.title}</Text>
          <View style={styles.cardInfo}>
            <Text style={styles.cardPrice}>${card.price}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("DescripcionProcedimientos")} style={styles.comprarBtn}>
              <Text style={styles.textComprarBtn}>
                Comprar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    position: "relative",
    paddingHorizontal: 16,
  },
  card: {
    marginRight: 36,
    width: 192,
    height: 'auto',
  },
  cardImage: {
    position: 'relative',
    width: '100%',
    height: 168,
    resizeMode: 'cover',
  },
  cardTitle: {
    position: 'relative',
    fontSize: 14,
    fontFamily: MyFont.medium,
    color: 'black',
    textAlign: 'left',
    marginTop: 14,
  },
  cardInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  cardPrice: {
    fontSize: 13,
    fontFamily: MyFont.regular,
    color: '#404040',
    textAlign: 'left',
  },
  comprarBtn: {
    flexDirection: 'row',
  },
  iconComprarBtn: {
    marginRight: 10,
  },
  textComprarBtn: {
    fontSize: 13,
    fontFamily: MyFont.regular,
  },
});

export default ConsultCard;
