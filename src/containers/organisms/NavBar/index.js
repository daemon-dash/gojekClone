import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import NavBarIcon from '../../../components/molecules/NavBarIcon';

class NavBar extends Component {
  render() {
    return (
      <View style={styles.bottomNav}>
        <NavBarIcon
          img={require('../../../assets/icon/home-active.png')}
          label="Home"
          active={true}
        />
        <NavBarIcon
          img={require('../../../assets/icon/order.png')}
          label="Orders"
        />
        <NavBarIcon
          img={require('../../../assets/icon/help.png')}
          label="Help"
        />
        <NavBarIcon
          img={require('../../../assets/icon/inbox.png')}
          label="Inbox"
        />
        <NavBarIcon
          img={require('../../../assets/icon/account.png')}
          label="Account"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomNav: {
    height: 90,
    flexDirection: 'row',
    paddingBottom: 9,
    backgroundColor: '#FDFDFD',
  },
});

export default NavBar;
