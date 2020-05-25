/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.search}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="What do you want to eat?"
              />
              <Image
                style={styles.searchIcon}
                source={require('./icon/search.png')}
              />
            </View>
            <View></View>
          </View>
        </View>
        <View style={styles.bottomNav}>
          <View style={styles.navBtn}>
            <Image
              style={styles.image}
              source={require('./icon/home-active.png')}
            />
            <Text style={styles.btnTxt}>Home</Text>
          </View>
          <View style={styles.navBtn}>
            <Image style={styles.image} source={require('./icon/order.png')} />
            <Text style={styles.btnTxt}>Orders</Text>
          </View>
          <View style={styles.navBtn}>
            <Image style={styles.image} source={require('./icon/help.png')} />
            <Text style={styles.btnTxt}>Help</Text>
          </View>
          <View style={styles.navBtn}>
            <Image style={styles.image} source={require('./icon/inbox.png')} />
            <Text style={styles.btnTxt}>Inbox</Text>
          </View>
          <View style={styles.navBtn}>
            <Image
              style={styles.image}
              source={require('./icon/account.png')}
            />
            <Text style={styles.btnTxt}>Account</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: '#0000FF',
  },
  bottomNav: {
    height: 90,
    flexDirection: 'row',
    paddingBottom: 9,
    backgroundColor: '#FDFDFD',
  },
  navBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnAsset: {
    width: 26,
    height: 26,
    backgroundColor: '#fdfdfd',
  },
  btnTxt: {
    fontSize: 11,
    color: '#545454',
    marginTop: 4,
  },
  image: {
    width: 26,
    height: 26,
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
    backgroundColor: '#FDFDFD',
  },
  searchIcon: {
    position: 'absolute',
    top: 63,
    left: 15,
  },
  inputContainer: {
    position: 'relative',
    //flex: 1,
  },
  search: {
    marginHorizontal: 21,
  },
});
