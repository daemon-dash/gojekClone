import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const GoBanner = ({cover, tag, heading, body, buttonText}) => {
  return (
    <View style={styles.bannerContainer}>
      <View style={styles.foodContainer}>
        <Image source={cover} style={styles.newsImg} />
        <View style={styles.foodOverlay} />
        <View style={styles.newsImgTag}>
          <Image source={tag} style={styles.tag} />
        </View>
        <View style={styles.foodBanner}>
          <View>
            <Text style={styles.foodHeading}>{heading}</Text>
            <Text style={styles.foodBody}>{body}</Text>
          </View>
          <View style={{flex: 1, paddingLeft: 12}}>
            <TouchableOpacity style={styles.fButton}>
              <Text style={styles.fButtonText}>{buttonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bottomBorder}></View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  tag: {
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    flex: 1,
  },
  newsImg: {
    height: 170,
    width: '100%',
    borderRadius: 6,
  },
});

export default GoBanner;
