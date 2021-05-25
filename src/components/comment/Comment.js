import React from 'react';
import { View, Text } from 'react-native';

export const Comment = ({ comment, firstName, lastName, timestamp }) => {
  return (
    <View
      style={{
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
        backgroundColor: 'rgb(208,208,208)',
        borderRadius: 5,
        elevation: 2,
      }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', padding: 10 }}>
          <Text
            style={{
              paddingRight: 5,
              fontSize: 10,
              fontWeight: 'bold',
              color: 'gray',
            }}>
            By: {firstName}
          </Text>
          <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'gray' }}>
            {lastName}
          </Text>
        </View>
        <Text style={{ alignSelf: 'center', fontSize: 10, paddingRight: 10 }}>
          {timestamp}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 15,
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 10,
          fontWeight: '700',
        }}>
        {comment}
      </Text>
    </View>
  );
};
