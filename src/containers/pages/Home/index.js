import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import SearchBar from '../../../components/molecules/Search';
import GoNews from '../../../components/molecules/GoNews';
import GoInfo from '../../../components/molecules/InternalInfo';
import GoBanner from '../../../components/molecules/GoBanner';
import ScrollableProducts from '../../../containers/organisms/ScrollableProducts';
import NavBar from '../../../containers/organisms/NavBar';
import HomeMainFeature from '../../../containers/organisms/HomeMainFeature';
import HomeGoPay from '../../../containers/organisms/HomeGoPay';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.mainContent}>
          <SearchBar
            icon={require('../../../assets/icon/search.png')}
            promo={require('../../../assets/icon/promo.png')}
            placeholder="What do you want to eat?"
          />
          <HomeGoPay />
          <HomeMainFeature />
          <View style={styles.seperator} />
          <GoNews
            coverImg={require('../../../assets/dummy/sepak-bola.jpg')}
            tag={require('../../../assets/logo/white.png')}
            title="GO-NEWS"
            description="Salah makes the final goal to lead Liverpool to victory."
            buttonText="READ"
            onPress={() => this.props.navigation.navigate('NewsDetail')}
          />
          <GoInfo
            tag={require('../../../assets/logo/gojek.png')}
            social={require('../../../assets/dummy/facebook-connect.png')}
            title="Connect with Facebook"
            header="Complete your Profile"
            desc="Login faster without verification code"
            buttonText="CONNECT"
          />
          <GoBanner
            cover={require('../../../assets/dummy/food-banner.jpg')}
            tag={require('../../../assets/logo/white.png')}
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

export default Home;
