import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const NavBarIcon = ({img, label}) => {
  return (
    <View style={styles.navBtn}>
      <Image style={styles.image} source={img} />
      <Text style={styles.btnTxt}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    fontSize: 11,
    color: '#545454',
    marginTop: 4,
  },
});

export default NavBarIcon;
