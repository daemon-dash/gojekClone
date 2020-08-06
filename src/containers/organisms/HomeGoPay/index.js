import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import GoPayAction from '../../../components/molecules/GoPayAction';

class HomeGoPay extends Component {
  render() {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Image source={require('../../../assets/icon/gopay.png')} />
          <Text style={styles.balance}> Rp 50.000</Text>
        </View>
        <View style={styles.cardBody}>
          <GoPayAction
            title="Pay"
            src={require('../../../assets/icon/pay.png')}
          />
          <GoPayAction
            title="Nearby"
            src={require('../../../assets/icon/nearby.png')}
          />
          <GoPayAction
            title="Top Up"
            src={require('../../../assets/icon/topup.png')}
          />
          <GoPayAction
            title="More"
            src={require('../../../assets/icon/more.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  balance: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FDFDFD',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2C5FB8',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    padding: 14,
  },
  cardContainer: {
    marginHorizontal: 21,
    marginTop: 9,
  },
  cardBody: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 14,
    backgroundColor: '#2F65BD',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
});

export default HomeGoPay;
