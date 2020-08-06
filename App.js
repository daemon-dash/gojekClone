/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import SearchBar from './src/components/molecules/Search';
import GoNews from './src/components/molecules/GoNews';
import GoInfo from './src/components/molecules/InternalInfo';
import GoBanner from './src/components/molecules/GoBanner';
import ScrollableProducts from './src/containers/organisms/ScrollableProducts';
import NavBar from './src/containers/organisms/NavBar';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature';
import HomeGoPay from './src/containers/organisms/HomeGoPay';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.mainContent}>
          <SearchBar
            icon={require('./src/assets/icon/search.png')}
            promo={require('./src/assets/icon/promo.png')}
            placeholder="What do you want to eat?"
          />
          <HomeGoPay />
          <HomeMainFeature />
          <View style={styles.seperator} />
          <GoNews
            coverImg={require('./src/assets/dummy/sepak-bola.jpg')}
            tag={require('./src/assets/logo/white.png')}
            title="GO-NEWS"
            description="Salah makes the final goal to lead Liverpool to victory."
            buttonText="READ"
          />
          <GoInfo
            tag={require('./src/assets/logo/gojek.png')}
            social={require('./src/assets/dummy/facebook-connect.png')}
            title="Connect with Facebook"
            header="Complete your Profile"
            desc="Login faster without verification code"
            buttonText="CONNECT"
          />
          <GoBanner
            cover={require('./src/assets/dummy/food-banner.jpg')}
            tag={require('./src/assets/logo/white.png')}
            heading="Free GO-FOOD Voucher"
            body="Quick, before they run out!"
            buttonText="GET VOUCHER"
          />
          <ScrollableProducts />
        </ScrollView>
        <NavBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  seperator: {
    height: 17,
    backgroundColor: '#F2F2f4',
    marginTop: 20,
  },
});
