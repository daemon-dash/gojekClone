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
        <View style={styles.mainContent}>
          {/*Search Bar*/}
          <View style={styles.searchBar}>
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
            <View style={styles.promo}>
              <Image source={require('./icon/promo.png')} />
            </View>
          </View>

          {/*gopay*/}
          <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
              <Image source={require('./icon/gopay.png')} />
              <Text style={styles.balance}> Rp 50.000</Text>
            </View>
            <View style={styles.cardBody}>
              <View style={styles.cardActions}>
                <Image source={require('./icon/pay.png')} />
                <Text style={styles.actionLabel}>Pay</Text>
              </View>
              <View style={styles.cardActions}>
                <Image source={require('./icon/nearby.png')} />
                <Text style={styles.actionLabel}>Nearby</Text>
              </View>
              <View style={styles.cardActions}>
                <Image source={require('./icon/topup.png')} />
                <Text style={styles.actionLabel}>Top Up</Text>
              </View>
              <View style={styles.cardActions}>
                <Image source={require('./icon/more.png')} />
                <Text style={styles.actionLabel}>More</Text>
              </View>
            </View>
          </View>
          {/*main feature*/}

          <View style={styles.servContainer}>
            <View style={styles.serviceList}>
              <View style={styles.serviceBtn}>
                <View style={styles.services}>
                  <Image source={require('./icon/go-ride.png')} />
                </View>
                <Text style={styles.serviceLabel}>GO-RIDE</Text>
              </View>
              <View style={styles.serviceBtn}>
                <View style={styles.services}>
                  <Image source={require('./icon/go-car.png')} />
                </View>
                <Text style={styles.serviceLabel}>GO-CAR</Text>
              </View>
              <View style={styles.serviceBtn}>
                <View style={styles.services}>
                  <Image source={require('./icon/go-bluebird.png')} />
                </View>
                <Text style={styles.serviceLabel}>GO-BLUEBIRD</Text>
              </View>
              <View style={styles.serviceBtn}>
                <View style={styles.services}>
                  <Image source={require('./icon/go-send.png')} />
                </View>
                <Text style={styles.serviceLabel}>GO-SEND</Text>
              </View>
            </View>
            <View style={styles.serviceList}>
              <View style={styles.serviceBtn}>
                <View style={styles.services}>
                  <Image source={require('./icon/go-deals.png')} />
                </View>
                <Text style={styles.serviceLabel}>GO-DEALS</Text>
              </View>
              <View style={styles.serviceBtn}>
                <View style={styles.services}>
                  <Image source={require('./icon/go-pulsa.png')} />
                </View>
                <Text style={styles.serviceLabel}>GO-PULSA</Text>
              </View>
              <View style={styles.serviceBtn}>
                <View style={styles.services}>
                  <Image source={require('./icon/go-food.png')} />
                </View>
                <Text style={styles.serviceLabel}>GO-FOOD</Text>
              </View>
              <View style={styles.serviceBtn}>
                <View style={styles.services}>
                  <Image source={require('./icon/go-more.png')} />
                </View>
                <Text style={styles.serviceLabel}> MORE</Text>
              </View>
            </View>
          </View>
        </View>
        {/*Bottom Nav*/}
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
  mainContent: {
    flex: 1,
    backgroundColor: '#FDFDFD',
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
    marginRight: 18,
    backgroundColor: '#FDFDFD',
  },
  searchIcon: {
    position: 'absolute',
    top: 63,
    left: 15,
  },
  inputContainer: {
    position: 'relative',
    flex: 1,
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
  cardActions: {
    flex: 1,
    alignItems: 'center',
  },
  actionLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FDFDFD',
    marginTop: 15,
  },
  balance: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#FDFDFD',
  },
  services: {
    width: 58,
    height: 58,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  serviceLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 6,
  },
  serviceBtn: {
    width: '25%',
    alignItems: 'center',
  },
});
