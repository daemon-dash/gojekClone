import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ScrollableItem = ({img, bizName}) => {
  return (
    <View style={styles.bImgDiv}>
      <View style={styles.businessImg}>
        <Image source={img} style={styles.imgCover} />
      </View>
      <Text style={styles.businessName}>{bizName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bImgDiv: {
    marginRight: 16,
  },
  businessImg: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  image: {
    width: 26,
    height: 26,
  },
  imgCover: {
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    flex: 1,
    borderRadius: 4,
  },
  businessName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1C1C',
    marginTop: 12,
  },
});

export default ScrollableItem;
