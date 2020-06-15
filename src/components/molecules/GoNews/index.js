import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

const GoNews = ({coverImg, tag, title, description, buttonText}) => {
  return (
    <View style={styles.newsContainer}>
      <View style={styles.imgContainer}>
        <Image source={coverImg} style={styles.coverImg} />
        <View style={styles.overlay} />
        <View style={styles.newsImgTag}>
          <Image source={tag} style={styles.tag} />
        </View>
      </View>
      <View style={styles.newsBody}>
        <Text style={styles.newsTitle}>{title}</Text>
        <Text style={styles.newsDescription}>{description}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coverImg: {
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
});

export default GoNews;
