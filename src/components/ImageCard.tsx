import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

type imageCardProps = {
  img: string;
  stars: string;
};

const ImageCard = (props: imageCardProps) => {
  return (
    <ImageBackground source={{uri: props.img}} style={styles.img}>
      <View style={styles.starsContainer}>
        <Fontisto name="star" color="#EEBA00" size={11} />
        <Text style={styles.text}>{props.stars}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  img: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  starsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FBEDB7',
    justifyContent: 'center',
    alignItems: 'center',
    height: 25,
    width: 50,
    borderRadius: 20,
    margin: 5,
  },
  text: {
    color: '#856D35',
    marginLeft: 1,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ImageCard;
