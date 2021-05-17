import React, { useState, useEffect } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import Moment from 'moment';

import { Post } from '../../../components';

import { getPosts, generateUrl } from '../../../api';
import { NavigationService } from '../../../utilities';

export const Forum = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      let response = await getPosts();
      if (response.status === 200) {
        // modify url of image in response
        response.data.map(item => {
          if ('image' in item) {
            item.image = item.image.map(url => generateUrl(url));
          } else {
            item.image = [];
          }
        });
        setData(response.data);
        setLoading(false);
      } else {
        alert(response.data);
        NavigationService.replace('Dashboard');
      }
    };
    getData();
  }, [count]);

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator
          style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
          size={50}
          color="green"
        />
      ) : (
        <ScrollView>
          {data.map(item => (
            <Post
              postId={item.postId}
              userId={item.userId}
              title={item.title}
              description={item.description}
              image={item.image}
              timestamp={Moment.utc(item.timestamp).local()}
              comments={item.comments}
              setCount={setCount}
            />
          ))}
          <View style={{ height: 20 }} />
        </ScrollView>
      )}
    </View>
  );
};
