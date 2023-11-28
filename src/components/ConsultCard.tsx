import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ConsultCard = ({ cards }) => {
  return (
    <ScrollView horizontal style={styles.cardContainer} showsHorizontalScrollIndicator={false}>
      {cards.map((card, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardCategory}>{card.category}</Text>
          <Image source={card.image} style={styles.cardImage} />
          <Text style={styles.cardText}>{card.title}</Text>
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
    marginRight: 12,
    width: 218,
    height: 300,
    borderRadius: 20,
    overflow: 'hidden',
  },
  cardCategory: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 20,
    overflow: 'hidden',
    zIndex: 10,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardText: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
  },
});

export default ConsultCard;
