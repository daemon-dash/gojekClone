/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import GoPayAction from './src/components/molecules/GoPayAction';
import Service from './src/components/molecules/Service';
import SearchBar from './src/components/molecules/Search';
import GoNews from './src/components/molecules/GoNews';
import GoInfo from './src/components/molecules/InternalInfo';
import GoBanner from './src/components/molecules/GoBanner';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.mainContent}>
          {/*Search Bar*/}
          <SearchBar
            icon={require('./src/assets/icon/search.png')}
            promo={require('./src/assets/icon/promo.png')}
            placeholder="What do you want to eat?"
          />

          {/*gopay*/}
          <View style={styles.cardContainer}>
            <View style={styles.cardHeader}>
              <Image source={require('./src/assets/icon/gopay.png')} />
              <Text style={styles.balance}> Rp 50.000</Text>
            </View>
            <View style={styles.cardBody}>
              <GoPayAction
                title="Pay"
                src={require('./src/assets/icon/pay.png')}
              />
              <GoPayAction
                title="Nearby"
                src={require('./src/assets/icon/nearby.png')}
              />
              <GoPayAction
                title="Top Up"
                src={require('./src/assets/icon/topup.png')}
              />
              <GoPayAction
                title="More"
                src={require('./src/assets/icon/more.png')}
              />
            </View>
          </View>
          {/*main feature*/}

          <View style={styles.servContainer}>
            <View style={styles.serviceList}>
              <Service
                label="GO-RIDE"
                img={require('./src/assets/icon/go-ride.png')}
              />
              <Service
                label="GO-CAR"
                img={require('./src/assets/icon/go-car.png')}
              />
              <Service
                label="GO-BLUEBIRD"
                img={require('./src/assets/icon/go-bluebird.png')}
              />
              <Service
                label="GO-SEND"
                img={require('./src/assets/icon/go-send.png')}
              />
            </View>
            <View style={styles.serviceList}>
              <Service
                label="GO-DEALS"
                img={require('./src/assets/icon/go-deals.png')}
              />
              <Service
                label="GO-PULSA"
                img={require('./src/assets/icon/go-pulsa.png')}
              />
              <Service
                label="GO-FOOD"
                img={require('./src/assets/icon/go-food.png')}
              />
              <Service
                label="MORE"
                img={require('./src/assets/icon/go-more.png')}
              />
            </View>
          </View>
          <View style={styles.seperator}></View>
          {/*news section*/}
          <GoNews
            coverImg={require('./src/assets/dummy/sepak-bola.jpg')}
            tag={require('./src/assets/logo/white.png')}
            title="GO-NEWS"
            description="Salah makes the final goal to lead Liverpool to victory."
            buttonText="READ"
          />
          {/*Internal Information Section */}
          <GoInfo
            tag={require('./src/assets/logo/gojek.png')}
            social={require('./src/assets/dummy/facebook-connect.png')}
            title="Connect with Facebook"
            header="Complete your Profile"
            desc="Login faster without verification code"
            buttonText="CONNECT"
          />
          {/*Go-Food Banner Section*/}
          <GoBanner
            cover={require('./src/assets/dummy/food-banner.jpg')}
            tag={require('./src/assets/logo/white.png')}
            heading="Free GO-FOOD Voucher"
            body="Quick, before they run out!"
            buttonText="GET VOUCHER"
          />
          {/*Neearby Section*/}
          <View>
            <View style={styles.nearbyDiv}>
              <Image
                source={require('./src/assets/logo/go-food.png')}
                style={styles.tag}
              />
            </View>
            <View style={styles.nearbyHeader}>
              <Text style={styles.nearbyTitle}>Nearby Restaurants</Text>
              <Text style={styles.nearbyButton}>See All</Text>
            </View>
            <ScrollView horizontal style={styles.businessList}>
              <View style={styles.bImgDiv}>
                <View style={styles.businessImg}>
                  <Image
                    source={require('./src/assets/dummy/go-food-kfc.jpg')}
                    style={styles.imgCover}
                  />
                </View>
                <Text style={styles.businessName}>In N Out</Text>
              </View>
              <View style={styles.bImgDiv}>
                <View style={styles.businessImg}>
                  <Image
                    source={require('./src/assets/dummy/go-food-gm.jpg')}
                    style={styles.imgCover}
                  />
                </View>
                <Text style={styles.businessName}>Tacos El Charro</Text>
              </View>
              <View style={styles.bImgDiv}>
                <View style={styles.businessImg}>
                  <Image
                    source={require('./src/assets/dummy/go-food-orins.jpg')}
                    style={styles.imgCover}
                  />
                </View>
                <Text style={styles.businessName}>No 1. Chinese</Text>
              </View>
              <View style={styles.bImgDiv}>
                <View style={styles.businessImg}>
                  <Image
                    source={require('./src/assets/dummy/go-food-pak-boss.jpg')}
                    style={styles.imgCover}
                  />
                </View>
                <Text style={styles.businessName}>Pak Boss</Text>
              </View>
              <View style={styles.bImgDiv}>
                <View style={styles.businessImg}>
                  <Image
                    source={require('./src/assets/dummy/go-food-banka.jpg')}
                    style={styles.imgCover}
                  />
                </View>
                <Text style={styles.businessName}>Banka Me</Text>
              </View>
            </ScrollView>
            <View style={styles.nearbyBorder}></View>
          </View>
        </ScrollView>

        {/*Bottom Nav*/}
        <View style={styles.bottomNav}>
          <View style={styles.navBtn}>
            <Image
              style={styles.image}
              source={require('./src/assets/icon/home-active.png')}
            />
            <Text style={styles.btnTxt}>Home</Text>
          </View>
          <View style={styles.navBtn}>
            <Image
              style={styles.image}
              source={require('./src/assets/icon/order.png')}
            />
            <Text style={styles.btnTxt}>Orders</Text>
          </View>
          <View style={styles.navBtn}>
            <Image
              style={styles.image}
              source={require('./src/assets/icon/help.png')}
            />
            <Text style={styles.btnTxt}>Help</Text>
          </View>
          <View style={styles.navBtn}>
            <Image
              style={styles.image}
              source={require('./src/assets/icon/inbox.png')}
            />
            <Text style={styles.btnTxt}>Inbox</Text>
          </View>
          <View style={styles.navBtn}>
            <Image
              style={styles.image}
              source={require('./src/assets/icon/account.png')}
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
  seperator: {
    height: 17,
    backgroundColor: '#F2F2f4',
    marginTop: 20,
  },
  newsImg: {
    height: 170,
    width: '100%',
    borderRadius: 6,
  },
  newsContainer: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1C1C',
  },
  newsBody: {
    paddingTop: 16,
    paddingBottom: 20,
    borderBottomColor: '#E8E9ED',
    borderBottomWidth: 1,
  },
  newsDescription: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#7A7A7A',
    marginBottom: 11,
  },
  newsImgTag: {
    height: 15,
    width: 60,
    position: 'absolute',
    top: 16,
    left: 16,
  },
  imgContainer: {
    position: 'relative',
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#000',
    opacity: 0.2,
    borderRadius: 6,
  },
  tag: {
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    flex: 1,
  },
  button: {
    backgroundColor: '#61A756',
    paddingHorizontal: 12,
    paddingVertical: 11,
    alignSelf: 'flex-end',
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#FDFDFD',
    textAlign: 'center',
  },
  bannerContainer: {
    padding: 16,
  },
  foodContainer: {
    position: 'relative',
  },
  foodOverlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#000',
    opacity: 0.18,
    borderRadius: 6,
  },
  foodBanner: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  foodHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FDFDFD',
    marginBottom: 8,
  },
  foodBody: {
    fontSize: 12,
    fontWeight: '400',
    color: '#FDFDFD',
  },
  fButton: {
    backgroundColor: '#61A756',
    paddingHorizontal: 12,
    paddingVertical: 11,
    alignSelf: 'stretch',
    borderRadius: 4,
  },
  fButtonText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FDFDFD',
    textAlign: 'center',
  },
  bottomBorder: {
    paddingBottom: 16,
    borderBottomColor: '#E8E9ED',
    borderBottomWidth: 1,
  },
  gojekTag: {
    height: 15,
    width: 60,
    marginLeft: -4,
  },
  connectHeader: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1C1C1C',
    marginTop: 15,
    marginBottom: 20,
  },
  connectBody: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  connectTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  connectDesc: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#4A4A4A',
    width: '70%',
  },
  connecTxtDiv: {
    marginLeft: 16,
    flex: 1,
  },
  connectBBorder: {
    paddingBottom: 16,
    borderBottomColor: '#E8E9ED',
    borderBottomWidth: 1,
  },
  connectDiv: {
    padding: 16,
    paddingBottom: 0,
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
  nearbyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  businessName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1C1C',
    marginTop: 12,
  },
  businessImg: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  imgCover: {
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    flex: 1,
    borderRadius: 4,
  },
  businessList: {
    flexDirection: 'row',
    marginLeft: 16,
  },
  bImgDiv: {
    marginRight: 16,
  },
  nearbyDiv: {
    height: 15,
    width: 60,
    paddingLeft: 16,
  },
  nearbyBorder: {
    paddingBottom: 16,
    borderBottomColor: '#E8E9ED',
    borderBottomWidth: 1,
    marginBottom: 20,
    marginHorizontal: 16,
  },
});
