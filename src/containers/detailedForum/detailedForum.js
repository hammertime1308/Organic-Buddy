import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Gallery from 'react-native-image-gallery';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Header, Comment } from '../../components';

import Context from '../../context';
import { deletePost } from '../../api';

import { NavigationService } from '../../utilities';

export const DetailedForum = props => {
  const {
    postId,
    userId,
    title,
    description,
    image,
    timestamp,
    comments,
    setCount,
  } = props.navigation.state.params;

  const [context, setContext] = useContext(Context);
  const [loading, setLoading] = useState(false);

  Moment.locale('en');

  const handleDelete = async id => {
    setLoading(true);
    let response = await deletePost(id);
    if (response.status === 200) {
      alert('Deleted successfully');
      NavigationService.back();
    } else {
      alert(response.data);
    }
    setCount(prevState => prevState + 1);
    setLoading(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <Header>{title}</Header>
      <Header />
      {image.length !== 0 ? (
        <View style={{ width: '100%', height: '30%' }}>
          <Gallery
            pageMargin={10}
            style={{ margin: 10 }}
            images={image.map(item => ({
              source: { uri: item },
            }))}
          />
        </View>
      ) : null}

      <ScrollView style={{ flex: 1, margin: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Description
          </Text>
          <View style={{ alignItems: 'flex-end' }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'bold',
                color: 'gray',
              }}>
              Posted on
            </Text>
            <Text
              style={{
                fontSize: 10,
                fontWeight: '700',
                color: 'gray',
              }}>
              {Moment(timestamp).format('DD-MM-YYYY')}
            </Text>
          </View>
        </View>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{description}</Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 20,
            marginBottom: 10,
          }}>
          Comments
        </Text>

        {comments.length === 1 ? (
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              paddingTop: 30,
              fontWeight: 'bold',
              color: 'gray',
            }}>
            No Comments posted yet !
          </Text>
        ) : (
          comments.map(item => {
            if (typeof item === 'object') {
              return (
                <Comment
                  comment={item.comment}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  timestamp={Moment(item.timestamp).format('DD-MM-YYYY HH:mm')}
                />
              );
            }
          })
        )}
      </ScrollView>

      {context.get('user').userId === userId ? (
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            position: 'absolute',
            bottom: 5,
            right: 0,
            margin: 15,
            borderRadius: 50,
            elevation: 5,
          }}
          activeOpacity={0.8}
          onPress={() => handleDelete(postId)}>
          {loading ? (
            <ActivityIndicator
              color="white"
              size={30}
              style={{ padding: 10 }}
            />
          ) : (
            <Icon
              style={{ padding: 10 }}
              name="delete"
              size={30}
              color="white"
            />
          )}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
