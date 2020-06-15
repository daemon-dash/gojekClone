import React from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';

const SearchBar = ({icon, promo, placeholder}) => {
  return (
    <View style={styles.searchBar}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder={placeholder} />
        <Image style={styles.searchIcon} source={icon} />
      </View>
      <View style={styles.promo}>
        <Image source={promo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchIcon: {
    position: 'absolute',
    top: 63,
    left: 15,
  },
  inputContainer: {
    position: 'relative',
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 25,
    height: 45,
    fontSize: 13,
    marginTop: 54,
    paddingLeft: 45,
    paddingRight: 20,
    marginRight: 18,
    backgroundColor: '#FDFDFD',
  },
  searchBar: {
    marginHorizontal: 21,
    flexDirection: 'row',
  },
  promo: {
    width: 35,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 9,
  },
});

export default SearchBar;
