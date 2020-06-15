import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Service = ({label, img}) => {
  return (
    <View style={styles.serviceBtn}>
      <View style={styles.services}>
        <Image source={img} />
      </View>
      <Text style={styles.serviceLabel}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  serviceLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 6,
  },
  serviceBtn: {
    width: '25%',
    alignItems: 'center',
  },
  services: {
    width: 58,
    height: 58,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Service;
