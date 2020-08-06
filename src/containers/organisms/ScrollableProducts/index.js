import React, {Component} from 'react';
import {View, Image, ScrollView, StyleSheet, Text} from 'react-native';
import ScrollableItem from '../../../components/molecules/ScrollableItem';

class ScrollableProducts extends Component {
  render() {
    return (
      <View>
        <View style={styles.nearbyDiv}>
          <Image
            source={require('../../../assets/logo/go-food.png')}
            style={styles.tag}
          />
        </View>
        <View style={styles.nearbyHeader}>
          <Text style={styles.nearbyTitle}>Nearby Restaurants</Text>
          <Text style={styles.nearbyButton}>See All</Text>
        </View>
        <ScrollView horizontal style={styles.businessList}>
          <ScrollableItem
            img={require('../../../assets/dummy/go-food-kfc.jpg')}
            bizName="In N Out"
          />
          <ScrollableItem
            img={require('../../../assets/dummy/go-food-gm.jpg')}
            bizName="Tacos El Charro"
          />
          <ScrollableItem
            img={require('../../../assets/dummy/go-food-orins.jpg')}
            bizName="No. 1 Chinese"
          />
          <ScrollableItem
            img={require('../../../assets/dummy/go-food-pak-boss.jpg')}
            bizName="Pak Boss"
          />
          <ScrollableItem
            img={require('../../../assets/dummy/go-food-banka.jpg')}
            bizName="Banka Me"
          />
        </ScrollView>
        <View style={styles.nearbyBorder}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nearbyDiv: {
    height: 15,
    width: 60,
    paddingLeft: 16,
  },
  nearbyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  nearbyTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1C1C1C',
  },
  nearbyButton: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#61A756',
  },
  businessList: {
    flexDirection: 'row',
    marginLeft: 16,
  },
  nearbyBorder: {
    paddingBottom: 16,
    borderBottomColor: '#E8E9ED',
    borderBottomWidth: 1,
    marginBottom: 20,
    marginHorizontal: 16,
  },
});

export default ScrollableProducts;
