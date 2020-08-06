import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import GoNews from '../GoNews';

const GoInfo = ({tag, social, title, header, desc, buttonText}) => {
  return (
    <View style={styles.connectDiv}>
      <View style={styles.gojekTag}>
        <Image source={tag} style={styles.tag} />
      </View>
      <Text style={styles.connectHeader}>{header}</Text>
      <View style={styles.connectBody}>
        <View>
          <Image source={social} />
        </View>
        <View style={styles.connecTxtDiv}>
          <Text style={styles.connectTitle}>{title}</Text>
          <Text style={styles.connectDesc}>{desc}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
      <View style={styles.connectBBorder} />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default GoInfo;
