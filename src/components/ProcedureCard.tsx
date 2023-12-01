import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ConsultCard = ({ cards }) => {
  return (
    <ScrollView horizontal style={styles.cardContainer} showsHorizontalScrollIndicator={false}>
      {cards.map((card, index) => (
        <View key={index} style={styles.card}>
          <Image source={card.image} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{card.title}</Text>
          <View style={styles.cardInfo}>
            <Text style={styles.cardPrice}>${card.price}</Text>
            <View style={styles.comprarBtn}>
              <Image style={styles.iconComprarBtn} source={require("../../assets/flecha.png")} />
              <Text style={styles.textComprarBtn}>
                Comprar
              </Text>
            </View>
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
    fontWeight: '500',
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
    fontWeight: '400',
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
    fontWeight: '400',
  },
});

export default ConsultCard;
