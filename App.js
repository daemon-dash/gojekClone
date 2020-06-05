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

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.mainContent}>
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
          <View style={styles.seperator}></View>
          {/*news section*/}
          <View style={styles.newsContainer}>
            <View style={styles.imgContainer}>
              <Image
                source={require('./dummy/sepak-bola.jpg')}
                style={styles.newsImg}
              />
              <View style={styles.overlay} />
              <View style={styles.newsImgTag}>
                <Image
                  source={require('./logo/white.png')}
                  style={styles.tag}
                />
              </View>
            </View>
            <View style={styles.newsBody}>
              <Text style={styles.newsTitle}>GO-NEWS</Text>
              <Text style={styles.newsDescription}>
                Salah makes the final goal to lead Liverpool to victory.
              </Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>READ</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/*Internal Information Section */}
          <View style={styles.connectDiv}>
            <View style={styles.gojekTag}>
              <Image source={require('./logo/gojek.png')} style={styles.tag} />
            </View>
            <Text style={styles.connectHeader}>Complete your Profile</Text>
            <View style={styles.connectBody}>
              <View>
                <Image source={require('./dummy/facebook-connect.png')} />
              </View>
              <View style={styles.connecTxtDiv}>
                <Text style={styles.connectTitle}>Connect with Facebook</Text>
                <Text style={styles.connectDesc}>
                  Login faster without verification code
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>CONNECT</Text>
            </TouchableOpacity>
            <View style={styles.connectBBorder}></View>
          </View>

          {/*Go-Food Banner Section*/}
          <View style={styles.bannerContainer}>
            <View style={styles.foodContainer}>
              <Image
                source={require('./dummy/food-banner.jpg')}
                style={styles.newsImg}
              />
              <View style={styles.foodOverlay} />
              <View style={styles.newsImgTag}>
                <Image
                  source={require('./logo/white.png')}
                  style={styles.tag}
                />
              </View>
              <View style={styles.foodBanner}>
                <View>
                  <Text style={styles.foodHeading}>Free GO-FOOD Voucher</Text>
                  <Text style={styles.foodBody}>
                    Quick, before they run out!
                  </Text>
                </View>
                <View style={{flex: 1, paddingLeft: 12}}>
                  <TouchableOpacity style={styles.fButton}>
                    <Text style={styles.fButtonText}>GET VOUCHER</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.bottomBorder}></View>
          </View>
        </ScrollView>

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
    marginBottom: 20,
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
});
