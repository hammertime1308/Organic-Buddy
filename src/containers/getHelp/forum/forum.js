import React from 'react';
import { View, ScrollView } from 'react-native';

import { Post } from '../../../components';

export const Forum = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Post
          image={[
            'https://upload.wikimedia.org/wikipedia/commons/5/59/Collmer_leaf_speck3.jpg',
          ]}
          title="Sample title"
          description="sample desc"
          timestamp="2021-04-04 13:01:47.167209"
        />
        <Post
          title="Sample title"
          description="sample desc"
          timestamp="2021-04-04 13:01:47.167209"
        />
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
};
