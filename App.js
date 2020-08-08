/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Router from './src/config/router';

import SearchBar from './src/components/molecules/Search';
import GoNews from './src/components/molecules/GoNews';
import GoInfo from './src/components/molecules/InternalInfo';
import GoBanner from './src/components/molecules/GoBanner';
import ScrollableProducts from './src/containers/organisms/ScrollableProducts';
import NavBar from './src/containers/organisms/NavBar';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature';
import HomeGoPay from './src/containers/organisms/HomeGoPay';

class App extends Component {
  render() {
    return <Router />;
  }
}

export default App;
