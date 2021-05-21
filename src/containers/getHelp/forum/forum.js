import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Post, AddNewPost } from '../../../components';

import Context from '../../../context';
import { getPosts, generateUrl } from '../../../api';
import { NavigationService } from '../../../utilities';

export const Forum = () => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [addModalVisibility, setAddModalVisibility] = useState(false);
  const [context, setContext] = useContext(Context);

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
              timestamp={Moment.utc(item.timestamp)
                .local()
                .format('YYYY-MM-DD hh:mm:ss')}
              comments={item.comments}
              setCount={setCount}
              key={item.postId}
            />
          ))}
          <View style={{ height: 20 }} />
        </ScrollView>
      )}
      <AddNewPost
        visible={addModalVisibility}
        user={context.get('user')}
        closeModal={() => {
          setAddModalVisibility(!addModalVisibility);
          setCount(prevState => prevState + 1);
        }}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          width: 60,
          height: 60,
          borderRadius: 50,
          backgroundColor: 'green',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        activeOpacity={0.8}
        onPress={() => setAddModalVisibility(!addModalVisibility)}>
        <Icon name="feather" size={35} color="white" />
      </TouchableOpacity>
    </View>
  );
};
