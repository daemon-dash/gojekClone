import React, {Component} from 'React';
import {View, StyleSheet} from 'react-native';

import Service from '../../../components/molecules/Service';

class HomeMainFeature extends Component {
  render() {
    return (
      <View style={styles.servContainer}>
        <View style={styles.serviceList}>
          <Service
            label="GO-RIDE"
            img={require('../../../assets/icon/go-ride.png')}
          />
          <Service
            label="GO-CAR"
            img={require('../../../assets/icon/go-car.png')}
          />
          <Service
            label="GO-BLUEBIRD"
            img={require('../../../assets/icon/go-bluebird.png')}
          />
          <Service
            label="GO-SEND"
            img={require('../../../assets/icon/go-send.png')}
          />
        </View>
        <View style={styles.serviceList}>
          <Service
            label="GO-DEALS"
            img={require('../../../assets/icon/go-deals.png')}
          />
          <Service
            label="GO-PULSA"
            img={require('../../../assets/icon/go-pulsa.png')}
          />
          <Service
            label="GO-FOOD"
            img={require('../../../assets/icon/go-food.png')}
          />
          <Service
            label="MORE"
            img={require('../../../assets/icon/go-more.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  servContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 18,
  },
  serviceList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 18,
  },
});

export default HomeMainFeature;
