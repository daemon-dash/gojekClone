import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const GoPayAction = ({title, src}) => {
  return (
    <View style={styles.cardActions}>
      <Image source={src} />
      <Text style={styles.actionLabel}>title</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default GoPayAction;
